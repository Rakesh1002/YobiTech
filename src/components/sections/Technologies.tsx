"use client";

import { motion } from "framer-motion";
import { Cpu, Globe2, Shield, Zap } from "lucide-react";

const technologies = [
  {
    name: "AI/ML",
    icon: Cpu,
    description:
      "Advanced artificial intelligence and machine learning solutions",
  },
  {
    name: "Cloud Native",
    icon: Globe2,
    description: "Scalable cloud-native architecture and deployments",
  },
  {
    name: "Security",
    icon: Shield,
    description: "Enterprise-grade security and compliance",
  },
  {
    name: "Performance",
    icon: Zap,
    description: "High-performance computing and optimization",
  },
];

export function Technologies() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-muted-foreground">
            Cutting-edge tools and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl border bg-background/50 backdrop-blur-sm"
            >
              <tech.icon className="w-10 h-10 text-primary" />
              <span className="font-medium">{tech.name}</span>
              <p className="text-sm text-muted-foreground text-center">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
