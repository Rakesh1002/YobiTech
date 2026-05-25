"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MoneyBack() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 sm:p-12 text-center"
        >
          <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            If we miss the acceptance test, we refund.
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            On Day 0, you and we sign an acceptance criteria document — specific, measurable, in plain English.
            On Day 30, we run the tests with you live. If even one P0 criterion fails, you keep the code and get
            a 100% refund.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full group"
            asChild
          >
            <Link href="/refunds">
              Read the refund clause
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground mt-6">
            Applies to the Production Agent SKU. Starter and Fleet SKUs have their own terms — see{" "}
            <Link href="/refunds" className="text-primary hover:underline">
              full refund policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
