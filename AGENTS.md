# AGENTS.md — FlowRight Plumbing React + Vite Project

## Stack
- **React 19** + **Vite 5** (ESM, `type: "module"`)
- **Tailwind CSS v3** (configured via `tailwind.config.js`)
- **Lucide React** for icons
- No TypeScript, no ESLint, no Prettier, no test runner configured

## Commands
```bash
npm run dev      # Start dev server on port 5173 (host: true)
npm run build    # Production build to ./dist
npm run preview  # Preview production build locally
```

## Project Structure
```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── AGENTS.md
└── src/
    ├── main.jsx           # Entry: React 19 StrictMode
    ├── App.jsx            # Single-page layout: Header, Hero, Services, About, Contact, Footer
    ├── index.css          # Tailwind imports + component utilities
    ├── data/
    │   └── siteData.js    # All content: company info, services, features, testimonials
    └── components/        # 6 presentational components
        ├── Header.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Color Palette (Xiloteca Trevigiana — see DESIGN.md)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#1032CF` | Strongest CTAs, key links, active states |
| `secondary` | `#141414` | Near-black text, headings, footer bg |
| `tertiary` | `#F8F5F1` | Warm paper page bg, primary button fill |
| `neutral` | `#EDE5DB` | Warm beige cards, panels |
| `surface` | `#FFFFFF` | Container surfaces, overlays |
| `border` | `#00000012` | Subtle translucent borders |
| `muted-border` | `#E5E7EB` | Faint dividers, card framing |
| `error` | `#C81E1E` | Validation/destructive states |

Defined in `tailwind.config.js` → available as `bg-primary`, `text-secondary`, `border-border`, etc.

## Key Conventions

### Tailwind v3
- Config in `tailwind.config.js` (not v4's CSS-first approach)
- Custom colors in `theme.extend.colors`
- Fonts: Uncut Sans via Fontshare (body + headings, 400/500, compact sizes) with Inter Tight fallback — see `index.html`
- Shape language is square: `rounded-none` buttons/inputs, `rounded-md` cards, `rounded-lg` max for imagery
- Component utilities in `src/index.css` `@layer components`: `.btn-primary` (paper), `.btn-accent` (blue CTA), `.btn-compact`, `.btn-secondary` (outline), `.section`, `.container`, `.card`, `.chip`, `.field`, `.field-area`

### Components
- All components are **presentational** — minimal state (only `Header` mobile menu, `Contact` form)
- Data sourced from `src/data/siteData.js` (single source of truth)
- Props passed explicitly — no context providers needed

### Accessibility
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`)
- ARIA labels on icon-only buttons, navigation
- Focus-visible states on all interactive elements
- `alt`/`aria-hidden` on decorative SVGs
- Form labels linked to inputs

## Gotchas
- **No lint/typecheck/test** — `npm run build` is the only verification
- **No path aliases** — imports use relative paths (`./components/…`)
- **React 19** — uses `createRoot` API
- **Vite 5** — standard Rollup-based build
- **`style jsx` in Header** — only place using inline keyframes for mobile menu animation

## Working in This Repo
- Edit content in `src/data/siteData.js` — all copy, services, testimonials live there
- Add sections by creating a component in `src/components/` and importing in `App.jsx`
- Design tokens: `DESIGN.md` is the source of truth; mirror token changes in `tailwind.config.js` `theme.extend.colors` or `src/index.css` `@layer components`
- Mobile menu: toggle logic in `Header.jsx`, animation in `<style>`
- Form submission: currently mock (3s timeout) — replace `handleSubmit` in `Contact.jsx` with real API call