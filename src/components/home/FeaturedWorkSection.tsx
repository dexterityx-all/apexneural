import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: "agentic-ai-labeling",
    title: "Agentic AI Labeling Platform",
    client: "Healthcare AI Startup",
    category: "Healthcare",
    outcome: "90% reduction in labeling time",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    href: "/case-studies/agentic-ai-labeling",
  },
  {
    id: "legal-ai-assistant",
    title: "Legal AI Research Assistant",
    client: "Top 50 Law Firm",
    category: "Legal",
    outcome: "4x faster document review",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    href: "/case-studies/legal-ai-assistant",
  },
  {
    id: "financial-automation",
    title: "Financial Process Automation",
    client: "Fortune 500 Bank",
    category: "Finance",
    outcome: "$2M annual savings",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/case-studies/financial-automation",
  },
];

export function FeaturedWorkSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4">
              Transforming Industries with{" "}
              <span className="italic text-primary">AI</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/case-studies" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={project.href}
                className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-background/90 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-primary rounded-full text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.client}
                  </p>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                      {project.outcome}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
