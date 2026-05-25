# YobiTech

Marketing site for **YobiTech** — a boutique that ships production AI agents on Cloudflare in 30 days, fixed fee, money-back if it misses acceptance criteria.

Live at [yobitech.in](https://yobitech.in).

Operated by [YOBITECH SERVICES PRIVATE LIMITED](https://www.mca.gov.in/) (CIN U66190KA2023PTC171906).

## Stack

- **Framework:** Next.js 15 (App Router, Turbopack dev) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (button, card, label, input, textarea, select, checkbox, form, badge)
- **Animations:** Framer Motion
- **Forms:** react-hook-form + Zod
- **Database:** PostgreSQL (Neon, ap-southeast-1) via Prisma
- **Hosting:** Cloudflare Workers (via OpenNext for Next.js)
- **Domains:** yobitech.in, www.yobitech.in (bound in `wrangler.jsonc`)

## Routes

| Route | Purpose |
|---|---|
| `/` | Single-page positioning (Hero / Proof / SKUs / How-it-works / Money-back / Tech / We-don't-do / About / Contact) |
| `/pricing` | 3 SKUs in detail + retainer tiers + FAQ |
| `/work` | Case-study index |
| `/playbook` | Build-diary blog |
| `/refunds` | Acceptance-criteria refund clause |
| `/terms` | Standard terms of service |
| `/api/contact` | Hardened lead capture (Turnstile + rate-limit + Resend) |

## Local development

```bash
pnpm install
cp .env.example .env
# Fill in DATABASE_URL, TURNSTILE keys, RESEND_API_KEY
pnpm prisma generate
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
pnpm build              # Next build (Vercel-style)
pnpm build:cf           # Next build + OpenNext for Cloudflare Workers
pnpm preview:cf         # Local Cloudflare Workers preview via wrangler
pnpm deploy:cf          # Deploy to yobitech.in / www.yobitech.in
```

For Cloudflare deploys, set secrets via `wrangler`:

```bash
wrangler secret put DATABASE_URL
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put RESEND_API_KEY
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Metadata, OG, JSON-LD (Organization + Service schemas)
│   ├── page.tsx                # Single-page composition
│   ├── globals.css
│   ├── api/contact/route.ts    # Hardened lead capture
│   ├── pricing/page.tsx        # SKU detail
│   ├── work/page.tsx           # Case studies
│   ├── playbook/page.tsx       # Build diaries
│   ├── refunds/page.tsx        # Acceptance-criteria money-back clause
│   └── terms/page.tsx
├── components/
│   ├── sections/               # Page sections
│   └── ui/                     # shadcn primitives (curated subset)
├── lib/                        # prisma client, cn utility
└── hooks/
prisma/schema.prisma            # ContactMessage model
public/                         # Static assets
scripts/generate-logos.mjs      # Sharp-based logo generator
wrangler.jsonc                  # Cloudflare Workers config
```

## Strategy

Internal strategy docs live at `STRATEGY.md` (canonical narrative) and `docs/strategy/` (supporting docs). Both paths are gitignored — the repo is public, the strategy is not.

## License

Copyright © 2026 YOBITECH SERVICES PRIVATE LIMITED. All rights reserved.
