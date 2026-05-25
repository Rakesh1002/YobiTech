"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const skus = [
  {
    name: "Starter Agent",
    price: "$30,000",
    duration: "30 days",
    summary:
      "One agent, one job, in production. For teams who need to ship a single working agent into their stack — fast.",
    includes: [
      "Discovery + acceptance criteria signed in week 1",
      "Cloudflare-native build (Workers + AI Search + Workflows)",
      "Auth, retrieval over your data, observability dashboard",
      "Deploy to your environment with handover docs",
      "30 days of bug-fix support post-launch",
    ],
    cta: "Book scoping call",
    featured: false,
  },
  {
    name: "Production Agent",
    price: "$60,000",
    duration: "30 days",
    summary:
      "The flagship. Refund clause baked in: if a single P0 acceptance criterion fails, you get your money back. No arguments.",
    includes: [
      "Everything in Starter Agent",
      "Refund clause on signed acceptance criteria",
      "Multi-tool agent with custom retrieval over your data",
      "SLA-backed observability + alerting (Sentry + PostHog)",
      "Loom walkthrough + recorded handover for your team",
      "First month of agent-ops retainer included",
    ],
    cta: "Book scoping call",
    featured: true,
  },
  {
    name: "Agent Fleet",
    price: "$120,000",
    duration: "60 days",
    summary:
      "Multi-agent system for teams replacing a failed enterprise pilot. Includes orchestration, governance, and 90 days of ops.",
    includes: [
      "Everything in Production Agent",
      "Multi-agent orchestration on Cloudflare Workflows",
      "Governance + audit trail for EU AI Act / DPDP",
      "Pilot rescue: we read your old vendor&apos;s code first",
      "90 days of agent-ops retainer included",
    ],
    cta: "Book scoping call",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three SKUs. Fixed fee. No SOWs.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You pick a SKU, we sign the acceptance criteria, you wire 50% upfront.
            We ship in 30 days or you don&apos;t pay the rest.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {skus.map((sku, index) => (
            <motion.div
              key={sku.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <Card
                className={`p-7 h-full flex flex-col transition-all duration-300 ${
                  sku.featured
                    ? "border-primary/60 shadow-lg shadow-primary/10 bg-gradient-to-br from-primary/5 to-violet-500/5 relative"
                    : "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 bg-gradient-to-br from-background to-muted/20"
                }`}
              >
                {sku.featured && (
                  <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most teams pick this
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-semibold mb-2">{sku.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold">{sku.price}</span>
                    <span className="text-sm text-muted-foreground">
                      / {sku.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sku.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {sku.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={sku.featured ? "default" : "outline"}
                  className="rounded-full w-full"
                  asChild
                >
                  <a href="#contact">{sku.cta}</a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto"
        >
          50% on signed acceptance criteria, 50% on production handover.
          USD invoicing via Stripe, INR via Razorpay. Standard MSA + DPA on day zero.
        </motion.p>
      </div>
    </section>
  );
}
