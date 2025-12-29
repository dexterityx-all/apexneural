import { motion } from "framer-motion";

interface ArchitectureCardProps {
  title: string;
  description: string;
  index: number;
}

export function ArchitectureCard({ title, description, index }: ArchitectureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-xl border border-border/50 p-5 hover-lift"
    >
      <h4 className="text-base font-serif font-semibold text-foreground mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
