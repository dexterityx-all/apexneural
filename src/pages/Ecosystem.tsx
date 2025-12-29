import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Briefcase, 
  Package, 
  FolderOpen,
  TrendingUp,
  Zap,
  Globe,
  Users,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/layout/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ecosystemPillars = [
  {
    id: "portfolios",
    title: "Portfolios",
    subtitle: "Investment & Co-Building",
    description:
      "Strategic investments in AI-first companies where we co-build products and solutions, accelerating growth through our expertise and network.",
    longDescription:
      "We don't just invest—we partner. Our portfolio companies gain access to our technical expertise, AI infrastructure, and network of industry leaders. We work hands-on to accelerate their journey from concept to market leadership.",
    items: [
      { 
        name: "Galactic Therapeutics", 
        desc: "Toxicology AI",
        detail: "Revolutionary AI platform predicting drug toxicity, reducing pharmaceutical R&D timelines by 60%."
      },
      { 
        name: "Champions Gen", 
        desc: "Injury Prediction AI",
        detail: "Sports science meets machine learning to predict and prevent athlete injuries before they happen."
      },
      { 
        name: "Beauty Tech AI", 
        desc: "Beauty Technology",
        detail: "Personalized skincare recommendations powered by computer vision and dermatological AI."
      },
    ],
    icon: Briefcase,
    color: "portfolios" as const,
    href: "/portfolios",
    stats: [
      { label: "Portfolio Companies", value: "3" },
      { label: "Total Funding Raised", value: "$12M+" },
      { label: "Combined Valuation", value: "$85M+" },
    ],
  },
  {
    id: "products",
    title: "Products",
    subtitle: "Built by ApexNeural",
    description:
      "Proprietary AI-powered products designed to transform how businesses operate, from recruitment to document management.",
    longDescription:
      "Our products are born from real-world challenges we've encountered across industries. Each solution represents years of research, iteration, and deployment at scale. We build products that we'd want to use ourselves.",
    items: [
      { 
        name: "Prism", 
        desc: "AI Recruitment Automation",
        detail: "End-to-end hiring platform that screens, evaluates, and ranks candidates using conversational AI."
      },
      { 
        name: "DBaaS", 
        desc: "Digital Business as a Service",
        detail: "Complete digital transformation toolkit for SMBs—from AI chatbots to automated workflows."
      },
      { 
        name: "Kutum", 
        desc: "Family Document OS",
        detail: "Secure family document management with AI-powered organization, search, and legacy planning."
      },
    ],
    icon: Package,
    color: "products" as const,
    href: "/products",
    stats: [
      { label: "Active Products", value: "3" },
      { label: "Users Served", value: "50K+" },
      { label: "Documents Processed", value: "2M+" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "Client Engagements",
    description:
      "Bespoke AI solutions crafted for enterprise clients, delivering measurable impact through cutting-edge technology and strategic thinking.",
    longDescription:
      "Every project teaches us something new. We've built AI solutions across healthcare, finance, retail, and manufacturing—each engagement deepening our expertise and expanding our toolkit for future challenges.",
    items: [
      { 
        name: "47+ Projects", 
        desc: "Across Industries",
        detail: "From Fortune 500 enterprises to innovative startups, we've delivered AI solutions at every scale."
      },
      { 
        name: "AI Integration", 
        desc: "End-to-End Solutions",
        detail: "Full-stack AI implementation: strategy, development, deployment, and ongoing optimization."
      },
      { 
        name: "Enterprise Scale", 
        desc: "Global Delivery",
        detail: "Multi-region deployments serving millions of users with 99.9% uptime guarantees."
      },
    ],
    icon: FolderOpen,
    color: "projects" as const,
    href: "/case-studies",
    stats: [
      { label: "Projects Delivered", value: "47+" },
      { label: "Industries Served", value: "12" },
      { label: "Client Retention", value: "94%" },
    ],
  },
];

const colorClasses = {
  portfolios: {
    bg: "bg-ecosystem-portfolios/10",
    border: "border-ecosystem-portfolios/30",
    text: "text-ecosystem-portfolios",
    hover: "hover:border-ecosystem-portfolios/50",
    glow: "shadow-[0_0_60px_-15px_hsl(var(--ecosystem-portfolios)/0.3)]",
  },
  products: {
    bg: "bg-ecosystem-products/10",
    border: "border-ecosystem-products/30",
    text: "text-ecosystem-products",
    hover: "hover:border-ecosystem-products/50",
    glow: "shadow-[0_0_60px_-15px_hsl(var(--ecosystem-products)/0.3)]",
  },
  projects: {
    bg: "bg-ecosystem-projects/10",
    border: "border-ecosystem-projects/30",
    text: "text-ecosystem-projects",
    hover: "hover:border-ecosystem-projects/50",
    glow: "shadow-[0_0_60px_-15px_hsl(var(--ecosystem-projects)/0.3)]",
  },
};

const synergies = [
  {
    icon: TrendingUp,
    title: "Projects Inform Products",
    description: "Client challenges reveal market gaps that become new product opportunities.",
  },
  {
    icon: Zap,
    title: "Products Drive Portfolio Value",
    description: "Our technology stack accelerates portfolio company growth and capabilities.",
  },
  {
    icon: Globe,
    title: "Portfolios Expand Reach",
    description: "Investment network creates new project opportunities and market access.",
  },
  {
    icon: Users,
    title: "Collective Intelligence",
    description: "Learnings flow freely between all three pillars, compounding our expertise.",
  },
];

export default function Ecosystem() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background mesh gradient */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{ background: "var(--gradient-mesh)" }}
        />
        
        <div className="container-wide relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Ecosystem</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground"
            >
              How We Operate
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Our <span className="italic text-primary">Ecosystem</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Three interconnected pillars that reinforce each other—investments, products, and client projects—creating a self-sustaining engine of AI innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Visual Connection Diagram */}
      <section className="py-16 bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              The Synergy Effect
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each pillar strengthens the others, creating compounding value across our entire operation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {synergies.map((synergy, index) => (
              <motion.div
                key={synergy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <synergy.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg mb-2">{synergy.title}</h3>
                <p className="text-sm text-muted-foreground">{synergy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Deep Dive */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Deep Dive
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">
              Three Pillars of <span className="italic text-primary">Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore each pillar to understand how we create lasting impact across the AI landscape.
            </p>
          </motion.div>

          <div className="space-y-8">
            {ecosystemPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "rounded-2xl border bg-card overflow-hidden",
                  colorClasses[pillar.color].border
                )}
              >
                {/* Pillar Header */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left: Icon, Title, Description */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={cn(
                            "p-4 rounded-xl",
                            colorClasses[pillar.color].bg
                          )}
                        >
                          <pillar.icon
                            className={cn("h-8 w-8", colorClasses[pillar.color].text)}
                          />
                        </div>
                        <div>
                          <span
                            className={cn(
                              "text-xs font-mono uppercase tracking-wider",
                              colorClasses[pillar.color].text
                            )}
                          >
                            {pillar.subtitle}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-serif">{pillar.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {pillar.longDescription}
                      </p>

                      <Link
                        to={pillar.href}
                        className={cn(
                          "inline-flex items-center gap-2 font-medium transition-colors",
                          colorClasses[pillar.color].text
                        )}
                      >
                        <span>Explore {pillar.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Right: Stats */}
                    <div className="lg:w-72 flex flex-row lg:flex-col gap-4">
                      {pillar.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className={cn(
                            "flex-1 p-4 rounded-xl text-center lg:text-left",
                            colorClasses[pillar.color].bg
                          )}
                        >
                          <div className={cn("text-2xl font-serif font-medium", colorClasses[pillar.color].text)}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expandable Items */}
                <div className="border-t border-border/50">
                  <Accordion type="single" collapsible className="w-full">
                    {pillar.items.map((item, itemIndex) => (
                      <AccordionItem 
                        key={item.name} 
                        value={item.name}
                        className="border-border/50"
                      >
                        <AccordionTrigger className="px-8 lg:px-10 hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <CheckCircle className={cn("h-4 w-4", colorClasses[pillar.color].text)} />
                            <span className="font-medium">{item.name}</span>
                            <span className="text-sm text-muted-foreground hidden sm:inline">
                              — {item.desc}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-8 lg:px-10 pb-6">
                          <p className="text-muted-foreground pl-7">
                            {item.detail}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Collective Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4">
              The Numbers That <span className="italic text-primary">Matter</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "47+", label: "Projects Delivered" },
              { value: "3", label: "Portfolio Companies" },
              { value: "3", label: "Active Products" },
              { value: "12", label: "Industries Covered" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-medium text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Explore <span className="italic text-primary">Further?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dive into each pillar to discover specific projects, products, and portfolio companies—or get in touch to discuss how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border bg-card font-medium hover:bg-muted transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
