import { content } from "../content";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";

export function Kpi() {
  const kpis = content.kpiDashboard;
  return (
    <section className="section" id="kpi">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">06 · Indicateurs de performance</div>
          <h2>Six KPI, reliés aux objectifs</h2>
          <p className="lead">
            Chaque indicateur découle directement d'une des trois actions. Mesurés sur un funnel
            instrumenté de bout en bout : du pipeline généré à la rétention nette.
          </p>
        </Reveal>

        <div className="grid cols-3" style={{ alignItems: "stretch" }}>
          {kpis.map((k, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.04em", color: "var(--muted)", minHeight: "2.4em" }}>
                  {k.name}
                </div>
                <div className="stat-value" style={{ margin: "0.4rem 0 0.1rem" }}>
                  <Counter value={k.target} />
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--muted)" }}>
                  Horizon · {k.horizon}
                  {k.baseline !== "—" && <> · base {k.baseline}</>}
                </div>
                <div style={{ marginTop: "auto", paddingTop: "0.7rem" }}>
                  <span className="tag" style={{ fontSize: "0.68rem", background: "rgba(217,119,87,0.08)", color: "var(--clay-deep)", borderColor: "var(--clay-soft)" }}>
                    ← {k.action}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p style={{ marginTop: "1.4rem", fontSize: "0.8rem", color: "var(--muted)" }}>
            Objectifs cibles sur 12 mois (estimations de lancement, à calibrer sur la baseline réelle).
            Dashboard de pilotage : Google Sheets / Looker Studio · attribution multi-touch via CRM.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
