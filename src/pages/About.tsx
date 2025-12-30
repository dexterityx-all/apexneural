import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Shield,
  Target,
  RefreshCw,
  Eye,
  ExternalLink
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DeterministicTriangle = lazy(() => import("@/components/about/DeterministicTriangle"));
const VectorSpace = lazy(() => import("@/components/about/VectorSpace"));

const coreValues = [
  {
    icon: Shield,
    title: "Authenticity",
    description: "We operate with transparency and integrity — in our relationships, in our code, and in every outcome we create.",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take ownership of our promises and our performance — delivering real, measurable results you can trust.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "We embrace change with agility — learning, evolving, and staying ahead in a rapidly shifting AI landscape.",
  },
];

const leadership = [
  {
    name: "Arghya Basu",
    role: "Co-Founder",
    image: "https://website.apexneural.cloud/assets/img/founders-img/arghya.png",
    bio: "With 15 years across healthcare and technology, Arghya has had the privilege of contributing to organizations like Google and Sify Technologies. He co-founded CORE Diagnostics, where he helped build a specialized pathology lab focused on oncology and data-driven diagnostics. Grateful for the journey of learning in fundraising, business strategy, and healthcare innovation. He successfully sold CORE Diagnostics to Metropolis Healthcare.",
    education: "B.Tech (JNTU), MBA (TAPMI)",
    featuredLink: {
      text: "Featured in The Hindu",
      url: "https://www.thehindu.com/news/cities/Hyderabad/core-diagnostics-raises-rs-58-crore/article7379679.ece",
    },
  },
  {
    name: "Anshul Jain",
    role: "Co-Founder & CEO",
    image: "https://website.apexneural.cloud/assets/img/founders-img/anshul.png",
    bio: "Over a decade in IT services and Salesforce consulting, Anshul has been fortunate to build and lead teams focused on delivering client value. He played a key role in ABSYZ's journey from a bootstrapped startup to its successful acquisition by Youngsoft Inc. Blessed to have learned from every team member and client along the way, his focus remains on building lasting relationships and sustainable growth.",
    education: "MBA (TAPMI), Columbia Business School",
    featuredLink: {
      text: "TAPMI Alumni Feature",
      url: "https://www.tapmi.edu.in/coe/coe-bengaluru/alumni/",
    },
  },
  {
    name: "JP Botta",
    role: "Chairman",
    image: "/images/team/jp-botta.jpg",
    bio: "With 15 years of leadership across shipping, hospitality, and management services, JP brings a wealth of cross-industry perspective to APEXneural's strategic direction. His focus on mentorship, ethical leadership, and governance excellence helps guide the company's long-term vision and values. He brings invaluable experience from serving on multiple advisory boards and institutional committees.",
    education: "",
    featuredLink: null,
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50"
          style={{ background: "var(--gradient-mesh)" }}
        />
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground"
            >
              About Us
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6"
            >
              Building <span className="italic text-primary">Ecosystems</span> Together
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              At APEXneural, we transform businesses through cutting-edge technology, 
              strategic consulting, and innovative solutions that drive growth and resilience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section with Vision Globe */}
      <section className="py-16 bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-primary">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">
                Harnessing AI across <span className="italic">deterministic</span> and{" "}
                <span className="italic">non-deterministic</span> frontiers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                APEXneural was founded on a simple belief: the future belongs to those who 
                can bridge the gap between cutting-edge AI capabilities and real-world business outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With roots in healthcare, IT services, and strategic talent solutions, our founders 
                came together to create an ecosystem where technology, people, and processes work 
                in harmony to deliver transformative results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse mx-auto mb-4" />
                      <p className="text-xl font-serif italic text-foreground">
                        "Reimagine the future with AI"
                      </p>
                    </div>
                  </div>
                }>
                  <DeterministicTriangle />
                </Suspense>
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                  <p className="text-lg font-serif italic text-foreground/80">
                    "Reimagine the future with AI"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4">
              Vision, Mission & <span className="italic text-primary">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3">Our Vision</h3>
              <p className="text-2xl font-serif italic text-foreground">
                Reimagine the future with AI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To build trusted AI solutions that deliver real outcomes and lay the foundation 
                for lasting innovation.
              </p>
            </motion.div>
          </div>

          {/* AAA Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-serif">
              Our Core Values — <span className="text-primary">AAA</span> Standard
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-surface border border-border/50 hover:border-primary/30 transition-colors text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-serif mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Vectors Section with 3D Visualization */}
      <section className="py-20 bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Our Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-4">
              Six Vectors <span className="italic text-primary">Powering</span> APEXneural
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capability is a system: people, process, and technology in lockstep. 
              Combined with a flywheel of community, distribution, and products.
            </p>
          </motion.div>

          <Suspense fallback={
            <div className="h-[400px] flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          }>
            <VectorSpace />
          </Suspense>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4">
              The People Behind <span className="italic text-primary">APEXneural</span>
            </h2>
          </motion.div>

          {/* Founders Row */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {leadership.slice(0, 2).map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors h-full"
              >
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-serif">{person.name}</h3>
                    <p className="text-primary text-sm">{person.role}</p>
                    {person.education && (
                      <p className="text-xs text-muted-foreground mt-1">{person.education}</p>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {person.bio}
                </p>
                {person.featuredLink && (
                  <a
                    href={person.featuredLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <span>{person.featuredLink.text}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Chairman Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src={leadership[2].image}
                alt={leadership[2].name}
                className="w-28 h-28 rounded-xl object-cover"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-serif">{leadership[2].name}</h3>
                <p className="text-primary text-sm">{leadership[2].role}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-center sm:text-left">
              {leadership[2].bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to build something <span className="italic text-primary">together</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're exploring AI possibilities or ready to transform your business—we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/30 transition-colors"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
