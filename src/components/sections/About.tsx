"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const wontDo = [
  "Engagements under $25K",
  "AI strategy decks or PowerPoint maturity assessments",
  "Body-shopping or staff augmentation",
  "Kubernetes",
  "Six-month \"transformation\" timelines",
  "Greenfield strategy without a build attached",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-3">Who we are</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              A productized boutique, not an agency.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most enterprise AI pilots fail. RAND put the number at 80%. MIT
                put it at 95%. Deloitte was forced to refund the Australian
                government A$440K last year for an AI report full of hallucinated
                citations. The boards still want the agent. The CTOs still need
                to ship.
              </p>
              <p>
                YobiTech is built for that gap. We&apos;re a small team in Bangalore
                that ships one thing well: production-grade AI agents on
                Cloudflare, on a fixed fee, in 30 days. No SOWs, no scope creep,
                no quarterly retainers that produce slide decks.
              </p>
              <p>
                Our flagship product, AudioPod, is live in 100+ countries and
                profitable. We use the same engineering bar to build for clients
                that we use on our own products. If that bar slips, you don&apos;t pay.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Registered as:</span>{" "}
                YOBITECH SERVICES PRIVATE LIMITED
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">CIN:</span>{" "}
                U66190KA2023PTC171906
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-gradient-to-br from-background to-muted/40 p-8"
          >
            <p className="text-primary font-medium mb-3">What we don&apos;t do</p>
            <h3 className="text-2xl font-bold mb-4">
              Saying no is the product.
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Tight scope is what makes the 30-day guarantee work. If you need
              any of the below, we&apos;re the wrong shop, and we&apos;ll tell you in the
              first 10 minutes of a call.
            </p>
            <ul className="space-y-3">
              {wontDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mt-0.5 shrink-0">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
