import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yobitech.in"),
  title: {
    default: "YOBITECH - Production AI agents on Cloudflare in 30 days",
    template: "%s | YOBITECH",
  },
  description:
    "We ship production-grade AI agents on Cloudflare in 30 days. Fixed fee. Money-back if it doesn't ship. Built for mid-market SaaS teams stuck in POC purgatory.",
  keywords: [
    "AI agents",
    "Cloudflare AI",
    "Cloudflare Workers AI",
    "AI agent development",
    "Production AI",
    "AI implementation",
    "AI consulting",
    "Pilot rescue",
    "Workers AI",
    "AI agency",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "YOBITECH SERVICES PRIVATE LIMITED" }],
  creator: "YOBITECH",
  publisher: "YOBITECH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yobitech.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yobitech.in",
    title: "YOBITECH - Production AI agents on Cloudflare in 30 days",
    description:
      "We ship production-grade AI agents on Cloudflare in 30 days. Fixed fee. Money-back if it doesn't ship.",
    siteName: "YOBITECH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YOBITECH - Production AI agents on Cloudflare in 30 days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YOBITECH - Production AI agents on Cloudflare in 30 days",
    description:
      "Fixed fee. Money-back if it doesn't ship. Cloudflare-native AI agents for teams stuck in POC purgatory.",
    images: ["/og-image.png"],
    creator: "@yobitech",
    site: "@yobitech",
  },
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "48x48", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <meta property="og:site_name" content="YOBITECH" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yobitech" />
        <link rel="canonical" href="https://yobitech.in" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
