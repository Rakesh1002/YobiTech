import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Work — Recent AI agent builds, shipped in 30 days.",
  description:
    "Case studies of production AI agents built on Cloudflare. Quantified outcomes, real architectures, real customers.",
  alternates: { canonical: "https://yobitech.in/work" },
};

const featuredCase = {
  title: "AudioPod — AI DAW for podcast and audiobook producers",
  url: "https://audiopod.ai",
  tldr:
    "Built end-to-end by the YobiTech founder. AI-powered editing, transcription, voice cloning, and publishing — in one product. Paying users in 100+ countries.",
  stack: [
    "Cloudflare Workers",
    "Workers AI",
    "AI Search",
    "Workflows",
    "R2 storage",
    "WebRTC",
  ],
  outcomes: [
    { metric: "100+", label: "countries served" },
    { metric: "Paying", label: "monthly users" },
    { metric: "Shipped", label: "as solo founder" },
  ],
};

const placeholderSlots = [
  {
    label: "Your project, here",
    body: "Mid-market SaaS / B2B AI feature / Voice agent — we'll publish your case study with metrics.",
  },
  {
    label: "Your project, here",
    body: "Failed pilot rescue / AI integration / 30-day production ship.",
  },
];

export default function WorkPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-3">Work</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Recent work. Shipped, in production, with quantified outcomes.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                No vapor. No vanity stats. Each case study is a real shipped agent with a real customer
                outcome you can verify.
              </p>
            </div>

            {/* Featured: AudioPod */}
            <Card className="p-8 sm:p-12 mb-12 border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                    Flagship case study
                  </p>
                  <h2 className="text-3xl font-bold mb-3">{featuredCase.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6">
                    {featuredCase.tldr}
                  </p>
                  <a
                    href={featuredCase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Visit audiopod.ai
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6 border-t border-border/40">
                {featuredCase.outcomes.map((o) => (
                  <div key={o.label} className="text-center sm:text-left">
                    <div className="text-3xl font-bold mb-1">{o.metric}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {o.label}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {featuredCase.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Placeholder slots */}
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {placeholderSlots.map((p, i) => (
                <Link
                  key={i}
                  href="/#contact"
                  className="block p-8 rounded-2xl border border-dashed border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Slot available
                  </p>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.body}</p>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center py-12 rounded-3xl border border-primary/20 bg-primary/5">
              <h2 className="text-2xl font-bold mb-3">Want your project here?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Book a discovery call. We&apos;ll ship in 30 days and publish the case study together.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/#contact">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
