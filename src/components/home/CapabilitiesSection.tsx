import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Workflow, 
  Eye, 
  MessageSquare, 
  Database, 
  Zap,
  ArrowUpRight
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that reason, plan, and execute complex multi-step tasks with minimal human intervention.",
    caseStudies: [
      { name: "Data Labeling", url: "/case-studies/agentic-data-labeling" },
      { name: "FireCrawl RAG", url: "/case-studies/firecrawl-rag" },
      { name: "Paralegal AI", url: "/case-studies/paralegal-ai" },
      { name: "Deep Researcher", url: "/case-studies/deep-researcher" },
    ],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "End-to-end workflow automation that reduces operational costs and eliminates manual bottlenecks.",
    caseStudies: [
      { name: "PRISM Recruitment", url: "/case-studies/prism-recruitment-automation" },
      { name: "Kutum AI Nudges", url: "/case-studies/kutum-ai-nudges" },
      { name: "Content Factory", url: "/case-studies/content-factory" },
      { name: "DBaaS Platform", url: "/case-studies/dbaas-platform" },
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Advanced visual intelligence for sports analytics, document processing, and real-time detection.",
    caseStudies: [
      { name: "VolleyVision", url: "/case-studies/volleyvision-sports-ai" },
      { name: "ScaleScrape", url: "/case-studies/scalescrape-visual" },
      { name: "ChampionsGen", url: "/case-studies/champions-gen-sports-ai" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Natural language interfaces that understand context, intent, and deliver meaningful interactions.",
    caseStudies: [
      { name: "Parlant Financial", url: "/case-studies/parlant-financial-ai" },
      { name: "Voice Agent", url: "/case-studies/realtime-voice-agent" },
      { name: "Zep Memory", url: "/case-studies/zep-memory-assistant" },
    ],
  },
  {
    icon: Database,
    title: "RAG Systems",
    description:
      "Retrieval-augmented generation that grounds AI responses in your proprietary knowledge base.",
    caseStudies: [
      { name: "FireCrawl RAG", url: "/case-studies/firecrawl-rag" },
      { name: "NotebookLM Clone", url: "/case-studies/notebooklm-clone" },
      { name: "GroundX Docs", url: "/case-studies/groundx-document-ai" },
    ],
  },
  {
    icon: Zap,
    title: "Decision Intelligence",
    description:
      "AI-powered insights that transform data into strategic decisions and predictive capabilities.",
    caseStudies: [
      { name: "Stock Portfolio", url: "/case-studies/stock-portfolio-agent" },
      { name: "RecoveryCopilot", url: "/case-studies/recovery-copilot" },
      { name: "Risk Analytics", url: "/case-studies/risk-analytics" },
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 mb-6">
            AI Solutions for{" "}
            <span className="italic text-primary">Enterprise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver cutting-edge AI capabilities that drive measurable business outcomes. 
            Our expertise spans the full spectrum of modern artificial intelligence.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <capability.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {capability.description}
              </p>
              
              {/* Case Study Links */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {capability.caseStudies.map((study) => (
                  <Link
                    key={study.name}
                    to={study.url}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/10 rounded-md transition-colors"
                  >
                    {study.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
