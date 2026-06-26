import { content } from "../content";
import { Reveal } from "../components/Reveal";
import { Sources } from "../components/SourceBadge";

export function Product() {
  const p = content.product;
  return (
    <section className="section" id="product">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">02 · Présentation du produit</div>
          <h2>Claude pour l'Entreprise</h2>
          <p className="lead">{p.tagline}</p>
        </Reveal>

        {/* Gamme de modèles — une famille, trois usages */}
        <div className="grid cols-3" style={{ marginBottom: "1.4rem" }}>
          {p.models.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card" style={{ height: "100%", borderTop: "4px solid var(--clay)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--ink)", marginBottom: "0.4rem" }}>{m.name}</div>
                <div style={{ fontSize: "0.86rem", color: "var(--slate)", lineHeight: 1.5 }}>{m.role}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Capacités clés — 6 piliers produit */}
        <div className="grid cols-3" style={{ marginBottom: "1.4rem" }}>
          {p.capabilities.map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ fontWeight: 700, color: "var(--clay-deep)", fontSize: "0.94rem", marginBottom: "0.4rem" }}>{c.title}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Prix & positionnement B2B + Différenciation */}
        <div className="grid cols-2" style={{ alignItems: "stretch" }}>
          <Reveal>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.9rem" }}>Prix & positionnement B2B</h3>
              <div className="grid cols-2" style={{ gap: "0.8rem" }}>
                {p.pricing.map((t, i) => (
                  <div key={i} style={{
                    border: `1px solid ${t.featured ? "var(--clay)" : "var(--line)"}`,
                    borderRadius: 12, padding: "1rem",
                    background: t.featured ? "rgba(217,119,87,0.06)" : "transparent",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <strong style={{ fontSize: "1.02rem", color: "var(--ink)" }}>{t.tier}</strong>
                      {t.featured && <span className="tag measured" style={{ fontSize: "0.62rem" }}>cible</span>}
                    </div>
                    <div className="stat-value" style={{ fontSize: "1.35rem", margin: "0.3rem 0" }}>{t.price}</div>
                    <div style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: "0.5rem" }}>{t.forWho}</div>
                    <ul className="b-list">{t.highlights.map((h, j) => <li key={j} style={{ fontSize: "0.78rem" }}>{h}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.8rem" }}>Ce qui rend Claude unique</h3>
              <ul className="b-list" style={{ marginBottom: "1rem" }}>
                {p.differentiators.map((d, i) => <li key={i} style={{ fontSize: "0.86rem" }}>{d}</li>)}
              </ul>
              <div style={{ fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "0.5rem" }}>
                COMMENT LE COMMUNIQUER
              </div>
              <ul className="b-list">
                {p.howToCommunicate.map((h, i) => (
                  <li key={i} style={{ fontSize: "0.82rem", color: "var(--slate)" }}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p style={{ marginTop: "1.4rem", fontSize: "0.84rem", color: "var(--muted)" }}>
            <strong style={{ color: "var(--clay-deep)" }}>Cible précise · </strong>{p.target}
          </p>
        </Reveal>
        <Reveal><Sources items={p.sources} /></Reveal>
      </div>
    </section>
  );
}
