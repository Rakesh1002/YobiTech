"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required").max(100),
  headcountBand: z.enum(["<10", "10-50", "50-500", "500+"]),
  aiStage: z.enum(["none", "poc-failed", "production-scaling", "other"]),
  budgetBand: z.enum(["<25k", "25-60k", "60-120k", "120k+"]),
  skuInterest: z.enum(["starter", "production", "fleet", "unsure"]),
  failedPilot: z.boolean().optional(),
  message: z.string().max(2000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CAL_URL = "https://cal.com/yobitech/30min";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      headcountBand: "50-500",
      aiStage: "poc-failed",
      budgetBand: "25-60k",
      skuInterest: "production",
      failedPilot: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "homepage" }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-3">Get started</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tell us about your project. Or just book a call.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Rakesh reads every inquiry. No sales pipelines, no nurture sequences. Response within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column: contact info + primary Cal.com CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-background hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Book a 30-min discovery call</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Founder on the call. No deck. We&apos;ll sketch your architecture live.
              </p>
              <span className="text-sm font-medium text-primary group-hover:underline">
                Open calendar →
              </span>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Smart Avenu, Unit FO-02, 4th Floor,
                  <br />
                  28/A, 80 Feet Rd, Indiranagar,
                  <br />
                  Bangalore - 560038, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:contact@yobitech.in"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@yobitech.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+919019545645"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 90195 45645
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column: qualifying form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            {!showForm ? (
              <div className="rounded-2xl border bg-background/50 p-8 text-center h-full flex flex-col items-center justify-center">
                <p className="text-sm text-muted-foreground mb-4">Prefer email over a call?</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() => setShowForm(true)}
                >
                  Open the qualifying form
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Takes 60 seconds. Helps us prep before we reply.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border bg-background/50 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Your name</label>
                    <input
                      {...register("name")}
                      type="text"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm ${
                        errors.name ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Work email</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm ${
                        errors.email ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Company</label>
                  <input
                    {...register("company")}
                    type="text"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm ${
                      errors.company ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Company size</label>
                    <select
                      {...register("headcountBand")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm"
                    >
                      <option value="<10">&lt;10</option>
                      <option value="10-50">10–50</option>
                      <option value="50-500">50–500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Stage of AI</label>
                    <select
                      {...register("aiStage")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm"
                    >
                      <option value="none">No AI yet</option>
                      <option value="poc-failed">Built a POC, didn&apos;t ship</option>
                      <option value="production-scaling">Production AI, need to scale</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Budget band</label>
                    <select
                      {...register("budgetBand")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm"
                    >
                      <option value="<25k">&lt;$25K</option>
                      <option value="25-60k">$25K–$60K</option>
                      <option value="60-120k">$60K–$120K</option>
                      <option value="120k+">$120K+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">SKU interest</label>
                    <select
                      {...register("skuInterest")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm"
                    >
                      <option value="starter">Starter ($30K)</option>
                      <option value="production">Production ($60K)</option>
                      <option value="fleet">Fleet ($120K)</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    {...register("failedPilot")}
                    type="checkbox"
                    className="w-4 h-4 rounded border-border accent-primary"
                  />
                  <span className="text-muted-foreground">We&apos;ve already burned budget on a failed pilot</span>
                </label>

                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Anything we should know? (optional)</label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none text-sm ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  size="lg"
                  className={`w-full rounded-lg transition-all ${
                    submitStatus === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : submitStatus === "error"
                        ? "bg-destructive hover:bg-destructive/90"
                        : ""
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {submitStatus === "success"
                    ? "Got it. Rakesh will reply within 24 hours."
                    : submitStatus === "error"
                      ? "Failed. Try again or email contact@yobitech.in"
                      : "Send inquiry"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
