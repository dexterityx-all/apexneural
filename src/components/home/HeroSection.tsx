import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleHero } from "./ParticleHero";

export function HeroSection() {
  const scrollToEcosystem = () => {
    document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-mesh)" }}
      />
      
      {/* Particle system */}
      <ParticleHero />
      
      {/* Content */}
      <div className="container-wide relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-foreground/60 mb-6 animate-fade-in">
            AI Ecosystem Studio
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-foreground animate-fade-in-up">
            Building{" "}
            <span className="italic text-primary">Ecosystems</span>
            <br />
            Together
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We invest, build, and partner to create transformative AI-powered 
            solutions. From portfolio companies to proprietary products, 
            we're shaping the future of intelligent business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" onClick={scrollToEcosystem}>
              Discover Our Ecosystem
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/case-studies">View Our Work</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button
          onClick={scrollToEcosystem}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: "0.6s" }}
          aria-label="Scroll to ecosystem"
        >
          <ArrowDown className="h-5 w-5 animate-float" />
        </button>
      </div>
    </section>
  );
}
