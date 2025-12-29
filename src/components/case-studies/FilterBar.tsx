import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { technologies, industries, serviceTypes, Technology, Industry, ServiceType } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  selectedTechnology: Technology;
  selectedIndustry: Industry;
  selectedService: ServiceType;
  onTechnologyChange: (tech: Technology) => void;
  onIndustryChange: (industry: Industry) => void;
  onServiceChange: (service: ServiceType) => void;
}

interface FilterDropdownProps {
  label: string;
  options: readonly string[];
  selected: string;
  onChange: (value: string) => void;
}

function FilterDropdown({ label, options, selected, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isFiltered = !selected.startsWith("All");

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200",
          isFiltered
            ? "bg-primary/10 border-primary/30 text-primary"
            : "bg-card border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
        )}
      >
        <span className="text-xs font-medium text-muted-foreground">{label}:</span>
        <span className="text-sm font-medium">{selected}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-2 w-56 bg-card border border-border/50 rounded-xl shadow-lg overflow-hidden z-50"
        >
          <div className="p-2 max-h-64 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                  selected === option
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span>{option}</span>
                {selected === option && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function FilterBar({
  selectedTechnology,
  selectedIndustry,
  selectedService,
  onTechnologyChange,
  onIndustryChange,
  onServiceChange,
}: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap gap-3"
    >
      <FilterDropdown
        label="Technology"
        options={technologies}
        selected={selectedTechnology}
        onChange={(value) => onTechnologyChange(value as Technology)}
      />
      <FilterDropdown
        label="Industry"
        options={industries}
        selected={selectedIndustry}
        onChange={(value) => onIndustryChange(value as Industry)}
      />
      <FilterDropdown
        label="Service"
        options={serviceTypes}
        selected={selectedService}
        onChange={(value) => onServiceChange(value as ServiceType)}
      />
    </motion.div>
  );
}
