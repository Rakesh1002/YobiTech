# YobiTech — Overview

> **One-liner:** A boutique that ships production-grade AI agents on Cloudflare in 30 days, fixed fee, money-back if it misses the agreed acceptance criteria — for mid-market SaaS and digital-native companies stuck in pilot purgatory.

The single cold-start doc. A teammate should read this and know what this is, how to
run it, and the decisions that shaped it — in under 30 minutes.

## What & why
- **Problem:** 80%+ of corporate AI pilots fail to reach production; buyers have paid big firms six figures for slide decks and hallucinating reports. They need someone who actually ships a working agent, fast, with a guarantee.
- **Who it's for:** Mid-market SaaS / digital-native companies (50–500 headcount, $5–50M ARR) with a CTO/Head-of-AI who has already burned $30–100K on a pilot that didn't ship.
- **What we're building:** This repo is the YobiTech marketing site — a single-page positioning around the 30-day Production Agent offer, with SKU pricing, case studies, a build-diary blog, and a hardened lead-capture form. The consultancy delivers Cloudflare-native AI agents; this site is the front door that converts inbound into discovery calls.
- **Stage:** active (registered company, brand, Cloudflare deploy wired; pre-PMF, customer count low).
- **Status right now:** Marketing site built and live at yobitech.in (Next.js 15 + Cloudflare Workers). Routes for home, pricing, work, playbook, refunds, terms, and a hardened `/api/contact` lead capture are in place.

## How to run it
```bash
pnpm install
cp .env.example .env
# Fill in DATABASE_URL, TURNSTILE keys, RESEND_API_KEY
pnpm prisma generate
pnpm dev          # http://localhost:3000 (Next dev, Turbopack)
```

Build & deploy:
```bash
pnpm build        # prisma generate + next build
pnpm build:cf     # next build + OpenNext for Cloudflare Workers
pnpm preview:cf   # local Cloudflare Workers preview via wrangler
pnpm deploy:cf    # deploy to yobitech.in / www.yobitech.in
```

For Cloudflare deploys, set secrets via `wrangler`: `DATABASE_URL`, `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`.

- **Prod URL:** https://yobitech.in
- **Repo:** https://github.com/Rakesh1002/YobiTech
- **Deploy:** Cloudflare Workers via OpenNext (`pnpm deploy:cf`); domains `yobitech.in`, `www.yobitech.in` bound in `wrangler.jsonc`.

## Where things are
| Area | Location |
|------|----------|
| Frontend / app | `src/app/` (App Router pages, layout, globals) |
| Page sections | `src/components/sections/` |
| UI primitives | `src/components/ui/` (curated shadcn subset) |
| Backend / API | `src/app/api/contact/route.ts` (Turnstile + rate-limit + Resend) |
| Lib / hooks | `src/lib/` (prisma client, `cn` util), `src/hooks/` |
| Data model | `prisma/schema.prisma` (`ContactMessage`) |
| Infra / config | `wrangler.jsonc` (Cloudflare Workers config) |
| Scripts | `scripts/generate-logos.mjs` (Sharp logo generator) |
| Static assets | `public/` |

## Top 5 decisions to know
1. Repositioned from a generic four-pillar services brochure to a single productized "30-day Production Agent, money-back" offer — the only wedge a solo founder can hold. → [[thesis]]
2. Cloudflare-native delivery stack (Workers + Workflows + AI Search + Workers AI + D1) as the default — compresses build time ~60% vs the AWS+Pinecone+OpenAI multi-vendor stack competitors run. → [[architecture]]
3. Acceptance-criteria refund clause is the trust mechanism — buyer signs the test cases on day 1, refund if a P0 fails. → `/refunds`
4. Site stack is Next.js 15 + Prisma + Postgres (Neon) on Cloudflare Workers via OpenNext; Prisma/Postgres is slight overkill for a contact-only model (candidate to swap for D1 + Drizzle). → [[architecture]]
5. Strategy docs are kept private (gitignored) because the repo is public; the canonical narrative lives in `docs/strategy/`. → [[thesis]]

## Key links
- **Strategy:** [[thesis]] · [[market]] · **Architecture:** [[architecture]] · **PRD:** [[prd]] · **Roadmap:** [[roadmap]]
- **Live site:** https://yobitech.in · **Repo:** https://github.com/Rakesh1002/YobiTech
- **Company:** YOBITECH SERVICES PRIVATE LIMITED (CIN U66190KA2023PTC171906)

---
**Owner:** Rakesh Roushan · **Last reviewed:** 2026-06-21 · **Review by:** 2026-09-21
