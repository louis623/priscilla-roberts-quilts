# Codebase Snapshot — priscilla-roberts-quilts

**Generated:** 2026-04-20
**Repo:** https://github.com/louis623/priscilla-roberts-quilts
**Production:** https://priscilla-roberts-quilts.vercel.app

## Overview

A static Next.js App Router site presenting Priscilla Roberts's quilting
collection (currently 14 verified works). Each quilt is displayed in a
mixed-grid editorial gallery with a click-to-open lightbox showing the label,
recipient, description, and details. Implemented from a Claude Design
HTML/CSS/JS handoff bundle.

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
  Gallery.tsx         — client component: masonry grid + lightbox + keyboard nav
  QuiltPlaceholder.tsx — palette-driven fallback used when an image is missing
  Reveal.tsx          — IntersectionObserver scroll-reveal mounted on the home page
lib/
  quilts.ts           — 14-quilt dataset + HERO_FILES map from Q-id → filename
public/images/        — Hero JPGs (orphaned files for removed slots remain on disk)
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
const QUILTS: Quilt[]; // 14 verified entries
```

## Design fidelity

The design handoff ships with three hero variants (editorial / museum / cascade),
three gallery layouts (mixed / uniform / masonry), and a live tweaks panel. Per the
TWEAKS block in the source (`bg: warm`, `accent: green`, `hover: glow`,
`layout: mixed`, `hero: editorial`, `type: bodoni-manrope`) this implementation
hard-codes the final picked combination and omits the tweaks panel.

Sections implemented:

1. **Hero** — editorial variant. Left: two-line display name with the surname in
   accent italic, italic tagline, meta row (Textile Art · Quilting · Private
   Collection), CTA. Right: Q-11 hero image with low-opacity `01` numeral and a
   small solid-black caption label.
2. **Collection** — left block holds the section title ("The quilts, and the
   people they were made for.") with the italic portion in accent purple, plus
   the narrative paragraph below it; right block holds a placeholder feature
   quilt ("This is what I'm working on"). CSS-columns masonry grid (3 columns
   desktop / 1 mobile, 14 cards) sits directly under the intro — no filter bar,
   no category buttons, no work counter. Cards size naturally from image aspect
   ratios via `break-inside: avoid`. Hover reveals a compact solid-black caption
   with name/recipient/label snippet over the image; on hover the card title
   switches from cream to accent purple (`--accent-secondary`). Q-numbers are
   hidden from public view but remain in underlying data + file names.
3. **Lightbox** — 7/12 photo + 5/12 meta (name, italic recipient, pull quote for
   the label, description, details list, back link). Header shows only the quilt
   title and recipient (no Q-number, no category eyebrow). Tech detail labels
   render in green with a colon; values render in white at body text size.
   Navigation via thin stroke chevrons positioned just outside the image edges.
   Mobile viewports also get a fade-out "← swipe →" hint and touch-swipe
   navigation. Esc / ← / → / click-outside all close or navigate.
4. **About** — sticky portrait placeholder + copy. Narrative ends at the closing
   paragraph; no stats row, no horizontal rule.
5. **Footer** — single tracked-uppercase line ("Built by Neon Rabbit Digital
   Services"). No Contact nav item; the site has no contact form (private, for
   friends and family who already know how to reach Priscilla).

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

**Dataset history:** The original build shipped with 25 slots. A 2026-04-19
cleanup removed 11 unverified slots whose pattern names and/or images could not
be reconciled against Priscilla's actual quilts — 9 with fabricated pattern
labels (Q-03 Patriots, Q-07 Log Cabin, Q-10 Nine Patch, Q-12 Bear Paw, Q-15
Double Wedding Ring, Q-16 Cathedral Windows, Q-17 Star, Q-23 Flying Geese, Q-25
Four Patch) and 2 that failed vision matching (Q-04 Trip Around the World, Q-19
Pinwheels). The 14 surviving slots are vision-verified against their mapped
images. Outreach list for Priscilla lives at `PRISCILLA_QUILT_LIST.md` (repo
root). Orphaned image files in `public/images/` for removed slots are left in
place pending Priscilla's review.

## Commands

```
npm install
npm run dev     # local dev server
npm run build   # static production build
vercel deploy --prod
```
