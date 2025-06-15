import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-50 dark:bg-blue-950 border-t py-12 text-sm text-muted-foreground">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">CogNivia</h4>
          <p>
            A globally trusted therapy platform founded by certified clinical psychologists. We help you heal, reflect, and grow — online or in-person.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h5 className="text-base font-semibold text-foreground">Quick Links</h5>
          <ul className="space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" }
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-2">
          <h5 className="text-base font-semibold text-foreground">Legal</h5>
          <ul className="space-y-1">
            {[
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Copyright Notice", href: "/copyright-notice" }
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-2">
          <h5 className="text-base font-semibold text-foreground">Connect</h5>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:support@cognivia.com" className="underline hover:text-foreground transition">support@cognivia.com</a></li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Gorakhpur, India</li>
          </ul>
          <div className="flex space-x-4 mt-3 text-muted-foreground">
            {[ 
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Mail, label: "Email" }
            ].map(({ icon: Icon, label }, i) => (
              <a key={i} href="#" aria-label={label} className="hover:text-foreground transition-colors duration-200">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs space-x-4 text-muted-foreground">
        <span>© {new Date().getFullYear()} CogNivia. All rights reserved.</span>
        <Link href="/terms-of-service" className="hover:text-foreground underline-offset-4 hover:underline transition">
          Terms
        </Link>
        <Link href="/privacy-policy" className="hover:text-foreground underline-offset-4 hover:underline transition">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
