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
    default: "YobiTech — Ship Production AI Agents in 30 Days. Fixed Fee. Money Back.",
    template: "%s | YobiTech",
  },
  description:
    "Cloudflare-native AI agents shipped in 30 days. Fixed fee. Money back if we miss acceptance. Built by an operator who ships.",
  keywords: [
    "Cloudflare AI agent",
    "AI agent development",
    "fixed price AI consultancy",
    "AI pilot rescue",
    "30 day AI agent",
    "Workers AI",
    "Workflows v2",
    "AI Search",
    "AI Agent Memory",
    "boutique AI consultancy",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "YOBITECH SERVICES PRIVATE LIMITED" }],
  creator: "YobiTech",
  publisher: "YobiTech",
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
    locale: "en_US",
    url: "https://yobitech.in",
    title: "YobiTech — Ship Production AI Agents in 30 Days. Fixed Fee. Money Back.",
    description:
      "Cloudflare-native AI agents shipped in 30 days. Fixed fee. Money back if we miss acceptance.",
    siteName: "YobiTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YobiTech — Ship production AI agents in 30 days. Money back.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YobiTech — Ship Production AI Agents in 30 Days. Money Back.",
    description:
      "Cloudflare-native AI agents shipped in 30 days. Fixed fee. Money back if we miss acceptance.",
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
        <link rel="canonical" href="https://yobitech.in" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
