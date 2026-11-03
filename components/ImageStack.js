"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const CLIP_VARS = ["--clip-1", "--clip-2", "--clip-3", "--clip-4"];

// Multi-image loader: the pictures are revealed one after another by clip-paths that open
// from a corner, each settling from a slight zoom, then the sequence loops while the stack is on screen.
function play(wrap) {
  const LOADER_DELAY = 0.2,
    LOADER_STAGGER = 0.2,
    LOADER_DUR = 0.8,
    LOADER_SCALE = 1.1;
  const LOOP_HOLD = 3,
    LOOP_REVEAL_DUR = 0.8,
    LOOP_SCALE = 1.1;

  const figImgs = CLIP_VARS.map((_, i) =>
    wrap.querySelector(`.stack__fig.is-${i + 2} .stack__img`),
  );
  const imgBase = wrap.querySelector(".stack__fig.is-1 .stack__img");
  const resetClips = Object.fromEntries(CLIP_VARS.map((v) => [v, 0]));

  gsap.set(wrap, resetClips);
  if (prefersReducedMotion()) return;

  const loaderDuration = LOADER_DUR + LOADER_STAGGER * (CLIP_VARS.length - 1);
  const loader = gsap.timeline({ delay: LOADER_DELAY, onComplete: startLoop });

  loader.fromTo(
    imgBase,
    { scale: LOADER_SCALE },
    { scale: 1, duration: loaderDuration, ease: "power1.out" },
    0,
  );
  CLIP_VARS.forEach((clipVar, i) => {
    const pos = i * LOADER_STAGGER;
    loader.to(
      wrap,
      { [clipVar]: 1, duration: LOADER_DUR, ease: "power2.inOut" },
      pos,
    );
    loader.fromTo(
      figImgs[i],
      { scale: LOADER_SCALE },
      {
        scale: 1,
        duration: LOADER_DUR + LOADER_STAGGER * (CLIP_VARS.length - 1 - i),
        ease: "power1.out",
      },
      pos,
    );
  });

  function startLoop() {
    gsap.set(wrap, resetClips);
    figImgs.forEach((img) => gsap.set(img, { scale: LOOP_SCALE }));

    const tweens = [
      gsap.fromTo(
        imgBase,
        { scale: 1 },
        {
          scale: LOOP_SCALE,
          duration: (LOOP_HOLD + LOOP_REVEAL_DUR) / 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
      ),
    ];

    const loop = gsap.timeline({ repeat: -1 });
    CLIP_VARS.forEach((clipVar, i) => {
      const pos = i * LOOP_HOLD;
      loop.to(
        wrap,
        { [clipVar]: 1, duration: LOOP_REVEAL_DUR, ease: "power2.inOut" },
        pos,
      );
      loop.to(
        figImgs[i],
        {
          scale: 1,
          duration: LOOP_HOLD + LOOP_REVEAL_DUR,
          ease: "power1.inOut",
        },
        pos,
      );
    });
    loop.to({}, { duration: LOOP_HOLD });
    loop.set(wrap, resetClips);
    loop.call(() =>
      figImgs.forEach((img) => gsap.set(img, { scale: LOOP_SCALE })),
    );
    tweens.push(loop);

    // Pause while the stack is off screen
    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) =>
        tweens.forEach((t) => (self.isActive ? t.resume() : t.pause())),
    });
    if (!st.isActive) tweens.forEach((t) => t.pause());
  }
}

export default function ImageStack({ images }) {
  const ref = useRef(null);

  useGSAP(() => play(ref.current), { scope: ref });

  return (
    <div ref={ref} className="stack">
      {images.map((image, i) => (
        <figure key={image.src} className={`stack__fig is-${i + 1}`}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={i === 0 ? image.alt : ""}
            priority={i === 0}
            sizes="(max-width: 60rem) 100vw, 50vw"
            className="stack__img"
          />
        </figure>
      ))}
    </div>
  );
}
