import { firing } from "@/data/site";

// A cone 6 glaze firing as rows: each segment's rate and target, keyed by the heat step its target reaches.
export default function Firing() {
  return (
    <section id="firing" className="firing container">
      <div className="firing__head">
        <h2>A glaze firing, step by step.</h2>
        <p className="lead">Slow where the clay is fragile, steady near the peak.</p>
      </div>
      <div className="firing__table" role="table" aria-label="A typical cone 6 glaze firing">
        <div className="firing__row firing__row--head" role="row">
          <span role="columnheader">Step</span>
          <span role="columnheader">Rate</span>
          <span role="columnheader">Target</span>
          <span role="columnheader" className="visually-hidden">
            Heat
          </span>
        </div>
        {firing.map((row) => (
          <div key={row.step} className="firing__row" role="row">
            <span role="cell">{row.step}</span>
            <span role="cell" className="figure firing__rate">
              {row.rate}
            </span>
            <span role="cell" className="figure firing__target">
              {row.target}°C
            </span>
            <span
              role="cell"
              className="firing__bar"
              style={{ "--step": `var(--heat-${row.ramp})` }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
