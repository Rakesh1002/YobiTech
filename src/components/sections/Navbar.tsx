"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(var(--background-rgb), 0.6)"
          : "rgba(var(--background-rgb), 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: isScrolled
          ? "1px solid rgba(var(--border-rgb), 0.1)"
          : "1px solid transparent",
      }}
      transition={{ duration: 0.2 }}
      className="fixed w-full z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-small.png"
            alt="YobiTech Logo"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            YobiTech
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/pricing"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/work"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Work
          </Link>
          <Link
            href="/playbook"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Playbook
          </Link>
          <Button
            size="sm"
            variant={isScrolled ? "outline" : "secondary"}
            className="rounded-full transition-colors"
            asChild
          >
            <Link href="/#contact">Book a call</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
