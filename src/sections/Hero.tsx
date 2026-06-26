import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Canvas animé : réseau de particules (métaphore "intelligence en réseau"), offline.
function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0;
    const N = 70;
    const pts = Array.from({ length: N }, (_, i) => ({
      x: ((i * 9301 + 49297) % 233280) / 233280,
      y: ((i * 49297 + 9301) % 233280) / 233280,
      vx: (((i * 13) % 7) - 3) * 0.0004,
      vy: (((i * 17) % 7) - 3) * 0.0004,
    }));
    const resize = () => {
      w = cv.width = cv.offsetWidth * devicePixelRatio;
      h = cv.height = cv.offsetHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = (pts[i].x - pts[j].x) * w;
          const dy = (pts[i].y - pts[j].y) * h;
          const d = Math.hypot(dx, dy);
          if (d < 150 * devicePixelRatio) {
            ctx.strokeStyle = `rgba(217,119,87,${(1 - d / (150 * devicePixelRatio)) * 0.28})`;
            ctx.lineWidth = devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(pts[i].x * w, pts[i].y * h);
            ctx.lineTo(pts[j].x * w, pts[j].y * h);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        ctx.fillStyle = "rgba(190,93,63,0.55)";
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, 2.2 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="hero-canvas" />;
}

export function Hero() {
  return (
    <section className="section" id="hero" style={{ overflow: "hidden" }}>
      <Constellation />
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="eyebrow" style={{ marginBottom: "1.4rem" }}
        >
          Stratégie digitale · Lancement B2B
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.4rem)", maxWidth: 980, margin: "0 auto" }}
        >
          Nous avons utilisé <span style={{ color: "var(--clay-deep)" }}>Claude</span> pour lancer{" "}
          <span style={{ color: "var(--clay-deep)" }}>Claude</span> en entreprise.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.5 }}
          className="lead" style={{ maxWidth: 640, margin: "1.6rem auto 0" }}
        >
          Cette présentation n'est pas un PowerPoint. C'est une expérience web — conçue,
          analysée et codée par Claude lui-même. Voici comment nous lançons l'IA d'entreprise
          la plus sûre sur le marché francophone.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}
          style={{ marginTop: "2.6rem", display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <span className="tag">SEO · UX · Benchmark · Personas · Performance</span>
          <span className="tag measured">100 % offline</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ marginTop: "3rem", color: "var(--muted)", fontSize: "0.8rem" }}
        >
          ↓ défiler · ou → pour piloter
        </motion.div>
      </div>
    </section>
  );
}
