import { motion } from "framer-motion";

const technologies = [
  { name: "CrewAI", logo: "🤖" },
  { name: "LangChain", logo: "🔗" },
  { name: "LangGraph", logo: "📊" },
  { name: "LangFuse", logo: "🔍" },
  { name: "PydanticAI", logo: "⚡" },
  { name: "OpenAI", logo: "🧠" },
  { name: "Claude", logo: "🎭" },
  { name: "Google Gemini", logo: "💎" },
  { name: "AutoGen", logo: "🔄" },
  { name: "LlamaIndex", logo: "🦙" },
  { name: "Zep Memory", logo: "💾" },
  { name: "Graphiti", logo: "📈" },
  { name: "MCP", logo: "🔌" },
  { name: "FireCrawl", logo: "🔥" },
  { name: "Ground X", logo: "🌍" },
  { name: "Streamlit", logo: "🎨" },
  { name: "RunPod", logo: "🚀" },
  { name: "Apify", logo: "🕷️" },
  { name: "ComfyUI", logo: "🎬" },
  { name: "Veo 3", logo: "📹" },
  { name: "n8n", logo: "⚙️" },
  { name: "Stripe", logo: "💳" },
  { name: "AWS", logo: "☁️" },
  { name: "Supabase", logo: "⚡" },
  { name: "Vercel", logo: "▲" },
  { name: "Docker", logo: "🐳" },
  { name: "Kubernetes", logo: "☸️" },
  { name: "PostgreSQL", logo: "🐘" },
  { name: "Redis", logo: "🔴" },
  { name: "Pinecone", logo: "🌲" },
];

export function LogoMarquee() {
  // Duplicate for seamless loop
  const allTechnologies = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 * technologies.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {allTechnologies.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">
              {tech.logo}
            </span>
            <span className="text-sm font-medium whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
