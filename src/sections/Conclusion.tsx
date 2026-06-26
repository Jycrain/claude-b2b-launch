import { content } from "../content";
import { Reveal } from "../components/Reveal";

export function Conclusion() {
  const s = content.strategy;
  return (
    <section className="section" id="conclusion">
      <div className="wrap" style={{ textAlign: "center" }}>
        <Reveal className="section-head" >
          <div className="eyebrow" style={{ justifyContent: "center" }}>Conclusion &amp; ROI</div>
          <h2 style={{ maxWidth: 820, margin: "0.5rem auto 0" }}>Lancer Claude, c'est faire de la confiance un avantage concurrentiel.</h2>
        </Reveal>

        <div className="grid cols-3" style={{ marginBottom: "2.4rem" }}>
          {s.roiPoints.slice(0, 6).map((r, i) => {
            const sep = r.indexOf(" : ");
            const head = sep > 0 ? r.slice(0, sep) : `ROI ${i + 1}`;
            const body = (sep > 0 ? r.slice(sep + 3) : r).split(/\.\s|;\s|\(/)[0].trim();
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card" style={{ textAlign: "left", height: "100%" }}>
                  <div style={{ fontSize: "1.3rem", color: "var(--clay)" }}>✦</div>
                  <div style={{ marginTop: "0.3rem", fontWeight: 700, color: "var(--ink)", fontSize: "0.92rem" }}>{head}</div>
                  <div style={{ marginTop: "0.2rem", color: "var(--slate)", fontSize: "0.86rem", lineHeight: 1.45 }}>{body}.</div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="card alt-bg" style={{ background: "var(--ink)", color: "var(--ivory)", textAlign: "left", border: "none" }}>
            <div className="eyebrow" style={{ color: "var(--clay-soft)" }}>Les 5 étapes de suivi du projet</div>
            <div className="grid cols-3" style={{ marginTop: "1rem", gap: "0.8rem" }}>
              {s.fiveFollowUpSteps.map((step, i) => (
                <div key={i} style={{ fontSize: "0.86rem", lineHeight: 1.4, borderLeft: "2px solid var(--clay)", paddingLeft: "0.7rem" }}>{step}</div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="lead" style={{ margin: "2.6rem auto 0", maxWidth: 640, fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", color: "var(--ink)" }}>
            Cette présentation a été pensée, analysée et codée par Claude.
            <br />
            <span style={{ color: "var(--clay-deep)" }}>La meilleure démo de Claude, c'est ce que vous venez de voir.</span>
          </p>
          <div style={{ marginTop: "1.6rem", color: "var(--muted)", fontSize: "0.8rem" }}>Merci · Questions &amp; réponses</div>
        </Reveal>
      </div>
    </section>
  );
}
