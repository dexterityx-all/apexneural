import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoWhite from "@/assets/logo-white.png";
import { useEffect, useState } from "react";

const footerLinks = {
  ecosystem: [
    { name: "Portfolios", href: "/ecosystem#strategic-investments", isHash: true },
    { name: "Products", href: "/ecosystem#product-suite", isHash: true },
    { name: "Projects", href: "/ecosystem#technology-case-studies", isHash: true },
    { name: "Case Studies", href: "/case-studies" },
  ],
  products: [
    { name: "Prism", href: "https://prism.apexneural.cloud/", external: true },
    { name: "Kutum", href: "https://kutum.apexneural.cloud/", external: true },
    { name: "E2E QA Lab", href: "https://e2eqalab.apexneural.cloud/", external: true },
    { name: "Data Labelling", href: "https://agenticlabel.apexneural.cloud/", external: true },
    { name: "Triverse Academy", href: "https://triverseacademy.apexneural.cloud/", external: true },
    { name: "DBaaS Suite", href: "https://dbaas.apexneural.cloud/search", external: true },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/apexneural", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/apexneural", icon: Twitter },
];

export function Footer() {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleHashLink = (href: string) => {
    const [path, hash] = href.split('#');
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img 
                src={isDark ? logoWhite : logoDark} 
                alt="ApexNeural" 
                className="h-16 w-auto"
              />
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
                  {link.isHash ? (
                    <button
                      onClick={() => handleHashLink(link.href)}
                      className="text-foreground hover:text-primary transition-colors link-underline text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-foreground hover:text-primary transition-colors link-underline"
                    >
                      {link.name}
                    </Link>
                  )}
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
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors link-underline"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-foreground hover:text-primary transition-colors link-underline"
                    >
                      {link.name}
                    </Link>
                  )}
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
            
            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-border/30">
              <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Contact
              </h5>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>Flat 803, Mittal Tower, MG Road</p>
                <p>Bangalore, Karnataka 560001</p>
                <p className="pt-2">
                  <a 
                    href="mailto:contact@apexneural.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    contact@apexneural.com
                  </a>
                </p>
              </address>
            </div>
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
