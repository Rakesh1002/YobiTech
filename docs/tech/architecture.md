# YobiTech — Architecture

> This covers the **marketing site** in this repo. The client *delivery* stack (the Cloudflare-native agent build kit YobiTech sells) is a separate concern summarized at the end and detailed in [[thesis]] Phase 8.

## System overview
A Next.js 15 (App Router) marketing site rendered on Cloudflare Workers via OpenNext. Mostly static positioning pages plus one server route (`/api/contact`) that validates a Turnstile token, rate-limits, persists the lead to Postgres via Prisma, and sends an email via Resend.

```
Browser
  │  (yobitech.in / www.yobitech.in)
  ▼
Cloudflare Workers (OpenNext-wrapped Next.js 15)
  ├─ Static pages: / /pricing /work /playbook /refunds /terms
  └─ POST /api/contact
        ├─ Cloudflare Turnstile  (bot / spam check)
        ├─ rate-limit            (abuse control)
        ├─ Prisma → Postgres (Neon, ap-southeast-1)   [ContactMessage]
        └─ Resend                (lead notification email)
```

## Components
| Component | Responsibility | Tech |
|-----------|----------------|------|
| App pages | Positioning, pricing, work, playbook, refunds, terms | Next.js 15 App Router, React 19, TypeScript |
| Sections | Composable page sections | `src/components/sections/` |
| UI primitives | Buttons, cards, forms, inputs | shadcn/ui (curated subset), Tailwind CSS |
| Animations | Motion / transitions | Framer Motion |
| Contact form | Client-side validation | react-hook-form + Zod |
| Lead API | Validate, rate-limit, persist, notify | `src/app/api/contact/route.ts` |
| Persistence | Store contact submissions | Prisma → Postgres (Neon) |
| Logo tooling | Generate logo assets | `scripts/generate-logos.mjs` (Sharp) |
| Runtime/host | Edge runtime + custom domains | Cloudflare Workers, OpenNext, `wrangler.jsonc` |

## Data model
Single entity today: `ContactMessage` in `prisma/schema.prisma` (lead capture from `/api/contact`). {prompt: confirm fields + whether any PII retention policy is needed → legal/compliance}

## External dependencies
| Service | Used for | Failure mode |
|---------|----------|--------------|
| Cloudflare Workers | Hosting / edge runtime | Site down; mitigated by CF reliability |
| Neon Postgres (ap-southeast-1) | Lead storage via Prisma | Contact submissions fail to persist (email still sends if ordered first) |
| Cloudflare Turnstile | Bot/spam filtering | Form blocked or spam flood if keys misconfigured |
| Resend | Lead notification email | Leads stored but no notification — silent miss |

## Key constraints & trade-offs
- **Prisma + Postgres for a contact-only model is slight overkill.** Strategy flags swapping to D1 + Drizzle (single-vendor Cloudflare, lower overhead). Kept for now to avoid churn pre-revenue. → [[roadmap]]
- **OpenNext on Workers** chosen to keep the whole stack on one Cloudflare bill (consistent with the consultancy's own "single-vendor" pitch) rather than Vercel.
- Secrets (`DATABASE_URL`, `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`) set via `wrangler secret put`, never committed.

## Delivery stack (what YobiTech sells — not this repo)
Cloudflare Workers + Durable Objects, Cloudflare Workflows for multi-step pipelines, AI Search (formerly AutoRAG) for hybrid retrieval, Workers AI (Kimi K2.5 / Llama 4) plus Claude/GPT via unified inference for high-stakes reasoning, Sandboxes for untrusted-code/browser agents, D1/Neon for data, R2 for objects, Clerk + Stripe/Razorpay, Sentry + PostHog + Logpush. Full rationale and scale risks in [[thesis]] Phase 8.

---
**Owner:** Rakesh Roushan · **Last reviewed:** 2026-06-21 · **Review by:** 2026-09-21
