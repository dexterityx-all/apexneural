import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/case-studies/${caseStudy.id}`}
        className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover-lift card-glow"
      >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            {caseStudy.technology}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border/50">
            {caseStudy.industry}
          </span>
        </div>

        {/* Read Time */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span>{caseStudy.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {caseStudy.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {caseStudy.description}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-3">
            <img
              src={caseStudy.author.avatar}
              alt={caseStudy.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-foreground">
              {caseStudy.author.name}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{caseStudy.date}</span>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}
