import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionNav, useActiveSection } from "@/components/case-studies/SectionNav";
import { MetricsCard } from "@/components/case-studies/MetricsCard";
import { AuthorCard } from "@/components/case-studies/AuthorCard";
import { CodeBlock } from "@/components/case-studies/CodeBlock";
import { ArchitectureCard } from "@/components/case-studies/ArchitectureCard";
import { getCaseStudyById } from "@/data/caseStudyDetails";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "architecture", label: "System Architecture" },
  { id: "implementation", label: "Implementation Details" },
  { id: "workflow", label: "Workflow" },
  { id: "results", label: "Results & Impact" },
];

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = getCaseStudyById(id || "");
  const { activeSection, scrollToSection } = useActiveSection(sections.map(s => s.id));

  if (!caseStudy) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Case Study Not Found
            </h1>
            <Link to="/case-studies">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50" />
        
        <div className="container-wide relative z-10">
          {/* Back Link */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {caseStudy.technology}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border/50">
                {caseStudy.industry}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6"
            >
              {caseStudy.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              {caseStudy.description}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <img
                  src={caseStudy.author.avatar}
                  alt={caseStudy.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-foreground">{caseStudy.author.name}</span>
              </div>
              <span>•</span>
              <span>{caseStudy.date}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {caseStudy.readTime}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container-wide pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl overflow-hidden border border-border/50"
        >
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full aspect-[21/9] object-cover"
          />
        </motion.div>
      </section>

      {/* Main Content with Sticky Nav */}
      <section className="container-wide pb-24">
        <div className="flex gap-12 lg:gap-16">
          {/* Sticky Navigation - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 px-4">
                On this page
              </h3>
              <SectionNav
                sections={sections}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
              />
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 max-w-3xl space-y-16">
            {/* Project Overview */}
            <section id="overview">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                  Project Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {caseStudy.overview}
                </p>
              </motion.div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.metrics.map((metric, index) => (
                  <MetricsCard
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* System Architecture */}
            <section id="architecture">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                  System Architecture
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {caseStudy.architecture.description}
                </p>
              </motion.div>

              {/* Architecture Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-border/50 mb-8"
              >
                <img
                  src={caseStudy.architecture.image}
                  alt="System Architecture"
                  className="w-full"
                />
                <div className="bg-muted/50 px-4 py-2 text-sm text-muted-foreground text-center">
                  Figure 1: System Architecture Diagram
                </div>
              </motion.div>

              {/* Architecture Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.architecture.components.map((component, index) => (
                  <ArchitectureCard
                    key={component.title}
                    title={component.title}
                    description={component.description}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Implementation Details */}
            <section id="implementation">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                  Implementation Details
                </h2>
                <h3 className="text-lg font-serif font-medium text-foreground mb-4">
                  Code Example
                </h3>
              </motion.div>

              <CodeBlock
                code={caseStudy.implementation.code}
                language={caseStudy.implementation.language}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 p-4 bg-muted/50 rounded-xl border border-border/50"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Agent Memory
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.implementation.explanation}
                </p>
              </motion.div>
            </section>

            {/* Workflow */}
            <section id="workflow">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                  Workflow
                </h2>
              </motion.div>

              {/* Steps */}
              <div className="space-y-4 mb-8">
                {caseStudy.workflow.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>

              {/* Workflow Diagram */}
              {caseStudy.workflow.image && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-border/50"
                >
                  <img
                    src={caseStudy.workflow.image}
                    alt="Workflow Diagram"
                    className="w-full"
                  />
                  <div className="bg-muted/50 px-4 py-2 text-sm text-muted-foreground text-center">
                    Figure 2: Workflow Diagram
                  </div>
                </motion.div>
              )}
            </section>

            {/* Results & Impact */}
            <section id="results">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                  Results & Impact
                </h2>
              </motion.div>

              {/* Quote */}
              {caseStudy.results.quote && (
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-4 border-primary mb-8"
                >
                  <p className="text-lg italic text-muted-foreground leading-relaxed">
                    "{caseStudy.results.quote}"
                  </p>
                </motion.blockquote>
              )}

              {/* Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.results.outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl border border-border/50 p-5"
                  >
                    <h4 className="text-base font-serif font-semibold text-primary mb-2">
                      {outcome.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {outcome.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <section>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Author Card */}
            <AuthorCard author={caseStudy.author} />

            {/* CTA Section */}
            <section className="bg-card rounded-2xl border border-border/50 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Ready to Build Your AI Solution?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Get a free consultation and see how we can help transform your business.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href={caseStudy.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="gap-2">
                    View Original
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
