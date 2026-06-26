// Modèle de contenu unique de la présentation.
// Les données réelles/sourcées issues du workflow de recherche sont injectées ici.
// `measured: true` = chiffre mesuré/sourcé ; `false` = estimation/illustratif.

export type Source = { title: string; url: string };

export type Stat = { label: string; value: string; note: string; measured: boolean };

export type Content = {
  company: {
    mission: string;
    vision: string;
    values: { title: string; desc: string }[];
    figures: { label: string; value: string; measured: boolean }[];
    sources: Source[];
  };
  market: {
    marketSizeStats: Stat[];
    adoptionTrends: string[];
    b2bChallenges: string[];
    sources: Source[];
  };
  perf: {
    landingUrl: string;
    coreWebVitals: { metric: string; value: string; verdict: string; measured: boolean }[];
    perfStrengths: string[];
    perfWeaknesses: string[];
    methodologyNote: string;
    sources: Source[];
  };
  seo: {
    headingStructure: { level: string; text: string }[];
    seoStrengths: string[];
    seoGaps: string[];
    targetKeywordsB2B: { keyword: string; intent: string; opportunity: string }[];
    sources: Source[];
  };
  ux: {
    sitemapNodes: { label: string; children: string[] }[];
    uxStrengths: string[];
    uxWeaknesses: string[];
    proposedFunnel: { stage: string; action: string }[];
    sources: Source[];
  };
  bench: {
    competitors: {
      name: string; vendor: string; positioning: string; enterprisePricing: string;
      security: string; trafficEstimate: string; measured: boolean;
    }[];
    radarDimensions: string[];
    radarScores: { name: string; scores: number[] }[];
    claudeAdvantages: string[];
    sources: Source[];
  };
  personas: {
    personas: {
      role: string; title: string; context: string; pains: string[]; gains: string[];
      claudeHook: string; priority: string;
    }[];
    sources: Source[];
  };
  strategy: {
    positioning: { tagline: string; statement: string; pillars: string[] };
    funnel: { stage: string; goal: string; tactics: string[]; kpi: string }[];
    mediaPlan: { channel: string; role: string; budgetPct: number; expectedOutcome: string }[];
    seoPlan: string[];
    kpis: { name: string; target: string; horizon: string }[];
    budget: { total: string; breakdown: { item: string; amount: string; pct: number }[] };
    roadmap90j: { period: string; milestones: string[] }[];
    demoScript: { useCase: string; userPrompt: string; claudeValue: string; persona: string }[];
    roiPoints: string[];
    fiveFollowUpSteps: string[];
  };
  // 02 — Présentation du produit (Claude pour l'Entreprise)
  product: {
    tagline: string;
    valueProp: string;
    target: string;
    models: { name: string; role: string }[];
    capabilities: { title: string; desc: string }[];
    pricing: { tier: string; price: string; forWho: string; highlights: string[]; featured?: boolean }[];
    differentiators: string[];
    howToCommunicate: string[];
    sources: Source[];
  };
  // 03 — PageSpeed : tableau comparatif Claude vs concurrent (desktop + mobile)
  pagespeed: {
    claudeUrl: string;
    competitor: string;
    competitorUrl: string;
    date: string;
    tool: string;
    methodologyNote: string;
    rows: { metric: string; claudeD: string; claudeM: string; rivalD: string; rivalM: string; winner: "claude" | "rival" | "tie"; measured: boolean }[];
    takeaways: string[];
  };
  // 05 — Plan d'action : exactement 3 actions
  actions: {
    n: string; name: string; justification: string;
    objectives: string[]; channels: string[]; target: string; budgetPct: number;
  }[];
  // 06 — KPI : exactement 6
  kpiDashboard: { name: string; target: string; baseline: string; horizon: string; action: string }[];
  // 04 — Personas : exactement 3 décideurs incarnés + stratégie par persona
  personaProfiles: {
    name: string; age: number; city: string; role: string; csp: string;
    icon: string; priority: string; company: string;
    motivations: string; hobbies: string;
    digitalBehaviors: string[]; frictionPoints: string[]; claudeHook: string;
    strategy: { message: string; tone: string; channels: string[]; touchpoints: string[]; frequency: string };
  }[];
};

