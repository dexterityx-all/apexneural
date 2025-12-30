import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  FileText, 
  Globe,
  Code,
  BookOpen,
  GraduationCap,
  Megaphone,
  Share2,
  Rocket,
  Package,
  Layers,
  TestTube,
  Tag,
  School
} from "lucide-react";

const dbaasPhases = [
  {
    id: "research",
    phase: "Phase 1",
    title: "Market Research to Landing Page",
    description: "From idea validation to market-ready presence in days, not months.",
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "border-violet-400/30",
    items: [
      {
        icon: Search,
        name: "DBaaS Research Platform",
        description: "AI-powered market research, competitive analysis, and opportunity identification.",
        href: "https://dbaas.apexneural.cloud/search",
      },
      {
        icon: FileText,
        name: "DBaaS E-Books",
        description: "Automated lead magnet creation with AI-generated content and design.",
        href: "https://bookgen.apexneural.cloud/",
      },
      {
        icon: Globe,
        name: "Landing Page Generation",
        description: "Conversion-optimized landing pages created and deployed automatically.",
        href: "https://dbaas.apexneural.cloud/search",
      },
    ],
  },
  {
    id: "creation",
    phase: "Phase 2",
    title: "Product Creation",
    description: "Build your digital product with AI-assisted development and frameworks.",
    color: "text-ecosystem-products",
    bgColor: "bg-ecosystem-products/10",
    borderColor: "border-ecosystem-products/30",
    items: [
      {
        icon: Code,
        name: "Apex SaaS Framework",
        description: "Pre-built components, authentication, payments, and infrastructure ready to go.",
        href: "https://apexsaaskit.apexneural.cloud/",
      },
      {
        icon: GraduationCap,
        name: "DBaaS E-Courses",
        description: "Transform expertise into online courses with automated curriculum design.",
        href: "https://course.apexneural.cloud/",
      },
      {
        icon: Layers,
        name: "Full-Stack Applications",
        description: "AI-assisted development from frontend to backend, database to deployment.",
        href: "https://apexsaaskit.apexneural.cloud/",
      },
    ],
  },
  {
    id: "distribution",
    phase: "Phase 3",
    title: "Distribution & Marketing",
    description: "Scale your reach with automated content and multi-platform distribution.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/30",
    items: [
      {
        icon: BookOpen,
        name: "Content Factory Platform",
        description: "AI content generation for blogs, social media, and email campaigns.",
        href: "https://ai-content-web.apexneural.cloud/",
      },
      {
        icon: Share2,
        name: "Multi-Platform Distribution",
        description: "Automated publishing across social media, email, and content networks.",
        href: "https://ai-content-web.apexneural.cloud/",
      },
      {
        icon: Megaphone,
        name: "Growth Tools",
        description: "Analytics, A/B testing, and optimization to maximize conversions.",
        href: "https://dbaas.apexneural.cloud/search",
      },
    ],
  },
];

const otherProducts = [
  {
    name: "Prism",
    subtitle: "AI Recruitment Automation",
    description: "End-to-end hiring platform that screens, evaluates, and ranks candidates using conversational AI. Reduces manual work by 80-85%.",
    icon: Package,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    href: "https://prism.apexneural.cloud/",
  },
  {
    name: "Kutum",
    subtitle: "Family Information OS",
    description: "Secure family document management with AI-powered organization, timely reminders, and legacy planning for what matters most.",
    icon: Package,
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    href: "https://kutum.apexneural.cloud/",
  },
  {
    name: "E2E QA Lab",
    subtitle: "Automated Testing Platform",
    description: "Production-ready platform for automated code analysis, E2E testing with pytest, Jest, Playwright, Cypress, and AI-powered improvement recommendations.",
    icon: TestTube,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    href: "https://e2eqalab.apexneural.cloud/",
  },
  {
    name: "NexusAI Labelling",
    subtitle: "AI Data Labelling Platform",
    description: "Automate data labeling workflow with advanced AI agents. Process text, images, audio with dynamic categorization and quality assurance.",
    icon: Tag,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    href: "https://agenticlabel.apexneural.cloud/",
  },
  {
    name: "Triverse Academy",
    subtitle: "AI Learning Architecture",
    description: "Three-phase AI mastery across MindForge, VisionStream, and CodeSphere. From implementation to architecture to leadership.",
    icon: School,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    href: "https://triverseacademy.apexneural.cloud/",
  },
];

export function DBaaSSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-ecosystem-products">
            ApexNeural Product Suite
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">
            Products born from <span className="italic text-ecosystem-products">real challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every product we build comes from challenges we've encountered across 47+ enterprise engagements. 
            These aren't theoretical solutions—they're battle-tested tools.
          </p>
        </motion.div>

        {/* DBaaS Featured Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-ecosystem-products/10">
              <Rocket className="h-8 w-8 text-ecosystem-products" />
            </div>
            <div>
              <h3 className="text-2xl font-serif">DBaaS</h3>
              <p className="text-muted-foreground">Digital Business as a Service</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12 max-w-3xl"
          >
            A complete end-to-end platform for building, launching, and scaling digital businesses. 
            From initial market research to global distribution—everything you need in one ecosystem.
          </motion.p>

          {/* Three Phase Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {dbaasPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative p-6 rounded-2xl bg-card border ${phase.borderColor}`}
                >
                  {/* Phase Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${phase.bgColor} ${phase.color} text-xs font-mono uppercase tracking-wider mb-4`}>
                    {phase.phase}
                  </div>

                  <h4 className="text-xl font-serif mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground mb-6">{phase.description}</p>

                  <div className="space-y-4">
                    {phase.items.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group hover:bg-background/50 p-2 -mx-2 rounded-lg transition-colors"
                      >
                        <div className={`p-2 rounded-lg ${phase.bgColor} flex-shrink-0`}>
                          <item.icon className={`h-4 w-4 ${phase.color}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-sm group-hover:text-primary transition-colors flex items-center gap-1">
                            {item.name}
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h5>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-serif mb-8"
          >
            More Products
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-ecosystem-products/30 transition-all hover:shadow-lg h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${product.bgColor}`}>
                      <product.icon className={`h-6 w-6 ${product.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-medium group-hover:text-ecosystem-products transition-colors">
                          {product.name}
                        </h4>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-ecosystem-products group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-ecosystem-products mb-2">{product.subtitle}</p>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
