"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "YOBITECH SERVICES PRIVATE LIMITED",
            url: "https://yobitech.in",
            logo: "https://yobitech.in/logo.png",
            description:
              "Leading provider of AI solutions and digital transformation services",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Smart Avenu, Unit FO-02, 4th Floor, 28/A, 80 Feet Rd",
              addressLocality: "Indiranagar",
              addressRegion: "Bangalore",
              postalCode: "560038",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-90195-45645",
              contactType: "customer service",
              email: "contact@yobitech.in",
            },
            sameAs: [
              "https://www.linkedin.com/company/yobitech",
              "https://twitter.com/yobitech",
            ],
          }),
        }}
      />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Technologies />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
