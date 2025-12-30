import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Briefcase, Handshake, Network, Stethoscope, Trophy, Sparkles, Building2 } from "lucide-react";

const verticals = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Stethoscope,
    philosophy: "Where AI meets life sciences to accelerate drug discovery and improve patient outcomes.",
    color: "text-ecosystem-portfolios",
    bgColor: "bg-ecosystem-portfolios/10",
  },
  {
    id: "sports",
    name: "Sports Technology",
    icon: Trophy,
    philosophy: "Combining sports science with machine learning to enhance athlete performance and prevent injuries.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    id: "beauty",
    name: "Beauty & Wellness",
    icon: Sparkles,
    philosophy: "Personalizing beauty and wellness through computer vision and AI-driven recommendations.",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    philosophy: "Transforming property markets with intelligent automation and predictive analytics.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
];

const investmentPrinciples = [
  {
    icon: Handshake,
    title: "Technology Partner First",
    description: "We co-build products alongside founders, bringing technical expertise to every partnership.",
  },
  {
    icon: Heart,
    title: "Deep Domain Expertise",
    description: "We invest in verticals where we have hands-on experience and genuine passion.",
  },
  {
    icon: Briefcase,
    title: "Long-term Commitment",
    description: "We're in it for the journey, not just the exit. Building lasting companies takes time.",
  },
  {
    icon: Network,
    title: "Access to Our Ecosystem",
    description: "Portfolio companies benefit from our products, projects, and extensive network.",
  },
];

export function InvestmentPhilosophy() {
  return (
    <section id="strategic-investments" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-ecosystem-portfolios">
            Strategic Investments
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">
            We invest as <span className="italic text-ecosystem-portfolios">technology partners</span>, not passive capital
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We partner with founders who share our passion for transforming industries we deeply understand. 
            We bring technical expertise, hands-on co-building, and strategic guidance—not just funding.
          </p>
        </motion.div>

        {/* Focus Verticals */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-serif mb-8"
          >
            Our Focus Verticals
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-ecosystem-portfolios/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${vertical.bgColor}`}>
                    <vertical.icon className={`h-6 w-6 ${vertical.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium mb-2 group-hover:text-ecosystem-portfolios transition-colors">
                      {vertical.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {vertical.philosophy}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Invest */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-serif mb-8"
          >
            How We Invest
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-surface border border-border/30"
              >
                <div className="p-2 rounded-lg bg-ecosystem-portfolios/10 w-fit mb-4">
                  <principle.icon className="h-5 w-5 text-ecosystem-portfolios" />
                </div>
                <h4 className="font-medium mb-2">{principle.title}</h4>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-ecosystem-portfolios/5 border border-ecosystem-portfolios/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif mb-2">Have an idea in these spaces?</h4>
              <p className="text-muted-foreground">
                We're always looking for passionate founders building in healthcare, sports, beauty, and real estate.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ecosystem-portfolios text-background font-medium hover:opacity-90 transition-opacity"
            >
              <span>Let's Talk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
