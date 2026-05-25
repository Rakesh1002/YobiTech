import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(200),
  company: z.string().min(1).max(100).optional(),
  headcountBand: z.enum(["<10", "10-50", "50-500", "500+"]).optional(),
  aiStage: z.enum(["none", "poc-failed", "production-scaling", "other"]).optional(),
  budgetBand: z.enum(["<25k", "25-60k", "60-120k", "120k+"]).optional(),
  skuInterest: z.enum(["starter", "production", "fleet", "unsure"]).optional(),
  failedPilot: z.boolean().optional(),
  message: z.string().max(2000).optional(),
  source: z.string().max(50).optional(),
  turnstileToken: z.string().optional(),
});

const ALLOWED_ORIGINS = new Set([
  "https://yobitech.in",
  "https://www.yobitech.in",
  "http://localhost:3000",
]);

// Simple in-memory rate limit. Survives within a single Worker instance.
// For higher volume, move to Cloudflare KV.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10;

function rateLimitOk(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // If not configured, skip (dev / preview environments)
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function notifyLead(record: {
  name: string;
  email: string;
  company?: string;
  message?: string;
  skuInterest?: string;
  budgetBand?: string;
  aiStage?: string;
  failedPilot?: boolean;
  source?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL ?? "contact@yobitech.in";
  if (!apiKey) return; // best-effort; don't block on email

  const subject = `New YobiTech lead: ${record.name} (${record.skuInterest ?? "unsure"} / ${record.budgetBand ?? "?"})`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui; max-width: 600px;">
      <h2>New lead via yobitech.in</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td><b>Name</b></td><td>${escapeHtml(record.name)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(record.email)}</td></tr>
        <tr><td><b>Company</b></td><td>${escapeHtml(record.company ?? "—")}</td></tr>
        <tr><td><b>SKU interest</b></td><td>${escapeHtml(record.skuInterest ?? "—")}</td></tr>
        <tr><td><b>Budget</b></td><td>${escapeHtml(record.budgetBand ?? "—")}</td></tr>
        <tr><td><b>AI stage</b></td><td>${escapeHtml(record.aiStage ?? "—")}</td></tr>
        <tr><td><b>Failed pilot?</b></td><td>${record.failedPilot ? "yes" : "no"}</td></tr>
        <tr><td><b>Source</b></td><td>${escapeHtml(record.source ?? "—")}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space: pre-wrap;">${escapeHtml(record.message ?? "(no message)")}</p>
    </div>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "leads@yobitech.in",
        to,
        subject,
        html,
        reply_to: record.email,
      }),
    });
  } catch {
    // swallow — DB record is the source of truth
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  // Origin allowlist
  const origin = req.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json(
      { success: false, error: "Origin not allowed" },
      { status: 403 },
    );
  }

  // Rate limit by IP
  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  if (!rateLimitOk(ip)) {
    return NextResponse.json(
      { success: false, error: "Rate limit exceeded — try again later" },
      { status: 429 },
    );
  }

  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    // Turnstile (skipped if env not configured)
    const turnstileOk = await verifyTurnstile(validated.turnstileToken, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { success: false, error: "Captcha verification failed" },
        { status: 400 },
      );
    }

    const { turnstileToken: _omit, ...persistable } = validated;
    void _omit;

    const record = await prisma.contactMessage.create({
      data: {
        name: persistable.name,
        email: persistable.email,
        company: persistable.company ?? null,
        headcountBand: persistable.headcountBand ?? null,
        aiStage: persistable.aiStage ?? null,
        budgetBand: persistable.budgetBand ?? null,
        skuInterest: persistable.skuInterest ?? null,
        failedPilot: persistable.failedPilot ?? false,
        message: persistable.message ?? "",
        source: persistable.source ?? null,
      },
    });

    // Fire-and-forget email notification
    void notifyLead({
      name: record.name,
      email: record.email,
      company: record.company ?? undefined,
      message: record.message ?? undefined,
      skuInterest: record.skuInterest ?? undefined,
      budgetBand: record.budgetBand ?? undefined,
      aiStage: record.aiStage ?? undefined,
      failedPilot: record.failedPilot,
      source: record.source ?? undefined,
    });

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 },
  );
}
