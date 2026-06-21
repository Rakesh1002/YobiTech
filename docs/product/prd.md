# YobiTech — PRD

> **Scope:** The YobiTech marketing site (this repo) — the front door that converts inbound interest in the "30-day Production Agent, money-back" offer into booked discovery calls. (The consulting delivery itself is scoped per client SOW, not here.)

## Goal
Convert qualified mid-market buyers (CTO / Head-of-AI with a failed pilot) into discovery-call conversations. The site exists to make the productized offer legible, prove credibility, and capture leads with low friction. Target: site converts inbound visitors into ≥5 qualified discovery conversations/month from content + outbound landings.

## Users & jobs
- **Buyer:** mid-market SaaS / digital-native CTO/Head-of-AI in pilot purgatory. Job: *"In under 5 minutes, decide whether these people can actually ship my agent in 30 days and whether the guarantee is real, then book a call."* Detail: [[jtbd]] {prompt: write jtbd.md}
- **Secondary:** Cloudflare AEs / VC-PE partners scanning for a credible Workers-AI specialist to refer port-cos to.

## Requirements
### Must have
- [x] Single-page positioning (Hero / Proof / SKUs / How-it-works / Money-back / Tech / We-don't-do / About / Contact) — `src/app/page.tsx`
- [x] Pricing page: 3 SKUs + retainer tiers + FAQ — `src/app/pricing/page.tsx`
- [x] Acceptance-criteria refund clause page — `src/app/refunds/page.tsx`
- [x] Hardened lead capture (Turnstile + rate-limit + Resend) — `src/app/api/contact/route.ts`
- [x] SEO/AEO: Organization + Service JSON-LD, OG metadata — `src/app/layout.tsx`
- [x] Case-study index — `src/app/work/page.tsx`
- [x] Build-diary blog — `src/app/playbook/page.tsx`
- [x] Standard terms — `src/app/terms/page.tsx`

### Should have
- [ ] Published case studies with quantified outcomes (latency improvement, cost saved, time-to-ship) — currently index scaffolding only
- [ ] "Agent Cost Calculator" free tool (Cloudflare vs AWS vs Vercel) as inbound trojan horse
- [ ] Cal.com on Cloudflare embed for direct discovery-call booking
- [ ] Build-diary posts populated (1 serialized build per delivery)

### Non-goals
- General "we do AI / data eng / cloud" services content — explicitly killed; the "we don't do" section enforces this
- Self-serve checkout / SaaS billing — this is services, sold via discovery call
- Multi-language / heavy CMS — keep it a fast static-ish marketing site

## Success metrics
- ≥5 qualified inbound discovery conversations/month attributable to the site
- ≥1 published case study with quantified outcomes (M2 onward)
- Top-5 ranking for ~10 long-tail terms ("Cloudflare AI agent example", "30-day AI agent", "AI implementation rescue") within 6 months

## Open questions
- Swap Prisma + Postgres (Neon) for D1 + Drizzle now that the only model is `ContactMessage`? → Decisions DB / [[architecture]]
- Booking flow: embed Cal.com vs. keep contact form as the only CTA?

---
**Owner:** Rakesh Roushan · **Last reviewed:** 2026-06-21 · **Review by:** 2026-09-21
