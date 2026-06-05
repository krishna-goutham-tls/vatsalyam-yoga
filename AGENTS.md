# Vatsalyam Yoga

Landing page for Vatsalyam Yoga — a yoga studio in Bangalore offering women's, senior, kids, online, and corporate yoga. Single-page static site.

## Stack
Next.js 16 (App Router, static export), React 19, Tailwind CSS 4, Framer Motion 12, TypeScript 5, clsx

## Commands
- `npm run dev` — Dev server
- `npm run build` — Static export to `out/`
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Build Target
- `output: "export"` — fully static, no server. Deployed as static files.
- `images.unoptimized: true` — no Next.js image optimization (static export).
- `trailingSlash: true` — clean URLs for static hosting.

## Architecture
- Single page: `src/app/page.tsx` composes 10 sections in order: Hero → About → Credibility → Classes → Stories → VideoTestimonials → Founder → Contact → Workshops → Footer
- `src/components/Header.tsx` — fixed header with mobile hamburger (Framer Motion animated)
- `src/components/sections/` — one file per section, all `"use client"` components
- `src/components/animations/` — `FadeIn`, `StaggerContainer`, `StaggerItem` (shared Framer Motion wrappers), `CountUp` (spring-animated number counter)
- No API routes, no server components with data fetching, no database

## Design System
- Fonts: Playfair Display (display/headings), Cormorant Garamond (script/italic accents), Sora (body)
- Colors defined in `globals.css` via `@theme inline`: parchment, linen, deep-forest, terracotta, burgundy, gold, muted-olive, charcoal, sage
- All sections are full-viewport-height (`min-h-[100dvh]`) with alternating `bg-parchment` / `bg-linen` / `bg-deep-forest` backgrounds
- Mobile-first responsive: single column mobile, two-column desktop with `lg:` breakpoint
- Subtle gold accent lines, borders, and dividers throughout

## Assets
- Images: `/public/*.jpg` (hero, community, women-class, seniors-chair, kids-group, zoom-class, teaching-class, seated, warrior, kids-yoga-pose, zoom-class)
- Videos: `/public/video{1-4}.mp4` (large files, 1–38 MB each)
- Logos: `/public/logo.png`, `logo-icon.png`, `logo-name.png`
- Workshop posters: `/public/workshops/*.jpg`

## Persistent Rules / Conventions
- All section components are `"use client"` (Framer Motion requires it)
- Use `FadeIn` / `StaggerContainer` / `StaggerItem` for scroll animations, not raw `motion.div`
- Image components use `next/image` with `fill` + `sizes` for responsive loading
- Contact CTA is WhatsApp (`wa.me/919902811669`), no backend form handler
- JSON-LD structured data in `page.tsx` for SEO (LocalBusiness schema)
- Extensive OpenGraph + Twitter card metadata in `layout.tsx`
- Domain: `vatsalyamyoga.com`

## External Services
| Service | Purpose | Status |
|---------|---------|--------|
| PracticeNow | Class booking (vatsalyamyoga.practicenow.us) | Active |
| WhatsApp Business | Primary contact channel | Active |
| Instagram | Social presence (@vatsalyamyoga) | Active |
| LinkedIn | Founder profile (rajeswarisitaraman) | Active |

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Context Reference
| File | Load When |
|------|-----------|
| .context/current.md | Every session — active state |
| .context/history/ | Only when user asks for past decisions |
