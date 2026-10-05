# DESIGN.md — FlowRight Plumbing Site Design System

> **Source of truth for all visual design in this repo.**
> Change the design here first, then mirror the change in code.
> Token locations: `tailwind.config.js` → `src/index.css` → components.

## 1. Brand

- Company: FlowRight Plumbing — "Your Trusted Local Plumbing Experts"
- Feel: warm, trustworthy, local-family-business. Cream page background, olive
  primary actions, gold highlights, charcoal text.

## 2. Color palette

| Token      | Hex       | Tailwind class            | Usage                                              |
|------------|-----------|---------------------------|----------------------------------------------------|
| `cream`    | `#FCF0DA` | `bg-cream`, `text-cream`  | Page background, footer text on dark               |
| `olive`    | `#AEAC78` | `bg-olive`, `text-olive`  | Primary buttons, icons, links, accents             |
| `gold`     | `#F2C46A` | `bg-gold`, `text-gold`    | Secondary buttons, stars, badges, highlights       |
| `charcoal` | `#4C4541` | `text-charcoal`           | Body text, headings, footer background             |
| white      | `#FFFFFF` | `bg-white`                | Cards, Services/Contact section backgrounds        |

Derived opacities in use: `olive/10` (borders, icon chips), `olive/20`
(input borders, badges), `gold/10`–`gold/20` (badges, gradients),
`charcoal/60`–`charcoal/80` (secondary text), `white/10` (footer borders).

Section background rhythm: cream (Hero) → white (Services) → cream (About)
→ white (Contact) → charcoal (Footer).

## 3. Typography

- Body: **Inter** (`font-sans`), weights 400/500/600 — loaded in `index.html`.
- Headings: **Poppins** (`font-heading`), weights 500/600/700.
- Scale:
  - Hero `h1`: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`
  - Section `h2`: `text-3xl md:text-4xl font-bold`
  - Card `h3`: `text-xl` (Services) / `text-lg` (About)
  - Eyebrow badge: `text-sm font-medium`, pill `bg-gold/20 text-olive`
  - Body: `text-lg` lede / base `text-charcoal/70 leading-relaxed` for muted copy

## 4. Layout & spacing

- `.container`: `max-w-7xl mx-auto` (see `src/index.css`).
- `.section`: `py-16 md:py-24 px-4 sm:px-6 lg:px-8`.
- Hero: `pt-32 md:pt-40` (clears fixed header), two-column grid on `lg`
  (`grid lg:grid-cols-2 gap-12 items-center`), stacks on mobile.
- Content grids: Services `1/2/3` cols (`md:grid-cols-2 lg:grid-cols-3 gap-6`);
  About/Contact `lg:grid-cols-2 gap-12 lg:gap-16`.
- Radius: `rounded-lg` buttons/inputs, `rounded-xl` cards, `rounded-3xl`
  hero video frame, `rounded-full` pills. Shadows: `shadow-sm` cards,
  `shadow-xl` hero video.

## 5. Component utilities (`src/index.css` @layer components)

- `.btn-primary` — olive bg, white text, hover lift + `shadow-olive/30`,
  gold focus ring offset by cream.
- `.btn-secondary` — gold bg, charcoal text, same interaction treatment.
- `.card` — white, `rounded-xl p-6`, `border-olive/10`, hover shadow + border.
- Form inputs — `px-4 py-3 rounded-lg border-olive/20`, focus
  `border-olive + ring-olive/20`. Labels `text-sm font-medium`.
- Icon chip — `w-14 h-14 rounded-xl bg-olive/10 text-olive`, fills olive with
  white icon on card hover (`group-hover`).

## 6. Sections (all in `src/components/`, copy in `src/data/siteData.js`)

1. **Header** (`Header.jsx`) — fixed, `bg-cream/95 backdrop-blur`,
   `h-16 md:h-20`, logo + 4 nav links + Call CTA; mobile slide-down menu
   (the repo's only keyframe animation, inline `<style jsx>`).
2. **Hero** (`Hero.jsx` + `HeroVideo.jsx`) — left: eyebrow badge, `h1`,
   lede, Call/Schedule CTAs, 3 trust features. Right: looping
   Remotion-rendered MP4 (`public/hero-video.mp4`, poster
   `public/hero-poster.jpg`), composition source `src/remotion/PlumberHero.jsx`
   uses the same palette (§2).
3. **Services** (`Services.jsx`) — 6 `.card` articles with icon chips,
   gold CTA below.
4. **About** (`About.jsx`) — story + 4 stat tiles + 6 feature cards.
5. **Contact** (`Contact.jsx`) — info list + emergency strip
   (`bg-gold/10 border-gold/20`) + `.card` form (mock submit).
6. **Footer** (`Footer.jsx`) — charcoal bg, 4 columns, gold hover states,
   license strip with `border-white/10`.

## 7. Icons & media

- UI icons: `lucide-react`. Decorative SVGs: `aria-hidden="true"`.
- Hero video: 800×800, 150 frames @ 30fps (5s seamless loop), inline SVG
  icons only — **no emoji** (headless renderers lack color-emoji fonts).
- Re-render: `npx remotion render src/remotion/index.js PlumberHero
  public/hero-video.mp4` + still for the poster.

## 8. Accessibility (non-negotiable)

Semantic landmarks, labelled nav, `aria-expanded/controls` on mobile menu,
`alt`/`aria-hidden` on decoration, visible focus rings on all interactives,
`<label>` bound to every input.

## 9. Changing the design

1. Edit this file first.
2. Mirror tokens in `tailwind.config.js` (`theme.extend.colors`,
   `fontFamily`) and `src/index.css` (`@layer base/components`).
3. Update section components; keep copy in `src/data/siteData.js`.
4. Verify with `npm run build` (only check available).
