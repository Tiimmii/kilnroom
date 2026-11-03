import Link from "next/link";
import { site, credits } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__block">
          <p className="footer__name">{site.name}</p>
          <p>A small ceramics studio. Classes at the weekend, a shelf of fired pieces each month.</p>
        </div>
        <div className="footer__block">
          <ul className="footer__links">
            <li>
              <Link href="/#classes">Classes</Link>
            </li>
            <li>
              <Link href="/#shelf">Shelf</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
        <p className="footer__credits">
          Photographs from Wikimedia Commons:{" "}
          {credits.map(([author, href, licence], i) => (
            <span key={href}>
              <a href={href} rel="noreferrer">
                {author}
              </a>{" "}
              ({licence}){i < credits.length - 1 ? ", " : "."}
            </span>
          ))}{" "}
          Set in Boska and Geist.
        </p>
      </div>
    </footer>
  );
}
