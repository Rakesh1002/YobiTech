import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for YOBITECH SERVICES PRIVATE LIMITED",
  alternates: { canonical: "https://yobitech.in/terms" },
};

export default function TermsAndConditions() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-sm text-muted-foreground">Effective 2026-05-23</p>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              These Terms and Conditions, along with privacy policy or other terms (&quot;Terms&quot;) constitute a binding agreement by and between YOBITECH SERVICES PRIVATE LIMITED, (&quot;Website Owner&quot; or &quot;we&quot; or &quot;us&quot; or &quot;our&quot;) and you (&quot;you&quot; or &quot;your&quot;) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, &quot;Services&quot;).
            </p>
            
            <p>
              By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. General Terms of Use</h2>
            
            <p>
              The use of this website or availing of our Services is subject to the following terms of use:
            </p>
            
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.
              </li>
              
              <li>
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </li>
              
              <li>
                Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.
              </li>
              
              <li>
                You agree to pay us the charges associated with availing the Services.
              </li>
              
              <li>
                You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
              </li>
              
              <li>
                You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.
              </li>
              
              <li>
                You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. User Accounts and Security</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={8}>
              <li>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </li>
              
              <li>
                We reserve the right to suspend or terminate your account at any time if we suspect that the account is being used fraudulently, abusively, or in violation of these Terms.
              </li>
              
              <li>
                You agree not to create multiple accounts or use someone else&apos;s account without permission. The creation of multiple accounts may result in the deletion of all associated accounts.
              </li>
              
              <li>
                You must be at least 18 years of age or have the consent of a legal guardian to use our Services. By using our Services, you represent and warrant that you meet these requirements.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Intellectual Property Rights</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={12}>
              <li>
                The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents. You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.
              </li>
              
              <li>
                All trademarks, service marks, trade names, and logos displayed on the Website are the property of their respective owners. Nothing contained on this Website should be construed as granting any license or right to use any trademark without prior written permission of the trademark owner.
              </li>
              
              <li>
                You may not copy, reproduce, republish, upload, post, transmit, distribute, modify, create derivative works of, or otherwise use any content from our Website without our express written permission.
              </li>
              
              <li>
                Any feedback, comments, or suggestions you provide regarding our Services is entirely voluntary, and we will be free to use such feedback, comments, or suggestions without any obligation to you.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={16}>
              <li>
                To the maximum extent permitted by applicable law, in no event shall YOBITECH SERVICES PRIVATE LIMITED, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, the Services.
              </li>
              
              <li>
                Our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us for the Services during the term of use of our Services.
              </li>
              
              <li>
                We shall not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of our Website or to your downloading of any content on it, or on any website linked to it.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Indemnification</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={19}>
              <li>
                You agree to indemnify, defend, and hold harmless YOBITECH SERVICES PRIVATE LIMITED, its affiliates, officers, directors, employees, consultants, agents, and representatives from any and all third party claims, losses, liability, damages, and/or costs (including reasonable attorney fees and costs) arising from your access to or use of our Services, your violation of these Terms, or your infringement, or infringement by any other user of your account, of any intellectual property or other right of any person or entity.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Refunds, Acceptance Criteria, and Cancellations</h2>

            <ol className="list-decimal space-y-4 pl-6" start={20}>
              <li>
                The <strong>Production Agent SKU</strong> ($60,000 / 30 days) includes a money-back acceptance-criteria clause: if any P0 criterion in the signed Day-0 acceptance document fails when tested live on Day 30, you receive a 100% refund and keep all code shipped.
              </li>
              <li>
                The <strong>Starter Agent SKU</strong> ($30,000) is non-refundable once kickoff has occurred. The <strong>Agent Fleet SKU</strong> ($120,000) has a partial-refund schedule tied to two acceptance gates.
              </li>
              <li>
                <strong>Retainer fees</strong> are non-refundable per month but cancellable on 30-day written notice.
              </li>
              <li>
                Full refund mechanics, edge cases (scope changes, access denial, force majeure), and the dispute process are documented in our <Link href="/refunds" className="text-primary hover:underline">Refund &amp; Acceptance-Criteria Policy</Link>.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Force Majeure, Governing Law and Dispute Resolution</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={22}>
              <li>
                Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
              </li>
              
              <li>
                These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
              </li>
              
              <li>
                All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in BANGALORE NORTH, Karnataka.
              </li>
              
              <li>
                All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">8. Privacy Policy</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={26}>
              <li>
                Our Privacy Policy, which outlines how we collect, use, disclose, and safeguard your information when you use our Services, is incorporated by reference into these Terms. By using our Services, you consent to the collection and use of information as detailed in our Privacy Policy.
              </li>
            </ol>
            
            <h2 className="text-xl font-bold mt-8 mb-4">9. Severability and Entire Agreement</h2>
            
            <ol className="list-decimal space-y-4 pl-6" start={27}>
              <li>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.
              </li>
              
              <li>
                These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between you and YOBITECH SERVICES PRIVATE LIMITED regarding your use of the Website and Services, and supersede all prior agreements and understandings with respect to the same.
              </li>
            </ol>
            
            <div className="mt-8 border-t pt-8">
              <p>
                For any questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <address className="not-italic mt-2">
                <p>YOBITECH SERVICES PRIVATE LIMITED</p>
                <p>Smart Avenu, Unit FO-02, 4th Floor, 28/A, 80 Feet Rd</p>
                <p>Indiranagar, Bangalore - 560038</p>
                <p>Email: <Link href="mailto:contact@yobitech.in" className="text-primary hover:underline">contact@yobitech.in</Link></p>
                <p>Phone: +91-90195-45645</p>
              </address>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 