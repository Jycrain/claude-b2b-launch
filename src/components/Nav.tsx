import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export type SectionMeta = { id: string; label: string };

export function Nav({ sections }: { sections: SectionMeta[] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [active, setActive] = useState(0);

  // index courant via IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === e.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  const go = (idx: number) => {
    const clamped = Math.max(0, Math.min(sections.length - 1, idx));
    document.getElementById(sections[clamped].id)?.scrollIntoView({ behavior: "smooth" });
  };

  // navigation clavier pour piloter la soutenance
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(active + 1); }
      else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(active - 1); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(sections.length - 1); }
      else if (e.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, sections]);

  return (
    <>
      <motion.div
        style={{
          scaleX, transformOrigin: "0%", position: "fixed", top: 0, left: 0, right: 0,
          height: 4, background: "linear-gradient(90deg,var(--clay),var(--clay-deep))", zIndex: 100,
        }}
      />
      <nav className="dotnav">
        {sections.map((s, i) => (
          <button
            key={s.id}
            className={`dot ${i === active ? "on" : ""}`}
            onClick={() => go(i)}
            aria-label={s.label}
          >
            <span className="dot-label">{s.label}</span>
          </button>
        ))}
      </nav>
      <div className="hint">← → naviguer · F plein écran</div>
    </>
  );
}
