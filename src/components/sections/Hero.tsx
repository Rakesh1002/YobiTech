"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <section
      aria-label="Introduction"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div style={{ opacity, scale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(2,132,199,0.1)_0%,transparent_50%)]" />
      </motion.div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
              Innovating Enterprise
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/70">
              Solutions with AI
            </span>
          </h1>
          <p className="text-muted-foreground/90 text-lg mb-12 max-w-2xl mx-auto">
            Building next-generation information services for enterprises and
            consumers through artificial intelligence and cutting-edge
            innovation.
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-full group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.6 }}
                />
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/20 hover:bg-primary/5"
              asChild
            >
              <a href="#services">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </motion.div>

      <h1 className="sr-only">
        YOBITECH - Enterprise AI Solutions & Digital Transformation Services
      </h1>
    </section>
  );
}
