"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";

// A large statement whose characters fade in as it scrolls into view.
export default function Statement({ children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!prefersReducedMotion()) {
        const chars = SplitText.create(el.querySelector("h2"), {
          type: "words,chars",
        }).chars;
        gsap.from(chars, {
          opacity: 0.12,
          ease: "none",
          stagger: { each: 0.01 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        });
      }
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="statement container">
      <h2 className="statement__text">{children}</h2>
    </section>
  );
}
