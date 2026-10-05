# FlowRight Plumbing — OpenCode Demo Project

> **Demo project only.** This is a public showcase for building with [OpenCode](https://opencode.ai) CLI, not a production plumbing site.

Live demo deployed on Vercel: *(add your Vercel URL here)*

A single-page React + Vite site for a fictional plumbing company ("FlowRight"), re-skinned into 12+ design variants by parallel OpenCode agents, each on its own branch/port.

## How this was built

- Generated with **OpenCode CLI running in WSL (Windows side)**.
- **Skills used:** Remotion skills (`remotion-best-practices`, `remotion-captions`, `remotion-create`, `remotion-docs`, `remotion-interactivity`, `remotion-maps`, `remotion-markup`, `remotion-multimedia`, `remotion-render`, `remotion-saas`, `remotion-studio`, `remotion-upgrade` — see `skills-lock.json`). Installed skills live in `.agents/` (git-ignored, reproducible via the lock file).
- **Multi-agent workflow:** multiple simultaneous OpenCode agents each worked on a separate branch (see below). Each branch applies a different source doc from `Designs/` as its design system (`DESIGN.md` + `tailwind.config.js` + components).
- Branch-to-design traceability is in [`PORTS.md`](./PORTS.md). Agent/contributor conventions are in [`AGENTS.md`](./AGENTS.md). Active design tokens are in [`DESIGN.md`](./DESIGN.md) (currently Xiloteca Trevigiana on `main`).

## Branches & preview ports

Each design branch runs as a git worktree (e.g. `../variants/<name>`) with its own `node_modules`, served via `vite --port <port>` (all `vite.config.js` files default to 5173).

| Port | Branch | Source doc in `Designs/` |
|------|--------|--------------------------|
| 5173 | `xiloteca` | `xiloteca.it-design.md` |
| 5174 | `design/colabs-editorial` | `DESIGN_CoLabsLightEditorial.md` |
| 5175 | `design/warm-heritage` | `DESIGN_WarmHeritage.md` |
| 5176 | `design/dribbble` | `dribbble.com-design.md` |
| 5177 | `design/archival-ledger` | `intelligence-ai-design.md` |
| 5178 | `design/wherenext` | `kamdalej.sk-design.md` |
| 5179 | `design/onyx-doctor` | `onyx.doctor-design.md` |
| 5180 | `design/rulebase` | `rulebase.co-design.md` |
| 5181 | `design/smc-green` | `smc.co-design.md` |
| 5182 | `design/taylor-hare` | `taylorhare.com-design.md` |
| 5183 | `design/wealthsimple-dark` | `wealthsimple.com-design.md` |
| 5184 | `design/context` | `www.context.dev-DESIGN.md` |

See [`PORTS.md`](./PORTS.md) for full notes (`main` itself is not served).

## Stack

- **React 19** + **Vite 5** (ESM)
- **Tailwind CSS v3** (config in `tailwind.config.js`, utilities in `src/index.css`)
- **Lucide React** icons
- No TypeScript, ESLint, Prettier, or test runner — `npm run build` is the only verification

## Project structure

```
├── src/
│   ├── main.jsx            # React 19 createRoot entry
│   ├── App.jsx             # Header / Hero / Services / About / Contact / Footer
│   ├── index.css           # Tailwind + .btn-*, .section, .card, .field utilities
│   ├── data/siteData.js    # Single source of truth for copy, services, testimonials
│   └── components/         # 6 presentational components (Header, Hero, Services, About, Contact, Footer)
├── Designs/                # 13 design research docs (one per variant)
├── public/                 # Static assets (hero image/video)
├── DESIGN.md               # Active design tokens
├── PORTS.md                # Committed branch → port mapping (local dev convention)
├── AGENTS.md               # Contributor conventions
├── README.md               # This file
└── .gitignore              # Ignores node_modules/, dist/, .agents/, .vscode/
```

Notes: components are presentational (state only in `Header` mobile menu + `Contact` mock form, 3s timeout — replace `handleSubmit` with a real API for production). Content edits go in `src/data/siteData.js`. `node_modules/`, `dist/`, and `.agents/` are git-ignored.

## Getting started

Requirements: Node 18+ and npm.

```bash
git clone <this-repo-url>
cd opencode-demo
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production build to ./dist
npm run preview  # preview the build locally
```

## Reproduce the multi-agent setup (OpenCode)

1. Clone this repo and open it in OpenCode.
2. Ask the OpenCode CLI to launch one agent per design variant, e.g.:
   > "Create a git worktree + branch per doc in `Designs/` (see `PORTS.md` for naming), apply that doc as the design system (`DESIGN.md`, `tailwind.config.js`, components), `npm install` in each worktree, and start each with `vite --port <port>`."
3. Each agent works isolated on its branch/worktree; compare variants at `http://localhost:5173`–`5184`.
4. Merge or deploy the winner (this repo's Vercel deployment tracks the selected branch).

## Deploy

Any static host works (`npm run build` → `dist/`). The reference deployment is on **Vercel** — connect the repo, framework preset Vite, build command `npm run build`, output dir `dist`.
