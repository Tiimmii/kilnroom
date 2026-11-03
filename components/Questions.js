import { questions } from "@/data/site";

export default function Questions() {
  return (
    <section id="questions" className="questions container">
      <h2>Questions</h2>
      <div className="questions__list">
        {questions.map((item) => (
          <details key={item.q} className="questions__item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
