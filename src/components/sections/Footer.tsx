import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-small.png"
              alt="YOBITECH Logo"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              YOBITECH
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/refunds" className="text-sm text-muted-foreground hover:underline">
              Cancellation & Refunds
            </Link>
            <div className="text-sm text-muted-foreground">
              © 2024 YOBITECH SERVICES PRIVATE LIMITED. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
