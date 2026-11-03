"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";

// Closing line revealed under the footer: as the footer scrolls away, the fixed text is stretched
// vertically until its ink fills the space that was uncovered.
export default function PostFooter() {
  const wrapRef = useRef(null);
  const elRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const el = elRef.current;
    const title = titleRef.current;
    const footer = document.querySelector(".footer");
    if (!footer) return;

    // Text height at the start of the reveal, as a fraction of its final size
    const FROM = 0.1;
    const ctx = document.createElement("canvas").getContext("2d");

    let shift = 0; // distance between the last baseline and the bottom of the box
    let reveal = 1;
    let targetScale = 1;
    let ticking = false;
    let lastElH = -1;

    // Vertical position of a baseline, measured with an invisible marker
    const baselineY = (atStart, boxTop) => {
      const marker = document.createElement("span");
      marker.style.cssText =
        "display:inline-block;width:0;height:0;vertical-align:baseline";
      atStart ? title.prepend(marker) : title.append(marker);
      const y = marker.getBoundingClientRect().top - boxTop;
      marker.remove();
      return y;
    };

    const update = () => {
      ticking = false;
      const visible =
        window.innerHeight - footer.getBoundingClientRect().bottom;
      const p = Math.min(Math.max(visible / reveal, 0), 1);
      const scale = targetScale * (FROM + (1 - FROM) * p);
      title.style.transform = `translateY(${shift}px) scaleY(${scale})`;
    };

    const measure = () => {
      // Layout height of the fixed block (the transform doesn't affect it)
      const elH = el.offsetHeight;
      if (elH !== lastElH) {
        lastElH = elH;
        wrap.style.setProperty("--post-footer-h", elH + "px");
      }

      title.style.transform = "none";
      const box = title.getBoundingClientRect();
      const firstBaseline = baselineY(true, box.top);
      const lastBaseline = baselineY(false, box.top);

      const cs = getComputedStyle(title);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const capHeight = ctx.measureText("H").actualBoundingBoxAscent;

      const inkHeight = Math.max(1, lastBaseline - (firstBaseline - capHeight));
      shift = box.height - lastBaseline;
      title.style.transformOrigin = `50% ${lastBaseline}px`;

      const pad = parseFloat(getComputedStyle(el).paddingBottom) || 0;
      reveal = Math.max(
        1,
        wrap.getBoundingClientRect().bottom -
          footer.getBoundingClientRect().bottom,
      );
      targetScale = Math.max(0, (reveal - 2 * pad) / inkHeight);
      update();
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    window.addEventListener("scroll", onScroll, { passive: true });
    const titleObserver = new ResizeObserver(measure);
    const wrapObserver = new ResizeObserver(measure);
    titleObserver.observe(title);
    wrapObserver.observe(wrap);
    document.fonts?.ready.then(measure);
    if (reduced.matches) title.style.transform = "none";

    return () => {
      window.removeEventListener("scroll", onScroll);
      titleObserver.disconnect();
      wrapObserver.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="post">
      <div ref={elRef} className="post__element">
        <p ref={titleRef} className="post__title">
          {site.closing}
        </p>
      </div>
    </div>
  );
}
