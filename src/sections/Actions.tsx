import { content } from "../content";
import { Reveal } from "../components/Reveal";

const ACCENT = ["#be5d3f", "#4a6fa5", "#4a7c59"];

export function Actions() {
  const { actions, strategy } = content;
  return (
    <section className="section alt-bg" id="actions">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">05 · Plan d'action</div>
          <h2>{strategy.positioning.tagline}</h2>
          <p className="lead">
            Trois actions distinctes, séquencées du grand compte régulé au passage à l'échelle —
            chacune avec sa justification, ses objectifs, ses canaux et sa cible.
          </p>
        </Reveal>

        {/* Les 3 actions */}
        <div className="grid cols-3" style={{ marginBottom: "1.8rem", alignItems: "stretch" }}>
          {actions.map((a, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card" style={{ height: "100%", borderTop: `4px solid ${ACCENT[i]}`, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: ACCENT[i] }}>{a.n}</span>
                  <strong style={{ fontSize: "1rem", color: "var(--ink)", lineHeight: 1.2 }}>{a.name}</strong>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--slate)", lineHeight: 1.5, margin: "0.7rem 0" }}>{a.justification}</p>

                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--muted)", marginBottom: "0.3rem" }}>OBJECTIFS</div>
                <ul className="b-list" style={{ marginBottom: "0.7rem" }}>{a.objectives.map((o, j) => <li key={j} style={{ fontSize: "0.8rem" }}>{o}</li>)}</ul>

                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--muted)", marginBottom: "0.3rem" }}>CANAUX</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.8rem" }}>
                  {a.channels.map((c, j) => (
                    <span key={j} className="tag" style={{ fontSize: "0.68rem" }}>{c}</span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "0.7rem", borderTop: "1px solid var(--line)" }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--slate)" }}><strong style={{ color: ACCENT[i] }}>Cible · </strong>{a.target}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.3rem" }}>Part du budget média · <strong>{a.budgetPct}%</strong></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Budget + Roadmap 90j compacts */}
        <div className="grid cols-2" style={{ alignItems: "stretch" }}>
          <Reveal>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Budget — {strategy.budget.total}</h3>
              <div style={{ display: "flex", height: 18, borderRadius: 999, overflow: "hidden", margin: "0.9rem 0 0.8rem" }}>
                {actions.map((a, i) => (
                  <div key={i} style={{ width: `${a.budgetPct}%`, background: ACCENT[i] }} title={`${a.name} — ${a.budgetPct}%`} />
                ))}
              </div>
              {actions.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", marginBottom: "0.35rem" }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: ACCENT[i], flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>{a.budgetPct}%</span>
                  <span style={{ color: "var(--slate)" }}>{a.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>Roadmap 90 jours</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {strategy.roadmap90j.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.7rem" }}>
                    <span style={{ flexShrink: 0, width: 8, height: 8, borderRadius: 999, background: ACCENT[i % 3], marginTop: "0.4rem" }} />
                    <div>
                      <strong style={{ fontSize: "0.82rem", color: "var(--ink)" }}>{r.period}</strong>
                      <div style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.45 }}>{r.milestones.slice(0, 3).join(" · ")}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
