import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-small.png"
              alt="YOBITECH Logo"
              width={36}
              height={36}
              className="rounded-xl"
            />
            <div>
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                YOBITECH
              </span>
              <p className="text-xs text-muted-foreground">
                AI-Powered Enterprise Solutions
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refunds"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cancellation & Refunds
            </Link>
            <a
              href="mailto:contact@yobitech.in"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@yobitech.in
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YOBITECH SERVICES PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
