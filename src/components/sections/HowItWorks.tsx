"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Play, GitBranch, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    day: "Day 0",
    icon: CalendarCheck,
    title: "Kickoff",
    description: "Acceptance criteria signed in plain English. Eng access set up. Shared Slack/Discord live.",
  },
  {
    day: "Day 7",
    icon: Play,
    title: "First working agent",
    description: "Agent loop in staging. Loom demo recorded. You see it run end-to-end.",
  },
  {
    day: "Day 14",
    icon: GitBranch,
    title: "Retrieval + integrations",
    description: "AI Search over your data, auth, webhooks, observability. Mid-checkpoint call.",
  },
  {
    day: "Day 21",
    icon: Wrench,
    title: "Hardening",
    description: "Tool use, edge cases, performance, safety guardrails. Weekly Loom.",
  },
  {
    day: "Day 30",
    icon: ShieldCheck,
    title: "Acceptance gate",
    description: "We run the signed test suite live with you. Pass → invoice. Fail any P0 → refund.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Day 0 to Day 30. What actually happens.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No mystery process. No 6-week discovery phase. Every milestone is observable.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-4 relative z-10 shadow-sm">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {step.day}
                </p>
                <h3 className="font-semibold mb-2 text-base">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
