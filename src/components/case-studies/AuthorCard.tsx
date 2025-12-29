import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";
import { CaseStudyAuthor } from "@/data/caseStudyDetails";

interface AuthorCardProps {
  author: CaseStudyAuthor;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl border border-border/50 p-8 md:p-10"
    >
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
        About the Author
      </h3>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar and Stats */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover border-2 border-border/50"
          />
          
          <div className="flex gap-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-primary">
                {author.projectsDelivered}
              </div>
              <div className="text-xs text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-primary">
                {author.yearsExperience}
              </div>
              <div className="text-xs text-muted-foreground">
                Industry Experience
              </div>
            </div>
          </div>
        </div>
        
        {/* Info */}
        <div className="flex-1">
          <h4 className="text-xl font-serif font-semibold text-foreground mb-1">
            {author.name}
          </h4>
          <p className="text-sm text-primary font-medium mb-1">
            {author.role}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {author.company}
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {author.bio}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View All Articles
            </a>
            <a
              href={author.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
