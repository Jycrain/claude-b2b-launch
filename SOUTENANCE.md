# Déroulé de soutenance — Lancement B2B de Claude (15 min · 3 voix)

> **Voix A** = Analyse / Audit · **Voix B** = Stratégie / Marché · **Voix C** = Build / Design / Démo
> Pilotage : **← / →** changer de section · **F** plein écran · barre de progression en haut · points de nav à droite.
> Lancer en local : `npm run build && npm run preview` → http://localhost:4173 (**100 % offline**, vérifié : 0 requête réseau au chargement).

## Structure de l'app = l'ordre du jour imposé (6 parties)

| Section app | Partie imposée |
|---|---|
| Intro (hook méta) | — |
| 01 · Marché + 01 · Concurrence & présence digitale | **01 État des lieux** |
| 02 · Produit (Claude pour l'Entreprise) | **02 Présentation du produit** |
| 03 · UX, SEO & Performance | **03 UX & SEO** |
| 04 · Personas (3 décideurs incarnés) | **04 Personas** |
| 05 · Plan d'action (3 actions) | **05 Plan d'action** |
| 06 · KPI (exactement 6) | **06 KPI** |
| Démonstration + Conclusion & ROI | — |

## Minutage (10 min présentation + 5 min Q&A)

| Temps | Section | Voix | Points clés |
|------|---------|------|-------------|
| **0:00–1:00** | Intro / hook méta | **C** | « Ce n'est pas un PowerPoint. Cette expérience web a été conçue, analysée et **codée par Claude** lui-même — pour lancer Claude en entreprise. La meilleure preuve du produit, c'est cette présentation. » Annoncer les 6 parties. |
| **1:00–2:30** | 01 · Marché + Concurrence | **B** | **37 Md$** de dépenses entreprise en IA gén. (×3,2 vs 2024). **78 %** des organisations utilisent l'IA (McKinsey). MAIS **~95 % des pilotes sans ROI** (MIT NANDA) et **76 % achètent** plutôt que de construire. Enjeux : sécurité, **AI Act** (jusqu'à 7 % du CA dès le 2 août 2026), souveraineté. Radar : Claude **40 % de part LLM entreprise**, **54 % sur le coding** — challenger en notoriété, **leader sur l'entreprise**. |
| **2:30–4:00** | 02 · Produit | **B** | Gamme Opus / Sonnet / Haiku. 6 capacités : fenêtre ~1M tokens, **Claude Code**, **MCP**, non-entraînement + ZDR, **triple certification (dont ISO 42001)**, SSO/SCIM/audit. Prix : **Team ~25-30 $** / **Enterprise ~20 $/siège + usage** (≈3× moins que ChatGPT). Différenciateur : **Constitutional AI** + sécurité. Communiquer : **bénéfices**, storytelling de la confiance, démos. |
| **4:00–6:00** | 03 · UX, SEO & Performance | **A** | « On mesure avant de recommander. » **Tableau PageSpeed comparatif Claude vs ChatGPT** (Lighthouse, mêmes conditions) : Claude **Bonnes pratiques 100** (vs ~60) et **CLS ~0** (vs 0,05-0,08) ; ChatGPT mène l'**accessibilité** (97-100 vs 83) ; **SEO à parité 92/92**. Étiquetage **mesuré vs à confirmer** assumé. SEO : hiérarchie Hn + lacune RGPD/AI Act. UX : arborescence + **insertion produit dans Solutions/Pricing** + différences mobile. |
| **6:00–7:30** | 04 · Personas | **B** | 3 décideurs incarnés du comité d'achat : **Sophie Berthier (47, DSI/RSSI, Lyon)**, **Karim Haddad (39, CTO, Paris)**, **Élodie Mercier (44, Dir. Juridique/DPO, Nantes)**. Cliquer 1-2 cartes : motivations, comportements digitaux, frictions, **hook Claude** + **stratégie dédiée** (message, ton, canaux, fréquence). |
| **7:30–9:00** | 05 · Plan + 06 · KPI | **B + A** | **3 actions** : ① ABM « Comité Sécurité » (50 %), ② SEO & Contenu conformité + comparatifs (20 %), ③ Events / Webinars / Partenariats Cloud-ESN (30 %). Budget 2,4 M€, roadmap 90 j. Puis **6 KPI** reliés aux actions : pipeline 12 M€, 350 SQLs, 60 comptes, +150 % trafic FR, ≥45 % activation, NRR >120 %. |
| **9:00–9:30** | Démonstration | **C** | Cliquer 2-3 scénarios (séquence locale, **aucune clé API, aucun risque en huis clos**) : conformité AI Act (Juridique), Claude Code (CTO), gouvernance shadow IT (DSI). Bandeau « vos données ne servent pas à l'entraînement ». |
| **9:30–10:00** | Conclusion & ROI | **C** | ROI : 40-60 min/j/collaborateur, réduction du risque de sanction, time-to-market, ~3× moins cher. Rappeler les **5 étapes de suivi**. Punchline : « Cette présentation a été pensée, analysée et codée par Claude. La meilleure démo de Claude, c'est ce que vous venez de voir. » → Q&A. |

## Argument bonus (Q&A) — Lighthouse sur NOTRE propre app (mesuré le 26/06/2026, en local)
**Bonnes pratiques 100 · Accessibilité 96 · SEO 91 · CLS 0,007 · TBT 40 ms · Performance 69 (LCP 3,0 s).**
→ « Best Practices au maximum, accessibilité et SEO élevés, **CLS quasi nul** : nous appliquons à notre livrable les standards que nous auditons chez les autres. La marge restante est la **performance** d'une app React riche (charts + animations) — axe d'optimisation assumé, pas masqué. » (rapport complet : `fallback/lighthouse-notre-app.json`)

## Conformité au syllabus
6 parties imposées respectées dans l'ordre ✓ · 3 personas incarnés ✓ · 3 actions ✓ · 6 KPI ✓ · tableau PageSpeed comparatif desktop+mobile ✓ · SEO Hn ✓ · UX arbo + insertion produit ✓ · benchmark ✓ · recommandations argumentées ✓ · 5 étapes de suivi ✓
**Outils** (un rôle unique chacun) : SimilarWeb (trafic), Google Search (SERP), GlooMaps (arbo), Web Developer + SEO Review Tools/Headings Checker (Hn), **PageSpeed Insights / Lighthouse** (perf comparée — données réelles mesurées), Canva (assets), Excel/Sheets (KPI/budget), PowerPoint = **PDF de secours**. Capacités Claude Code : WebSearch/WebFetch, Playwright (Lighthouse réel + screenshots), Bash, Write/Edit.

## Plan B (machine de présentation)
1. `npm run preview` en local (offline) — mode normal.
2. Sinon ouvrir le PDF : `fallback/Soutenance-Claude-B2B.pdf` (10 pages, une par section).
3. **À envoyer avant l'oral à `exo.analytics.fr@gmail.com`** : le PDF (rendu écrit).

## Honnêteté méthodologique (à assumer si le jury creuse)
- **Mesuré** : trafic/part de marché (Similarweb, Menlo), structure Hn, TTFB ~40 ms (curl), Lighthouse catégories Accessibilité/Bonnes pratiques/SEO/CLS (Claude vs ChatGPT, mêmes conditions), Lighthouse de notre app.
- **À confirmer / estimé** : score Performance & LCP des concurrents (run lab en réseau contraint → LCP gonflé, non terrain : relancer PageSpeed Insights live) ; cibles KPI (estimations de lancement à calibrer sur baseline) ; certains chiffres prospectifs (Gartner) étiquetés « estimation ».
