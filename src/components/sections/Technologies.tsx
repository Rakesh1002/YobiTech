"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const cloudflarePrimitives = [
  { name: "Workers", note: "Edge runtime" },
  { name: "Workflows v2", note: "50K concurrent" },
  { name: "AI Search", note: "Hybrid retrieval" },
  { name: "Workers AI", note: "Kimi K2.6, Llama 4, Gemma 4" },
  { name: "Agent Memory", note: "Persistent state" },
  { name: "Sandboxes", note: "Code execution" },
  { name: "Browser Run", note: "Web automation" },
  { name: "Voice Pipeline", note: "Real-time WebSocket" },
  { name: "Mesh", note: "Zero-trust networking" },
  { name: "D1 / R2", note: "Data + objects" },
];

const otherStack = [
  "Anthropic Claude Opus 4.7",
  "OpenAI GPT-5.5",
  "Prisma / Drizzle",
  "TypeScript",
  "Modal (GPU when needed)",
  "Sentry + PostHog",
];

export function Technologies() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">The stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One stack. One bill. Production-grade.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We default to Cloudflare-native infrastructure. Faster builds, lower run costs,
            single vendor to operate. The 4-vendor AWS+Pinecone+Vercel+OpenAI stack stays at the agency next door.
          </p>
        </motion.div>

        {/* Cloudflare primitives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Cloud className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Cloudflare-native primitives</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cloudflarePrimitives.map((p, index) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-xl border bg-background/80 backdrop-blur-sm p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <div className="font-medium text-sm">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 border-t border-border/40"
        >
          <p className="text-center text-xs uppercase tracking-wider text-muted-foreground mb-4">
            And where it makes sense
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherStack.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-border/60 bg-background/60 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
