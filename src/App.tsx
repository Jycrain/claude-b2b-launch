import { lazy, Suspense } from "react";
import { Nav } from "./components/Nav";
import type { SectionMeta } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { Company } from "./sections/Company";
import { Market } from "./sections/Market";
import { Product } from "./sections/Product";

// Recharts (lourd) isolé dans un chunk asynchrone pour alléger le bundle initial.
const Benchmark = lazy(() => import("./sections/Benchmark").then((m) => ({ default: m.Benchmark })));
import { Audit } from "./sections/Audit";
import { Personas } from "./sections/Personas";
import { Actions } from "./sections/Actions";
import { Kpi } from "./sections/Kpi";
import { Demo } from "./sections/Demo";
import { Conclusion } from "./sections/Conclusion";

// Ordre du jour imposé : Intro → 01 État des lieux (marché + concurrence) →
// 02 Produit → 03 UX/SEO/Perf → 04 Personas → 05 Plan d'action → 06 KPI → Démo → Conclusion.
const SECTIONS: SectionMeta[] = [
  { id: "hero", label: "Intro" },
  { id: "company", label: "01 · Entreprise" },
  { id: "market", label: "01 · Marché" },
  { id: "benchmark", label: "01 · Concurrence" },
  { id: "product", label: "02 · Produit" },
  { id: "audit", label: "03 · UX & SEO" },
  { id: "personas", label: "04 · Personas" },
  { id: "actions", label: "05 · Plan" },
  { id: "kpi", label: "06 · KPI" },
  { id: "demo", label: "Démo" },
  { id: "conclusion", label: "Conclusion" },
];

export default function App() {
  return (
    <>
      <Nav sections={SECTIONS} />
      <main>
        <Hero />
        <Company />
        <Market />
        <Suspense fallback={<section className="section alt-bg" id="benchmark" />}>
          <Benchmark />
        </Suspense>
        <Product />
        <Audit />
        <Personas />
        <Actions />
        <Kpi />
        <Demo />
        <Conclusion />
      </main>
    </>
  );
}
