"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { site, shutterImages } from "@/data/site";

// Five photographs open like camera shutters (driven by --shutter-N custom properties), then the closing line shows.
export default function Shutter() {
  const wrap = useRef(null);

  useGSAP(
    () => {
      const el = wrap.current;
      const items = el.querySelectorAll(".shutter__item:not(.is-6)");
      const vars = [1, 2, 3, 4, 5, 6];

      if (prefersReducedMotion()) {
        gsap.set(el, Object.fromEntries(vars.map((i) => [`--shutter-${i}`, 1])));
        gsap.set(items, { autoAlpha: 0 });
        return;
      }

      gsap.set(el, Object.fromEntries(vars.map((i) => [`--shutter-${i}`, 0])));
      const tl = gsap.timeline({ paused: true });
      vars.forEach((i) => {
        tl.to(
          el,
          {
            [`--shutter-${i}`]: 1,
            duration: 1.6,
            ease: i === 6 ? "power4.out" : "expo.out",
          },
          (i - 1) * 0.2,
        );
      });
      tl.set(items, { autoAlpha: 0 }, 2.6);

      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "top 70%",
        onLeave: () => tl.play(),
        onLeaveBack: () => tl.pause(0),
      });
    },
    { scope: wrap },
  );

  return (
    <section className="shutter" aria-label="The studio">
      <div ref={wrap} className="shutter__wrap">
        {shutterImages.map((image, i) => (
          <div key={image.src} className={`shutter__item is-${i + 1}`}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
              sizes="100vw"
              className="shutter__img"
            />
          </div>
        ))}
        <div className="shutter__item is-6">
          <div className="shutter__content">
            <h2>{site.shutterTitle}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
