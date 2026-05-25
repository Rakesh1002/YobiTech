import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing — 3 SKUs. Hard scope. No surprises.",
  description:
    "Starter Agent $30K • Production Agent $60K (money-back) • Agent Fleet $120K. Fixed fee, fixed timeline, signed acceptance criteria.",
  alternates: { canonical: "https://yobitech.in/pricing" },
};

const skus = [
  {
    id: "starter",
    name: "Starter Agent",
    price: "$30,000",
    timeline: "30 days",
    bestFor:
      "You need a working AI feature in your product, fast. No retainer required. Ideal for indie SaaS founders shipping an AI feature for the first time.",
    included: [
      "1 production AI agent with a single, well-defined job",
      "Acceptance criteria signed Day 0 (in plain English)",
      "Deploy on Cloudflare Workers + AI Search retrieval",
      "Observability dashboard (PostHog or your tool)",
      "Runbook + handoff doc + repo transfer",
      "30 days post-ship Slack support",
    ],
    notIncluded: [
      "Multi-agent orchestration (see Fleet)",
      "Money-back acceptance refund (see Production)",
      "Ongoing ops retainer (sold separately at $5–9K/mo)",
    ],
    examples: [
      "AI-powered customer-support agent on top of your existing knowledge base",
      "AI sales-prospecting agent that drafts personalized outbound",
      "AI document-extraction agent for an internal back-office workflow",
    ],
    highlighted: false,
  },
  {
    id: "production",
    name: "Production Agent",
    price: "$60,000",
    timeline: "30 days",
    bestFor:
      "You're rescuing a failed pilot or shipping your first production agent. Money-back guarantee if we miss the acceptance test on Day 30. The workhorse SKU.",
    included: [
      "1 production agent + retrieval (AI Search) + tool use",
      "Observability + monitoring + alerting on Day 1",
      "Money-back acceptance-criteria clause",
      "Sub-300ms p99 target (when feasible)",
      "Retainer-ready handoff (Slack + runbook + dashboards)",
      "AudioPod-grade ops standard",
    ],
    notIncluded: [
      "Multiple coordinated agents (see Fleet)",
      "Data warehouse rebuild (out of scope)",
      "Custom UI design (BYO)",
    ],
    examples: [
      "Rescue + re-ship of a previously failed AI pilot",
      "Production-grade voice agent for inbound calls",
      "Multi-step research agent with browser automation",
    ],
    highlighted: true,
  },
  {
    id: "fleet",
    name: "Agent Fleet",
    price: "$120,000",
    timeline: "60 days",
    bestFor:
      "You need multiple coordinated agents — a triage agent feeding a specialist agent, with shared memory and zero-trust networking between them. Built on Workflows v2 + Mesh.",
    included: [
      "Up to 3 coordinated agents with role separation",
      "Cloudflare Workflows v2 orchestration (50K concurrent)",
      "Cloudflare Agent Memory for shared state",
      "Cloudflare Mesh for zero-trust agent-to-agent comms",
      "60-day acceptance gate (vs 30 for Production)",
      "Partial-refund schedule (see /refunds for terms)",
    ],
    notIncluded: [
      "More than 3 agents in v1 (Phase 2 retainer)",
      "Custom hardware / on-prem deploys",
    ],
    examples: [
      "Customer-success agent fleet: triage → specialist → escalation",
      "Sales pipeline fleet: research → outreach → meeting-booking",
      "Compliance fleet: scan → classify → remediate → audit",
    ],
    highlighted: false,
  },
];

const retainers = [
  {
    name: "Light",
    price: "$5,000",
    hours: "~10 hrs/mo",
    fits: "1 Starter Agent in production. Minor tuning + uptime monitoring.",
  },
  {
    name: "Standard",
    price: "$9,000",
    hours: "~20 hrs/mo",
    fits: "1 Production Agent + small feature requests + observability tuning. The default.",
  },
  {
    name: "Premium",
    price: "$15,000",
    hours: "~30 hrs/mo",
    fits: "Agent Fleet ops + roadmap planning + multi-agent improvements. Quarterly QBR.",
  },
];

