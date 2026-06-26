# Lancement B2B de Claude — présentation web interactive

Stratégie digitale de lancement du produit **Claude (Anthropic)** sur le segment **Entreprise / B2B** francophone, livrée sous forme d'une **expérience web scrollytelling** (et non d'un PowerPoint). Méta-angle : la présentation a été conçue, analysée et codée par Claude lui-même.

## Stack
Vite + React + TypeScript · Framer Motion (animations au scroll) · Recharts (radar) · CSS maison · polices **auto-hébergées** (Fraunces + Inter via `@fontsource`). **Zéro dépendance réseau à l'exécution** (vérifié : 0 requête externe au chargement) — données figées dans `src/content.ts`.

## Lancer la présentation
```bash
npm install
npm run build      # génère dist/ statique
npm run preview    # sert la présentation (mode soutenance, 100 % offline)
```
Ouvrir l'URL affichée. Pilotage : **←/→** changent de section, **F** plein écran, points latéraux cliquables.

Mode dev (HMR) : `npm run dev`.

## Les 10 sections = l'ordre du jour imposé (6 parties)
1. **Intro** — hook méta + plan (canvas animé en réseau)
2. **01 · Marché** — IA générative B2B, 3 chiffres-chocs sourcés *(partie 01)*
3. **01 · Concurrence** — radar concurrentiel + présence digitale *(partie 01)*
4. **02 · Produit** — modèles Opus/Sonnet/Haiku, capacités, prix & positionnement, différenciation *(partie 02)*
5. **03 · UX, SEO & Performance** — **tableau PageSpeed comparatif Claude vs ChatGPT**, Hn, arborescence *(partie 03)*
6. **04 · Personas** — 3 décideurs incarnés + stratégie dédiée par persona *(partie 04)*
7. **05 · Plan d'action** — 3 actions (justification, objectifs, canaux, cible), budget, roadmap 90 j *(partie 05)*
8. **06 · KPI** — exactement 6 indicateurs reliés aux actions *(partie 06)*
9. **Démo** — Claude au travail, séquence scriptée locale (aucune clé API)
10. **Conclusion** — ROI + 5 étapes de suivi + retour méta

## Données
Tout le contenu chiffré vient d'une recherche multi-agents et est centralisé dans **`src/content.ts`**.
Chaque chiffre est étiqueté **● mesuré** (sourcé) ou **○ estimation** (illustratif) pour la crédibilité jury. Les sources cliquables figurent en bas de section.

## Auto-audit (argument de soutenance) — mesuré le 26/06/2026
Lighthouse lancé sur cette app : **Best Practices 100 · Accessibilité 96 · SEO 91 · CLS 0,007 · TBT 40 ms · Performance 69 (LCP 3,0 s)**.
Rapport complet : `fallback/lighthouse-notre-app.json`. (Le tableau PageSpeed de la partie 03 compare aussi Claude.com vs OpenAI.com avec de **vraies mesures Lighthouse**.)

## Plan B (huis clos sans internet)
- `fallback/Soutenance-Claude-B2B.pdf` — export **10 pages** (une par section) = rendu écrit à envoyer à `exo.analytics.fr@gmail.com` avant l'oral.

## Répartition (groupe de 3)
- **A** Analyse/Audit · **B** Stratégie/Marché · **C** Build/Design/Démo
- Déroulé minuté : voir **`SOUTENANCE.md`**.
