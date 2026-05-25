import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Refund & Acceptance-Criteria Policy",
  description:
    "How YobiTech's money-back acceptance clause works. Production Agent SKU is refundable if we miss the Day-30 signed test suite.",
  alternates: { canonical: "https://yobitech.in/refunds" },
};

export default function RefundsPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Refund & Acceptance-Criteria Policy
            </h1>
            <p className="text-sm text-muted-foreground">Effective 2026-05-23</p>
          </div>

          <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <p className="lead text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Plain summary:</strong> On the Production Agent SKU
              ($60,000 / 30 days), we sign an acceptance-criteria document with you on Day 0. On Day 30
              we run that test suite with you live. If even one P0 (must-pass) criterion fails, you keep
              the code and we refund 100% of fees within 14 business days.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. When the refund applies</h2>
            <p>
              The money-back acceptance clause applies <strong>only</strong> to the Production Agent SKU
              ($60,000, 30-day delivery window). It does not apply to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Starter Agent ($30K, 30 days)</strong> — non-refundable once kickoff occurs (scope is too tight to risk-share economically).</li>
              <li><strong>Agent Fleet ($120K, 60 days)</strong> — has its own partial-refund schedule (see Section 7).</li>
              <li><strong>Retainer fees</strong> — non-refundable per month, but cancellable on 30-day notice.</li>
              <li><strong>Change orders</strong> — billed and paid for separately, non-refundable.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. How the refund test works</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Day 0:</strong> We and you jointly sign an{" "}
                <strong>Acceptance Criteria Document</strong> with measurable, plain-English P0 and P1 criteria.
                P0 = must-pass for delivery; P1 = nice-to-have, not refund-triggering.
              </li>
              <li>
                <strong>Day 30:</strong> We run the signed test suite live with you (Zoom / Google Meet recorded).
                Each P0 criterion either passes or fails.
              </li>
              <li>
                <strong>Pass:</strong> Final 50% invoice clears. Retainer SOW offered.
              </li>
              <li>
                <strong>Fail (any P0):</strong> 100% of paid fees (both deposit and final, if final has cleared)
                are refunded within 14 business days. You keep all code shipped.
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. What you keep regardless</h2>
            <p>
              All source code shipped to you during the engagement is yours to keep, whether or not the
              acceptance test passes. Refund does not require code return or any other clawback.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Conditions on the refund</h2>
            <p>The money-back clause is voided if:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You changed the scope mid-engagement without a signed change order.</li>
              <li>You denied required access (eng, data, API keys, staging env) for more than 5 business days; timeline extends day-for-day in such cases.</li>
              <li>The acceptance test was substantially modified by you between Day 0 signature and Day 30 execution without our agreement.</li>
              <li>A force-majeure event prevented delivery (e.g., Cloudflare global outage during the acceptance test, regulatory shifts banning the agent shape).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. How to invoke the refund</h2>
            <p>
              If a P0 criterion fails on Day 30:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The failure is noted live during the acceptance call (recorded).</li>
              <li>We confirm the refund in writing within 2 business days.</li>
              <li>Refund processed to the original payment method within 14 business days (additional bank-side delay may apply).</li>
            </ul>
            <p>
              You do not need to file a separate claim or submit documentation. The signed acceptance criteria
              document and the recorded test are sufficient.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Disputes</h2>
            <p>
              If we disagree on whether a criterion failed, we will mediate in good faith. If we cannot reach
              agreement within 14 business days, the matter is resolved per jurisdiction below (Section 8).
              We have never invoked dispute resolution; we don&apos;t plan to.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Agent Fleet partial refund schedule</h2>
            <p>
              The Agent Fleet SKU ($120K / 60 days) is built incrementally with two acceptance gates: Day 30
              (single-agent gate) and Day 60 (multi-agent coordination gate).
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Day 30 P0 failure:</strong> 50% refund (initial deposit). Engagement ends.</li>
              <li><strong>Day 30 pass, Day 60 P0 failure:</strong> 33% partial refund (refund of milestone payment). You keep all code.</li>
              <li><strong>Day 30 and Day 60 pass:</strong> Full payment recognized.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. Jurisdiction</h2>
            <p>
              This policy is governed by the laws of India. Disputes are subject to the exclusive jurisdiction
              of the courts of Bangalore North.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. Contact</h2>
            <p>For refund-related questions:</p>
            <address className="not-italic mt-2 text-muted-foreground">
              <p>YOBITECH SERVICES PRIVATE LIMITED</p>
              <p>Smart Avenu, Unit FO-02, 4th Floor, 28/A, 80 Feet Rd</p>
              <p>Indiranagar, Bangalore - 560038</p>
              <p>
                Email:{" "}
                <Link href="mailto:contact@yobitech.in" className="text-primary hover:underline">
                  contact@yobitech.in
                </Link>
              </p>
              <p>Phone: +91-90195-45645</p>
            </address>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
