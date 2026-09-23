# Dépendances

Ce que fait chaque librairie du `package.json` et pourquoi elle est utilisée ici. À vérifier avant
d'ajouter ou d'évaluer une nouvelle dépendance.

## `dependencies`

- **next** / **react** / **react-dom** — framework, UI.
- **radix-ui** — primitives UI headless (accessibilité, comportement clavier/focus) sur lesquelles
  les composants `src/components/ui/` générés par shadcn sont construits.
- **shadcn** / **cn** — CLI et utilitaires runtime du code généré dans `src/components/ui/`.
- **class-variance-authority** — variantes de composants UI typées.
- **lucide-react** — icônes.
- **tw-animate-css** — animations Tailwind utilitaires, dépendance du thème shadcn.

## `devDependencies`

- **typescript** — TypeScript strict, voir `tsconfig.json`.
- **tailwindcss** / **@tailwindcss/postcss** — Tailwind CSS v4 (config via `@theme` dans
  `globals.css`, pas de `tailwind.config.js`).
- **eslint** / **eslint-config-next** — lint, config flat native `next/core-web-vitals` +
  `next/typescript`.
- **prettier** / **prettier-plugin-tailwindcss** — formatage, tri automatique des classes Tailwind.
- **husky** / **lint-staged** — hook `pre-commit` qui formate/lint les fichiers stagés.
- **vitest** / **@vitejs/plugin-react** — test runner (`resolve.tsconfigPaths: true` résout
  nativement l'alias `@/*`, pas besoin du plugin `vite-tsconfig-paths`).
- **jsdom** — environnement DOM pour les tests Vitest.
- **@testing-library/react** / **@testing-library/jest-dom** / **@testing-library/user-event** —
  tests de composants centrés utilisateur.
- **@vitest/coverage-v8** — rapport de couverture (`pnpm test:coverage`).
- **tsx** — exécution TypeScript directe pour des scripts utilitaires (`scripts/`).
- **@types/node**, **@types/react**, **@types/react-dom** — types.

Selon le projet, ajouter au besoin : **zod** (validation de schémas), **zustand** (état réactif) —
volontairement absents du template, ce sont des choix d'architecture applicative, pas de
l'outillage générique.
