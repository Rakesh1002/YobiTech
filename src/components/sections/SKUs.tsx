"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skus = [
  {
    name: "Starter Agent",
    price: "$30,000",
    timeline: "30 days",
    bestFor: "You need a working AI feature in your product, fast. No retainer required.",
    features: [
      "1 production AI agent",
      "Signed acceptance criteria",
      "Deploy on Cloudflare Workers",
      "Runbook + handoff doc",
      "30 days post-ship Slack support",
    ],
    href: "/pricing#starter",
    highlighted: false,
  },
  {
    name: "Production Agent",
    price: "$60,000",
    timeline: "30 days",
    bestFor:
      "You&apos;re rescuing a failed pilot or shipping your first production agent. Money-back if we miss acceptance.",
    features: [
      "1 production agent + retrieval",
      "Tool use + observability",
      "30-day refund clause",
      "Retainer-ready handoff",
      "AudioPod-grade ops standard",
    ],
    href: "/pricing#production",
    highlighted: true,
  },
  {
    name: "Agent Fleet",
    price: "$120,000",
    timeline: "60 days",
    bestFor:
      "You need multiple coordinated agents — orchestration, shared memory, Mesh networking.",
    features: [
      "Up to 3 coordinated agents",
      "Workflows v2 + Agent Memory",
      "Mesh zero-trust networking",
      "60-day acceptance gate",
      "Retainer-ready handoff",
    ],
    href: "/pricing#fleet",
    highlighted: false,
  },
];

export function SKUs() {
  return (
    <section id="skus" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">What you can buy</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three SKUs. Hard scope. No surprises.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fixed fee. Fixed timeline. Acceptance criteria signed Day 0, tested live Day 30.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skus.map((sku, index) => (
            <motion.div
              key={sku.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className={`p-8 h-full flex flex-col transition-all duration-300 relative ${
                  sku.highlighted
                    ? "border-primary/40 shadow-lg shadow-primary/10 bg-gradient-to-br from-background to-primary/5"
                    : "hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {sku.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most chosen
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{sku.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold">{sku.price}</span>
                    <span className="text-sm text-muted-foreground">/ {sku.timeline}</span>
                  </div>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: sku.bestFor }}
                  />
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {sku.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={sku.highlighted ? "default" : "outline"}
                  className="rounded-full group w-full"
                  asChild
                >
                  <Link href={sku.href}>
                    See full scope
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Post-acceptance retainers: <span className="text-foreground font-medium">$5K / $9K / $15K per month</span>.
          {" "}
          <Link href="/pricing#retainer" className="text-primary hover:underline">
            See retainer detail →
          </Link>
        </p>
      </div>
    </section>
  );
}
