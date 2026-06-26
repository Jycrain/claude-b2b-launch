import { content } from "../content";
import { Reveal } from "../components/Reveal";
import { MeasuredTag, Sources } from "../components/SourceBadge";

function Cell({ v, win }: { v: string; win: boolean }) {
  return (
    <td style={{ padding: "0.5rem 0.5rem", textAlign: "center", fontWeight: win ? 700 : 500, color: win ? "var(--clay-deep)" : "var(--slate)", fontVariantNumeric: "tabular-nums" }}>
      {v}
    </td>
  );
}

export function Audit() {
  const { perf, seo, ux, pagespeed } = content;
  const lvl = (l: string) => parseInt(l.replace(/\D/g, "")) || 1;
  return (
    <section className="section" id="audit">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">03 · UX, SEO & Performance</div>
          <h2>On mesure avant de recommander</h2>
          <p className="lead">
            Audit de la landing{" "}
            <a href={perf.landingUrl} target="_blank" rel="noreferrer" style={{ color: "var(--clay-deep)" }}>Claude Enterprise</a>{" "}
            vs ChatGPT — PageSpeed, Headings Checker, Web Developer & GlooMaps.
          </p>
        </Reveal>

        {/* PageSpeed comparatif — l'élément mesuré clé */}
        <Reveal>
          <div className="card" style={{ marginBottom: "1.4rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.7rem" }}>
              <h3 style={{ fontSize: "1.15rem" }}>PageSpeed · Claude vs {pagespeed.competitor}</h3>
              <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{pagespeed.tool} · {pagespeed.date}</span>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem" }}>
                <thead>
                  <tr style={{ color: "var(--muted)", borderBottom: "2px solid var(--line)" }}>
                    <th style={{ textAlign: "left", padding: "0.4rem 0.5rem" }}>Métrique (Lighthouse)</th>
                    <th colSpan={2} style={{ padding: "0.4rem", color: "var(--clay-deep)" }}>Claude</th>
                    <th colSpan={2} style={{ padding: "0.4rem" }}>ChatGPT</th>
                  </tr>
                  <tr style={{ color: "var(--muted)", fontSize: "0.72rem", borderBottom: "1px solid var(--line)" }}>
                    <th></th><th>desktop</th><th>mobile</th><th>desktop</th><th>mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {pagespeed.rows.map((r, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td style={{ padding: "0.5rem 0.5rem", color: "var(--ink)" }}>
                        {r.metric}{" "}
                        <span className={`tag ${r.measured ? "measured" : "illus"}`} style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", verticalAlign: "middle" }}>
                          {r.measured ? "mesuré" : "à confirmer"}
                        </span>
                      </td>
                      <Cell v={r.claudeD} win={r.winner === "claude"} />
                      <Cell v={r.claudeM} win={r.winner === "claude"} />
                      <Cell v={r.rivalD} win={r.winner === "rival"} />
                      <Cell v={r.rivalM} win={r.winner === "rival"} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="b-list" style={{ marginTop: "0.9rem" }}>
              {pagespeed.takeaways.map((t, i) => <li key={i} style={{ fontSize: "0.82rem" }}>{t}</li>)}
            </ul>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.7rem", lineHeight: 1.45 }}>
              <strong>Méthodo · </strong>{pagespeed.methodologyNote}
            </p>
          </div>
        </Reveal>

        {/* SEO Hn + UX arborescence */}
        <div className="grid cols-2" style={{ alignItems: "stretch" }}>
          <Reveal>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.7rem" }}>SEO on-page — hiérarchie Hn</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "0.9rem" }}>
                {seo.headingStructure.slice(0, 8).map((h, i) => (
                  <div key={i} style={{ paddingLeft: `${(lvl(h.level) - 1) * 14}px`, fontSize: "0.82rem" }}>
                    <code style={{ color: "var(--clay-deep)", fontWeight: 700 }}>{h.level}</code>{" "}
                    <span style={{ color: "var(--slate)" }}>{h.text.split("(")[0].trim()}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--muted)", marginBottom: "0.3rem" }}>RECOMMANDATIONS SEO</div>
              <ul className="b-list">{seo.seoGaps.slice(0, 3).map((s, i) => <li key={i} style={{ fontSize: "0.8rem" }}>{s}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.7rem" }}>UX — arborescence desktop & mobile</h3>
              <div style={{ marginBottom: "0.7rem" }}>
                {ux.sitemapNodes.slice(0, 6).map((n, i) => {
                  const label = n.label.split("(")[0].trim();
                  const isEnt = /pricing|solutions/i.test(label);
                  return (
                    <div key={i} style={{ marginBottom: "0.3rem", fontSize: "0.78rem" }}>
                      <strong style={{ color: isEnt ? "var(--clay-deep)" : "var(--ink)" }}>{label}{isEnt ? " ◂ Enterprise" : ""}</strong>
                      <span style={{ color: "var(--muted)" }}> → {n.children.slice(0, 3).join(" · ")}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ fontSize: "0.76rem", color: "var(--slate)", background: "rgba(217,119,87,0.06)", border: "1px solid var(--clay-soft)", borderRadius: 10, padding: "0.55rem 0.75rem", marginBottom: "0.7rem" }}>
                <div><strong style={{ color: "var(--clay-deep)" }}>Insertion produit · </strong>« Enterprise » dans <em>Solutions</em> (cas d'usage) + niveau <em>Pricing</em> dédié.</div>
                <div style={{ marginTop: "0.25rem" }}><strong style={{ color: "var(--clay-deep)" }}>Desktop → Mobile · </strong>nav repliée en hamburger, Solutions/industries masquées au 1er niveau, CTA « Contact sales » remonté, recherche prioritaire.</div>
              </div>
              <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--muted)", marginBottom: "0.3rem" }}>RECOMMANDATIONS UX</div>
              <ul className="b-list">{ux.uxWeaknesses.slice(0, 2).map((s, i) => <li key={i} style={{ fontSize: "0.78rem" }}>{s.split(/\s[—–]\s|;\s/)[0].split(/\(/)[0].trim()}.</li>)}</ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.2rem", alignItems: "center" }}>
            <MeasuredTag measured={true} />
            <span style={{ fontSize: "0.8rem", color: "var(--slate)" }}>
              TTFB ~40 ms (mesuré curl, CDN Cloudflare) · CLS ~0 (Lighthouse) · poids page ~1,94 MB (mesuré).
            </span>
          </div>
        </Reveal>
        <Reveal><Sources items={[...pagespeed_sources(), ...perf.sources.slice(0, 1), ...seo.sources.slice(0, 1), ...ux.sources.slice(0, 1)]} /></Reveal>
      </div>
    </section>
  );
}

function pagespeed_sources() {
  return [
    { title: "PageSpeed Insights / Lighthouse (à relancer live avant l'oral)", url: "https://pagespeed.web.dev/" },
  ];
}
