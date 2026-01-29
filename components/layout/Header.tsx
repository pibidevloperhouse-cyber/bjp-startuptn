"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", path: "/vision" },
  { label: "Our Ecosystem", path: "/ecosystem" },
  { label: "Our Team", path: "/team" },
  { label: "Events & Gallery", path: "/events" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = usePathname();

  return (
    <nav className="border-b border-border/20 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image
              src={"/logo.png"}
              fill
              alt="BJYM Startup Cell"
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === item.path
                  ? "text-tertiary underline underline-offset-4"
                  : "text-tertiary/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/auth">
            <Button className="bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground font-medium rounded-full px-6">
              Sign In
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/20 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location === item.path ? "text-tertiary" : "text-tertiary/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border/20">
              <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-tertiary text-tertiary-foreground rounded-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
