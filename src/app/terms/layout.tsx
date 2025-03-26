import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | YOBITECH",
  description: "Terms and Conditions for using YOBITECH SERVICES PRIVATE LIMITED website and services.",
  alternates: {
    canonical: "https://yobitech.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | YOBITECH",
    description: "Terms and Conditions for using YOBITECH SERVICES PRIVATE LIMITED website and services.",
    url: "https://yobitech.in/terms-and-conditions",
  },
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 