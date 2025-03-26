"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export default function CancellationAndRefunds() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cancellation & Refund Policy | YOBITECH",
            description: "Cancellation and Refund Policy for YOBITECH SERVICES PRIVATE LIMITED",
            url: "https://yobitech.in/refunds",
          }),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Cancellation & Refund Policy</h1>
            <p className="text-gray-500">Last updated on 26-03-2025 10:11:40</p>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              YOBITECH SERVICES PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. This policy outlines the guidelines and procedures for cancellations, returns, and refunds for our products and services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. General Cancellation Policy</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
              </li>
              
              <li>
                YOBITECH SERVICES PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
              </li>
              
              <li>
                In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.
              </li>
              
              <li>
                In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
              </li>
              
              <li>
                In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Digital Products and Services</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                For digital products and services, including software licenses, subscriptions, or digital content, a 7-day evaluation period is provided from the date of purchase. Refund requests made within this period will be considered if the product does not function as described or if technical issues prevent proper usage.
              </li>
              
              <li>
                Once digital content has been accessed, downloaded, or used substantially, we reserve the right to decline refund requests unless the product is demonstrably defective or not as described.
              </li>
              
              <li>
                Subscription-based services may be cancelled at any time, but refunds will only be issued for the unused portion of the service if the cancellation is made within the first 30 days of service. After 30 days, you may cancel your subscription to prevent future billing, but refunds for the current billing period will not be provided.
              </li>
              
              <li>
                Custom development projects, consulting services, or other bespoke services are non-refundable once work has commenced, unless otherwise specified in a separate service agreement.
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Non-Refundable Items</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                The following items and services are generally non-refundable:
                <ul className="list-disc pl-6 mt-2">
                  <li>Gift cards or vouchers</li>
                  <li>Downloadable software products after the license key has been issued</li>
                  <li>Services that have been fully performed</li>
                  <li>Custom-made or personalized products</li>
                  <li>Products or services marked as non-refundable at the time of purchase</li>
                </ul>
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Refund Process</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                To initiate a refund request, please contact our customer service team through the following methods:
                <ul className="list-disc pl-6 mt-2">
                  <li>Email: <Link href="mailto:refunds@yobitech.in" className="text-primary hover:underline">refunds@yobitech.in</Link></li>
                  <li>Phone: +91-90195-45645</li>
                  <li>Contact form on our website</li>
                </ul>
              </li>
              
              <li>
                Please provide the following information when requesting a refund:
                <ul className="list-disc pl-6 mt-2">
                  <li>Order number or invoice number</li>
                  <li>Date of purchase</li>
                  <li>Item(s) for which refund is requested</li>
                  <li>Reason for the refund request</li>
                  <li>Proof of purchase (receipt or order confirmation)</li>
                  <li>Photos or videos if claiming product damage or defect</li>
                </ul>
              </li>
              
              <li>
                Our customer service team will review your request and respond within 2 business days. Additional documentation or information may be requested to process your refund.
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Refund Processing Time</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                In case of any refunds approved by YOBITECH SERVICES PRIVATE LIMITED, it&apos;ll take 1-2 days for the refund to be processed to the end customer.
              </li>
              
              <li>
                Refunds will be made to the original payment method used for the purchase. If this is not possible, an alternative refund method may be arranged.
              </li>
              
              <li>
                Please note that while we process refunds promptly, it may take 5-7 additional business days for the funds to reflect in your account, depending on your financial institution or payment provider.
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Return Shipping</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                If a return is required for physical products, we will provide instructions on how to ship the items back to us.
              </li>
              
              <li>
                In cases where the return is due to a product defect, error on our part, or incorrect shipment, we will cover the return shipping costs.
              </li>
              
              <li>
                For returns based on customer preference or change of mind, the customer will be responsible for return shipping costs unless otherwise stated.
              </li>
              
              <li>
                Products must be returned in their original packaging with all accessories, manuals, and documentation.
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Policy Changes</h2>
            
            <ul className="list-disc space-y-4 pl-6">
              <li>
                YOBITECH SERVICES PRIVATE LIMITED reserves the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting on our website.
              </li>
              
              <li>
                The policy that was in effect at the time of your purchase will apply to your transaction.
              </li>
            </ul>
            
            <p className="font-semibold mt-6">
              We strive to resolve all customer concerns promptly and fairly. If you have any questions about our Cancellation and Refund Policy, please contact our customer service team.
            </p>
            
            <div className="mt-8 border-t pt-8">
              <p>
                For any questions or concerns about our Cancellation and Refund Policy, please contact us at:
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