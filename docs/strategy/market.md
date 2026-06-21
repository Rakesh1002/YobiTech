# YobiTech — Market

> Distilled from the canonical strategy narrative ([[thesis]]). All numbers carry source caveats — treat analyst "$X by 2035" figures as directional. Deeper teardowns and refreshed sizing are {prompts} below.

## Size
- **TAM (global AI consulting):** ~$11.07B in 2026, ~26% CAGR, scaling toward ~$90B by 2035 ([Future Market Insights](https://www.futuremarketinsights.com/reports/ai-consulting-services-market)). Use the lower bound — analyst reports sandbag.
- **SAM:** US/UK/SG mid-market SaaS + India digital natives, 50–500 headcount, board-level AI mandate. ~80,000 such companies globally (operator estimate from Crunchbase/Pitchbook proxy bands — not cleanly verified) × ~$50K/yr addressable AI-implementation spend ≈ **$4B**.
- **SOM (24 months):** 20–40 active accounts at $50–120K avg annual revenue = **$1–4M ARR ceiling**. Target the lower end deliberately — large enough to fund moonshots, small enough to avoid becoming a body shop.
- **Wedge market:** mid-market SaaS / digital-native companies that have already burned $50K+ on a failed AI pilot.

## ICP
- **Primary:** Mid-market SaaS / digital-native, 50–500 headcount, $5–50M ARR, with a CTO/Head-of-AI who has already spent $30–100K on a pilot that didn't ship. JTBD: *"Get me out of POC purgatory in 30 days so I can keep my job."*
- **Willingness-to-pay anchors:** their failed Accenture/Deloitte pilot ($80K–$300K); in-house ML eng ($250K loaded/yr + 4-month ramp). A $10K/mo retainer for 6 months ($60K) is a no-brainer comparison.
- **Secondary (pivot candidates if the horizontal wedge is too broad):** Indian B2B SaaS founders shipping AI features into their product; US legal/medical practices building voice agents; India-fintech compliance agents.

## Competition
| Competitor | What they do | Where they're weak | Our angle |
|------------|--------------|--------------------|-----------|
| AE Studio (LA, ~$31.6M rev, bootstrapped) | Genuine ML depth, Fortune-10 clients, real case studies | US cost basis (~$200–300/hr loaded), 4–8 wk kickoff, can't profitably take a $25K project | 50% cheaper, 30-day ship, productized SKUs — take the bottom of their funnel |
| Fractal Analytics (Mumbai/NYC, ~$300M, IPO-bound) | Deep enterprise relationships, India delivery scale, vertical IP | Slow procurement, 6-month engagements, enterprise-only, can't serve sub-$500K | Take the deal Fractal rejects as too small; India delivery, US packaging |
| Generic YC AI agencies (2025 glut) | Founder hustle, fast Loom demos, viral X content | No depth, no production track record, no ops; 60%+ dead in 18 months | We have a profitable shipped flagship (AudioPod, 100+ countries) as credibility 99% of them lack |
| Accenture / Deloitte / BCG / TCS | $1M+ "AI transformation" engagements | Expensive slide decks; trust crater post-Deloitte A$440K hallucination refund (Oct 2025) | 30-day fixed-price agent build with money-back — a thing they structurally can't offer |

Teardowns: {prompt: full teardown of AE Studio + 2 YC AI agencies — positioning, pricing pages, case-study depth → product/ or here}

## Trends & tailwinds
- **Cloudflare Agents Week 2026** collapsed agent build cost — Workflows + AI Search + Sandboxes turn a 12-week, 5-vendor build into ~4 weeks on one bill ([Cloudflare](https://blog.cloudflare.com/agents-week-in-review/)). Margin uplift competitors haven't ported to.
- **Frontier OSS at inference parity** (Kimi K2.5 on Workers AI, Llama 4) drops API cost basis ~50% vs sole-source OpenAI — enables confident fixed-price quoting.
- **Big-firm trust crater** — Deloitte refund, Accenture client churn rumors — pushes buyers toward guaranteed-outcome boutiques.
- **POC purgatory** — ~80% of pilots don't reach prod ([RAND 2025](https://www.pertamapartners.com/insights/ai-project-failure-statistics-2026)); 95% of GenAI deployments saw zero measurable ROI ([MIT NANDA, Jul 2025](https://talyx.ai/insights/enterprise-ai-implementation-failure)). That's pent-up re-build demand.
- **IndiaAI Mission compute subsidy** — ~40% off GPU rates for DPIIT-registered startups — margin tailwind for India-billed projects.

### Headwinds
- Commoditization of the "AI agency" category (price-dumping on the way down).
- AI-native tooling (Cursor, Lindy, Relevance) lets in-house teams ship agents themselves — shrinks the can't-DIY subset.
- Frontier model API price cuts make low-end wrapper agents trivially commoditizable — must sell ops + integration, not prompts.
- USD-from-India billing friction (GST + LRS/FEMA paperwork).

---
**Owner:** Rakesh Roushan · **Last reviewed:** 2026-06-21 · **Review by:** 2026-09-21
