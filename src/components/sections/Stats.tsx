"use client";

import { motion } from "framer-motion";
import { Timer, FileCheck2, Layers, Globe2 } from "lucide-react";

const stats = [
  {
    label: "Time to production",
    value: "30 days",
    icon: Timer,
    description: "Acceptance-tested. Not a demo.",
  },
  {
    label: "Vendors on the bill",
    value: "1",
    icon: Layers,
    description: "Cloudflare-native. No Pinecone, no Vercel sprawl.",
  },
  {
    label: "Refund clause",
    value: "100%",
    icon: FileCheck2,
    description: "Miss the criteria you signed, get your money back.",
  },
  {
    label: "Flagship in market",
    value: "100+",
    icon: Globe2,
    description: "Countries running our AudioPod product daily.",
  },
];

export function Stats() {
  return (
    <section className="py-20 border-y bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <motion.div
                className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="font-medium text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
