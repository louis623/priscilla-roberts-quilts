# Codebase Snapshot — priscilla-roberts-quilts

**Generated:** 2026-04-18
**Repo:** https://github.com/louis623/priscilla-roberts-quilts
**Production:** https://priscilla-roberts-quilts.vercel.app

## Overview

A static Next.js App Router site presenting Priscilla Roberts's 25-piece quilting
collection. Each quilt is displayed in a mixed-grid editorial gallery with a
click-to-open lightbox showing the full label, recipient, description, and details.
Implemented from a Claude Design HTML/CSS/JS handoff bundle.

## Stack

- **Framework:** Next.js 16 (App Router, static prerender, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS + hand-authored tokens (CSS custom properties) in
  `app/globals.css`. Bespoke component classes (`.hero-name`, `.q-card`, etc.) are
  kept as CSS rather than utility soup, per the design handoff note.
- **Fonts:** `next/font/google` — Bodoni Moda (display/headings) and Manrope
  (body, nav, captions, stats, footer). Two-font pairing per the Claude Design spec.
- **Hosting:** Vercel (Fluid Compute / static prerender).

## File layout

```
app/
  globals.css         — design tokens, typography, layout, hero/gallery/about/lightbox
  layout.tsx          — root layout, next/font wiring
  page.tsx            — Home: nav, hero, collection, about, footer
components/
  Gallery.tsx         — client component: filter bar + grid + lightbox + keyboard nav
  QuiltPlaceholder.tsx — palette-driven fallback used when an image is missing
  Reveal.tsx          — IntersectionObserver scroll-reveal mounted on the home page
lib/
  quilts.ts           — 25-quilt dataset + HERO_FILES map from Q-id → filename
public/images/        — 24 Hero JPGs (Q-01 through Q-25; Q-16 has no hero shot)
tailwind.config.ts    — design tokens mirrored into Tailwind theme
next.config.ts
tsconfig.json
postcss.config.mjs
package.json / package-lock.json
```

## Design fidelity

The design handoff ships with three hero variants (editorial / museum / cascade),
three gallery layouts (mixed / uniform / masonry), and a live tweaks panel. Per the
TWEAKS block in the source (`bg: warm`, `accent: green`, `hover: glow`,
`layout: mixed`, `hero: editorial`, `type: bodoni-manrope`) this implementation
hard-codes that final picked combination and omits the tweaks panel — it is a
prototype-time tool, not production.

Sections implemented:

1. **Hero** — editorial variant. Left: eyebrow, two-line display name with the
   surname set in lavender italic, italic tagline, meta row, CTA. Right: Q-11 hero
   image with low-opacity `01` numeral and tiny caption label.
2. **Collection** — 25-card mixed grid (featured quilts span 3×2, tall pieces span
   2×2, strong pieces span 2×1, traditional span 2×1). Hover reveals
   name/recipient/label snippet with an accent glow. Filter bar toggles visibility.
3. **Lightbox** — 7/12 photo + 5/12 meta (eyebrow, name, italic recipient, pull
   quote for the hand-stitched label, description, details list, back link). Q-11
   shows the "A longer story is coming." footer. Esc / ← / → / click-outside all
   close or navigate.
4. **About** — sticky portrait placeholder + copy, three-stat row.
5. **Footer** — single tracked-uppercase line.

Tokens (colors, type scale, spacing, motion) are faithful to the handoff
`design-system.html`.

## Image contract

Hero photos are named `Q-XX_Hero_<description>.jpg` in `public/images/`. Because
the on-disk filenames were assigned at shoot time while the quilt dataset was
authored separately, `lib/quilts.ts :: HERO_FILES` maps each quilt id to the
image file that actually contains that quilt (which is often NOT the file whose
Q-XX prefix matches the id). If an id has no file (Q-16 — Cathedral Windows),
the entry is omitted from `HERO_FILES` and the card falls back to a
palette-gradient placeholder driven by the quilt's `palette` array.

## Header

The sticky top `.nav` uses a solid `#0f0a1a` background at all scroll positions
so nav text stays readable against any underlying content.

## Commands

```
npm install
npm run dev     # local dev server
npm run build   # static production build
vercel deploy --prod
```
