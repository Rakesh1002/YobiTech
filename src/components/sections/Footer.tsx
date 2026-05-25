import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-3">
              <Image
                src="/logo-small.png"
                alt="YobiTech Logo"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                YobiTech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Ship production AI agents in 30 days. Fixed fee. Money back if we miss acceptance.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3">Product</p>
            <div className="space-y-2 text-sm">
              <Link
                href="/pricing"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/work"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                href="/playbook"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Playbook
              </Link>
              <Link
                href="/#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Book a call
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3">Company</p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:contact@yobitech.in"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@yobitech.in
              </a>
              <Link
                href="/terms"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/refunds"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Refunds
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} YOBITECH SERVICES PRIVATE LIMITED. All rights reserved.
          </p>
          <p>CIN: U66190KA2023PTC171906</p>
        </div>
      </div>
    </footer>
  );
}
