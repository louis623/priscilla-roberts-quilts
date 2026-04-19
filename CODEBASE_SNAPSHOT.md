# Codebase Snapshot — priscilla-roberts-quilts

**Generated:** 2026-04-19
**Repo:** https://github.com/louis623/priscilla-roberts-quilts
**Production:** https://priscilla-roberts-quilts.vercel.app

## Overview

A static Next.js App Router site presenting Priscilla Roberts's 25-piece quilting
collection. Each quilt is displayed in a mixed-grid editorial gallery with a
click-to-open lightbox showing the label, recipient, description, and details.
Implemented from a Claude Design HTML/CSS/JS handoff bundle.

## Stack

- **Framework:** Next.js 16.2.4 (App Router, static prerender, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3.4.17 + hand-authored tokens (CSS custom properties)
  in `app/globals.css`. Bespoke component classes kept as CSS rather than utility
  soup, per the design handoff note.
- **Fonts:** `next/font/google` — Bodoni Moda (display/headings) and Manrope
  (body, nav, captions, stats, footer). Two-font pairing per spec.
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

## Dependencies

```json
{
  "dependencies": {
    "next": "^16.2.4",
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
  "devDependencies": {
    "@types/node": "22.10.5",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "10.4.20",
    "postcss": "8.4.49",
    "tailwindcss": "3.4.17",
    "typescript": "5.7.3"
  }
}
```

## Quilt data types (`lib/quilts.ts`)

```ts
type QuiltCategory = "featured" | "strong" | "traditional";
type QuiltSize = "lg" | "md" | "sm" | "tall";

type Quilt = {
  id: string;
  name: string;
  recipient: string;
  featured?: boolean;
  size: QuiltSize;
  category: QuiltCategory;
  palette: string[];
  label?: string;
  description?: string;
  details?: {
    year?: string;
    size?: string;
    technique?: string;
    materials?: string;
  };
  longform?: boolean;
  hasDetailShot?: boolean;
  heroFile?: string;
};

const HERO_FILES: Record<string, string>; // Q-id → filename under /images/
function heroSrc(id: string): string | null;
const QUILTS: Quilt[]; // 25 entries, Q-01 … Q-25
```

## Design fidelity

The design handoff ships with three hero variants (editorial / museum / cascade),
three gallery layouts (mixed / uniform / masonry), and a live tweaks panel. Per the
TWEAKS block in the source (`bg: warm`, `accent: green`, `hover: glow`,
`layout: mixed`, `hero: editorial`, `type: bodoni-manrope`) this implementation
hard-codes the final picked combination and omits the tweaks panel.

Sections implemented:

1. **Hero** — editorial variant. Left: eyebrow, two-line display name with the
   surname in accent italic, italic tagline, meta row, CTA. Right: Q-11 hero
   image with low-opacity `01` numeral and tiny caption label.
2. **Collection** — 25-card mixed grid. Hover reveals name/recipient/label snippet
   with an accent glow. Filter bar toggles visibility.
3. **Lightbox** — 7/12 photo + 5/12 meta (eyebrow, name, italic recipient, pull
   quote for the label, description, details list, back link). Esc / ← / → / click-
   outside all close or navigate.
4. **About** — sticky portrait placeholder + copy, three-stat row.
5. **Footer** — single tracked-uppercase line.

Tokens (colors, type scale, spacing, motion) are faithful to the handoff
`design-system.html`.

## Background tokens

Root tokens in `app/globals.css`:

```
--bg-default: #0f0a1a   (canonical dark background)
--bg-black:   #070309
--bg-warm:    #15100f   (defined but no longer referenced)
--bg:         var(--bg-default)   ← body inherits this
```

The sticky top `.nav` hardcodes `background: #0f0a1a` at all scroll positions,
matching `--bg-default` so header and body render identically dark with no seam.

## Typography

- Body copy: Manrope 400 regular, line-height 1.6, full opacity (1.0) on all
  body paragraphs, captions, lightbox descriptions, and hero tagline.
- Headings: Bodoni Moda 300, italic accents in Bodoni italic.
- Labels / nav / meta: Manrope 300 UI weight (intentional for chrome).

## Image contract

Hero photos are named `Q-XX_Hero_<description>.jpg` in `public/images/`. Because
the on-disk filenames were assigned at shoot time while the quilt dataset was
authored separately, `lib/quilts.ts :: HERO_FILES` maps each quilt id to the
image file that actually contains that quilt (which is often NOT the file whose
Q-XX prefix matches the id). If an id has no file (Q-16 — Cathedral Windows),
the entry is omitted from `HERO_FILES` and the card falls back to a
palette-gradient placeholder driven by the quilt's `palette` array.

**Known issue (deferred, tracked for manual resolution):** 9 of the 25 slots
(Q-03 Patriots, Q-07 Log Cabin, Q-10 Nine Patch, Q-12 Bear Paw, Q-15 Double
Wedding Ring, Q-16 Cathedral Windows, Q-17 Star, Q-23 Flying Geese, Q-25 Four
Patch) are generic-pattern labels whose current image mappings do not confidently
depict the named pattern. Vision-matching against the source folder produced no
8+/10 match for any of these patterns — Priscilla's actual quilts in those slots
appear to be different patterns than the current labels describe. Awaiting
Priscilla's review to reconcile slot names with actual quilt patterns.

## Commands

```
npm install
npm run dev     # local dev server
npm run build   # static production build
vercel deploy --prod
```
