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

// Split technologies into 3 rows
const row1 = technologies.slice(0, 10);
const row2 = technologies.slice(10, 20);
const row3 = technologies.slice(20, 30);

interface MarqueeRowProps {
  items: typeof technologies;
  direction: "left" | "right";
  duration: number;
}

function MarqueeRow({ items, direction, duration }: MarqueeRowProps) {
  const allItems = [...items, ...items];
  const initialX = direction === "left" ? 0 : -50 * items.length;
  const animateX = direction === "left" ? -50 * items.length : 0;

  return (
    <motion.div
      className="flex gap-6"
      animate={{
        x: [initialX, animateX],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      }}
    >
      {allItems.map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className="flex-shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-colors group"
        >
          <span className="text-xl group-hover:scale-110 transition-transform">
            {tech.logo}
          </span>
          <span className="text-sm font-medium whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex flex-col gap-4">
        {/* Row 1 - scrolls left */}
        <MarqueeRow items={row1} direction="left" duration={25} />
        
        {/* Row 2 - scrolls right */}
        <MarqueeRow items={row2} direction="right" duration={30} />
        
        {/* Row 3 - scrolls left (faster) */}
        <MarqueeRow items={row3} direction="left" duration={22} />
      </div>
    </div>
  );
}
