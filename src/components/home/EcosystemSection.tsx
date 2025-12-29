import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Package, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const ecosystemPillars = [
  {
    id: "portfolios",
    title: "Portfolios",
    subtitle: "Investment & Co-Building",
    description:
      "Strategic investments in AI-first companies where we co-build products and solutions, accelerating growth through our expertise and network.",
    items: [
      { name: "Galactic Therapeutics", desc: "Toxicology AI" },
      { name: "Champions Gen", desc: "Injury Prediction AI" },
      { name: "Beauty Tech AI", desc: "Beauty Technology" },
    ],
    icon: Briefcase,
    color: "portfolios" as const,
    href: "/portfolios",
  },
  {
    id: "products",
    title: "Products",
    subtitle: "Built by ApexNeural",
    description:
      "Proprietary AI-powered products designed to transform how businesses operate, from recruitment to document management.",
    items: [
      { name: "Prism", desc: "AI Recruitment Automation" },
      { name: "DBaaS", desc: "Digital Business as a Service" },
      { name: "Kutum", desc: "Family Document OS" },
    ],
    icon: Package,
    color: "products" as const,
    href: "/products",
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "Client Engagements",
    description:
      "Bespoke AI solutions crafted for enterprise clients, delivering measurable impact through cutting-edge technology and strategic thinking.",
    items: [
      { name: "47+ Projects", desc: "Across Industries" },
      { name: "AI Integration", desc: "End-to-End Solutions" },
      { name: "Enterprise Scale", desc: "Global Delivery" },
    ],
    icon: FolderOpen,
    color: "projects" as const,
    href: "/case-studies",
  },
];

const colorClasses = {
  portfolios: {
    bg: "bg-ecosystem-portfolios/10",
    border: "border-ecosystem-portfolios/20",
    text: "text-ecosystem-portfolios",
    hover: "hover:border-ecosystem-portfolios/40",
  },
  products: {
    bg: "bg-ecosystem-products/10",
    border: "border-ecosystem-products/20",
    text: "text-ecosystem-products",
    hover: "hover:border-ecosystem-products/40",
  },
  projects: {
    bg: "bg-ecosystem-projects/10",
    border: "border-ecosystem-projects/20",
    text: "text-ecosystem-projects",
    hover: "hover:border-ecosystem-projects/40",
  },
};

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-padding bg-surface">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 mb-6">
            Three Pillars of <span className="italic text-primary">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We operate across investments, products, and client projects—each pillar 
            reinforcing the others to create lasting impact in the AI landscape.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ecosystemPillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={pillar.href}
                className={cn(
                  "group block h-full p-8 rounded-2xl border bg-card transition-all duration-300",
                  colorClasses[pillar.color].border,
                  colorClasses[pillar.color].hover,
                  "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {/* Icon and Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={cn(
                      "p-3 rounded-xl",
                      colorClasses[pillar.color].bg
                    )}
                  >
                    <pillar.icon
                      className={cn("h-6 w-6", colorClasses[pillar.color].text)}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-mono uppercase tracking-wider",
                      colorClasses[pillar.color].text
                    )}
                  >
                    {pillar.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif mb-3">{pillar.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Items */}
                <ul className="space-y-3 mb-6">
                  {pillar.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className={cn(
                    "flex items-center gap-2 font-medium transition-colors",
                    colorClasses[pillar.color].text
                  )}
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
