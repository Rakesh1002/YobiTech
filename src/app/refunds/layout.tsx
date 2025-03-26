import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | YOBITECH",
  description: "Cancellation and Refund Policy for YOBITECH SERVICES PRIVATE LIMITED products and services.",
  alternates: {
    canonical: "https://yobitech.in/cancellation-and-refunds",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | YOBITECH",
    description: "Cancellation and Refund Policy for YOBITECH SERVICES PRIVATE LIMITED products and services.",
    url: "https://yobitech.in/cancellation-and-refunds",
  },
};

export default function CancellationAndRefundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 