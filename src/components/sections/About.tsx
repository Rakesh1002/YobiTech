"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We focus on outcomes that matter, not just deliverables.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, not a vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of quality.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the Future of Enterprise Technology
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                YOBITECH is a technology consulting firm based in Bangalore, India.
                We specialize in helping enterprises harness the power of AI, modern
                software engineering, and cloud infrastructure to solve complex challenges.
              </p>
              <p>
                Founded in 2023, we&apos;ve grown from a small team of passionate engineers
                to a diverse group of technologists, designers, and strategists united
                by a common goal: building intelligent systems that create real business value.
              </p>
              <p>
                Our approach combines deep technical expertise with a genuine understanding
                of business needs. We don&apos;t just build software—we build partnerships
                that drive transformation.
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
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl border bg-gradient-to-br from-background to-muted/30 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
