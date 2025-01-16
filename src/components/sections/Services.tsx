"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Globe2, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Solutions",
    description:
      "Custom AI implementations for business automation and intelligence",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Software Development",
    description: "Enterprise-grade software solutions and SaaS platforms",
    features: ["Web Applications", "Mobile Apps", "Cloud Solutions"],
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services",
    features: ["Process Automation", "Legacy Modernization", "Cloud Migration"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive solutions for modern enterprises
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full transition-colors hover:border-primary/50">
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
