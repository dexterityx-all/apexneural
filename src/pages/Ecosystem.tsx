import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  TrendingUp,
  Zap,
  Globe,
  Users,
  ArrowRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { InvestmentPhilosophy } from "@/components/ecosystem/InvestmentPhilosophy";
import { DBaaSSection } from "@/components/ecosystem/DBaaSSection";
import { FeaturedCaseStudies } from "@/components/ecosystem/FeaturedCaseStudies";
import { LogoMarquee } from "@/components/ecosystem/LogoMarquee";
import { ClientLogosSection } from "@/components/ecosystem/ClientLogosSection";
import { IntegrationsSection } from "@/components/ecosystem/IntegrationsSection";

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

      {/* The Synergy Effect - KEPT AS REQUESTED */}
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

      {/* Investment Philosophy / Portfolios Section */}
      <InvestmentPhilosophy />

      {/* Products / DBaaS Section */}
      <DBaaSSection />

      {/* Projects Section */}
      <section id="technology-case-studies" className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-ecosystem-projects">
              Technology & Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">
              Built with the <span className="italic text-ecosystem-projects">best technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Across 47+ enterprise projects, we've mastered the cutting-edge tools and frameworks 
              that power modern AI solutions.
            </p>
          </motion.div>

          {/* Tech Logo Marquee */}
          <LogoMarquee />
        </div>
      </section>

      {/* Featured Case Studies */}
      <FeaturedCaseStudies />

      {/* Client Logos Section */}
      <ClientLogosSection />

      {/* Integration Capabilities Section */}
      <IntegrationsSection />

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to explore our <span className="italic text-primary">ecosystem</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking to invest, build, or partner—we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/30 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
