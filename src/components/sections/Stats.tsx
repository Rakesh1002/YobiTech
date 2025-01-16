"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle2, Shield, BarChart } from "lucide-react";

const stats = [
  { label: "Clients", value: "50+", icon: Users },
  { label: "Projects", value: "100+", icon: CheckCircle2 },
  { label: "Team Size", value: "25+", icon: Shield },
  { label: "Growth", value: "40%", icon: BarChart },
];

export function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <motion.div
                className="text-3xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
