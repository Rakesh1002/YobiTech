"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Cloudflare Workers", category: "Edge runtime" },
  { name: "Durable Objects", category: "Stateful agents" },
  { name: "Workflows", category: "Multi-step orchestration" },
  { name: "AI Search", category: "Hybrid RAG" },
  { name: "Workers AI", category: "Inference (Kimi K2.5, Llama 4)" },
  { name: "Sandboxes", category: "Untrusted code execution" },
  { name: "D1 + R2", category: "SQLite + object storage" },
  { name: "Claude 4.7", category: "Tool-use reasoning" },
  { name: "TypeScript", category: "Default language" },
  { name: "Modal", category: "GPU + fine-tuning" },
  { name: "Sentry + PostHog", category: "Observability" },
  { name: "Drizzle / Prisma", category: "Data layer" },
];

export function Technologies() {
  return (
    <section id="stack" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">The Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One vendor. One bill. One throat to choke.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most agencies stitch together AWS + Pinecone + Vercel + OpenAI + four
            other vendors. We build on Cloudflare. That&apos;s how we ship in 30 days
            instead of 12 weeks.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group"
            >
              <div className="px-5 py-3 rounded-full border bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                <span className="font-medium text-sm">{tech.name}</span>
                <span className="text-xs text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
