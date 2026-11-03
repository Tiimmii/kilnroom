import { site, classes } from "@/data/site";

export default function Classes() {
  return (
    <section id="classes" className="classes container">
      <div className="classes__head">
        <h2>Classes at the wheel</h2>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Booking a Saturday class")}`}
          className="btn btn--primary"
        >
          Book a Saturday
        </a>
      </div>
      <ul className="classes__list">
        {classes.map((c) => (
          <li key={c.name} className="classes__row">
            <span className="classes__day">{c.day}</span>
            <h3>{c.name}</h3>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
