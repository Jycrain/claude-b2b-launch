import { content } from "../content";
import { Reveal } from "../components/Reveal";
import { Sources } from "../components/SourceBadge";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend, Tooltip,
} from "recharts";

const COLORS = ["#be5d3f", "#4a6fa5", "#4a7c59", "#c9a227", "#8a6d1a"];

export function Benchmark() {
  const b = content.bench;
  const data = b.radarDimensions.map((dim, i) => {
    const row: Record<string, string | number> = { dim };
    b.radarScores.forEach((s) => { row[s.name] = s.scores[i] ?? 0; });
    return row;
  });

  return (
    <section className="section" id="benchmark">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">01 · État des lieux — Concurrence & présence digitale</div>
          <h2>Challenger en notoriété, leader sur l'entreprise</h2>
          <p className="lead">
            Sur les dimensions qui comptent pour un acheteur B2B — sécurité, raisonnement, coding,
            prix, écosystème, souveraineté — Claude prend la tête là où se décide la signature.
          </p>
        </Reveal>

        <div className="grid cols-2" style={{ alignItems: "stretch" }}>
          <Reveal>
            <div className="card" style={{ height: 440 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} outerRadius="70%">
                  <PolarGrid stroke="#e2dccf" />
                  <PolarAngleAxis dataKey="dim" tick={{ fill: "#6b6258", fontSize: 11 }} />
                  {b.radarScores.map((s, i) => (
                    <Radar key={s.name} name={s.name} dataKey={s.name}
                      stroke={COLORS[i % COLORS.length]} fill={COLORS[i % COLORS.length]}
                      fillOpacity={i === 0 ? 0.45 : 0.06} strokeWidth={i === 0 ? 2.6 : 1.3} />
                  ))}
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Avantages distinctifs de Claude</h3>
              <ul className="b-list" style={{ marginBottom: "1rem" }}>
                {b.claudeAdvantages.slice(0, 4).map((a, i) => (
                  <li key={i} style={{ fontSize: "0.84rem" }}>{a.split(/\s[-–]\s/)[0].split(/\(/)[0].trim()}.</li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: "0.8rem", borderTop: "1px solid var(--line)" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--muted)", marginBottom: "0.5rem" }}>
                  PRÉSENCE DIGITALE
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  <span className="tag">claude.ai ~824 M visites/mois</span>
                  <span className="tag">+306 % en un trimestre</span>
                  <span className="tag measured">40 % de part LLM entreprise</span>
                  <span className="tag measured">54 % sur le coding</span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.7rem", lineHeight: 1.45 }}>
                  Face à ChatGPT (volume grand public dominant), Gemini (écosystème Google) et Mistral
                  (souveraineté EU), Claude se positionne en <strong style={{ color: "var(--clay-deep)" }}>challenger
                  qui gagne le segment entreprise régulé</strong>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal><Sources items={b.sources} /></Reveal>
      </div>
    </section>
  );
}
