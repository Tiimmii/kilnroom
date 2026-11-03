"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import { shelf } from "@/data/site";

// Three photographs per collection. The outer two open from their corners once the row is in view.
function ShelfRow({ item }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleClass: "is-scroll-active",
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="triptic">
      <div className="triptic__cards">
        {item.images.map((image, i) => (
          <div
            key={`${image.src}-${i}`}
            className={`triptic__card ${i === 0 ? "is-left" : i === 2 ? "is-right" : "is-mid"}`}
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
              sizes="(max-width: 60rem) 33vw, 480px"
              style={{ objectPosition: image.pos }}
              className="triptic__img"
            />
          </div>
        ))}
      </div>
      <div className="triptic__info">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function Shelf() {
  return (
    <section id="shelf" className="shelf container">
      <h2>This month's shelf</h2>
      {shelf.map((item) => (
        <ShelfRow key={item.title} item={item} />
      ))}
    </section>
  );
}
