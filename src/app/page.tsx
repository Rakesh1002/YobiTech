import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { SKUs } from "@/components/sections/SKUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MoneyBack } from "@/components/sections/MoneyBack";
import { Technologies } from "@/components/sections/Technologies";
import { WeDontDo } from "@/components/sections/WeDontDo";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YOBITECH SERVICES PRIVATE LIMITED",
  alternateName: "YobiTech",
  url: "https://yobitech.in",
  logo: "https://yobitech.in/logo-large.png",
  description:
    "Boutique that ships production AI agents on Cloudflare in 30 days. Fixed fee. Money back if it doesn't pass acceptance.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Smart Avenu, Unit FO-02, 4th Floor, 28/A, 80 Feet Rd",
    addressLocality: "Indiranagar",
    addressRegion: "Bangalore",
    postalCode: "560038",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-90195-45645",
    contactType: "sales",
    email: "contact@yobitech.in",
  },
  sameAs: [
    "https://www.linkedin.com/company/yobitech",
    "https://twitter.com/yobitech",
  ],
  knowsAbout: [
    "Cloudflare Workers AI",
    "Cloudflare Workflows v2",
    "Cloudflare AI Search",
    "Cloudflare Agent Memory",
    "Cloudflare Sandboxes",
    "Cloudflare Browser Run",
    "Cloudflare Voice Pipeline",
    "Cloudflare Mesh",
    "AI agent development",
    "Large Language Models",
    "Production AI implementation",
  ],
  subOrganization: {
    "@type": "Organization",
    name: "AudioPod",
    url: "https://audiopod.ai",
    description: "AI DAW for podcast and audiobook producers — operated by the same founder.",
  },
};

const servicesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Starter Agent",
    provider: { "@type": "Organization", name: "YobiTech" },
    description: "1 production AI agent shipped in 30 days. Fixed fee.",
    offers: { "@type": "Offer", price: "30000", priceCurrency: "USD" },
    areaServed: ["US", "GB", "SG", "AU", "IN"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Production Agent",
    provider: { "@type": "Organization", name: "YobiTech" },
    description:
      "1 production AI agent + retrieval + tools + observability in 30 days. Money-back if it misses acceptance.",
    offers: { "@type": "Offer", price: "60000", priceCurrency: "USD" },
    areaServed: ["US", "GB", "SG", "AU", "IN"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Agent Fleet",
    provider: { "@type": "Organization", name: "YobiTech" },
    description:
      "Up to 3 coordinated AI agents with Workflows v2 + Agent Memory + Mesh, shipped in 60 days.",
    offers: { "@type": "Offer", price: "120000", priceCurrency: "USD" },
    areaServed: ["US", "GB", "SG", "AU", "IN"],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {servicesJsonLd.map((s) => (
        <script
          key={s.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Proof />
        <SKUs />
        <HowItWorks />
        <MoneyBack />
        <Technologies />
        <WeDontDo />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
