"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Cloud, Blocks, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI & Machine Learning",
    description:
      "Custom AI solutions powered by large language models, computer vision, and predictive analytics to automate complex workflows.",
    features: [
      "LLM Integration & Fine-tuning",
      "Intelligent Document Processing",
      "Predictive Analytics",
      "AI Agents & Automation",
    ],
  },
  {
    icon: <Workflow className="w-7 h-7" />,
    title: "Product Engineering",
    description:
      "End-to-end product development from ideation to scale, building robust applications that users love.",
    features: [
      "Full-Stack Development",
      "Mobile Applications",
      "API Design & Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Cloud & Infrastructure",
    description:
      "Modern cloud architecture and DevOps practices for scalable, resilient, and cost-effective systems.",
    features: [
      "Cloud-Native Architecture",
      "Kubernetes & Containers",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
  },
  {
    icon: <Blocks className="w-7 h-7" />,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and analytics platforms that turn raw data into actionable insights.",
    features: [
      "Data Pipeline Design",
      "Real-time Analytics",
      "Data Warehousing",
      "Business Intelligence",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Services Built for Scale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to production, we deliver end-to-end solutions that drive measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 bg-gradient-to-br from-background to-muted/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
