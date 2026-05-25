"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const items = [
  {
    title: "Time & Materials billing",
    body: "Every engagement is fixed-fee. Period.",
  },
  {
    title: "Staff augmentation",
    body: "We don’t lease engineers by the hour. We ship outcomes.",
  },
  {
    title: "Data engineering without an agent context",
    body: "Your data warehouse rebuild isn’t our SKU.",
  },
  {
    title: "Engagements under $25K",
    body: "Below that, it’s not boutique work — it’s a favor, and we don’t do favors at scale.",
  },
  {
    title: "AI strategy decks",
    body: "We ship code, not slides.",
  },
  {
    title: "6-month enterprise transformations",
    body: "That’s Accenture. We’re 30 days.",
  },
  {
    title: "Equity-in-lieu-of-cash deals",
    body: "We’re a cash engine, not a venture bet.",
  },
];

export function WeDontDo() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-3">Scope discipline</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What we don&apos;t do.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Boutiques work because they say no. Here&apos;s what we politely decline.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl border bg-background/50"
            >
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
