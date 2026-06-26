import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { content } from "../content";
import { Reveal } from "../components/Reveal";

export function Demo() {
  const steps = content.strategy.demoScript;
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "thinking" | "answer">("idle");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-25%" });

  // séquence scriptée : prompt → réflexion → réponse, 100% offline (aucune API).
  useEffect(() => {
    if (!inView) return;
    let t1: number, t2: number;
    setPhase("typing");
    t1 = window.setTimeout(() => setPhase("thinking"), 1400);
    t2 = window.setTimeout(() => setPhase("answer"), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active, inView]);

  const step = steps[active];

  return (
    <section className="section alt-bg" id="demo">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Démonstration</div>
          <h2>Claude au travail — quatre cas d'usage entreprise</h2>
          <p className="lead">Séquence scriptée &amp; jouée localement (aucune clé API, aucun risque en huis clos). Choisissez un scénario.</p>
        </Reveal>

        <div className="grid cols-2" style={{ alignItems: "start" }}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPhase("typing"); }}
                  className="card"
                  style={{
                    textAlign: "left", cursor: "pointer", borderColor: i === active ? "var(--clay)" : "var(--line)",
                    borderWidth: 2, background: i === active ? "#fff" : "rgba(255,255,255,0.6)",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", color: "var(--clay-deep)", fontWeight: 700 }}>{s.persona}</div>
                  <div style={{ fontWeight: 600, marginTop: "0.2rem" }}>{s.useCase}</div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div ref={ref} className="card" style={{ padding: 0, overflow: "hidden", minHeight: 360 }}>
              <div style={{ background: "var(--ink)", color: "var(--ivory)", padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--clay)" }} />
                <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Claude</span>
                <span style={{ marginLeft: "auto", fontSize: "0.72rem", opacity: 0.6 }}>Enterprise · vos données ne sont pas utilisées pour l'entraînement</span>
              </div>
              <div style={{ padding: "1.2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* user prompt */}
                <div style={{ alignSelf: "flex-end", maxWidth: "85%", background: "var(--clay)", color: "#fff", padding: "0.7rem 0.95rem", borderRadius: "14px 14px 4px 14px", fontSize: "0.9rem" }}>
                  {step.userPrompt}
                </div>
                {/* claude */}
                <AnimatePresence mode="wait">
                  {phase === "thinking" && (
                    <motion.div key="think" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ alignSelf: "flex-start", color: "var(--muted)", fontSize: "0.85rem", display: "flex", gap: "0.3rem" }}>
                      <Dots /> Claude réfléchit…
                    </motion.div>
                  )}
                  {phase === "answer" && (
                    <motion.div key="ans" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      style={{ alignSelf: "flex-start", maxWidth: "90%", background: "var(--cream)", padding: "0.85rem 1rem", borderRadius: "14px 14px 14px 4px", fontSize: "0.9rem", lineHeight: 1.5 }}>
                      <strong style={{ color: "var(--clay-deep)" }}>✦ {step.useCase}</strong>
                      <div style={{ marginTop: "0.4rem", color: "var(--slate)" }}>{step.claudeValue}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Dots() {
  return (
    <span style={{ display: "inline-flex", gap: 3, alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <motion.span key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
          style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--clay)" }} />
      ))}
    </span>
  );
}