// ── Données réelles sourcées (sortie du workflow de recherche multi-axes) ──
export const content: Content = {
  "company": {
    "mission": "Faire en sorte que l'humanité traverse en sécurité la transition vers l'IA transformative.",
    "vision": "Une IA de pointe au service de l'entreprise — fiable, sûre et gouvernable — où la sécurité n'est pas un frein mais le produit lui-même.",
    "values": [
      { "title": "Sécurité de l'IA d'abord", "desc": "La recherche en sûreté (interprétabilité, alignement, Responsible Scaling) précède la course à la performance." },
      { "title": "Constitutional AI", "desc": "Un modèle entraîné à être utile, honnête et inoffensif à partir de principes explicites — la fiabilité par conception." },
      { "title": "Confiance & transparence", "desc": "Engagements publics, Trust Center, certifications auditables : la preuve plutôt que la promesse." }
    ],
    "figures": [
      { "label": "Création", "value": "2021", "measured": true },
      { "label": "Valorisation (Série G, févr. 2026)", "value": "380 Md$", "measured": true },
      { "label": "Financement levé (Série G)", "value": "30 Md$", "measured": true },
      { "label": "Revenu (run-rate, mai 2026)", "value": "~47 Md$", "measured": true },
      { "label": "Traction entreprise", "value": "70 % du Fortune 100", "measured": true }
    ],
    "sources": [
      { "title": "Anthropic raises $30B Series G at $380B valuation (févr. 2026)", "url": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation" },
      { "title": "Anthropic's run-rate revenue hits $47 billion — Simon Willison (mai 2026)", "url": "https://simonwillison.net/2026/May/29/anthropic/" },
      { "title": "Anthropic AI Statistics 2026 (Fortune 100) — getPanto", "url": "https://www.getpanto.ai/blog/anthropic-ai-statistics" },
      { "title": "Anthropic — Company / Constitutional AI", "url": "https://www.anthropic.com/company" }
    ]
  },
  "market": {
    "marketSizeStats": [
      {
        "label": "Dépenses mondiales des entreprises en IA générative (2025)",
        "value": "37 Md$",
        "note": "Menlo Ventures, State of Generative AI in the Enterprise 2025 ; x3,2 vs 11,5 Md$ en 2024 (et 1,7 Md$ en 2023). Représente ~6% du marché mondial du SaaS.",
        "measured": true
      },
      {
        "label": "Répartition 2025 : couche applicative vs infrastructure",
        "value": "19 Md$ apps / 18 Md$ infra",
        "note": "Menlo Ventures 2025. Infra dont 12,5 Md$ d'API de modèles de fondation, 4,0 Md$ d'entraînement. Apps dont 8,4 Md$ d'IA horizontale et 7,3 Md$ d'IA départementale.",
        "measured": true
      },
      {
        "label": "Marché global de l'IA générative (toutes cibles) 2025",
        "value": "71,4 Md$",
        "note": "MarketsandMarkets : 71,36 Md$ en 2025 → 890,59 Md$ en 2032, CAGR 43,4%. Périmètre plus large que le seul B2B/entreprise.",
        "measured": true
      },
      {
        "label": "Croissance du segment Enterprise Generative AI 2025-2029",
        "value": "CAGR 36,2%",
        "note": "Technavio : +9 243,5 M$ attendus sur 2025-2029. Estimation de cabinet, méthodologie propre.",
        "measured": true
      },
      {
        "label": "Part de marché LLM en entreprise (API, 2025)",
        "value": "Anthropic 40% / OpenAI 27% / Google 21%",
        "note": "Menlo Ventures 2025. Anthropic 24% en 2024, 12% en 2023 ; OpenAI 50% en 2023. Top 3 = 88% des usages LLM en entreprise. Sur le coding : Anthropic 54%.",
        "measured": true
      },
      {
        "label": "Bascule build vs buy en entreprise",
        "value": "76% achat / 24% interne (2025)",
        "note": "Menlo Ventures : inversion vs 2024 (47% interne / 53% achat). L'achat à des éditeurs spécialisés réussit ~67% du temps vs ~1/3 pour le build interne (MIT NANDA).",
        "measured": true
      },
      {
        "label": "Coût mondial de mise en conformité réglementaire IA d'ici 2030",
        "value": "~1 Md$",
        "note": "Estimation Gartner relayée (réglementation fragmentée couvrant 75% des économies). Chiffre prospectif/illustratif.",
        "measured": false
      }
    ],
    "adoptionTrends": [
      "Monde : 78% des organisations utilisent l'IA dans au moins une fonction et ~71% utilisent régulièrement l'IA générative (McKinsey, State of AI 2025, enquête juin-juillet 2025, 1 993 répondants dans 105 pays).",
      "Agents IA : 23% des organisations passent à l'échelle un système d'IA agentique et 39% supplémentaires expérimentent (McKinsey 2025). En production, ~16% des déploiements entreprise sont de vrais agents (Menlo Ventures).",
      "France TPE/PME : 31% utilisent l'IA générative en 2025 (dont 8% régulièrement), contre 15% fin 2023 (Bpifrance Le Lab). 29% des TPE 1-9 salariés vs 53% des PME de 100+ salariés.",
      "France (entreprises 10+ salariés, toutes IA) : 10% en 2024 vs 6% en 2023, sous la moyenne UE (13%) et loin du Danemark (28%) et de la Belgique (25%) (Insee/Eurostat via squid-impact).",
      "France grandes entreprises : 33% des entreprises de 250+ salariés utilisent l'IA ; secteur information-communication en tête à 42%.",
      "Maturité limitée : seules ~1/3 des organisations passent l'IA à l'échelle et 6% sont 'high performers' avec un impact EBIT de 5%+ (McKinsey 2025).",
      "Usage métier dominant : le coding capte 4,0 Md$ (55% des dépenses départementales) ; 50% des développeurs utilisent un outil d'IA au quotidien (Menlo Ventures). En France, marketing/ventes (28%) et production/services (27%) en tête."
    ],
    "b2bChallenges": [
      "ROI insaisissable : MIT (Project NANDA, 2025) estime que ~95% des pilotes d'IA générative n'ont aucun impact P&L mesurable ; seuls ~5% créent de la valeur. En France, seuls 4% des dirigeants perçoivent des bénéfices financiers significatifs (squid-impact/Bpifrance).",
      "Passage à l'échelle (pilot purgatory) : Gartner prévoit l'abandon de 60% des projets IA faute de données 'AI-ready' d'ici 2026 ; le frein principal est la qualité/préparation des données et l'intégration aux workflows, pas le modèle.",
      "Conformité AI Act : obligations GPAI applicables depuis le 2 août 2025 (documentation technique, résumé des données d'entraînement, respect du droit d'auteur UE) ; sanctions jusqu'à 15 M€ ou 3% du CA mondial (GPAI) et 35 M€ ou 7% pour les autres manquements. Systèmes à haut risque obligatoires au 2 août 2026.",
      "Gouvernance/inventaire : plus de la moitié des organisations n'ont pas d'inventaire systématique de leurs systèmes IA, prérequis minimal de toute conformité (Cloud Security Alliance / secureprivacy).",
      "Sécurité et confiance : 'boîtes noires', hallucinations, biais algorithmiques et fuites de données personnelles (mémorisation) restent les risques cités par les décideurs.",
      "Souveraineté & RGPD : crainte du Cloud Act (accès des autorités US aux données même hébergées hors US) ; montée des offres souveraines européennes (Mistral AI, modèles auto-hébergeables, data center France) pour garder la maîtrise localisation/sécurité des données.",
      "Compétences & stratégie : en France, 58% des dirigeants PME/ETI jugent l'IA 'indispensable à la survie' mais seuls ~43% ont une stratégie dédiée ; pénurie de compétences et absence de stratégie numérique freinent l'adoption."
    ],
    "sources": [
      {
        "title": "Menlo Ventures — 2025: The State of Generative AI in the Enterprise",
        "url": "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/"
      },
      {
        "title": "McKinsey — The State of AI: Global Survey 2025",
        "url": "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
      },
      {
        "title": "MarketsandMarkets — Generative AI Market Report 2025-2032",
        "url": "https://www.marketsandmarkets.com/Market-Reports/generative-ai-market-142870584.html"
      },
      {
        "title": "Technavio — Enterprise Generative AI Market 2025-2029",
        "url": "https://www.technavio.com/report/enterprise-generative-ai-market-industry-analysis"
      },
      {
        "title": "Bpifrance Le Lab — 31% des TPE et PME utilisent l'IA générative",
        "url": "https://lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative"
      },
      {
        "title": "Squid Impact — Chiffres clés IA France entreprises 2025",
        "url": "https://www.squid-impact.fr/chiffres-cles-ia-france-entreprises-2025/"
      },
      {
        "title": "Fortune — MIT report: 95% of generative AI pilots are failing",
        "url": "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/"
      },
      {
        "title": "Gartner — Why 50% of GenAI Projects Fail",
        "url": "https://www.gartner.com/en/articles/genai-project-failure"
      },
      {
        "title": "Commission européenne — AI Act / Regulatory framework",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
      },
      {
        "title": "EU Artificial Intelligence Act — Implementation Timeline",
        "url": "https://artificialintelligenceact.eu/implementation-timeline/"
      },
      {
        "title": "Cranium — Navigating the EU AI Act August 2025 deadline (GPAI)",
        "url": "https://cranium.ai/resources/blog/navigating-the-eu-ai-act-august-2025-deadline-gpai-compliance-penalties-and-enforcement/"
      },
      {
        "title": "MIC Belgique — Souveraineté IA en Europe (Mistral, Euria)",
        "url": "https://www.mic-belgique.be/post/l-europe-face-au-d%C3%A9fi-de-la-souverainet%C3%A9-en-ia-enjeux-acteurs-et-strat%C3%A9gies-mistral-euria"
      }
    ]
  },
  "perf": {
    "landingUrl": "https://claude.com/solutions/enterprise",
    "coreWebVitals": [
      {
        "metric": "TTFB (Time To First Byte)",
        "value": "~28-43 ms (median ~40 ms) depuis un POP Cloudflare proche (CDG/Paris), mesuré sur 3 runs curl --compressed",
        "verdict": "Excellent. Bien sous le seuil 'good' de 800 ms. Servi via Cloudflare en HTTP/2 avec Early Hints (réponse 103) qui precharge la CSS de marque et Swiper. Note: cf-cache-status=DYNAMIC, donc le HTML n'est pas mis en cache edge, mais l'origine répond très vite.",
        "measured": true
      },
      {
        "metric": "LCP (Largest Contentful Paint)",
        "value": "Estimé ~1.8-2.8 s. L'élément LCP est le hero plein écran (carrousel Swiper avec posters .webp + vidéos .webm autoplay). Poster hero 'enterprise-hero-slack.webp' chargé tôt; TTFB ~40 ms et total HTML ~0.17-0.23 s laissent une bonne marge.",
        "verdict": "Probablement 'good' à 'needs improvement'. Risque: le hero combine un slider Swiper + GSAP + vidéos .webm en background (data-src, donc chargées en JS après hydration), ce qui peut retarder le rendu du plus grand élément si le poster n'est pas priorisé. Non confirmé sans PageSpeed/CrUX live.",
        "measured": false
      },
      {
        "metric": "CLS (Cumulative Layout Shift)",
        "value": "Estimé faible (~0-0.1). Les 73 images/vidéos portent loading=lazy et des classes 'u-background-skeleton' (placeholders de réservation d'espace).",
        "verdict": "Probablement 'good'. Les skeletons et le lazy-loading généralisé suggèrent que les dimensions sont réservées. Risque résiduel: l'injection du carrousel hero et des web fonts (Webflow) peut provoquer de légers shifts. Non mesuré.",
        "measured": false
      },
      {
        "metric": "INP / FID (interactivité)",
        "value": "Estimé 'needs improvement' à 'good'. Stack lourde en JS d'animation: GSAP complet (ScrollTrigger, Draggable, Flip, InertiaPlugin, ~44 KB+), Swiper 11 (~43 KB), Webflow runtime, plus Amplitude session-replay et Intercom. 70 balises <script>.",
        "verdict": "À surveiller. Le volume de JS d'animation (GSAP + Swiper + Webflow) et les tags tiers (Amplitude session-replay, Intercom) peuvent créer du long-task / blocage du thread principal, dégradant l'INP. Non mesuré en conditions réelles.",
        "measured": false
      },
      {
        "metric": "Poids de page (transfer)",
        "value": "HTML ~1.94 MB non compressé / ~583 KB compressé (gzip/br). Somme des 15 premières images uniques ~1.75 MB. JS notables: Swiper 43 KB, GSAP ScrollTrigger 18 KB + Draggable 13 KB + Flip 10 KB + InertiaPlugin 3 KB. Plus vidéos .webm hero (slack/lyft/notion sizzle reels) non comptées.",
        "verdict": "Lourd côté médias. 72 <img>, 7 <video> .webm autoplay, 3 iframes. Le poids total réel dépasse vraisemblablement 3-5 MB une fois les vidéos hero et tous les visuels chargés. Bon point: WebP utilisé, srcset responsive (variantes -p-500/-800/-1080), lazy-loading quasi universel (73 éléments).",
        "measured": true
      },
      {
        "metric": "Temps de chargement (document)",
        "value": "Document HTML complet récupéré en ~0.17-0.23 s (curl total, hors sous-ressources). Page totalement interactive bien plus tard une fois GSAP/Swiper/vidéos chargés.",
        "verdict": "Le HTML arrive très vite (CDN rapide). Le 'fully loaded' visuel est piloté par les médias et le JS d'animation, non mesurable précisément sans navigateur headless.",
        "measured": true
      }
    ],
    "perfStrengths": [
      "TTFB excellent (~40 ms median) servi par Cloudflare en HTTP/2 avec Early Hints (réponse 103) qui precharge la CSS de marque et Swiper CSS avant le HTML.",
      "Lazy-loading quasi universel: 73 attributs loading=lazy pour 72 images + 7 vidéos, ce qui diffère le téléchargement hors-écran.",
      "Images modernes: format WebP pour le hero et les posters, avec srcset responsive (variantes -p-500/-800/-1080) pour servir la bonne résolution.",
      "Vidéos hero en .webm (codec efficace) avec posters .webp, muted/loop/playsinline et data-src (chargement différé piloté par JS, pas au parse).",
      "Placeholders 'u-background-skeleton' qui réservent l'espace, réduisant le risque de CLS.",
      "preconnect/crossorigin vers cdn.prod.website-files.com déclaré pour accélérer la récupération des assets."
    ],
    "perfWeaknesses": [
      "HTML très volumineux: ~1.94 MB non compressé (~583 KB compressé) pour une seule page — typique de Webflow qui inline beaucoup de markup et de styles.",
      "Stack d'animation lourde: GSAP complet (ScrollTrigger, Draggable, Flip, InertiaPlugin) + Swiper 11 + runtime Webflow, susceptible de générer des long tasks et de dégrader l'INP.",
      "Tags tiers coûteux: Amplitude session-replay et widget Intercom, qui ajoutent du JS bloquant/différé et de la charge réseau.",
      "Hero piloté par carrousel + vidéos .webm autoplay en background: l'élément LCP dépend de JS (data-src) et peut être retardé si le poster n'est pas marqué fetchpriority=high.",
      "cf-cache-status=DYNAMIC: le HTML n'est pas mis en cache au edge Cloudflare, chaque requête touche l'origine (atténué ici par un TTFB déjà bas).",
      "Beaucoup d'origines tierces (anthropic.com, claude.ai, platform.claude.com, unpkg, jsdelivr, cdnjs, amplitude, intercom, geojs) — multiplie les connexions et points de défaillance.",
      "Le /pricing/enterprise redirige (301) vers /pricing et /enterprise (301) vers /solutions/enterprise: des hops de redirection qui ajoutent de la latence sur les anciens liens."
    ],
    "methodologyNote": "URL canonique confirmée par suivi des redirections: https://www.anthropic.com/enterprise -> 301 https://claude.com/pricing/enterprise -> 301 /pricing ; et https://claude.com/enterprise -> 301 https://claude.com/solutions/enterprise (LA vraie landing entreprise). Mesures effectuées le 2026-06-26 avec curl --compressed depuis un POP Cloudflare proche (cf-ray ...-CDG): TTFB, taille de transfert (compressée et non compressée) et tailles d'assets/JS sont MESURÉS (measured=true). En revanche LCP, CLS et INP/FID ne peuvent PAS être mesurés sans navigateur réel ni champ CrUX: ils sont ESTIMÉS (measured=false) à partir de l'observation de la structure (carrousel Swiper, vidéos .webm autoplay en hero, GSAP, lazy-loading, skeletons, Early Hints). Aucune donnée PageSpeed Insights ni CrUX publiée pour claude.com n'a été trouvée en recherche web. Pour des chiffres terrain fiables, lancer manuellement PageSpeed Insights (https://pagespeed.web.dev) sur https://claude.com/solutions/enterprise, ou un Lighthouse/WebPageTest, afin de confirmer LCP/CLS/INP réels (lab + field).",
    "sources": [
      {
        "title": "Claude Enterprise solutions landing page (URL canonique, mesurée en live)",
        "url": "https://claude.com/solutions/enterprise"
      },
      {
        "title": "Redirection mesurée: anthropic.com/enterprise -> claude.com/pricing/enterprise",
        "url": "https://www.anthropic.com/enterprise"
      },
      {
        "title": "Google PageSpeed Insights (à lancer manuellement pour LCP/CLS/INP terrain)",
        "url": "https://pagespeed.web.dev/"
      },
      {
        "title": "Core Web Vitals report - Google Search Console Help (définitions des seuils)",
        "url": "https://support.google.com/webmasters/answer/9205520?hl=en"
      }
    ]
  },
  "seo": {
    "headingStructure": [
      {
        "level": "H1",
        "text": "Claude Enterprise by Anthropic (page: anthropic.com/product/enterprise)"
      },
      {
        "level": "H2",
        "text": "Frontier AI for every employee"
      },
      {
        "level": "H2",
        "text": "Designing responsible AI for enterprise"
      },
      {
        "level": "H2",
        "text": "Built for enterprise requirements"
      },
      {
        "level": "H2",
        "text": "Deploying our own safeguards to customers"
      },
      {
        "level": "H2",
        "text": "How Claude Enterprise impacts teams"
      },
      {
        "level": "H2",
        "text": "Trust, safety, and data"
      },
      {
        "level": "H2",
        "text": "FAQ"
      },
      {
        "level": "H2",
        "text": "Get started with Claude Enterprise"
      },
      {
        "level": "H3",
        "text": "Providing access and controls"
      },
      {
        "level": "H3",
        "text": "Surfacing organizational knowledge safely"
      },
      {
        "level": "H3",
        "text": "Streamlining contracts across products"
      },
      {
        "level": "H3",
        "text": "Supporting work in regulated industries"
      },
      {
        "level": "H3",
        "text": "Workforce-wide rollout of API and secure apps"
      },
      {
        "level": "H3",
        "text": "Decision-grade work in regulated industries"
      },
      {
        "level": "H3",
        "text": "AI in customer-facing experiences"
      },
      {
        "level": "H3",
        "text": "6x FAQ question headings"
      },
      {
        "level": "H1",
        "text": "Pricing (companion page: claude.com/pricing/enterprise — title: Plans & Pricing | Claude by Anthropic)"
      },
      {
        "level": "H2",
        "text": "Individual / Team & Enterprise / API / Pricing / Compare features across plans / Education plan"
      },
      {
        "level": "H3",
        "text": "Free / Pro / Max / Team / Enterprise / Features and capabilities / Security and administration / Payment options / Models and usage / Questions"
      }
    ],
    "seoStrengths": [
      "H1 is keyword-aligned and brand-anchored ('Claude Enterprise by Anthropic'), capturing both the branded query 'Claude Enterprise' and the category term 'enterprise AI'.",
      "Clean, logical H2 hierarchy that maps to buyer-journey intents: capabilities -> responsible AI -> enterprise requirements -> safeguards -> social proof -> trust/data -> FAQ -> conversion CTA.",
      "Strong, quantified social proof embedded in H3 sections (Smartsheet '3x more code', '31% more pull requests', '49% adoption in 2.5 weeks'; Lyft '87%' resolution-time improvement) — good for E-E-A-T and rich-result eligibility.",
      "Explicit trust/compliance signals: 'No model training on your content by default', HIPAA-ready offering, SSO, SCIM, audit logs, IP allowlisting, custom data retention, plus a linked Trust Center — answers high-intent B2B security queries.",
      "Dedicated FAQ H2 with question-format H3s — eligible for FAQ/People-Also-Ask featured snippets and matches conversational/AI-search query patterns.",
      "Clear, repeated conversion CTAs ('Contact sales', 'Get Enterprise plan', 'Learn more about Claude Enterprise') and strong internal linking between the product landing and the pricing page consolidate topical authority.",
      "Product cross-sell terms surfaced in copy (Claude Code, Claude Cowork, Claude Security, Remote MCP connectors) widen the semantic footprint into adjacent high-volume categories like 'AI coding assistant'."
    ],
    "seoGaps": [
      "Specific certifications (SOC 2 Type II, ISO 27001, ISO 42001) are NOT named on-page — they are deferred to the Trust Center. High-intent queries like 'Claude SOC 2' or 'Anthropic ISO 27001 enterprise' likely won't rank on this landing page.",
      "No explicit GDPR / EU AI Act / data-residency language on the landing page despite the EU AI Act's substantive obligations applying from 2 Aug 2026 (measured=true, source innfactory) — a major missed keyword cluster for European B2B buyers ('assistant IA conforme RGPD', 'IA souveraine EU').",
      "H2/H3 wording is benefit/abstract-led ('Frontier AI for every employee', 'Decision-grade work in regulated industries') rather than keyword-led; headings underuse high-search terms like 'enterprise LLM', 'secure AI for business', 'AI governance'.",
      "Two near-identical 'Built for enterprise requirements' / 'requirements' themes and a duplicated 'work in regulated industries' H3 create semantic redundancy without distinct keyword targeting.",
      "The .com/product/enterprise -> claude.com/pricing/enterprise split (301 from the legacy /enterprise URL) risks link-equity dilution and brand/domain ambiguity (anthropic.com vs claude.com) for the 'Claude Enterprise' query.",
      "No visible meta description captured for the product landing (only the pricing page title was exposed) — risk of auto-generated SERP snippets.",
      "Thin direct coverage of competitive/comparison intent ('Claude vs Copilot enterprise', 'Claude vs ChatGPT Enterprise') which is high-volume B2B evaluation traffic; left entirely to third-party sites.",
      "Pricing page H2 structure repeats 'Compare features across plans' twice and lists 'Pricing' both as H1 and H2 — heading duplication that dilutes hierarchy clarity."
    ],
    "targetKeywordsB2B": [
      {
        "keyword": "Claude Enterprise",
        "intent": "Branded / navigational-commercial — buyers evaluating Anthropic's enterprise plan directly",
        "opportunity": "High — own the branded SERP; consolidate the anthropic.com vs claude.com split and add SOC 2/ISO/data-residency copy. Context: 70% of Fortune 100 are Claude customers and 8 of the Fortune 10 (measured=true, getpanto/sacra)."
      },
      {
        "keyword": "enterprise LLM / secure enterprise LLM",
        "intent": "Commercial investigation — IT/security buyers comparing governable large language models",
        "opportunity": "High — not used verbatim in headings; add an H2 'Secure enterprise LLM' targeting the 74% of orgs planning agentic AI but only 21% with mature governance (measured=true, getmaxim)."
      },
      {
        "keyword": "AI coding assistant enterprise / Claude Code enterprise",
        "intent": "Commercial — engineering leaders selecting a coding tool for large dev orgs",
        "opportunity": "Very high — Claude Code reached ~$2.5B annualized run-rate 9 months post-launch and 46% 'most loved' in JetBrains Apr 2026 survey vs Cursor 19% / Copilot 9% (measured=true, gradually.ai/uvik); but Copilot still leads enterprise headcount (37-42% share, measured=true, ideaplan) — comparison content is the gap."
      },
      {
        "keyword": "assistant IA conforme RGPD / GDPR-compliant AI",
        "intent": "Commercial — EU buyers needing regulatory-safe AI ahead of EU AI Act (obligations from 2 Aug 2026)",
        "opportunity": "High & open — no GDPR/EU AI Act copy on landing today (measured=false, gap observed); strong opening for an EU/data-residency page (measured=true on EU AI Act date, innfactory)."
      },
      {
        "keyword": "IA entreprise sécurisée / secure AI for business",
        "intent": "Commercial investigation — security-conscious enterprise buyers",
        "opportunity": "Medium-High — leverage on-page 'no training on your data by default' + HIPAA-ready; Gartner: 40% of enterprise apps to embed task-specific AI agents by end-2026 vs <5% in 2025 (measured=true, getmaxim)."
      },
      {
        "keyword": "AI governance / LLM governance platform",
        "intent": "Commercial — compliance & risk teams selecting governed AI",
        "opportunity": "High — governance gap is acute (only 21% mature governance, measured=true, getmaxim); landing lacks an explicit 'AI governance' heading despite SSO/SCIM/audit-log content."
      },
      {
        "keyword": "Claude vs ChatGPT Enterprise / Claude vs Copilot",
        "intent": "Commercial comparison — late-stage evaluation traffic",
        "opportunity": "High — Anthropic now leads enterprise revenue (≈$47B run-rate May 2026, ~80% from enterprise vs OpenAI ~40-50%, measured=true, venturebeat/axios) yet owns no on-page comparison content."
      },
      {
        "keyword": "HIPAA-compliant AI / AI for regulated industries",
        "intent": "Commercial — healthcare/finance/legal buyers with strict compliance needs",
        "opportunity": "Medium-High — page already has 'regulated industries' H3s and a HIPAA-ready offering; surface named certifications to convert this existing semantic asset into ranking pages."
      },
      {
        "keyword": "enterprise AI deployment / SSO SCIM AI rollout",
        "intent": "Commercial / informational-commercial — admins planning workforce-wide rollout",
        "opportunity": "Medium — strong supporting data on-page (Smartsheet 49% adoption in 2.5 weeks, 3x more code, 31% more PRs; measured=true, anthropic.com/product/enterprise) supports a dedicated deployment/ROI page."
      },
      {
        "keyword": "AI agent platform enterprise",
        "intent": "Commercial — buyers of agentic/automation AI",
        "opportunity": "Medium-High — ride the agentic wave (Anthropic launched a Claude B2B marketplace Mar 2026, measured=true, digitalcommerce360); currently underweighted in headings vs the chat/assistant framing."
      }
    ],
    "sources": [
      {
        "title": "Claude Enterprise — Anthropic product landing (H-structure source)",
        "url": "https://www.anthropic.com/product/enterprise"
      },
      {
        "title": "Plans & Pricing | Claude by Anthropic (pricing/enterprise, 301 target of /enterprise)",
        "url": "https://claude.com/pricing/enterprise"
      },
      {
        "title": "Anthropic says it hit a $30 billion revenue run rate after 'crazy' 80x growth — VentureBeat",
        "url": "https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth"
      },
      {
        "title": "Anthropic's run-rate revenue hits $47 billion — Simon Willison",
        "url": "https://simonwillison.net/2026/May/29/anthropic/"
      },
      {
        "title": "Anthropic turns the tables on OpenAI in enterprise revenue — Axios",
        "url": "https://www.axios.com/2026/03/18/ai-enterprise-revenue-anthropic-openai"
      },
      {
        "title": "Anthropic AI Statistics 2026: Users, Revenue & Market Share — getpanto",
        "url": "https://www.getpanto.ai/blog/anthropic-ai-statistics"
      },
      {
        "title": "Anthropic revenue, valuation & funding — Sacra",
        "url": "https://sacra.com/c/anthropic/"
      },
      {
        "title": "Claude Code Statistics 2026: Key Numbers, Data & Facts — gradually.ai",
        "url": "https://www.gradually.ai/en/claude-code-statistics/"
      },
      {
        "title": "AI Coding Assistant Statistics 2026 (84% adoption, satisfaction/NPS) — Uvik",
        "url": "https://uvik.net/blog/ai-coding-assistant-statistics/"
      },
      {
        "title": "AI Coding Assistant Market Share 2026: Cursor vs Copilot — ideaplan",
        "url": "https://www.ideaplan.io/blog/ai-coding-assistant-market-share-2026"
      },
      {
        "title": "Top 5 Platforms to Govern and Secure Enterprise AI Usage in 2026 (governance gap, Gartner agent forecast) — getmaxim",
        "url": "https://www.getmaxim.ai/articles/top-5-platforms-to-govern-and-secure-enterprise-ai-usage-in-2026/"
      },
      {
        "title": "GDPR-compliant AI platforms for enterprises compared 2026 (EU AI Act 2 Aug 2026) — innFactory",
        "url": "https://innfactory.ai/en/blog/gdpr-compliant-ai-platforms-enterprise-comparison-2026/"
      },
      {
        "title": "Anthropic launches Claude B2B marketplace for enterprise AI applications — Digital Commerce 360",
        "url": "https://www.digitalcommerce360.com/2026/03/16/anthropic-launches-claude-b2b-marketplace-enterprise-ai-applications/"
      }
    ]
  },
  "ux": {
    "sitemapNodes": [
      {
        "label": "Try Claude / Auth (CTA — claude.ai login, Continue with Google/email/SSO)",
        "children": [
          "Free",
          "Pro",
          "Max",
          "Team",
          "Enterprise"
        ]
      },
      {
        "label": "Meet Claude / Products (claude.com)",
        "children": [
          "Claude (chat assistant)",
          "Claude Code",
          "Claude Cowork",
          "Claude Design",
          "Claude Security",
          "Claude Platform (API)"
        ]
      },
      {
        "label": "Models",
        "children": [
          "Mythos",
          "Fable",
          "Opus",
          "Sonnet",
          "Haiku"
        ]
      },
      {
        "label": "Solutions (by use case & industry)",
        "children": [
          "AI agents",
          "Coding",
          "Customer support",
          "Enterprise",
          "Financial services",
          "Government",
          "Healthcare",
          "Legal",
          "Life sciences",
          "Education",
          "Nonprofits",
          "Small business",
          "Startups",
          "Security"
        ]
      },
      {
        "label": "Pricing (claude.com/pricing)",
        "children": [
          "Free ($0)",
          "Pro ($17-20/mo)",
          "Max (from $100/mo)",
          "Team ($20-25/seat)",
          "Enterprise self-serve ($20/seat + usage)",
          "Enterprise sales-assisted (Contact sales)",
          "Education plan",
          "API / Platform pricing"
        ]
      },
      {
        "label": "Resources / Learn",
        "children": [
          "Anthropic Academy",
          "Tutorials",
          "Use cases",
          "Engineering at Anthropic",
          "Developer docs",
          "Customers / case studies"
        ]
      },
      {
        "label": "Company (anthropic.com)",
        "children": [
          "Research",
          "News",
          "Policy",
          "Commitments (Constitution, Responsible Scaling, Transparency)",
          "Security and compliance"
        ]
      }
    ],
    "uxStrengths": [
      "Clear self-serve-to-sales continuum: Enterprise offers both a self-serve 'Get Enterprise plan' and 'Contact sales', letting smaller buyers start without a sales call while large accounts get MSAs/POs/usage commitments.",
      "Transparent, granular pricing with explicit per-seat figures ($20-25/seat Team, $20/seat + usage Enterprise) and monthly-vs-annual contrast — reduces friction versus opaque 'contact us only' enterprise models.",
      "Strong trust/compliance signaling on the Enterprise page (SOC 2-class controls, SCIM, audit logs, IP allowlisting, HIPAA-ready, 'no model training on your content by default') addresses top B2B procurement blockers up front.",
      "Deep social proof: recognizable enterprise logos (HubSpot, Figma, Slack, Notion, Cox, Vercel, Box) plus credible adoption stats (70% of Fortune 100 customers; 8 of Fortune 10) build buyer confidence.",
      "Industry- and use-case-segmented Solutions navigation (financial services, government, healthcare, legal, life sciences, etc.) lets B2B buyers self-identify a relevant path quickly.",
      "Product breadth visible (Claude Code, Cowork, Design, Security, Platform) signals a platform rather than a single chatbot — supports land-and-expand narratives.",
      "A 'Chat now' buying-agent option on the Enterprise page offers an immediate, low-commitment assistance channel."
    ],
    "uxWeaknesses": [
      "Brand/domain split between anthropic.com (research/company) and claude.com (product/pricing) creates redirect chains (anthropic.com/enterprise → claude.com/pricing/enterprise) and risks B2B buyer confusion over which entity they are contracting with.",
      "Case-study/customers page is logo-heavy but ROI-light: only ~1 quantified outcome surfaced in the overview ('20x faster' for Lovable) — quantitative proof is buried on individual pages, weakening the business-case-building stage of the funnel.",
      "Team plan capped at 5-150 seats with a hard jump to Enterprise creates a potential mid-market gap; the 150-seat ceiling and 100+-user Enterprise targeting can leave buyers unsure which plan fits.",
      "Enterprise pricing mixes a flat $20/seat with variable 'usage scales with model and task' API-rate costs, making total cost of ownership hard to estimate — a common B2B budgeting/approval blocker with no visible calculator.",
      "Multiple overlapping CTAs ('Try Claude', 'Get Enterprise plan', 'Contact sales', 'Chat now', 'Download app') compete for attention without a clear primary path for a B2B evaluator versus an individual user.",
      "No prominent, gated assets typical of B2B funnels (ROI calculator, security whitepaper, demo request distinct from 'contact sales') to capture and nurture mid-funnel leads.",
      "Product naming proliferation (Claude, Code, Cowork, Design, Security, Platform; models Mythos/Fable/Opus/Sonnet/Haiku) raises cognitive load for first-time enterprise evaluators."
    ],
    "proposedFunnel": [
      {
        "stage": "1. Discovery / Awareness",
        "action": "Buyer arrives via search, peer referral, or industry/use-case landing page (e.g. Solutions > Financial services); grasps value prop and sees Fortune 100/peer logos. KPI: qualified traffic, industry-page engagement."
      },
      {
        "stage": "2. Self-serve evaluation / Activation",
        "action": "Buyer clicks 'Try Claude' (Free) or starts a Team plan to pilot with a small group; experiences Claude Code/Cowork hands-on. KPI: signups, activated workspaces, weekly active seats in pilot."
      },
      {
        "stage": "3. Business-case validation",
        "action": "Champion consumes quantified case studies, ROI/usage data, and the security & compliance page (HIPAA-ready, SCIM, audit logs, no-training-by-default) to build internal justification. KPI: case-study/security-page views, ROI-calculator completions."
      },
      {
        "stage": "4. Enterprise consideration / Lead capture",
        "action": "Champion self-serves into Enterprise ($20/seat + usage) or submits 'Contact sales' / 'Chat now' for org-wide rollout, SSO, and procurement needs. KPI: SQLs, demo requests, self-serve Enterprise conversions."
      },
      {
        "stage": "5. Procurement & negotiation",
        "action": "Sales-assisted track: MSA, PO, usage commitments, product bundling, security review/DPA, seat sizing beyond Team's 150-cap. KPI: proposals issued, security-review pass rate, time-to-contract."
      },
      {
        "stage": "6. Signature & expansion (land-and-expand)",
        "action": "Contract signed; central billing, spend limits and SCIM provisioning go live, then expansion across departments and add-on products (Claude Code, Security). KPI: net revenue retention, seats added, $100K+/$1M+ account graduation."
      }
    ],
    "sources": [
      {
        "title": "Claude Pricing (claude.com/pricing)",
        "url": "https://claude.com/pricing"
      },
      {
        "title": "Claude Enterprise plan (claude.com/pricing/enterprise)",
        "url": "https://claude.com/pricing/enterprise"
      },
      {
        "title": "Claude homepage / product & solutions nav (claude.com)",
        "url": "https://claude.com"
      },
      {
        "title": "Anthropic homepage / company nav (anthropic.com)",
        "url": "https://www.anthropic.com"
      },
      {
        "title": "Claude customers / case studies (claude.com/customers)",
        "url": "https://claude.com/customers"
      },
      {
        "title": "Anthropic raises $30B Series G at $380B valuation (Feb 12, 2026)",
        "url": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation"
      },
      {
        "title": "Anthropic hits $30B revenue run rate after 80x growth (VentureBeat)",
        "url": "https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth"
      }
    ]
  },
  "bench": {
    "competitors": [
      {
        "name": "Claude (Claude Enterprise / Team)",
        "vendor": "Anthropic",
        "positioning": "Assistant haut de gamme orienté qualité de raisonnement, sécurité et coding. Fer de lance sur le développement logiciel (Claude Code) et les usages agentiques. Croissance la plus rapide du marché entreprise mi-2025/2026, montée en gamme via les modèles Opus/Sonnet. Disponible aussi via AWS Bedrock et Google Vertex.",
        "enterprisePricing": "Plan Enterprise sur devis (contrat annuel, plancher ~50 sièges). Restructuration 2025-2026 : suppression des tokens API groupés, prix de siège ramené vers ~20 USD/siège/mois (vs ancienne fourchette 40-200 USD) + usage API facturé séparément. Team : ~25-30 USD/siège/mois. (Chiffres rapportés par The Register/agrégateurs, à confirmer en négociation)",
        "security": "SOC 2 Type I & II, ISO 27001:2022, ISO/IEC 42001:2023 (management de l'IA, rare), HIPAA-ready avec BAA et Zero Data Retention, FedRAMP High via Claude for Government (et Bedrock GovCloud IL5+, Vertex Assured Workloads). Chiffrement TLS 1.2+ / AES-256, SCIM, audit logs, allowlisting IP. Pas d'entraînement sur les données entreprise.",
        "trafficEstimate": "claude.ai ~300-600M visites/mois (mai 2026, vs 176M en déc. 2025) ; ~824M en avril 2026 selon Similarweb (+306% en un trimestre). Part du trafic IA ~1,6% (juin 2025) en forte hausse.",
        "measured": true
      },
      {
        "name": "ChatGPT Enterprise",
        "vendor": "OpenAI",
        "positioning": "Leader historique du marché grand public et entreprise, écosystème le plus large (GPTs, Assistants, Sora, intégrations). Positionnement généraliste tout-terrain avec la plus forte notoriété de marque, mais érosion de part de marché face à Claude et Gemini en 2025-2026.",
        "enterprisePricing": "Sur devis, ~45-75 USD/utilisateur/mois (souvent ~60 USD), minimum ~150 sièges, engagement annuel (plancher ~108k USD/an). Pas de tarif public fixe.",
        "security": "SOC 2 Type II, chiffrement AES-256 au repos / TLS 1.2+ en transit, Enterprise Key Management (EKM clés client), pas d'entraînement sur les données client, SSO/SCIM, contrôles de rétention.",
        "trafficEstimate": "chatgpt.com ~5,84 Md visites/mois (août 2025), ~69% du trafic des outils IA ; part tombée à ~52-55% mi-2026 mais reste de loin le plus gros volume.",
        "measured": true
      },
      {
        "name": "Gemini Enterprise (Workspace + Gemini)",
        "vendor": "Google",
        "positioning": "IA intégrée nativement à Google Workspace (Gmail, Docs, Sheets, Meet, NotebookLM). Atout : contexte long, multimodalité, ancrage dans la suite bureautique Google. Steering des grands comptes (>300 users) vers les tiers Enterprise pour sécurité/résidence des données.",
        "enterprisePricing": "Depuis janv. 2025, Gemini inclus dans les abonnements Workspace (hausse base ~15-20%). 2026 (annuel) : Starter 9,20 / Standard 18,40 / Plus 28,70 USD/user/mois ; tiers Enterprise sur devis avec contrôles avancés et résidence des données.",
        "security": "Conformité Google Cloud étendue (SOC 1/2/3, ISO 27001/17/18, ISO 42001, HIPAA, FedRAMP High via Vertex/Assured Workloads), résidence des données régionale, DLP, contrôles admin Workspace. Pas d'entraînement sur les données entreprise.",
        "trafficEstimate": "gemini.google.com ~1,35 Md visites/mois (nov. 2025, +137% sur l'année) ; #2 de la catégorie chatbots IA. Estimé ~1,1 Md avr.-sept. 2025 (Similarweb).",
        "measured": true
      },
      {
        "name": "Le Chat Enterprise",
        "vendor": "Mistral AI",
        "positioning": "Challenger européen, positionnement souveraineté et confidentialité. Architecture split control-plane/data-plane permettant l'exécution dans l'environnement du client, déploiement on-prem / cloud privé, résidence UE. Cible privilégiée : organisations européennes régulées (GDPR), secteur public, souveraineté.",
        "enterprisePricing": "Le Chat Enterprise (lancé mai 2025) sur devis, modèle par siège, options on-prem. Tiers grand public en référence : Pro 14,99 EUR/mois ; Team à partir de 19,99-24,99 USD/user/mois.",
        "security": "Résidence des données UE, déploiement on-premises / cloud privé pour conformité GDPR et souveraineté, contrôle des données par le client. Atout structurel difficile à répliquer par les hyperscalers US. (Certifications formelles moins documentées publiquement que les concurrents US.)",
        "trafficEstimate": "mistral.ai ~10,8M visites desktop (mars 2026, +21,5% MoM), ~5M utilisateurs, ~450k clients / ~1031 grands comptes (juil. 2025). Trafic à ~41% France, forte concentration UE. Bien plus petit que les acteurs US.",
        "measured": true
      },
      {
        "name": "Microsoft 365 Copilot",
        "vendor": "Microsoft (modèles OpenAI + maison)",
        "positioning": "IA intégrée à l'écosystème Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams) et Graph. Atout : distribution massive via base installée M365, ancrage profond dans le poste de travail entreprise. Positionnement productivité bureautique plutôt que chatbot pur.",
        "enterprisePricing": "30 USD/user/mois (add-on à une licence M365 éligible, soit 360 USD/user/an, en plus de la base). Copilot Business ~21 USD/user/mois pour PME. Copilot Chat de base inclus sans surcoût pour les utilisateurs Entra ID éligibles.",
        "security": "Hérite de la conformité Microsoft 365 / Azure (SOC 1/2/3, ISO 27001/17/18/42001, HIPAA, FedRAMP High, EU Data Boundary). Respect des permissions Graph existantes, pas d'entraînement sur les données tenant, Purview pour DLP/gouvernance.",
        "trafficEstimate": "Pas de trafic web autonome comparable (intégré aux apps M365). Adoption mesurée en sièges/licences plutôt qu'en visites ; déploiement via base installée M365 de centaines de millions de postes.",
        "measured": false
      }
    ],
    "radarDimensions": [
      "Securite/Conformite",
      "Qualite raisonnement",
      "Prix (rapport valeur, 10=meilleur)",
      "Ecosysteme/Integrations",
      "Souverainete/Residence donnees",
      "Coding/Agentique"
    ],
    "radarScores": [
      {
        "name": "Claude (Anthropic)",
        "scores": [
          9,
          9,
          7,
          6,
          6,
          10
        ]
      },
      {
        "name": "ChatGPT Enterprise (OpenAI)",
        "scores": [
          8,
          8,
          6,
          9,
          5,
          8
        ]
      },
      {
        "name": "Gemini Enterprise (Google)",
        "scores": [
          9,
          8,
          8,
          9,
          6,
          7
        ]
      },
      {
        "name": "Le Chat Enterprise (Mistral)",
        "scores": [
          7,
          7,
          8,
          5,
          10,
          6
        ]
      },
      {
        "name": "Microsoft 365 Copilot",
        "scores": [
          9,
          7,
          6,
          10,
          6,
          6
        ]
      }
    ],
    "claudeAdvantages": [
      "Leadership reconnu sur le coding et les usages agentiques (Claude Code, Opus/Sonnet) - meilleur score coding du panel, atout clé pour les organisations tournees SDLC/dev.",
      "Qualite de raisonnement et fiabilite de premier plan, avec une montee en gamme constante des modeles mi-2025/2026.",
      "Posture securite/conformite la plus complete du panel pur-player IA : SOC 2 I&II, ISO 27001, ISO 42001 (gouvernance IA, rare), HIPAA-ready + BAA + Zero Data Retention, FedRAMP High via Claude for Government.",
      "Croissance entreprise la plus rapide du marche (claude.ai +306% en un trimestre debut 2026), signal d'adoption et de momentum fort.",
      "Pricing Enterprise simplifie et plus competitif apres 2025-2026 (siege ~20 USD vs ChatGPT ~60 USD), avec deploiement multi-cloud (Bedrock, Vertex) reduisant le lock-in fournisseur.",
      "Accent affiche sur la securite par conception (Constitutional AI, refus calibres) et l'absence d'entrainement sur les donnees entreprise - argument de confiance pour les secteurs regules."
    ],
    "sources": [
      {
        "title": "Anthropic ejects bundled tokens from enterprise seat deal - The Register",
        "url": "https://www.theregister.com/software/2026/04/16/anthropic-ejects-bundled-tokens-from-enterprise-seat-deal/5226555"
      },
      {
        "title": "Claude Enterprise Pricing in 2026 - Runbear",
        "url": "https://runbear.io/posts/claude-enterprise-pricing-mid-market"
      },
      {
        "title": "Plans & Pricing - Claude by Anthropic",
        "url": "https://claude.com/pricing"
      },
      {
        "title": "What Certifications has Anthropic obtained? - Anthropic Privacy Center",
        "url": "https://privacy.claude.com/en/articles/10015870-what-certifications-has-anthropic-obtained"
      },
      {
        "title": "Public Sector FAQs - Claude Help Center",
        "url": "https://support.claude.com/en/articles/13756069-public-sector-faqs"
      },
      {
        "title": "ChatGPT Pricing - OpenAI",
        "url": "https://openai.com/business/chatgpt-pricing/"
      },
      {
        "title": "Introducing ChatGPT Enterprise - OpenAI",
        "url": "https://openai.com/index/introducing-chatgpt-enterprise/"
      },
      {
        "title": "ChatGPT Enterprise Pricing Guide - CloudEagle",
        "url": "https://www.cloudeagle.ai/blogs/blog-chatgpt-pricing-guide"
      },
      {
        "title": "Compare Flexible Pricing Plan Options - Google Workspace",
        "url": "https://workspace.google.com/pricing"
      },
      {
        "title": "Gemini for Workspace pricing 2026 - eesel AI",
        "url": "https://www.eesel.ai/blog/gemini-workspace-pricing"
      },
      {
        "title": "Introducing Le Chat Enterprise - Mistral AI",
        "url": "https://mistral.ai/news/le-chat-enterprise/"
      },
      {
        "title": "Mistral Pioneers Sovereign AI in Europe - AI Business",
        "url": "https://aibusiness.com/foundation-models/mistral-pioneers-sovereign-ai-in-europe"
      },
      {
        "title": "Mistral AI Statistics 2026 - getPanto",
        "url": "https://www.getpanto.ai/blog/mistral-ai-statistics"
      },
      {
        "title": "Microsoft 365 Copilot Plans and Pricing (Enterprise) - Microsoft",
        "url": "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/enterprise"
      },
      {
        "title": "Microsoft Copilot pricing 2026: Business vs Enterprise - eesel AI",
        "url": "https://www.eesel.ai/blog/copilot-pricing"
      },
      {
        "title": "ChatGPT drops to 52.7% as Claude triples its AI traffic share - PPC Land",
        "url": "https://ppc.land/chatgpt-drops-to-52-7-as-claude-triples-its-ai-traffic-share/"
      },
      {
        "title": "Top AI Tools: Most Used Gen-AI in August 2025 - Similarweb",
        "url": "https://www.similarweb.com/blog/marketing/seo/most-used-ai/"
      },
      {
        "title": "claude.ai Traffic Analytics, Ranking & Audience - Similarweb",
        "url": "https://www.similarweb.com/website/claude.ai/"
      },
      {
        "title": "gemini.google.com Traffic Analytics - Similarweb",
        "url": "https://www.similarweb.com/website/gemini.google.com/"
      },
      {
        "title": "Anthropic Trust Center",
        "url": "https://trust.anthropic.com/resources"
      }
    ]
  },
  "personas": {
    "personas": [
      {
        "role": "DSI / CISO",
        "title": "Directeur des Systèmes d'Information / Responsable Sécurité (RSSI)",
        "context": "Garant de la sécurité, de la conformité et de la souveraineté des données dans une entreprise francophone (souvent ETI/grand compte ou secteur régulé : banque, assurance, santé, secteur public). Doit autoriser le déploiement de l'IA générative à l'échelle tout en maîtrisant le shadow IT (collaborateurs qui utilisent déjà des LLM grand public hors contrôle). Évalue les certifications, la résidence des données et la politique d'entraînement avant toute signature.",
        "pains": [
          "Risque de fuite de données : par défaut, les LLM grand public peuvent réutiliser les conversations ; il faut une garantie contractuelle de non-entraînement et idéalement une option Zero Data Retention. (measured=false : enjeu qualitatif documenté, pas un chiffre)",
          "Shadow IT : les collaborateurs utilisent déjà des outils IA non validés, créant une surface de risque non gouvernée. (measured=false)",
          "Exigence de certifications auditables (SOC 2 Type II, ISO 27001:2022, ISO/IEC 42001:2023) pour passer les comités sécurité et les audits clients. (measured=true)",
          "Résidence des données en Europe : Claude.ai grand public n'offre pas la résidence EU par défaut ; la résidence EU n'existe que sur l'API multi-région depuis août 2025. (measured=true)",
          "Traçabilité : besoin de logs d'audit exportables vers le SIEM (Splunk, Datadog, Elastic) ; rétention par défaut limitée à 30 jours dans la console admin. (measured=true)"
        ],
        "gains": [
          "Engagement contractuel : pas d'entraînement sur les données client par défaut sous les conditions commerciales, avec addendum Zero Data Retention possible (pas de persistance après la réponse). (measured=true)",
          "Triple certification SOC 2 Type II + ISO 27001:2022 + ISO/IEC 42001:2023 (première norme de management de l'IA) consultable via le Trust Portal sous NDA. (measured=true)",
          "Contrôles d'entreprise natifs : SSO, SCIM (provisioning/deprovisioning automatisé via Okta/Azure AD/Google Workspace), rôles RBAC, logs d'audit. (measured=true)",
          "Reprise en main du shadow IT : offre officielle validée qui remplace les usages sauvages par un canal gouverné. (measured=false)",
          "Compliance API pour exporter programmatiquement logs d'activité, historiques et contenus de fichiers vers les outils de surveillance. (measured=true)"
        ],
        "claudeHook": "Le triptyque souveraineté/conformité : résidence des données EU sur l'API (depuis août 2025), non-entraînement par défaut + option Zero Data Retention, et triple certification SOC 2 Type II / ISO 27001 / ISO 42001 — le seul argument qui débloque un comité sécurité francophone et transforme le shadow IT en canal gouverné avec SSO/SCIM et export SIEM.",
        "priority": "haute"
      },
      {
        "role": "CTO / Head of Engineering",
        "title": "Directeur Technique / Responsable Ingénierie",
        "context": "Pilote la productivité des équipes de développement et l'adoption d'outils d'ingénierie. Évalue Claude Code comme assistant agentique (exécution de code, pas seulement suggestion). Doit justifier le ROI face à des coûts d'API variables et arbitrer entre vélocité et qualité/dette technique. Mi-2025/2026, observe l'essor de Claude Code comme outil de référence.",
        "pains": [
          "Pression sur la vélocité : nécessité de livrer plus vite sans gonfler les effectifs, dans un marché tendu sur les profils seniors. (measured=false)",
          "Risque qualité/dette technique : le code généré par IA peut être inférieur en qualité ; en interne Anthropic estimait le code Claude encore en dessous de l'humain fin 2025, ~à parité ensuite. (measured=true)",
          "Coûts d'API variables et difficiles à prévoir : le siège Enterprise démarre à 20 $/poste/mois mais l'usage est facturé séparément aux tarifs API standard. (measured=true)",
          "Métriques trompeuses : les lignes de code mesurent la quantité, pas la valeur — le 8× lignes/ingénieur/jour T2 2026 surestime le gain réel. (measured=true)",
          "Sécurisation du code source : l'usage d'un assistant agentique sur le dépôt impose des garanties de non-rétention et de gouvernance. (measured=false)"
        ],
        "gains": [
          "Plus de 80% des lignes fusionnées en production chez Anthropic sont attribuables à Claude (les dirigeants évoquent 90%+ tout code confondu, scripts inclus). (measured=true)",
          "Multiplication de la production : l'ingénieur type fusionnait 8× plus de code par jour au T2 2026 qu'en 2024 (à pondérer pour la qualité). (measured=true)",
          "Bascule du paradigme : passage de la suggestion (copier-coller) à l'exécution autonome de code sur des horizons de temps longs depuis 2025. (measured=true)",
          "Retour sur l'expertise : les ingénieurs expérimentés tirent un bénéfice persistant et croissant du coding agentique. (measured=true)",
          "Gouvernance dev intégrée : SSO/SCIM, RBAC et logs d'audit applicables aux usages Claude Code. (measured=true)"
        ],
        "claudeHook": "Claude Code en preuve par l'exemple : chez Anthropic, plus de 80% des lignes fusionnées en production sont écrites par Claude et l'ingénieur type produit 8× plus de code/jour qu'en 2024 — un saut de productivité documenté en interne, encadré par une gouvernance d'entreprise (SSO/SCIM/audit) qui rassure sur la sécurisation du dépôt.",
        "priority": "haute"
      },
      {
        "role": "Directeur des Opérations / Métier",
        "title": "Directeur des Opérations / Responsable Métier (COO / Business)",
        "context": "Cherche des gains de productivité mesurables sur les fonctions support et métier : rédaction, traitement documentaire, e-mails, recherche, automatisation des tâches répétitives. Raisonne en heures gagnées par collaborateur et en taux d'adoption. Sponsor business du déploiement à l'échelle, au-delà de l'IT.",
        "pains": [
          "Volume de tâches documentaires chronophages (rédaction, synthèse, e-mails) qui érode le temps à valeur ajoutée. (measured=false)",
          "Adoption inégale : malgré le potentiel, l'écart d'adoption reste fort — Goldman Sachs note que ~80% des entreprises n'utilisaient pas encore l'IA générativement à grande échelle début 2026. (measured=true)",
          "Difficulté à mesurer et prouver le ROI en heures réellement économisées pour justifier l'investissement. (measured=false)",
          "Besoin de standardiser un outil unique plutôt que de multiplier des abonnements disparates. (measured=false)"
        ],
        "gains": [
          "Gain de temps documenté : ~40 à 60 minutes par jour économisées par collaborateur disposant d'un compte IA d'entreprise. (measured=true)",
          "Sur l'e-mail : 80% des travailleurs équipés passaient 2 heures de moins par semaine sur leur messagerie en étude de terrain ; -25% de temps de traitement e-mail. (measured=true)",
          "Débit de tâches quotidiennes réalistes en hausse de 66% avec les outils IA en étude contrôlée. (measured=true)",
          "Power users : 27% des utilisateurs économisent plus de 9 heures/semaine. (measured=true)",
          "Estimation macro (Fed) : ~5,4% des heures de travail économisées, soit ~2,2 h/semaine en moyenne. (measured=true)"
        ],
        "claudeHook": "Le ROI en heures : 40 à 60 minutes gagnées par jour et par collaborateur, jusqu'à 9h+/semaine pour les power users, et -2h/semaine sur l'e-mail — des chiffres terrain qui transforment l'automatisation documentaire en gain mesurable, avec un déploiement standardisé sur un outil unique gouverné.",
        "priority": "moyenne"
      },
      {
        "role": "Directeur Juridique / Conformité",
        "title": "Directeur Juridique / Directeur Conformité (DPO inclus)",
        "context": "Responsable de la conformité RGPD, de la mise en conformité avec l'AI Act et de la protection de la confidentialité. En contexte francophone, dialogue avec la CNIL et anticipe les échéances réglementaires européennes de 2025-2027. Doit valider les bases légales, les DPA et l'exposition au risque de sanction avant tout déploiement IA.",
        "pains": [
          "Risque de sanction RGPD/CNIL : en 2025 la CNIL a rendu 83 sanctions pour un total inédit de près de 487 M€ (323 contrôles, 259 décisions). (measured=true)",
          "Sanctions AI Act applicables depuis le 2 août 2026 : jusqu'à 35 M€ ou 7% du CA mondial (pratiques interdites), 15 M€ ou 3% (autres obligations). (measured=true)",
          "Échéancier serré : pratiques interdites + littératie IA depuis le 2 février 2025 ; obligations GPAI depuis le 2 août 2025 ; pleine applicabilité le 2 août 2026. (measured=true)",
          "Application du RGPD dès qu'un usage IA traite des données personnelles, avec exigences renforcées en domaines à risque (emploi, biométrie). (measured=true)",
          "Besoin de DPA solides, de garanties de confidentialité et de non-réutilisation des données pour fonder la conformité. (measured=false)"
        ],
        "gains": [
          "Cadre contractuel conforme : DPA, non-entraînement par défaut et option Zero Data Retention répondant aux exigences RGPD de minimisation et de finalité. (measured=true)",
          "Certification ISO/IEC 42001:2023 (management de l'IA) directement alignée avec la logique de gouvernance attendue par l'AI Act. (measured=true)",
          "Résidence des données EU disponible sur l'API (depuis août 2025) pour fonder les transferts. (measured=true)",
          "Alignement avec les recommandations CNIL du 22 juillet 2025 sur l'application du RGPD au développement des systèmes d'IA. (measured=true)",
          "Traçabilité documentaire (logs d'audit, Compliance API) facilitant les obligations de transparence et de documentation. (measured=true)"
        ],
        "claudeHook": "L'assurance anti-sanction : avec des amendes CNIL atteignant ~487 M€ en 2025 et un AI Act sanctionnable depuis août 2026 (jusqu'à 7% du CA mondial), Claude Enterprise apporte DPA + Zero Data Retention + non-entraînement par défaut + ISO 42001 + résidence EU — l'arsenal contractuel et de certification qui permet au juridique de fonder la conformité et de signer.",
        "priority": "moyenne"
      }
    ],
    "sources": [
      {
        "title": "Claude Enterprise Compliance: BAA, SOC 2, GDPR and Data Policy (2026) — Tygart Media",
        "url": "https://tygartmedia.com/claude-enterprise-compliance/"
      },
      {
        "title": "Claude: enterprise security configurations and deployment controls explained — DataStudios",
        "url": "https://www.datastudios.org/post/claude-enterprise-security-configurations-and-deployment-controls-explained"
      },
      {
        "title": "What is the Enterprise plan? — Claude Help Center",
        "url": "https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan"
      },
      {
        "title": "Purchase and manage seats on Enterprise plans — Claude Help Center",
        "url": "https://support.claude.com/en/articles/13393991-purchase-and-manage-seats-on-enterprise-plans"
      },
      {
        "title": "Claude Enterprise: GDPR, DPA & EU Data Residency — Compound Law",
        "url": "https://compound.law/en-DE/tools/claude-enterprise/"
      },
      {
        "title": "How AI Is Transforming Work at Anthropic — Anthropic",
        "url": "https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic"
      },
      {
        "title": "Agentic coding and persistent returns to expertise — Anthropic",
        "url": "https://www.anthropic.com/research/claude-code-expertise"
      },
      {
        "title": "Anthropic says 80% of its new production code is now authored by Claude — VentureBeat",
        "url": "https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up"
      },
      {
        "title": "AI Act — Shaping Europe's digital future (European Commission)",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
      },
      {
        "title": "Latest wave of obligations under the EU AI Act take effect — DLA Piper",
        "url": "https://www.dlapiper.com/en-us/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect"
      },
      {
        "title": "Implementation Timeline — EU Artificial Intelligence Act",
        "url": "https://artificialintelligenceact.eu/implementation-timeline/"
      },
      {
        "title": "Rapport annuel : le bilan et les actions marquantes de la CNIL en 2025 — CNIL",
        "url": "https://www.cnil.fr/fr/rapport-annuel-2025"
      },
      {
        "title": "IA et RGPD : la CNIL publie ses nouvelles recommandations (22 juillet 2025) — CNIL",
        "url": "https://www.cnil.fr/fr/ia-et-rgpd-la-cnil-publie-ses-nouvelles-recommandations-pour-accompagner-une-innovation-responsable"
      },
      {
        "title": "AI Productivity Statistics 2025: Gartner, Fed & Real-World Data — Worklytics",
        "url": "https://www.worklytics.co/resources/generative-ai-workforce-productivity-impact-2025-gartner-fed-data"
      },
      {
        "title": "AI is saving workers up to an hour a day — Fortune / Goldman Sachs",
        "url": "https://fortune.com/2026/04/01/ai-worker-productivity-adoption-goldman-sachs-saves-60-minutes-per-day/"
      },
      {
        "title": "Generative AI, Productivity and the Future of Work — St. Louis Fed",
        "url": "https://www.stlouisfed.org/open-vault/2025/oct/generative-ai-productivity-future-work"
      },
      {
        "title": "Shifting Work Patterns with Generative AI (Microsoft, arXiv)",
        "url": "https://arxiv.org/html/2504.11436v4"
      }
    ]
  },
  "strategy": {
    "positioning": {
      "tagline": "L'IA d'entreprise qui passe les comités sécurité — et le 2 août 2026.",
      "statement": "Claude Enterprise est l'assistant IA générative de référence pour les organisations francophones régulées (banque, assurance, santé, secteur public, industrie). Là où 95% des pilotes IA échouent faute de gouvernance et de ROI mesurable (MIT NANDA), Claude transforme le shadow IT en canal gouverné : triple certification SOC 2 Type II / ISO 27001:2022 / ISO/IEC 42001:2023 (norme de management de l'IA, rare sur le marché), non-entraînement par défaut + option Zero Data Retention, résidence des données EU sur l'API, et la meilleure qualité de raisonnement et de coding du panel (Claude Code, score 10/10). Nous ne vendons pas un chatbot de plus : nous vendons la conformité AI Act, le gain de 40-60 min/jour/collaborateur, et un déploiement à l'échelle qui réussit (l'achat à un éditeur spécialisé réussit ~67% du temps vs ~1/3 pour le build interne).",
      "pillars": [
        "Souveraineté & conformité by design : SOC 2 II + ISO 27001 + ISO 42001 + résidence EU + Zero Data Retention + non-entraînement par défaut — l'arsenal qui débloque RSSI, DPO et juridique face à l'AI Act (sanctions jusqu'à 7% du CA mondial dès le 2 août 2026) et à la CNIL (487 M€ de sanctions en 2025).",
        "Le meilleur sur le coding et l'agentique : Claude Code, leader reconnu (54% de part sur le coding en entreprise, 46% 'most loved' vs Cursor 19% / Copilot 9%). Chez Anthropic, 80%+ des lignes en production sont écrites par Claude — la preuve par l'exemple pour les directions techniques francophones.",
        "ROI prouvé et mesurable : 40-60 min/jour économisées par collaborateur, jusqu'à 9h+/semaine pour les power users, -2h/semaine sur l'e-mail. Un déploiement standardisé sur un outil unique gouverné, pas un Nème abonnement.",
        "Land-and-expand sans lock-in : siège à ~20 USD (vs ~60 USD ChatGPT Enterprise), self-serve ou sales-assisted, disponible aussi via AWS Bedrock et Google Vertex — flexibilité multi-cloud et adoption progressive du pilote au déploiement org-wide."
      ]
    },
    "funnel": [
      {
        "stage": "1. Awareness / Découverte",
        "goal": "Capter le trafic qualifié des décideurs francophones (DSI, CTO, DPO) sur les requêtes de catégorie et de conformité, et installer la marque Claude Enterprise sur le marché FR.",
        "tactics": [
          "SEO/contenu cluster 'IA conforme RGPD / AI Act' et 'IA souveraine EU' (cluster aujourd'hui vide sur la landing — gap majeur identifié)",
          "LinkedIn Ads thought-leadership ciblant DSI/CISO/DPO d'ETI et grands comptes FR/BE/CH/LU",
          "Pages industrie localisées (services financiers, santé, secteur public, juridique) avec preuves chiffrées",
          "RP & présence sur events tech francophones (Big Data & AI Paris, AI Act readiness)"
        ],
        "kpi": "Trafic organique FR +150% en 6 mois ; CPM/CTR LinkedIn ; part de SERP sur 'Claude Enterprise', 'assistant IA conforme RGPD'"
      },
      {
        "stage": "2. Activation / Évaluation self-serve",
        "goal": "Convertir l'intérêt en essai concret via pilote Team ou compte Free, avec démonstration hands-on de Claude Code et Cowork.",
        "tactics": [
          "Offre pilote Team (5-150 sièges) sans appel commercial, onboarding guidé",
          "Webinars de démo en français par cas d'usage (coding, doc métier, conformité)",
          "Calculateur de ROI en heures gagnées (asset manquant identifié dans l'audit UX)",
          "Sandbox/POC encadré pour les équipes dev sur Claude Code"
        ],
        "kpi": "Nb de pilotes Team activés ; sièges actifs hebdo (WAU) en pilote ; taux d'activation des workspaces > 40% à 2,5 semaines (réf. Smartsheet 49%)"
      },
      {
        "stage": "3. Business-case / Validation",
        "goal": "Armer le champion interne pour passer les comités sécurité et financiers avec preuves chiffrées et documents de conformité.",
        "tactics": [
          "Trust Portal sous NDA (SOC 2 II, ISO 27001, ISO 42001, DPA, ZDR)",
          "Études de cas chiffrées localisées (Smartsheet 3x code/49% adoption, Lyft 87%)",
          "Security whitepaper + kit AI Act readiness (asset gated pour nurturing mid-funnel)",
          "Sessions de cadrage RSSI/DPO + réponses aux questionnaires sécurité standardisées"
        ],
        "kpi": "Vues page sécurité/case studies ; complétions calculateur ROI ; taux de passage en comité ; MQL→SQL"
      },
      {
        "stage": "4. Consideration / Lead capture",
        "goal": "Capter et qualifier les leads enterprise via ABM ciblé et conversion vers Enterprise self-serve ou Contact sales.",
        "tactics": [
          "ABM 1-to-few sur comptes cibles (Fortune-FR, CAC40/SBF120, ETI régulées)",
          "Demo request distincte de 'Contact sales' (parcours évaluateur B2B clarifié)",
          "Chat now / buying agent sur la page Enterprise",
          "Comparatifs Claude vs ChatGPT vs Copilot Enterprise (contenu BOFU manquant)"
        ],
        "kpi": "SQLs générés ; demos réservées ; taux de conversion Enterprise self-serve ; pipeline ABM €"
      },
      {
        "stage": "5. Procurement & négociation",
        "goal": "Accélérer la contractualisation (MSA, DPA, revue sécurité, dimensionnement sièges) et lever les blocages d'achat.",
        "tactics": [
          "Track sales-assisted : MSA/PO, engagements d'usage, bundling produits",
          "Revue sécurité accélérée + DPA pré-validé CNIL-friendly",
          "TCO transparent (siège fixe + projection usage API) pour débloquer le budget",
          "Accompagnement par ESN partenaire pour l'intégration aux workflows"
        ],
        "kpi": "Propositions émises ; taux de réussite revue sécurité ; time-to-contract (objectif < 60j) ; ACV moyen"
      },
      {
        "stage": "6. Onboarding & Expansion (land-and-expand)",
        "goal": "Déployer org-wide, garantir l'adoption et générer l'expansion vers add-ons (Claude Code, Security) et nouveaux départements.",
        "tactics": [
          "Provisioning SSO/SCIM, spend limits, billing centralisé",
          "Programme d'enablement / champions internes + formation littératie IA (obligation AI Act)",
          "Suivi d'adoption et QBR avec métriques d'usage",
          "Cross-sell Claude Code / Cowork / Security et expansion départementale"
        ],
        "kpi": "Net Revenue Retention > 120% ; sièges ajoutés ; graduation comptes 100k$+/1M$+ ; DAU/WAU"
      }
    ],
    "mediaPlan": [
      {
        "channel": "ABM (Account-Based Marketing 1-to-few)",
        "role": "Cœur de la stratégie B2B grands comptes : ciblage nominatif des comptes régulés (banque, assurance, santé, public, ETI) avec contenu personnalisé et séquences multicanal. Le marché est à 76% achat vs build, et l'achat à un éditeur spécialisé réussit ~67% du temps — l'ABM capitalise sur ce momentum.",
        "budgetPct": 28,
        "expectedOutcome": "Pipeline qualifié sur 80-120 comptes cibles, ACV élevé, raccourcissement du cycle via alignement sales/marketing."
      },
      {
        "channel": "LinkedIn Ads",
        "role": "Ciblage chirurgical des personas (DSI/CISO, CTO, DPO/juridique, COO) dans l'espace francophone FR/BE/CH/LU. Thought-leadership conformité AI Act + retargeting des visiteurs landing.",
        "budgetPct": 22,
        "expectedOutcome": "Notoriété sur cibles décisionnelles, MQL mid-funnel, alimentation du retargeting ABM."
      },
      {
        "channel": "SEO / Contenu",
        "role": "Combler les gaps SEO majeurs identifiés : cluster RGPD/AI Act/IA souveraine (aujourd'hui inexistant), contenu comparatif BOFU (vs ChatGPT/Copilot), pages gouvernance LLM, pages industrie localisées FR. Actif durable à coût marginal décroissant.",
        "budgetPct": 20,
        "expectedOutcome": "Croissance du trafic organique qualifié FR, captation de l'intent commercial et comparatif, baisse du CAC sur la durée."
      },
      {
        "channel": "Events / Webinars",
        "role": "Démos en français par cas d'usage et présence sur events tech FR (Big Data & AI Paris, salons sectoriels). Le format webinar nourrit l'activation et la validation du business-case.",
        "budgetPct": 16,
        "expectedOutcome": "Leads chauds, démos qualifiées, preuve produit hands-on, contenu réutilisable evergreen."
      },
      {
        "channel": "Partenariats Cloud / ESN",
        "role": "Co-vente via AWS (Bedrock) et Google Cloud (Vertex) + intégrateurs/ESN francophones (Sfeir, Capgemini, Sopra, Accenture) pour l'intégration aux workflows — frein n°1 du passage à l'échelle. Réduit le risque 'pilot purgatory'.",
        "budgetPct": 14,
        "expectedOutcome": "Accès aux budgets cloud existants, crédibilité d'intégration, déploiements qui passent à l'échelle, co-marketing."
      }
    ],
    "seoPlan": [
      "Consolider le split de domaine anthropic.com vs claude.com : canonicaliser, réduire les chaînes de redirection 301 (/enterprise → /pricing → /pricing/enterprise) qui diluent le link-equity et brouillent la requête de marque 'Claude Enterprise'.",
      "Créer le cluster manquant 'IA conforme RGPD / AI Act / IA souveraine EU' : page pilier + pages résidence des données EU, DPA, Zero Data Retention, alignement recommandations CNIL du 22/07/2025 — cluster aujourd'hui totalement absent de la landing alors que l'intent FR est fort.",
      "Nommer explicitement les certifications on-page (SOC 2 Type II, ISO 27001:2022, ISO/IEC 42001:2023) au lieu de les renvoyer au seul Trust Center, pour ranker sur 'Claude SOC 2', 'Anthropic ISO 27001 enterprise', 'IA certifiée ISO 42001'.",
      "Produire le contenu comparatif BOFU absent : 'Claude vs ChatGPT Enterprise', 'Claude vs Microsoft Copilot', 'Claude vs Le Chat Mistral' — trafic d'évaluation tardive à fort volume, aujourd'hui laissé entièrement aux tiers.",
      "Réécrire les H2/H3 abstraits ('Frontier AI for every employee') en headings keyword-led : 'Enterprise LLM sécurisé', 'AI governance / gouvernance LLM', 'AI coding assistant enterprise / Claude Code enterprise', 'IA entreprise sécurisée'.",
      "Ajouter des meta descriptions explicites sur la landing produit (aujourd'hui absente, risque de snippet auto-généré) et exploiter le FAQ schema pour les featured snippets / People-Also-Ask.",
      "Capitaliser sur l'EEAT : remonter les preuves chiffrées (Smartsheet 3x code / 49% adoption en 2,5 semaines / +31% PR, Lyft 87%, 70% du Fortune 100 clients) et publier des pages industrie localisées FR (services financiers, santé, secteur public, juridique).",
      "Optimiser la performance technique pour Core Web Vitals : marquer le poster hero en fetchpriority=high (LCP), alléger la stack GSAP/Swiper et différer Amplitude session-replay + Intercom (risque INP), activer le cache edge du HTML (cf-cache-status actuellement DYNAMIC)."
    ],
    "kpis": [
      {
        "name": "Pipeline généré (ABM + inbound)",
        "target": "12 M€ de pipeline qualifié",
        "horizon": "12 mois"
      },
      {
        "name": "SQLs Enterprise (comptes régulés FR/BE/CH/LU)",
        "target": "350 SQLs",
        "horizon": "12 mois"
      },
      {
        "name": "Comptes Enterprise signés",
        "target": "60 comptes (dont 15 grands comptes >250 sièges)",
        "horizon": "12 mois"
      },
      {
        "name": "Taux d'activation pilote (workspaces actifs à 2,5 semaines)",
        "target": "≥ 45% (réf. Smartsheet 49%)",
        "horizon": "90 jours par cohorte"
      },
      {
        "name": "Time-to-contract (signature après SQL)",
        "target": "< 60 jours médian",
        "horizon": "Continu (mesuré T+6 mois)"
      },
      {
        "name": "Net Revenue Retention (land-and-expand)",
        "target": "> 120%",
        "horizon": "12 mois post-signature"
      },
      {
        "name": "Trafic organique qualifié FR",
        "target": "+150%",
        "horizon": "6 mois"
      },
      {
        "name": "CAC / ACV ratio",
        "target": "CAC < 1/3 de l'ACV année 1",
        "horizon": "12 mois"
      }
    ],
    "budget": {
      "total": "2 400 000 € sur 12 mois",
      "breakdown": [
        {
          "item": "ABM (plateforme, data, contenu personnalisé, SDR dédiés)",
          "amount": "672 000 €",
          "pct": 28
        },
        {
          "item": "LinkedIn Ads (média + création)",
          "amount": "528 000 €",
          "pct": 22
        },
        {
          "item": "SEO / Contenu (production éditoriale, technique, traduction FR)",
          "amount": "480 000 €",
          "pct": 20
        },
        {
          "item": "Events / Webinars (salons FR, production webinars, démos)",
          "amount": "384 000 €",
          "pct": 16
        },
        {
          "item": "Partenariats Cloud / ESN (co-marketing, enablement, MDF)",
          "amount": "336 000 €",
          "pct": 14
        }
      ]
    },
    "roadmap90j": [
      {
        "period": "Jours 1-30 : Fondations & positionnement",
        "milestones": [
          "Finaliser le positionnement FR (tagline + piliers) et le messaging par persona (DSI/CISO, CTO, DPO, COO)",
          "Corrections SEO techniques prioritaires : canonicalisation domaine, certifications nommées on-page, meta descriptions, fetchpriority hero",
          "Lancer le cluster contenu 'IA conforme RGPD / AI Act / souveraineté EU' (page pilier + 3 pages)",
          "Identifier et segmenter la liste ABM (80-120 comptes cibles régulés FR/BE/CH/LU)",
          "Préparer le kit business-case : Trust Portal NDA, calculateur ROI, security whitepaper, kit AI Act readiness",
          "Activer les partenariats cloud (AWS Bedrock / Google Vertex) et 1-2 ESN francophones pilotes"
        ]
      },
      {
        "period": "Jours 31-60 : Lancement acquisition",
        "milestones": [
          "Lancer les campagnes LinkedIn Ads (thought-leadership conformité + retargeting)",
          "Démarrer les séquences ABM 1-to-few sur les comptes prioritaires",
          "Programmer la série de webinars FR par cas d'usage (coding, doc métier, conformité)",
          "Publier le contenu comparatif BOFU (vs ChatGPT / Copilot / Le Chat)",
          "Ouvrir les pilotes Team avec onboarding guidé sur les premiers comptes",
          "Mettre en place le tracking funnel et le dashboard KPI (pipeline, MQL/SQL, activation)"
        ]
      },
      {
        "period": "Jours 61-90 : Conversion & optimisation",
        "milestones": [
          "Faire passer les premiers business-cases en comité sécurité/financier (Trust Portal + DPA)",
          "Convertir les premiers pilotes en Enterprise (self-serve + sales-assisted)",
          "Accélérer les revues sécurité et négociations avec DPA pré-validé",
          "Optimiser les campagnes sur la donnée (CPL, taux de conversion, comptes engagés)",
          "Lancer le programme d'enablement / champions internes chez les premiers clients signés",
          "Première revue trimestrielle : ajuster mix média, pipeline vs objectif, premiers signaux d'expansion"
        ]
      }
    ],
    "demoScript": [
      {
        "useCase": "Audit de conformité AI Act & RGPD d'un corpus documentaire",
        "userPrompt": "Voici notre politique de traitement des données et 3 contrats fournisseurs IA. Identifie les écarts par rapport aux obligations GPAI de l'AI Act (applicables depuis le 2 août 2025) et aux recommandations CNIL du 22 juillet 2025, puis génère un plan de remédiation priorisé avec base légale RGPD pour chaque point.",
        "claudeValue": "Raisonnement juridique fiable sur documents sensibles, traités sous Zero Data Retention et non-entraînement par défaut, résidence EU sur l'API. Démontre l'alignement ISO 42001 et l'arsenal anti-sanction (jusqu'à 7% du CA mondial).",
        "persona": "Directeur Juridique / Conformité (DPO)"
      },
      {
        "useCase": "Refactoring et revue de sécurité de code sur un dépôt existant",
        "userPrompt": "Analyse ce module d'authentification, identifie les vulnérabilités et la dette technique, propose un refactoring testé et explique les choix. Exécute les tests et ouvre une PR commentée.",
        "claudeValue": "Claude Code en exécution agentique autonome (pas seulement suggestion) — meilleur score coding du panel (10/10), 80%+ des lignes en production chez Anthropic. Gouvernance dev native : SSO/SCIM, RBAC, logs d'audit, garanties de non-rétention sur le dépôt.",
        "persona": "CTO / Head of Engineering"
      },
      {
        "useCase": "Synthèse documentaire et automatisation des tâches métier chronophages",
        "userPrompt": "À partir de ces 40 pages de comptes-rendus de comités, produis une synthèse exécutive, la liste des décisions et actions avec responsables et échéances, et 3 e-mails de relance prêts à envoyer.",
        "claudeValue": "Gain de temps documenté : 40-60 min/jour/collaborateur, -2h/semaine sur l'e-mail, +66% de débit de tâches. Outil unique standardisé et gouverné qui remplace les abonnements épars.",
        "persona": "Directeur des Opérations / Métier (COO)"
      },
      {
        "useCase": "Mise sous gouvernance du shadow IT avec contrôles admin",
        "userPrompt": "Montre-moi comment provisionner 200 collaborateurs via SCIM depuis Azure AD, configurer les rôles RBAC par département, exporter les logs d'audit vers Splunk, et appliquer une politique de rétention personnalisée et l'allowlisting IP.",
        "claudeValue": "Transforme le shadow IT en canal officiel gouverné : SSO/SCIM, RBAC, audit logs exportables SIEM, Compliance API, triple certification SOC 2 II / ISO 27001 / ISO 42001. L'argument qui débloque un comité sécurité francophone.",
        "persona": "DSI / CISO (RSSI)"
      }
    ],
    "roiPoints": [
      "Productivité collaborateur : 40-60 min/jour économisées par utilisateur équipé, jusqu'à 9h+/semaine pour les 27% de power users, -2h/semaine sur l'e-mail (-25% de temps de traitement), +66% de débit de tâches en étude contrôlée.",
      "Productivité dev : passage de la suggestion à l'exécution agentique ; chez Anthropic, 80%+ des lignes en production écrites par Claude et 8x plus de code fusionné/ingénieur/jour qu'en 2024 (à pondérer pour la qualité).",
      "Réduction du risque de sanction : exposition évitée jusqu'à 35 M€ ou 7% du CA mondial (AI Act, pratiques interdites) et 15 M€ ou 3% (autres obligations) ; contexte CNIL à 487 M€ de sanctions en 2025. DPA + ZDR + ISO 42001 fondent la conformité.",
      "Coût total maîtrisé vs concurrence : siège ~20 USD vs ~60 USD ChatGPT Enterprise (~3x moins cher sur le siège), déploiement multi-cloud sans lock-in (Bedrock/Vertex).",
      "Taux de réussite supérieur : l'achat à un éditeur spécialisé réussit ~67% du temps vs ~1/3 pour le build interne (MIT NANDA) — sortie du 'pilot purgatory' où 95% des pilotes IA n'ont aucun impact P&L.",
      "Reprise en main du shadow IT : substitution des usages LLM grand public non gouvernés par un canal officiel, réduisant la surface de risque de fuite de données à coût marginal.",
      "Adoption rapide à l'échelle : 49% d'adoption en 2,5 semaines, 3x plus de code et +31% de pull requests (réf. Smartsheet) — time-to-value court qui accélère le retour sur investissement."
    ],
    "fiveFollowUpSteps": [
      "1. Cadrage & baseline : valider personas, comptes cibles ABM et KPIs avec les sponsors ; mesurer la baseline (trafic organique FR, CAC actuel, pipeline existant) pour pouvoir prouver l'impact.",
      "2. Instrumentation & dashboard : mettre en place le tracking funnel de bout en bout (UTM, CRM, attribution multi-touch) et un dashboard temps réel (pipeline, MQL/SQL, activation, time-to-contract, NRR).",
      "3. Revue hebdomadaire opérationnelle : pilotage agile des campagnes (CPL, taux de conversion par canal, comptes ABM engagés), réallocation budgétaire vers les canaux les plus performants.",
      "4. Revue mensuelle de funnel & business-case : analyser les taux de passage entre étapes, identifier les points de friction (revue sécurité, TCO, comité), ajuster contenu et assets de validation.",
      "5. Revue trimestrielle (QBR) & itération : confronter résultats aux KPIs cibles, mesurer le ROI réel (CAC/ACV, NRR, expansion), capitaliser les case studies clients et réviser le mix média et la roadmap pour le trimestre suivant."
    ]
  },
  "product": {
    "tagline": "L'IA de référence pour les entreprises qui ne transigent pas sur la sécurité.",
    "valueProp": "Claude pour l'Entreprise réunit la meilleure qualité de raisonnement et de coding du marché, une fenêtre de contexte parmi les plus larges, et l'arsenal de sécurité le plus complet d'un pur-player IA — pour transformer le shadow IT en canal gouverné qui passe les comités sécurité.",
    "target": "Décideurs d'organisations francophones régulées (banque, assurance, santé, secteur public, industrie) : DSI/CISO, CTO/Head of Engineering, Directeur Juridique/DPO, COO/Métier. Cœur de cible : ETI et grands comptes 250+ collaborateurs avec exigences de conformité fortes.",
    "models": [
      { "name": "Claude Opus", "role": "Le modèle le plus puissant : raisonnement profond, tâches complexes, agentique longue durée. Pour l'analyse juridique, le code critique, la recherche." },
      { "name": "Claude Sonnet", "role": "L'équilibre par défaut : qualité quasi-frontière à coût et latence maîtrisés. Le cheval de bataille des déploiements à l'échelle." },
      { "name": "Claude Haiku", "role": "Le plus rapide et économique : classification, extraction, volumes élevés, temps réel. Pour industrialiser les usages à fort débit." }
    ],
    "capabilities": [
      { "title": "Grande fenêtre de contexte", "desc": "Jusqu'à ~1M de tokens : ingestion de corpus entiers (contrats, codebases, documentation) en une seule requête, sans découpage." },
      { "title": "Claude Code — coding agentique", "desc": "Exécution autonome (pas seulement suggestion) : lecture du dépôt, écriture, tests, PR. Meilleur score coding du panel ; 80 %+ des lignes en production chez Anthropic." },
      { "title": "MCP — connecteurs ouverts", "desc": "Model Context Protocol : standard ouvert pour brancher Claude aux outils internes (drives, tickets, bases, observabilité) sans intégration sur mesure." },
      { "title": "Sécurité des données", "desc": "Pas d'entraînement sur vos données par défaut, option Zero Data Retention, chiffrement TLS 1.2+/AES-256, résidence EU sur l'API (depuis août 2025)." },
      { "title": "Conformité auditable", "desc": "SOC 2 Type II, ISO 27001:2022, ISO/IEC 42001:2023 (management de l'IA, rare), HIPAA-ready + BAA, FedRAMP High via Claude for Government." },
      { "title": "Contrôles d'entreprise", "desc": "SSO, SCIM (Okta/Azure AD), rôles RBAC, logs d'audit exportables SIEM, allowlisting IP, Compliance API, limites de dépense." }
    ],
    "pricing": [
      { "tier": "Team", "price": "~25-30 $/siège/mois", "forWho": "Équipes 5-150 sièges, démarrage sans appel commercial", "highlights": ["Espace de travail partagé", "Facturation centralisée", "Onboarding self-serve"] },
      { "tier": "Enterprise", "price": "~20 $/siège + usage", "forWho": "100+ collaborateurs, déploiement org-wide", "highlights": ["SSO/SCIM, RBAC, audit logs", "Zero Data Retention en option", "Self-serve ou sales-assisted", "Multi-cloud : Bedrock & Vertex"], "featured": true }
    ],
    "differentiators": [
      "Constitutional AI : sécurité et alignement par conception, refus calibrés — un modèle entraîné à être fiable et honnête, pas seulement performant.",
      "La posture sécurité/conformité la plus complète d'un pur-player IA (triple certification dont l'ISO 42001, rare sur le marché).",
      "Leadership reconnu sur le coding et l'agentique (Claude Code) — un différenciateur produit tangible et chiffrable.",
      "Pricing du siège ~3× moins cher que ChatGPT Enterprise et déploiement multi-cloud sans lock-in (AWS Bedrock, Google Vertex)."
    ],
    "howToCommunicate": [
      "Axer bénéfices, pas fonctionnalités : « passe les comités sécurité », « 40-60 min/jour gagnées », pas « 1M de tokens ».",
      "Storytelling de la confiance : la même rigueur (Constitutional AI) protège vos données et celles de vos clients.",
      "Preuve par les pairs : témoignages chiffrés (Smartsheet 49 % d'adoption en 2,5 semaines, +31 % de PR ; Lyft 87 %) et logos Fortune 100.",
      "Démos immersives par persona : montrer Claude au travail sur un cas réel (conformité, code, doc métier) plutôt que décrire."
    ],
    "sources": [
      { "title": "Claude Enterprise plan — Claude Help Center", "url": "https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan" },
      { "title": "Plans & Pricing — Claude by Anthropic", "url": "https://claude.com/pricing" },
      { "title": "Models overview — Claude Docs", "url": "https://docs.claude.com/en/docs/about-claude/models/overview" },
      { "title": "Model Context Protocol (MCP)", "url": "https://modelcontextprotocol.io/" },
      { "title": "What certifications has Anthropic obtained? — Privacy Center", "url": "https://privacy.claude.com/en/articles/10015870-what-certifications-has-anthropic-obtained" }
    ]
  },
  "pagespeed": {
    "claudeUrl": "https://claude.com/solutions/enterprise",
    "competitor": "ChatGPT (OpenAI)",
    "competitorUrl": "https://openai.com/business/",
    "date": "26 juin 2026",
    "tool": "Lighthouse 12 — Chrome headless, desktop + mobile",
    "methodologyNote": "Accessibilité, Bonnes pratiques, SEO et CLS = MESURÉS au Lighthouse dans des conditions identiques pour les deux sites (même machine, même run). Le score Performance et le LCP proviennent d'un run lab en réseau contraint (LCP gonflé > 25 s, non représentatif du terrain) : à reconfirmer via PageSpeed Insights / CrUX en conditions réelles. La comparaison structurelle (catégories) reste valable.",
    "rows": [
      { "metric": "Performance (lab, indicatif)", "claudeD": "à confirmer", "claudeM": "à confirmer", "rivalD": "à confirmer", "rivalM": "à confirmer", "winner": "tie", "measured": false },
      { "metric": "Accessibilité", "claudeD": "83", "claudeM": "83", "rivalD": "97", "rivalM": "100", "winner": "rival", "measured": true },
      { "metric": "Bonnes pratiques", "claudeD": "100", "claudeM": "100", "rivalD": "59", "rivalM": "61", "winner": "claude", "measured": true },
      { "metric": "SEO", "claudeD": "92", "claudeM": "92", "rivalD": "92", "rivalM": "92", "winner": "tie", "measured": true },
      { "metric": "CLS (stabilité visuelle)", "claudeD": "0,001", "claudeM": "0,000", "rivalD": "0,084", "rivalM": "0,050", "winner": "claude", "measured": true }
    ],
    "takeaways": [
      "Claude domine les Bonnes pratiques (100 vs ~60) et la stabilité visuelle CLS (~0 vs 0,05-0,08) — un site techniquement propre et stable.",
      "ChatGPT mène l'Accessibilité (97-100 vs 83) : c'est la priorité d'amélioration n°1 côté Claude (contrastes, labels, navigation clavier).",
      "SEO à parité (92/92) : la différence se jouera sur le contenu (cluster conformité, comparatifs), pas sur la technique on-page.",
      "Score Performance lab non concluant (réseau de test contraint) : lancer PageSpeed Insights live avant l'oral pour des chiffres terrain."
    ]
  },
  "actions": [
    {
      "n": "01",
      "name": "ABM « Comité Sécurité » — grands comptes régulés",
      "justification": "Le marché bascule à 76 % vers l'achat plutôt que le build, et l'achat à un éditeur spécialisé réussit ~67 % du temps (vs ~1/3 en interne). Sur les comptes régulés à fort ACV, l'ABM 1-to-few aligne sales et marketing autour du seul argument qui débloque la signature : la conformité.",
      "objectives": ["12 M€ de pipeline qualifié", "350 SQLs sur comptes cibles", "Time-to-contract médian < 60 j"],
      "channels": ["ABM 1-to-few (80-120 comptes)", "LinkedIn Ads ciblées personas", "Trust Portal NDA + DPA pré-validé", "Retargeting des visiteurs landing"],
      "target": "DSI/CISO, DPO et directions achats de CAC40/SBF120 et ETI régulées (banque, assurance, santé, public) en FR/BE/CH/LU.",
      "budgetPct": 50
    },
    {
      "n": "02",
      "name": "SEO & Contenu « Conformité + Comparatifs »",
      "justification": "L'audit révèle deux gaps majeurs : aucun contenu RGPD / AI Act / souveraineté EU sur la landing (intent FR fort), et le trafic comparatif BOFU (Claude vs ChatGPT/Copilot) laissé entièrement aux tiers. Un actif organique durable à CAC décroissant qui capte l'intent commercial des décideurs en recherche active.",
      "objectives": ["Trafic organique qualifié FR +150 %", "Ranking sur « assistant IA conforme RGPD » & « Claude Enterprise »", "Baisse du CAC inbound sur la durée"],
      "channels": ["Cluster pilier RGPD / AI Act / IA souveraine", "Contenu comparatif BOFU", "Certifications nommées on-page + meta", "Pages industrie localisées FR"],
      "target": "Décideurs (DSI, CTO, DPO) en phase de découverte et d'évaluation, en recherche active de solutions conformes.",
      "budgetPct": 20
    },
    {
      "n": "03",
      "name": "Events, Webinars & Partenariats Cloud / ESN",
      "justification": "Le frein n°1 du passage à l'échelle n'est pas le modèle mais l'intégration aux workflows. La co-vente via AWS Bedrock et Google Vertex donne accès aux budgets cloud existants, et les ESN francophones (Sfeir, Capgemini…) crédibilisent l'intégration — sortie du « pilot purgatory » où 95 % des pilotes échouent.",
      "objectives": ["Taux d'activation pilote ≥ 45 % à 2,5 semaines", "Démos qualifiées et leads chauds", "Déploiements qui passent à l'échelle"],
      "channels": ["Webinars FR par cas d'usage", "Salons tech FR (Big Data & AI Paris)", "Co-marketing AWS / Google Cloud", "Enablement via ESN partenaires"],
      "target": "Champions techniques (CTO, lead dev) et sponsors business (COO), via l'écosystème cloud et intégrateurs francophones.",
      "budgetPct": 30
    }
  ],
  "kpiDashboard": [
    { "name": "Pipeline qualifié généré", "target": "12 M€", "baseline": "—", "horizon": "12 mois", "action": "Actions 01 + 02" },
    { "name": "SQLs Enterprise (comptes régulés)", "target": "350", "baseline": "—", "horizon": "12 mois", "action": "Action 01" },
    { "name": "Comptes Enterprise signés (dont 15 > 250 sièges)", "target": "60", "baseline": "0", "horizon": "12 mois", "action": "Actions 01 + 03" },
    { "name": "Trafic organique qualifié FR", "target": "+150 %", "baseline": "indice 100", "horizon": "6 mois", "action": "Action 02" },
    { "name": "Taux d'activation pilote (à 2,5 sem.)", "target": "≥ 50 %", "baseline": "réf. Smartsheet 49 %", "horizon": "90 j / cohorte", "action": "Action 03" },
    { "name": "Net Revenue Retention (land-and-expand)", "target": "> 120 %", "baseline": "100 %", "horizon": "12 mois post-signature", "action": "Toutes" }
  ],
  "personaProfiles": [
    {
      "name": "Sophie Berthier",
      "age": 47,
      "city": "Lyon",
      "role": "DSI / RSSI",
      "csp": "Cadre dirigeante IT (CSP+) — membre du COMEX",
      "company": "Groupe d'assurance régional · 3 200 salariés · secteur régulé",
      "icon": "🛡️",
      "priority": "haute",
      "motivations": "Déployer l'IA à l'échelle sans ouvrir de brèche de sécurité ni de non-conformité — et reprendre la main sur le shadow IT que ses équipes utilisent déjà hors contrôle.",
      "hobbies": "Course à pied (semi-marathon), œnologie, mentore des femmes dans la tech.",
      "digitalBehaviors": [
        "LinkedIn quotidien (suit CISO, CNIL, ANSSI) ; lit les newsletters cyber le matin",
        "Webinaires sécurité & livres blancs ; podcasts cyber en déplacement",
        "Évalue les éditeurs via Trust Center, questionnaires sécurité et avis de pairs"
      ],
      "frictionPoints": [
        "Risque de fuite de données : exige une garantie contractuelle de non-entraînement + Zero Data Retention",
        "Shadow IT non gouverné : surface de risque non maîtrisée",
        "Exige des certifications auditables (SOC 2 II, ISO 27001, ISO 42001) et la résidence EU"
      ],
      "claudeHook": "Souveraineté & conformité by design : triple certification (dont ISO 42001), non-entraînement par défaut + ZDR, résidence EU sur l'API, SSO/SCIM et logs d'audit exportables SIEM — l'arsenal qui débloque le comité sécurité et transforme le shadow IT en canal gouverné.",
      "strategy": {
        "message": "« L'IA qui passe votre comité sécurité. » Insister sur la preuve auditable, pas sur les fonctionnalités.",
        "tone": "Rassurant, factuel, technique. Chiffres et certifications, zéro survente.",
        "channels": ["LinkedIn Ads ciblées RSSI", "ABM 1-to-few", "Trust Portal NDA", "Salons cyber / SSI"],
        "touchpoints": ["Livre blanc sécurité & AI Act", "Session de cadrage RSSI", "DPA pré-validé CNIL-friendly"],
        "frequency": "Nurturing mensuel + relances ABM bimensuelles sur compte engagé."
      }
    },
    {
      "name": "Karim Haddad",
      "age": 39,
      "city": "Paris",
      "role": "CTO / Head of Engineering",
      "csp": "Cadre dirigeant tech (CSP+) — fondateur associé",
      "company": "Scale-up fintech · 280 salariés · 90 ingénieurs",
      "icon": "⚙️",
      "motivations": "Accélérer la vélocité des équipes dev sans gonfler les effectifs ni dégrader la qualité — et sécuriser l'usage de l'IA sur le code source.",
      "hobbies": "Contributions open-source le week-end, escalade, café de spécialité.",
      "priority": "haute",
      "digitalBehaviors": [
        "GitHub, Hacker News, X/Reddit dev ; benchmarks d'outils de coding",
        "Teste lui-même les outils (POC) avant toute décision ; suit les classements de modèles",
        "Discord/Slack communautaires, vidéos techniques YouTube"
      ],
      "frictionPoints": [
        "Pression sur la vélocité, marché tendu sur les profils seniors",
        "Risque qualité / dette technique du code généré",
        "Coûts d'API variables et difficiles à prévoir ; sécurisation du dépôt"
      ],
      "claudeHook": "Claude Code en preuve par l'exemple : chez Anthropic, 80 %+ des lignes en production sont écrites par Claude et l'ingénieur type produit 8× plus de code/jour qu'en 2024 — exécution agentique encadrée par SSO/SCIM, RBAC et logs d'audit.",
      "strategy": {
        "message": "« Du copier-coller à l'exécution. » Démontrer Claude Code en live sur un vrai dépôt.",
        "tone": "Direct, technique, sans jargon marketing. Preuve par la démo et les benchmarks.",
        "channels": ["Webinars cas d'usage coding", "POC / sandbox encadré", "Communautés dev", "Co-marketing AWS/Vertex"],
        "touchpoints": ["Démo Claude Code live", "Comparatif vs Copilot/Cursor", "Essai pilote équipe dev"],
        "frequency": "Touchpoint hebdo en phase POC, puis mensuel."
      }
    },
    {
      "name": "Élodie Mercier",
      "age": 44,
      "city": "Nantes",
      "role": "Directrice Juridique & DPO",
      "csp": "Cadre dirigeante juridique (CSP+)",
      "company": "ETI industrielle · 1 800 salariés · exportatrice UE",
      "icon": "⚖️",
      "priority": "haute",
      "motivations": "Fonder la conformité RGPD et AI Act de tout usage IA, et éviter l'exposition au risque de sanction avant d'autoriser un déploiement.",
      "hobbies": "Théâtre amateur, randonnée, lectures d'essais sur la régulation du numérique.",
      "digitalBehaviors": [
        "Veille CNIL / Commission européenne / cabinets d'avocats ; LinkedIn juridique",
        "Webinaires conformité, RGPD/AI Act ; lit les DPA et clauses avec attention",
        "Préfère les contenus écrits sourcés aux démos commerciales"
      ],
      "frictionPoints": [
        "Risque de sanction CNIL (487 M€ en 2025) et AI Act (jusqu'à 7 % du CA mondial)",
        "Échéancier AI Act serré ; RGPD dès qu'il y a données personnelles",
        "Besoin de DPA solides et de garanties de non-réutilisation des données"
      ],
      "claudeHook": "L'assurance anti-sanction : DPA + Zero Data Retention + non-entraînement par défaut + ISO 42001 + résidence EU — l'arsenal contractuel et de certification aligné sur les recommandations CNIL du 22 juillet 2025, qui permet au juridique de fonder la conformité et de signer.",
      "strategy": {
        "message": "« La conformité AI Act, contractualisée. » Parler base légale, DPA, certifications.",
        "tone": "Rigoureux, sourcé, prudent. Documents écrits plutôt que démos.",
        "channels": ["Contenu SEO RGPD/AI Act", "Livre blanc conformité", "LinkedIn juridique", "Webinars AI Act readiness"],
        "touchpoints": ["Kit AI Act readiness", "DPA & clauses ZDR", "Alignement recommandations CNIL"],
        "frequency": "Nurturing par contenu mensuel ; sollicitée en phase de validation."
      }
    }
  ]
};
