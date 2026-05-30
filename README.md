# Edingrad — Brand Guidelines

A scalable, maintainable brand & design-system site for **Edingrad**, built with
**Next.js 14 (App Router)** and **TypeScript**, and styled after the IBM Design
Language. It ships as a static export, so it deploys to Vercel (or any static
host) with zero server configuration.

The whole site is **one scrolling document** with a sticky sidebar, scroll-spy,
search, light/dark theming, and a Previous/Next pager — all driven from a single
typed registry.

---

## Why this is maintainable & scalable

The key idea: **one section registry is the single source of truth.** Navigation,
ordering, the two-digit section numbers, the search index, scroll-spy, and the
pager are all *derived* from `src/lib/sections.ts`.

To add a new guideline section you do exactly two things:

1. Add an entry to `SECTIONS` in `src/lib/sections.ts`.
2. Create the matching component in `src/components/sections/` and drop it into
   `src/app/page.tsx`.

Nav links, sub-links, "on this page" jumps, section numbering, search results,
and the prev/next pager update **automatically**. Nothing else needs editing.

Other scalability levers:

- **Design tokens, not hard-coded styles.** All colour, spacing, type and
  surface decisions live as CSS variables in `src/app/globals.css` (light/dark
  themes via `[data-theme]`). Components reference tokens, so a rebrand is a
  token change, not a component rewrite.
- **Component layers with clear responsibilities** (see below).
- **Data-driven content.** Repetitive, high-volume content (the 24 UI icons, the
  30-type chart catalogue, the colour palette, the 12 animation principles) lives
  in typed modules under `src/data/` and is rendered by small components. Edit
  data, not markup.
- **Reusable primitives & charts.** `Section`, `Card`, `Swatch`, `DoDont`,
  `Pager`, and the prop-driven `BarChart` / `LineChart` / `Donut` are used across
  sections.

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        Root layout: metadata, no-flash theme script, <Shell>
│  ├─ page.tsx          Assembles Hero + 12 sections in registry order
│  └─ globals.css       Design tokens, base, app shell, section styles, @font-face
├─ lib/
│  ├─ sections.ts       ★ Section registry — nav, order, numbering, search, pager
│  ├─ theme.tsx         ThemeProvider + useTheme (persisted, system-aware)
│  └─ useScrollSpy.ts   Active-section tracking
├─ data/
│  ├─ colors.ts         Blue scale, families, grays, categorical, alerts, surfaces
│  ├─ charts.ts         30-type chart catalogue (blue-family thumbnails)
│  └─ principles.ts     Brand principles, 12 classic animation principles, voice
├─ components/
│  ├─ layout/           Shell, Header, Sidebar, Footer, ThemeToggle, Search
│  ├─ primitives/       Section, OnThisPage, Pager, Card, Swatch, DoDont, Pill
│  ├─ charts/           BarChart, LineChart, Donut, ChartCatalog
│  ├─ icons/            24 IBM-style UI icons as typed React components
│  └─ sections/         Hero + Philosophy … Help (one component per section)
public/fonts/           Self-hosted Palestra + Lynx Sans (woff2)
```

`★` = the file you touch most when extending the site.

---

## Running locally

Requires Node 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build → static export in ./out
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
npm run typecheck# tsc --noEmit (strict)
```

---

## Deploying to Vercel

The project is a standard Next.js app, so Vercel detects everything
automatically. Two options:

**A. Import the Git repo (recommended)**

1. Push this repo to GitHub (see below).
2. Go to <https://vercel.com/new>, import the repository.
3. Framework preset: **Next.js** (auto-detected). Build command and output are
   already declared in `vercel.json`. Click **Deploy**.

**B. Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

> `next.config.mjs` uses `output: 'export'` (fully static). If you later add
> server features (ISR, route handlers, server actions), remove that line and
> Vercel will build it as a server app with no other changes.

---

## Pushing to GitHub

This folder is already a Git repository with an initial commit. Create an empty
repo on GitHub (no README/license), then:

```bash
git remote add origin https://github.com/<you>/edingrad-brand-guidelines.git
git branch -M main
git push -u origin main
```

(Or with the GitHub CLI: `gh repo create edingrad-brand-guidelines --private --source=. --remote=origin --push`.)

---

## Theming

`ThemeProvider` resolves the theme as **saved preference → system preference →
light**, persists it to `localStorage`, and sets `data-theme` on `<html>`. A tiny
inline script in `layout.tsx` applies it before first paint to avoid a flash.
Hero and section bands follow the active theme; the top app-bar stays dark in
both (an IBM Design Language signature).

## Notes

- Fonts (Palestra, Lynx Sans) are self-hosted in `public/fonts` and declared via
  `@font-face` with `font-display: swap`.
- `npm audit` may report build-time advisories from transitive tooling
  dependencies (e.g. `postcss`); these are not part of the static runtime output.
  Run `npm update` periodically and keep Next.js on its latest 14.2.x patch.

© 2026 Edingrad Real Estate L.L.C — Brand Guidelines v1.0.