const faqs = [
  {
    q: "What if my scope changes mid-project?",
    a: "Change orders billed at $1,500/day for scope additions. We won't silently absorb scope creep; we won't surprise you with invoices either.",
  },
  {
    q: "Do you bill in USD or INR?",
    a: "USD default via Stripe. GBP / EUR / INR available on request (Razorpay for India billing). GST + DPDP compliance for Indian clients.",
  },
  {
    q: "What if I want to extend acceptance beyond 30 days?",
    a: "That triggers a re-scope to Fleet SKU. We don't extend Production SKUs because the money-back commitment depends on the 30-day cadence.",
  },
  {
    q: "Do you sign DPAs / NDAs / MSAs?",
    a: "Yes. Pre-vetted templates ship with the SOW. Most teams sign in 48 hours; we redline reasonably.",
  },
  {
    q: "What stack do you use?",
    a: "Cloudflare-native by default — Workers + Workflows v2 + AI Search + Agent Memory + Sandboxes. We'll adapt to your stack within reason, but the money-back clause assumes our stack.",
  },
  {
    q: "What if I cancel mid-project?",
    a: "Deposit (50% Day 0) is non-refundable. Remaining milestones cancelled. The money-back clause only applies if WE miss acceptance on Day 30, not if you cancel.",
  },
  {
    q: "Can you work with my existing eng team?",
    a: "Yes. Shared GitHub repo, daily Slack, weekly Loom demos. Your team gets visibility; we maintain delivery accountability.",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-3">Pricing</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Three SKUs. Hard scope. No surprises.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pick the one that matches what you need shipped. All prices in USD.
              </p>
            </div>

            {/* SKU detail cards */}
            <div className="space-y-12 mb-24">
              {skus.map((sku) => (
                <Card
                  key={sku.id}
                  id={sku.id}
                  className={`p-8 sm:p-10 scroll-mt-24 ${
                    sku.highlighted
                      ? "border-primary/40 bg-gradient-to-br from-background to-primary/5"
                      : ""
                  }`}
                >
                  {sku.highlighted && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-4">
                      <Sparkles className="w-3 h-3" />
                      Most chosen
                    </div>
                  )}

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <h2 className="text-2xl font-bold mb-2">{sku.name}</h2>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold">{sku.price}</span>
                        <span className="text-sm text-muted-foreground">/ {sku.timeline}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {sku.bestFor}
                      </p>
                      <Button
                        size="lg"
                        className="rounded-full w-full group"
                        asChild
                      >
                        <Link href="/#contact">
                          Book a discovery call
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>

                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-semibold mb-3">What&apos;s included</h3>
                        <ul className="space-y-2">
                          {sku.included.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-3">What&apos;s not included</h3>
                        <ul className="space-y-2 mb-6">
                          {sku.notIncluded.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <h3 className="text-sm font-semibold mb-3">Example projects</h3>
                        <ul className="space-y-1.5">
                          {sku.examples.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground italic">
                              — {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Retainer tiers */}
            <section id="retainer" className="mb-24 scroll-mt-24">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Post-acceptance retainers</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Once an agent is in production, we&apos;ll keep it that way. Monthly retainers cover ops, tuning, and small features.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {retainers.map((r) => (
                  <Card key={r.name} className="p-6">
                    <h3 className="font-semibold mb-1">{r.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold">{r.price}</span>
                      <span className="text-xs text-muted-foreground">/ month</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{r.hours}</p>
                    <p className="text-sm text-muted-foreground">{r.fits}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-border/40 pb-6 last:border-b-0">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA strip */}
            <div className="text-center py-12 rounded-3xl border border-primary/20 bg-primary/5">
              <h2 className="text-2xl font-bold mb-3">Ready to scope your project?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                30-minute discovery call with the founder. No deck. We&apos;ll sketch your architecture live.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/#contact">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
