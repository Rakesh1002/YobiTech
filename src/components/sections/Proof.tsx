"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const audiopodMetrics = [
  { icon: Globe2, value: "100+", label: "countries served" },
  { icon: Users, value: "paying", label: "users every month" },
  { icon: Zap, value: "shipped", label: "by the YobiTech founder" },
];

export function Proof() {
  return (
    <section className="py-24 border-y bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-3">Proof, not promises</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built by an operator. Trusted in production.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t ship slides. We ship code that runs. The same patterns that power our own product power yours.
          </p>
        </motion.div>

        {/* Marquee proof — AudioPod */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-background to-primary/5 border-primary/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Flagship case study</p>
                <h3 className="text-2xl font-bold mb-2">AudioPod.ai</h3>
                <p className="text-muted-foreground max-w-xl">
                  AI DAW for podcast and audiobook producers. Built end-to-end by the YobiTech founder. Live, paying customers in 100+ countries.
                </p>
              </div>
              <a
                href="https://audiopod.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Visit AudioPod
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/40">
              {audiopodMetrics.map((m) => (
                <div key={m.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <m.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{m.value}</div>
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Logo wall — placeholder slots, honest */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-center text-xs uppercase tracking-wider text-muted-foreground mb-6">
            Recent client work
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="#contact"
                className="aspect-[3/1] rounded-xl border border-dashed border-border/60 flex items-center justify-center text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                Become our next case study
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
