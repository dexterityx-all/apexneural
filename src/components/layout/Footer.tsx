import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  ecosystem: [
    { name: "Portfolios", href: "/portfolios" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/case-studies" },
  ],
  products: [
    { name: "Prism", href: "/prism" },
    { name: "DBaaS", href: "/dbaas" },
    { name: "Kutum", href: "/kutum" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/apexneural", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/apexneural", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-medium tracking-tight">
                Apex<span className="text-primary">Neural</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Building ecosystems together. We invest, build, and partner to create 
              transformative AI-powered solutions for enterprises worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ApexNeural. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
