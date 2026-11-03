"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";
import ImageStack from "./ImageStack";

// Splits "Throw it. Fire it. Keep it." into one line per sentence.
function toLines(title) {
  return title.split(" ").reduce((lines, word) => {
    const last = lines[lines.length - 1];
    if (last && !last.endsWith(".")) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
    return lines;
  }, []);
}

// Intro: the photo grows in, then the headline characters rise out of a mask.
function playIntro(root) {
  const media = root.querySelector(".hero__media");
  const chars = SplitText.create(root.querySelector(".hero__title"), {
    type: "words,chars",
    mask: "chars",
  }).chars;
  const rest = root.querySelectorAll(".hero__lead, .hero__actions");

  gsap
    .timeline({ delay: 0.2, defaults: { ease: "power4.out" } })
    .fromTo(media, { scale: 0.6 }, { scale: 1.06, duration: 0.8 }, 0)
    .to(media, { scale: 1, duration: 0.8 }, 0.8)
    .from(
      chars,
      { yPercent: 120, duration: 0.8, stagger: { amount: 0.4, from: "start" } },
      0.8,
    )
    .from(rest, { opacity: 0, y: 16, duration: 0.8, stagger: 0.12 }, 1.4);
}

export default function PageHero({ id, title, lead, images, children }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!prefersReducedMotion()) playIntro(el);
      el.dataset.ready = "true";
    },
    { scope: root },
  );

  return (
    <section id={id} ref={root} data-ready="false" className="hero container">
      <div className="hero__copy">
        <h1 className="hero__title" aria-label={title}>
          {toLines(title).map((line) => (
            <span key={line} className="hero__line">
              {line}
            </span>
          ))}
        </h1>
        <p className="lead hero__lead">{lead}</p>
        <div className="hero__actions">{children}</div>
      </div>
      <div className="hero__media">
        <ImageStack images={images} />
      </div>
    </section>
  );
}
