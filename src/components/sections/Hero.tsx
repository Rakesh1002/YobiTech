"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <section
      aria-label="Introduction"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <motion.div style={{ opacity, scale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
      </motion.div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">30 days. Fixed fee. Money back.</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70">
              Ship production AI agents
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-500 to-primary">
              in 30 days. Or refund.
            </span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            We build Cloudflare-native AI agents for SaaS teams stuck in pilot purgatory.
            One founder. One stack. One bill. One outcome you can demo to your board.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="rounded-full group relative overflow-hidden bg-gradient-to-r from-primary to-violet-600 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Book a discovery call</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border/50 hover:bg-muted/50 hover:border-primary/30"
              asChild
            >
              <a href="#skus">See pricing</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
      </motion.div>

      <h1 className="sr-only">
        YobiTech — Production AI agents shipped in 30 days. Fixed fee. Money back if it misses acceptance.
      </h1>
    </section>
  );
}
