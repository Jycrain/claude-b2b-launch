import { content } from "../content";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { MeasuredTag, Sources } from "../components/SourceBadge";

export function Company() {
  const c = content.company;
  return (
    <section className="section" id="company">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">01 · État des lieux — L'entreprise</div>
          <h2>Anthropic : la sécurité comme produit</h2>
          <p className="lead">{c.mission}</p>
        </Reveal>

        <div className="grid cols-3" style={{ marginBottom: "1.6rem" }}>
          {c.values.map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card" style={{ height: "100%", borderTop: "4px solid var(--clay)" }}>
                <div style={{ fontWeight: 700, color: "var(--clay-deep)", fontSize: "0.96rem", marginBottom: "0.4rem" }}>{v.title}</div>
                <div style={{ fontSize: "0.84rem", color: "var(--slate)", lineHeight: 1.5 }}>{v.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between", alignItems: "flex-end" }}>
            {c.figures.map((f, i) => (
              <div key={i} style={{ minWidth: 110 }}>
                <div className="stat-value" style={{ fontSize: "1.7rem" }}>
                  {/^\d{4}$/.test(f.value) ? f.value : <Counter value={f.value} />}
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--muted)", marginTop: "0.2rem" }}>{f.label}</div>
              </div>
            ))}
            <MeasuredTag measured={true} />
          </div>
        </Reveal>

        <Reveal>
          <p style={{ marginTop: "1.2rem", fontSize: "0.84rem", color: "var(--slate)" }}>
            <strong style={{ color: "var(--clay-deep)" }}>Vision · </strong>{c.vision}
          </p>
        </Reveal>
        <Reveal><Sources items={c.sources} /></Reveal>
      </div>
    </section>
  );
}
