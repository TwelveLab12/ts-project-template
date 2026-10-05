# ts-project-template

Template de départ TwelveLab12 pour un nouveau projet Next.js/TypeScript : outillage qualité déjà
câblé (TypeScript strict, ESLint, Prettier, Husky, Vitest, CI), Tailwind CSS v4 + shadcn/ui sur
**Radix UI**.

## Utilisation

```bash
gh repo create <org>/<nom-du-projet> --public --template TwelveLab12/ts-project-template
git clone git@github.com:<org>/<nom-du-projet>.git
cd <nom-du-projet>
pnpm install
```

Puis :

1. Mettre à jour `package.json` (`name`), `README.md` et `CLAUDE.md` (section "Project") avec le
   contenu réel du nouveau projet.
2. Vérifier `pnpm typecheck && pnpm lint:ci && pnpm test && pnpm build` avant le premier commit.
3. Ajouter les dépendances propres au projet (ex : `zod`, `zustand` — volontairement absentes du
   template, voir `docs/dependencies.md`).
4. Renommer/compléter `docs/adr/0001-record-architecture-decisions.md` reste valable tel quel ;
   ajouter les ADR spécifiques au nouveau projet à partir de `0002`.

## Ce que contient le template

- Next.js (App Router) + TypeScript strict, voir `tsconfig.json`.
- ESLint flat config (`next/core-web-vitals` + `next/typescript`) + convention `_`-préfixe pour les
  variables intentionnellement inutilisées, voir `CLAUDE.md`.
- Prettier + `prettier-plugin-tailwindcss`.
- Husky + lint-staged (`pre-commit`).
- Vitest + Testing Library, avec un test de smoke (`src/app/page.test.tsx`) qui prouve que la
  chaîne fonctionne.
- Tailwind CSS v4 + shadcn/ui initialisé sur Radix UI (composant `button` fourni en exemple).
- CI GitHub Actions (`typecheck` → `lint:ci` → `test` → `build`).
- `docs/adr/` amorcé, `docs/dependencies.md`.

## Commandes

```bash
pnpm dev            # serveur de dev (Turbopack)
pnpm build           # build de production
pnpm lint:ci          # eslint --max-warnings=0
pnpm typecheck        # next typegen && tsc --noEmit
pnpm test            # vitest run
pnpm format          # prettier --write .
```

## Licence

Code sous [licence MIT](LICENSE) : réutilisable librement, en conservant la mention de copyright.
