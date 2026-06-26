import { content } from "../content";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { MeasuredTag, Sources } from "../components/SourceBadge";

// On met en avant 3 chiffres-chocs ; le reste est dit à l'oral.
const heroStats = [
  { value: "37 Md$", label: "Dépenses entreprise en IA générative (2025, ×3,2 vs 2024)", measured: true },
  { value: "40 %", label: "Part de marché LLM en entreprise — devant OpenAI (27 %) & Google (21 %)", measured: true },
  { value: "76 %", label: "des entreprises achètent plutôt que de construire (vs 47 % en 2024)", measured: true },
];

export function Market() {
  const m = content.market;
  return (
    <section className="section alt-bg" id="market">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">01 · État des lieux — Le marché</div>
          <h2>L'IA générative entre dans l'ère de l'entreprise</h2>
          <p className="lead">
            Le pilote individuel cède la place au déploiement à l'échelle. La question n'est plus
            « faut-il adopter l'IA ? » mais « comment le faire de façon sûre, conforme et rentable ? ».
          </p>
        </Reveal>

        <div className="grid cols-3" style={{ marginBottom: "1.6rem" }}>
          {heroStats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card" style={{ height: "100%" }}>
                <MeasuredTag measured={s.measured} />
                <div className="stat-value" style={{ margin: "0.6rem 0 0.2rem" }}>
                  <Counter value={s.value} />
                </div>
                <div style={{ fontWeight: 600, color: "var(--slate)", fontSize: "0.92rem" }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid cols-2">
          <Reveal delay={0.1}>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>Ce qui change</h3>
              <ul className="b-list">
                <li style={{ fontSize: "0.86rem" }}>78 % des organisations utilisent déjà l'IA, 71 % l'IA générative (McKinsey 2025).</li>
                <li style={{ fontSize: "0.86rem" }}>Le coding capte 55 % des dépenses IA départementales — l'usage n°1 en entreprise.</li>
                <li style={{ fontSize: "0.86rem" }}>76 % achètent un éditeur spécialisé plutôt que de construire en interne.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card" style={{ height: "100%", borderColor: "var(--clay-soft)" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>Les freins des décideurs</h3>
              <ul className="b-list">
                <li style={{ fontSize: "0.86rem" }}>ROI insaisissable : ~95 % des pilotes IA sans impact P&amp;L mesurable (MIT NANDA).</li>
                <li style={{ fontSize: "0.86rem" }}>Conformité AI Act : sanctions jusqu'à 7 % du CA mondial dès le 2 août 2026.</li>
                <li style={{ fontSize: "0.86rem" }}>Souveraineté &amp; RGPD : crainte du Cloud Act, exigence de résidence des données EU.</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal><Sources items={m.sources} /></Reveal>
      </div>
    </section>
  );
}
