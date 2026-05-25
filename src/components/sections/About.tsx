"use client";

import { motion } from "framer-motion";
import { Cloud, Code, Wrench, Rocket } from "lucide-react";

const principles = [
  {
    icon: Cloud,
    title: "Cloudflare-native by default",
    description: "Workers AI, Workflows v2, AI Search, Agent Memory. One vendor, one bill.",
  },
  {
    icon: Code,
    title: "Operator-first",
    description: "Every engineer has shipped a product end-to-end. We&apos;re builders, not advisors.",
  },
  {
    icon: Wrench,
    title: "Ship, hand off, support",
    description: "We don&apos;t leave you with code you can&apos;t run. Handoff doc + runbook + retainer option.",
  },
  {
    icon: Rocket,
    title: "Patterns from 30 startups",
    description: "Our private library of agent patterns is the moonshot portfolio in production.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-3">About YobiTech</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built by an operator who ships.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                YobiTech is a Bangalore-registered boutique run by{" "}
                <a href="https://roushanrakesh.com" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                  Rakesh Roushan
                </a>
                , founder of{" "}
                <a href="https://audiopod.ai" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                  AudioPod
                </a>{" "}
                (AI DAW for podcasters and audiobook producers — paying users in 100+ countries) and operator
                of a 30-startup product portfolio.
              </p>
              <p>
                The same patterns that ship AudioPod week-over-week are the patterns we apply to your AI agent.
                If we wouldn&apos;t ship it for our own product, we won&apos;t ship it for yours.
              </p>
              <p>
                No account managers. No offshore body-shop tax. No 6-week discovery phase. The founder is on
                every discovery call and writes acceptance tests with you on Day 0.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Registered as:</span>{" "}
                YOBITECH SERVICES PRIVATE LIMITED
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">CIN:</span>{" "}
                U66190KA2023PTC171906
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Founded:</span> 2023
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {principles.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl border bg-gradient-to-br from-background to-muted/30 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{p.title}</h3>
                  <p
                    className="text-xs text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.description }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
