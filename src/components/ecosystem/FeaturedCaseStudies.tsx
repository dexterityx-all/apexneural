import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const featuredCaseStudies = [
  {
    id: "data-labeling",
    title: "AgenticAI Data Labeling Platform",
    description: "Built an autonomous data labeling system using multi-agent AI architecture, reducing manual labeling time by 85%.",
    category: "Agentic AI",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: "champions-gen",
    title: "Champions Gen: Sports Intelligence",
    description: "AI-powered sports analytics platform predicting athlete injuries with 94% accuracy using computer vision and ML.",
    category: "Machine Learning",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1461896836934- voices-of-the-city-architecture?w=600&h=400&fit=crop",
  },
  {
    id: "recovery-copilot",
    title: "RecoveryCopilot: Health Insurance Audit",
    description: "Autonomous AI system that audits health insurance claims, recovering $2.3M in the first quarter of deployment.",
    category: "InsurTech",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    id: "volley-vision",
    title: "VolleyVision: AI Sports Analytics",
    description: "Real-time volleyball analytics using computer vision to track player movements and predict play outcomes.",
    category: "Computer Vision",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=400&fit=crop",
  },
];

const categories = [
  "Agentic AI",
  "AI Automation",
  "Machine Learning",
  "Computer Vision",
  "Generative AI",
  "Data Engineering",
  "FinTech",
  "InsurTech",
  "LegalTech",
  "HealthTech",
];

export function FeaturedCaseStudies() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Category Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-3 py-1 text-xs font-mono rounded-full bg-card border border-border/50 text-muted-foreground hover:border-ecosystem-projects/30 hover:text-ecosystem-projects transition-colors cursor-default"
            >
              {category}
            </motion.span>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-serif mb-2">Featured Case Studies</h3>
          <p className="text-muted-foreground">
            Explore how we've applied these technologies to solve real-world challenges.
          </p>
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredCaseStudies.map((study, index) => (
            <motion.a
              key={study.id}
              href={`https://website.apexneural.cloud/case-study/${study.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block rounded-xl bg-card border border-border/50 overflow-hidden hover:border-ecosystem-projects/30 transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-surface">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-ecosystem-projects">
                    <Tag className="h-3 w-3" />
                    {study.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {study.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-medium mb-2 group-hover:text-ecosystem-projects transition-colors">
                  {study.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {study.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-ecosystem-projects">
                  <span>Read case study</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://website.apexneural.cloud/case-study"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ecosystem-projects text-background font-medium hover:opacity-90 transition-opacity"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
