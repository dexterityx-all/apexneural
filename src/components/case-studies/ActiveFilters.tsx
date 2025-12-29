import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Technology, Industry, ServiceType } from "@/data/caseStudies";

interface ActiveFiltersProps {
  selectedTechnology: Technology;
  selectedIndustry: Industry;
  selectedService: ServiceType;
  onClearTechnology: () => void;
  onClearIndustry: () => void;
  onClearService: () => void;
  onClearAll: () => void;
}

export function ActiveFilters({
  selectedTechnology,
  selectedIndustry,
  selectedService,
  onClearTechnology,
  onClearIndustry,
  onClearService,
  onClearAll,
}: ActiveFiltersProps) {
  const hasFilters =
    !selectedTechnology.startsWith("All") ||
    !selectedIndustry.startsWith("All") ||
    !selectedService.startsWith("All");

  if (!hasFilters) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-wrap items-center gap-2"
    >
      <span className="text-sm text-muted-foreground">Active filters:</span>

      <AnimatePresence mode="popLayout">
        {!selectedTechnology.startsWith("All") && (
          <motion.button
            key="tech"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClearTechnology}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            <span>{selectedTechnology}</span>
            <X className="w-3 h-3" />
          </motion.button>
        )}

        {!selectedIndustry.startsWith("All") && (
          <motion.button
            key="industry"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClearIndustry}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
          >
            <span>{selectedIndustry}</span>
            <X className="w-3 h-3" />
          </motion.button>
        )}

        {!selectedService.startsWith("All") && (
          <motion.button
            key="service"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClearService}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border/50 hover:bg-muted/80 transition-colors"
          >
            <span>{selectedService}</span>
            <X className="w-3 h-3" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClearAll}
        className="text-xs font-medium text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors ml-2"
      >
        Clear all
      </motion.button>
    </motion.div>
  );
}
