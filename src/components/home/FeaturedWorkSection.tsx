import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Eye, Layers, Users, Home, Activity, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

const showcases = [
  {
    id: "sports-vision",
    icon: Eye,
    title: "Computer Vision for Sports Analytics",
    subtitle: "Sports Vision AI",
    description: "Real-time player tracking, ball trajectory analysis, live event detection, and coaching insights powered by advanced computer vision algorithms.",
    highlights: ["Player Tracking", "Ball Trajectory", "Live Event Detection", "Coach Analytics"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop",
    link: "https://sportsai.apexneural.cloud/",
    caseStudy: "/case-studies/volleyvision-sports-ai",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    id: "dbaas",
    icon: Layers,
    title: "Your Complete Digital Business, Delivered",
    subtitle: "DBaaS Ecosystem",
    description: "One platform for everything: landing pages, market research, content creation, e-courses, e-books, SaaS templates, and organic marketing. Pay once, launch your business.",
    highlights: ["Landing Pages", "Market Research", "Content Factory", "E-Courses & E-Books", "SaaS Templates", "Organic Marketing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    link: "https://dbaas.apexneural.cloud/search",
    products: [
      { name: "Courses", url: "https://course.apexneural.cloud/" },
      { name: "Research", url: "https://dbaas.apexneural.cloud/search" },
      { name: "SaaS Kit", url: "https://apexsaaskit.apexneural.cloud/" },
      { name: "E-Book", url: "https://bookgen.apexneural.cloud/" },
      { name: "Content", url: "https://ai-content-web.apexneural.cloud/" },
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "prism",
    icon: Users,
    title: "AI-Powered Recruitment Automation",
    subtitle: "PRISM",
    description: "End-to-end recruitment copilot built on modern AI. Automate sourcing, screening, and scheduling while maintaining the human touch that candidates deserve.",
    highlights: ["Candidate Sourcing", "AI Screening", "Smart Scheduling", "Talent Matching"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop",
    link: "https://prism.apexneural.cloud/",
    caseStudy: "/case-studies/prism-recruitment-automation",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    id: "kutum",
    icon: Home,
    title: "The Family Information OS",
    subtitle: "Kutum",
    description: "Secure family hub that centralizes documents, health records, and milestones with intelligent OCR and AI nudges for passport renewals, health follow-ups, and more.",
    highlights: ["Document OCR", "Health Records", "AI Nudges", "Secure Vault"],
    image: "https://images.unsplash.com/photo-1536353118028-d0e53f67fe6f?w=1200&h=800&fit=crop",
    link: "https://kutum.apexneural.cloud/",
    caseStudies: [
      { name: "Family OS", url: "/case-studies/kutum-family-os" },
      { name: "AI Nudges", url: "/case-studies/kutum-ai-nudges" },
    ],
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "championsgen",
    icon: Activity,
    title: "Predict and Prevent Injuries Before They Happen",
    subtitle: "ChampionsGen · Injury Analytics",
    description: "€750M in annual injury costs across top 5 European leagues. Our AI predicts injury risk, protects player valuations, and shifts medicine from reactive to proactive.",
    highlights: ["Risk Prediction", "Valuation Protection", "Proactive Medicine", "Performance Analytics"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop",
    link: "https://championsgen.framer.website/",
    caseStudy: "/case-studies/champions-gen-sports-ai",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
  },
  {
    id: "galactic",
    icon: FlaskConical,
    title: "AI-Powered Drug Toxicity Prediction",
    subtitle: "Galactic Therapeutics · AI Toxicology",
    description: "99.5% prediction accuracy. Replacing animal testing. 40-55% of drugs fail due to toxicity—a multi-billion dollar problem we're solving with predictive AI.",
    highlights: ["99.5% Accuracy", "No Animal Testing", "Liver Toxicity", "Clinical Predictions"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
    link: "https://galactictherapeutics.com",
    caseStudy: "/case-studies/galactic-toxicity-intelligence-engine",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
  },
];

function ShowcaseCard({ showcase, index }: { showcase: typeof showcases[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]);

  const IconComponent = showcase.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="min-h-[70vh] flex items-center py-12 sticky top-[20vh] bg-background"
    >
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <IconComponent className="h-5 w-5" />
              </div>
              <span className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                {showcase.subtitle}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
              {showcase.title}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {showcase.description}
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {showcase.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
            
            {/* Products grid for DBaaS */}
            {showcase.products && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {showcase.products.map((product) => (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors flex items-center justify-between group"
                  >
                    {product.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            )}
            
            {/* Case studies for Kutum */}
            {showcase.caseStudies && (
              <div className="flex flex-wrap gap-2 pt-2">
                {showcase.caseStudies.map((study) => (
                  <Link
                    key={study.name}
                    to={study.url}
                    className="px-3 py-2 text-sm bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors flex items-center gap-2 group"
                  >
                    {study.name}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            )}
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href={showcase.link} target="_blank" rel="noopener noreferrer" className="group">
                  Explore Platform
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
              {showcase.caseStudy && (
                <Button variant="outline" asChild>
                  <Link to={showcase.caseStudy} className="group">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${showcase.gradient} rounded-3xl blur-3xl`} />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={showcase.image}
                alt={showcase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative">
      {/* Sticky Header with Progress Dots */}
      <div className="sticky top-0 z-30 bg-background border-b border-border/50 pt-4 pb-4">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
                Featured Work
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mt-2">
                Where Hard AI Meets{" "}
                <span className="italic text-primary">Real Impact</span>
              </h2>
            </div>
            <div className="flex items-center gap-6">
              {/* Progress Dots */}
              <div className="flex items-center gap-2">
                {showcases.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 rounded-full border-2 border-muted-foreground/30 transition-colors"
                    style={{
                      backgroundColor: useTransform(
                        scrollYProgress,
                        [index / showcases.length, (index + 0.5) / showcases.length],
                        ["transparent", "hsl(var(--primary))"]
                      ),
                      borderColor: useTransform(
                        scrollYProgress,
                        [index / showcases.length, (index + 0.5) / showcases.length],
                        ["hsl(var(--muted-foreground) / 0.3)", "hsl(var(--primary))"]
                      ),
                    }}
                  />
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/case-studies" className="group">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Cards */}
      <div className="relative">
        {showcases.map((showcase, index) => (
          <ShowcaseCard key={showcase.id} showcase={showcase} index={index} />
        ))}
      </div>
    </section>
  );
}
