"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/data/site";

// The pill drops in once the hero headline has landed.
export default function Nav() {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ref.current,
        { yPercent: -160 },
        { yPercent: 0, duration: 1, delay: 1.4, ease: "power4.out" },
      );
    },
    { scope: ref },
  );

  return (
    <nav ref={ref} className="nav" aria-label="Main">
      <Link href="/" className="nav__mark">
        {site.name}
      </Link>
      <ul className="nav__links">
        <li>
          <Link href="/#firing">Firing</Link>
        </li>
        <li>
          <Link href="/#shelf">Shelf</Link>
        </li>
        <li className="is-key">
          <Link href="/about">About</Link>
        </li>
        <li className="is-key">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Link href="/#classes" className="btn btn--primary btn--small">
        Book
      </Link>
    </nav>
  );
}
