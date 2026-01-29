import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-tertiary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="BJYM Startup Cell"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  BJYM Startup Cell
                </span>
                <span className="text-xs text-tertiary-foreground/70">
                  Tamil Nadu
                </span>
              </div>
            </div>
            <p className="text-tertiary-foreground/80 text-sm max-w-md">
              Empowering young innovators across Tamil Nadu to build impactful
              startups through mentorship, resources, and a statewide
              pre-incubation ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/careers"
                className="text-sm text-tertiary-foreground/80 hover:text-primary transition-colors"
              >
                Careers With Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-tertiary-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-tertiary-foreground/80">
              <p>Tamil Nadu, India</p>
              <a
                href="mailto:contact@bjymstartupcell.in"
                className="hover:text-primary transition-colors"
              >
                contact@bjymstartupcell.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-tertiary-foreground/20 mt-8 pt-8 text-center text-sm text-tertiary-foreground/60">
          © {new Date().getFullYear()} BJYM Startup Cell - Tamil Nadu. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
