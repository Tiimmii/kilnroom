import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import { about } from "@/data/site";

export const metadata = {
  title: "About | Kilnroom",
  description: about.lead,
};

export default function About() {
  return (
    <>
      <PageHero title={about.title} lead={about.lead} images={about.images}>
        <a href="/contact" className="btn btn--primary">
          Get in touch
        </a>
        <a href="/#classes" className="btn btn--ghost">
          See the classes
        </a>
      </PageHero>
      <Statement>{about.statement}</Statement>
      <section className="process container">
        <h2>How a piece gets made</h2>
        <ol className="classes__list">
          {about.steps.map((step, i) => (
            <li key={step.name} className="classes__row">
              <span className="classes__day figure">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="cta container">
        <h2>{about.cta}</h2>
        <a href="/contact" className="btn btn--primary">
          Say hello
        </a>
      </section>
    </>
  );
}
