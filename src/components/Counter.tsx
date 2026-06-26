import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Anime un nombre extrait d'une chaîne (ex: "1 300 Md$", "65 %+", "+30 %").
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(value);

  const match = value.match(/-?[\d\s.,]+/);
  const numStr = match ? match[0].replace(/\s/g, "").replace(",", ".") : null;
  const target = numStr ? parseFloat(numStr) : null;

  useEffect(() => {
    if (!inView || target === null || isNaN(target)) {
      setDisplay(value);
      return;
    }
    const prefix = value.slice(0, value.indexOf(match![0]));
    const suffix = value.slice(value.indexOf(match![0]) + match![0].length);
    const decimals = (numStr!.split(".")[1] || "").length;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = target * eased;
      const formatted = decimals > 0
        ? cur.toFixed(decimals)
        : Math.round(cur).toLocaleString("fr-FR");
      setDisplay(prefix + formatted + suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]); // eslint-disable-line

  return <span ref={ref} className={className}>{display}</span>;
}
