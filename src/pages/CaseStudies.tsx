import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FilterBar } from "@/components/case-studies/FilterBar";
import { ActiveFilters } from "@/components/case-studies/ActiveFilters";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { caseStudies, Technology, Industry, ServiceType } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function CaseStudies() {
  const [selectedTechnology, setSelectedTechnology] = useState<Technology>("All Technologies");
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("All Industries");
  const [selectedService, setSelectedService] = useState<ServiceType>("All Services");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesTech = selectedTechnology === "All Technologies" || cs.technology === selectedTechnology;
      const matchesIndustry = selectedIndustry === "All Industries" || cs.industry === selectedIndustry;
      const matchesService = selectedService === "All Services" || cs.serviceType === selectedService;
      return matchesTech && matchesIndustry && matchesService;
    });
  }, [selectedTechnology, selectedIndustry, selectedService]);

  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCaseStudies.length;

  const clearAllFilters = () => {
    setSelectedTechnology("All Technologies");
    setSelectedIndustry("All Industries");
    setSelectedService("All Services");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
          <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover how we've helped businesses transform with AI-powered solutions. 
              Explore our portfolio of successful projects across industries.
            </p>
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredCaseStudies.length}</span> of{" "}
              <span className="font-medium text-foreground">{caseStudies.length}</span> projects
            </span>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border/50 sticky top-[72px] bg-background/80 backdrop-blur-xl z-40">
        <div className="container-wide space-y-4">
          <FilterBar
            selectedTechnology={selectedTechnology}
            selectedIndustry={selectedIndustry}
            selectedService={selectedService}
            onTechnologyChange={(tech) => {
              setSelectedTechnology(tech);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            onIndustryChange={(industry) => {
              setSelectedIndustry(industry);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            onServiceChange={(service) => {
              setSelectedService(service);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
          />
          <ActiveFilters
            selectedTechnology={selectedTechnology}
            selectedIndustry={selectedIndustry}
            selectedService={selectedService}
            onClearTechnology={() => setSelectedTechnology("All Technologies")}
            onClearIndustry={() => setSelectedIndustry("All Industries")}
            onClearService={() => setSelectedService("All Services")}
            onClearAll={clearAllFilters}
          />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            {filteredCaseStudies.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">No matching case studies</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear all filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <AnimatePresence>
                    {visibleCaseStudies.map((caseStudy, index) => (
                      <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
                    ))}
                  </AnimatePresence>
                </div>

                {/* Load More */}
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-12"
                  >
                    <Button variant="outline" size="lg" onClick={loadMore}>
                      Load More Projects
                      <span className="ml-2 text-muted-foreground">
                        ({filteredCaseStudies.length - visibleCount} remaining)
                      </span>
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how AI can solve your unique challenges and create measurable impact for your organization.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
