@AGENTS.md

# CLAUDE.md

Guidance pour Claude Code dans ce repo. Ce projet est le **template de départ** TwelveLab12 pour
un nouveau projet Next.js/TypeScript — voir [README.md](README.md) pour comment l'utiliser. Les
conventions ci-dessous sont pensées pour être copiées telles quelles dans le CLAUDE.md du projet
qui en découle, puis complétées avec le contenu spécifique à ce projet (Project/Architecture).

## Commands

```bash
pnpm dev            # serveur de dev (Turbopack)
pnpm build           # build de production
pnpm start           # sert le build de production
pnpm lint            # eslint
pnpm lint:ci          # eslint --max-warnings=0 (ce que la CI lance)
pnpm typecheck        # next typegen && tsc --noEmit (next typegen est nécessaire : les helpers
                       # LayoutProps/PageProps ne sont générés qu'au dev/build/typegen — sans ça
                       # tsc échoue sur un clone frais qui n'a jamais lancé `next dev`)
pnpm format          # prettier --write .
pnpm test            # vitest run
pnpm test:watch       # vitest en mode watch
pnpm test:coverage    # vitest run --coverage
```

Avant tout commit : `pnpm typecheck`, `pnpm lint:ci`, `pnpm test` et `pnpm build` doivent être au
vert — c'est le baseline, pas optionnel, et c'est ce que la CI vérifie. Un hook `pre-commit`
(Husky + lint-staged) formate/lint automatiquement les fichiers stagés.

## Conventions de qualité

- **TypeScript strict** : `strict`, `noUncheckedIndexedAccess`, `noUnusedLocals`,
  `noUnusedParameters`, `verbatimModuleSyntax` (imports de type toujours via `import type`),
  `forceConsistentCasingInFileNames`, `noFallthroughCasesInSwitch`.
- **ESLint** : flat config native `next/core-web-vitals` + `next/typescript`
  (`eslint.config.mjs`), pas de wrapper `FlatCompat` (Next 16+ l'expose nativement). Override :
  `@typescript-eslint/no-unused-vars` ignore les identifiants préfixés `_` (args, variables,
  éléments de déstructuration) — convention pour le pattern « omettre une clé via déstructuration »
  (`const { id: _id, ...rest } = x`). Ça aligne ESLint sur ce que TypeScript tolère déjà nativement
  pour les patterns de déstructuration et les paramètres de fonction sous
  `noUnusedLocals`/`noUnusedParameters` (mais pas pour une variable isolée type `const _x = 1` hors
  déstructuration, que `noUnusedLocals` continue de signaler).
- **Prettier** + `prettier-plugin-tailwindcss` (tri automatique des classes Tailwind),
  `printWidth: 100`, doubles guillemets.
- **Husky + lint-staged** sur `pre-commit` (prettier + eslint --fix sur les fichiers stagés
  uniquement) ; **jamais** les tests dans le hook — ça reste une responsabilité CI, pour un hook
  rapide.
- **Vitest + Testing Library**, `environment: "jsdom"`, `resolve.tsconfigPaths: true` (pas besoin
  du plugin `vite-tsconfig-paths`, Vite le supporte nativement). Vitest globals désactivés →
  `afterEach(cleanup)` explicite dans `src/test/setup.ts` (sinon le DOM n'est pas nettoyé entre
  tests et les requêtes RTL deviennent ambiguës d'un test à l'autre).
- **CI** (`.github/workflows/ci.yml`) : `typecheck` → `lint:ci` → `test` → `build`, dans cet
  ordre, sur chaque push/PR vers `main`.
- **shadcn/ui** : toujours initialisé sur **Radix UI**, pas Base UI (le défaut actuel du CLI). Si
  besoin de réinitialiser ou d'ajouter un composant : `pnpm dlx shadcn@latest init -b radix -p nova
-y`, puis `pnpm dlx shadcn@latest add <composant> -y`. Vérifier après coup que `package.json`
  liste bien `radix-ui`, pas `@base-ui/react`.
- **`docs/adr/`** : une décision d'architecture = un fichier, jamais édité rétroactivement (une
  décision reconsidérée donne lieu à un nouvel ADR qui référence l'ancien).

## Workflow

Un ticket GitHub par tâche (label `enhancement`/`bug`/`chore`/`documentation`) ; une branche + une
PR par sujet ; rebase sur `main` plutôt que merge ; squash-merge ; suppression des branches après
merge. Voir le CLAUDE.md de
[BrunoSchvartzDev](https://github.com/TwelveLab12/BrunoSchvartzDev/blob/main/CLAUDE.md) pour le
détail du cycle Project board / labels.
