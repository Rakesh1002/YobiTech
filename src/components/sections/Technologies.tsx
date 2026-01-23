"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Python", category: "AI/ML" },
  { name: "TypeScript", category: "Development" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Docker", category: "DevOps" },
  { name: "Terraform", category: "IaC" },
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
          <p className="text-primary font-medium mb-3">Our Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies We Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use modern, battle-tested technologies to build reliable and scalable solutions.
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
