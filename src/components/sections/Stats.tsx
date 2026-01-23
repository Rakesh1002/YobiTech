"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Users2, TrendingUp } from "lucide-react";

const stats = [
  { label: "Enterprise Clients", value: "30+", icon: Building2, description: "Trusted partners" },
  { label: "Projects Delivered", value: "75+", icon: Rocket, description: "Across industries" },
  { label: "Team Members", value: "40+", icon: Users2, description: "Expert engineers" },
  { label: "YoY Growth", value: "85%", icon: TrendingUp, description: "Sustainable growth" },
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
