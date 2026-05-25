import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Playbook — Build diaries, patterns, hot takes.",
  description:
    "How we build production AI agents on Cloudflare. Architecture patterns, build diaries, and opinionated takes.",
  alternates: { canonical: "https://yobitech.in/playbook" },
};

const posts: Array<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Build diary" | "Pattern" | "Hot take" | "Architecture";
  href?: string;
}> = [
  {
    slug: "30-day-cloudflare-agent",
    title: "How we ship a Cloudflare-native AI agent in 30 days",
    excerpt:
      "The exact methodology — Day 0 acceptance criteria, Day 7 first loop, Day 14 retrieval, Day 21 hardening, Day 30 gate. Plus the Cloudflare primitives we lean on (Workers AI, AI Search, Workflows v2, Agent Memory).",
    date: "Coming soon",
    category: "Pattern",
  },
  {
    slug: "ai-strategy-decks-dont-ship",
    title: "Why we killed 'AI strategy decks' on the homepage",
    excerpt:
      "Deloitte refunded A$291K for a slide deck with fabricated court citations. The rest of the industry is still selling decks. We're not.",
    date: "Coming soon",
    category: "Hot take",
  },
];

const categoryColors: Record<string, string> = {
  "Build diary": "bg-blue-500/10 text-blue-600",
  Pattern: "bg-primary/10 text-primary",
  "Hot take": "bg-orange-500/10 text-orange-600",
  Architecture: "bg-violet-500/10 text-violet-600",
};

export default function PlaybookPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Playbook</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Build diaries. Patterns. Hot takes.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                How we build Cloudflare-native AI agents — the methodology, the architectures,
                and the opinions we&apos;ve earned the hard way.
              </p>
            </div>

            <div className="grid gap-6 mb-16">
              {posts.map((post) => (
                <Card key={post.slug} className="p-6 sm:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm text-muted-foreground italic">
                    Full post coming soon. Want early access? Email{" "}
                    <a
                      href="mailto:contact@yobitech.in"
                      className="text-primary hover:underline"
                    >
                      contact@yobitech.in
                    </a>
                    .
                  </span>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center py-12 rounded-3xl border border-primary/20 bg-primary/5">
              <h2 className="text-2xl font-bold mb-3">Ready to ship?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Reading is great. Shipping is better. Book a 30-minute discovery call with the founder.
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
