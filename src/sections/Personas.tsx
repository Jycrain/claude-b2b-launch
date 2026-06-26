import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "../content";
import { Reveal } from "../components/Reveal";

export function Personas() {
  const ps = content.personaProfiles;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section alt-bg" id="personas">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">04 · Personas</div>
          <h2>Trois décideurs, un même réflexe : la confiance</h2>
          <p className="lead">Le comité d'achat B2B incarné. Cliquez une carte pour révéler son profil, ses frictions et la stratégie dédiée.</p>
        </Reveal>

        <div className="grid cols-3" style={{ alignItems: "start" }}>
          {ps.map((p, i) => {
            const active = open === i;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  className="card"
                  onClick={() => setOpen(active ? null : i)}
                  whileHover={{ y: -4 }}
                  style={{ cursor: "pointer", borderColor: active ? "var(--clay)" : "var(--line)", borderWidth: 2 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <div style={{ fontSize: "2rem" }}>{p.icon}</div>
                    <div>
                      <h3 style={{ fontSize: "1.15rem", lineHeight: 1.1 }}>{p.name}</h3>
                      <div style={{ fontSize: "0.8rem", color: "var(--clay-deep)", fontWeight: 600 }}>{p.role}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.6rem" }}>
                    {p.age} ans · {p.city} · {p.csp}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--slate)", marginTop: "0.2rem" }}>{p.company}</div>
                  <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.6rem", flexWrap: "wrap" }}>
                    <span className="tag">priorité {p.priority}</span>
                    <span className="tag" style={{ fontSize: "0.66rem" }}>{active ? "− réduire" : "+ profil & stratégie"}</span>
                  </div>

                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ marginTop: "0.9rem", borderTop: "1px solid var(--line)", paddingTop: "0.8rem", fontSize: "0.8rem" }}>
                          <P label="Motivations d'achat">{p.motivations}</P>
                          <P label="Hobbies">{p.hobbies}</P>
                          <Block label="Comportements digitaux" items={p.digitalBehaviors} />
                          <Block label="Points de friction" items={p.frictionPoints} color="var(--clay-deep)" />

                          <div style={{ background: "var(--cream)", borderRadius: 10, padding: "0.6rem 0.7rem", margin: "0.6rem 0" }}>
                            <strong style={{ color: "var(--clay-deep)" }}>Hook Claude · </strong>{p.claudeHook}
                          </div>

                          <div style={{ background: "var(--ink)", color: "var(--ivory)", borderRadius: 10, padding: "0.7rem 0.8rem" }}>
                            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--clay-soft)", marginBottom: "0.4rem" }}>STRATÉGIE DÉDIÉE</div>
                            <div style={{ marginBottom: "0.3rem" }}><strong>Message · </strong>{p.strategy.message}</div>
                            <div style={{ marginBottom: "0.3rem" }}><strong>Ton · </strong>{p.strategy.tone}</div>
                            <div style={{ marginBottom: "0.4rem" }}><strong>Fréquence · </strong>{p.strategy.frequency}</div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                              {p.strategy.channels.map((c, j) => (
                                <span key={j} style={{ fontSize: "0.66rem", background: "rgba(217,119,87,0.25)", color: "var(--ivory)", padding: "0.12rem 0.45rem", borderRadius: 999 }}>{c}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function P({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <strong style={{ fontSize: "0.72rem", letterSpacing: "0.04em", color: "var(--muted)" }}>{label.toUpperCase()} · </strong>
      <span style={{ color: "var(--slate)" }}>{children}</span>
    </div>
  );
}

function Block({ label, items, color = "var(--slate)" }: { label: string; items: string[]; color?: string }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <strong style={{ fontSize: "0.72rem", letterSpacing: "0.04em", color: "var(--muted)" }}>{label.toUpperCase()}</strong>
      <ul className="b-list" style={{ marginTop: "0.25rem" }}>
        {items.map((x, j) => <li key={j} style={{ fontSize: "0.78rem", color }}>{x}</li>)}
      </ul>
    </div>
  );
}
