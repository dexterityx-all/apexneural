import { motion } from "framer-motion";

interface MetricsCardProps {
  value: string;
  label: string;
  index: number;
}

export function MetricsCard({ value, label, index }: MetricsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group bg-card rounded-xl border border-border/50 p-6 text-center hover-lift overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
          {value}
        </div>
        <div className="text-sm text-muted-foreground font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
