"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        <div className="flex items-center gap-3">
          <Image
            src="/logo-small.png"
            alt="YOBITECH Logo"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            YOBITECH
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <a
            href="#about"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Contact
          </a>
          <Button
            size="sm"
            variant={isScrolled ? "outline" : "secondary"}
            className="rounded-full transition-colors"
            asChild
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
