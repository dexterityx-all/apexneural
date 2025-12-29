// Extended case study data with full content for detail pages

export interface CaseStudyAuthor {
  name: string;
  avatar: string;
  role: string;
  company: string;
  bio: string;
  projectsDelivered: string;
  yearsExperience: string;
  linkedIn: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface ArchitectureComponent {
  title: string;
  description: string;
}

export interface CaseStudyDetail {
  id: string;
  title: string;
  description: string;
  technology: string;
  industry: string;
  serviceType: string;
  readTime: string;
  image: string;
  heroImage: string;
  date: string;
  externalUrl: string;
  
  // Detailed content
  overview: string;
  metrics: CaseStudyMetric[];
  
  architecture: {
    description: string;
    image: string;
    components: ArchitectureComponent[];
  };
  
  implementation: {
    code: string;
    language: string;
    explanation: string;
  };
  
  workflow: {
    steps: string[];
    image: string;
  };
  
  results: {
    quote: string;
    outcomes: { title: string; description: string }[];
  };
  
  tags: string[];
  author: CaseStudyAuthor;
}

// Team member data for reuse
export const teamMembers: Record<string, CaseStudyAuthor> = {
  hansika: {
    name: "Hansika",
    avatar: "https://website.apexneural.cloud/assets/img/team/hansika.jpeg",
    role: "Senior Engineer - AI Systems",
    company: "ApexNeural AI Solutions",
    bio: "Specializing in production-grade autonomous AI systems with expertise in agentic architectures, multi-modal processing, and intelligent automation. Passionate about combining cutting-edge research with practical engineering to deliver scalable AI solutions.",
    projectsDelivered: "20+",
    yearsExperience: "7yr",
    linkedIn: "https://linkedin.com/in/hansika-vardini-mula-918ba3351"
  },
  parmeet: {
    name: "Parmeet Singh",
    avatar: "https://website.apexneural.cloud/assets/img/team/Parmeet.jpg",
    role: "Lead System Architect",
    company: "ApexNeural AI Solutions",
    bio: "Expert in AI-powered content systems and social media automation. Specializes in building scalable platforms that leverage generative AI for content creation and distribution.",
    projectsDelivered: "15+",
    yearsExperience: "8yr",
    linkedIn: "https://linkedin.com/in/parmeettalwar/"
  },
  kushal: {
    name: "Kushal Kumar",
    avatar: "https://website.apexneural.cloud/assets/img/team/Kushal.jpg",
    role: "Founder & Lead Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Building intelligent consumer applications that bring AI capabilities to everyday life. Expert in mobile and web platforms with integrated AI features.",
    projectsDelivered: "10+",
    yearsExperience: "1yr",
    linkedIn: "https://linkedin.com/in/kushal-kumar-5a6b68202"
  },
  rahul: {
    name: "Rahul",
    avatar: "https://website.apexneural.cloud/assets/img/team/Rahul.jpg",
    role: "LegalTech Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Focused on building conversational AI and voice-enabled systems. Expert in LLM integration, RAG pipelines, and real-time AI applications.",
    projectsDelivered: "10+",
    yearsExperience: "5yr",
    linkedIn: "https://linkedin.com/in/rahul-patil-531a82255"
  },
  sunny: {
    name: "Sunny",
    avatar: "https://website.apexneural.cloud/assets/img/team/Sunny.jpg",
    role: "Lead ML Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Specialized in machine learning for healthcare and pharmaceutical applications. Expert in toxicity prediction, drug discovery, and clinical AI systems.",
    projectsDelivered: "10+",
    yearsExperience: "3yr",
    linkedIn: "https://linkedin.com/in/sunny"
  },
  akshay: {
    name: "Akshay",
    avatar: "https://website.apexneural.cloud/assets/img/team/Akshay.png",
    role: "AI Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Building AI-powered HR and recruitment platforms. Expert in NLP, candidate matching algorithms, and workflow automation.",
    projectsDelivered: "10+",
    yearsExperience: "5yr",
    linkedIn: "https://linkedin.com/in/akshay"
  },
  vedant: {
    name: "Vedant Pai",
    avatar: "https://website.apexneural.cloud/assets/img/team/Vedant.jpg",
    role: "AI Engineer & Creative Technologist",
    company: "ApexNeural AI Solutions",
    bio: "Expert in video generation and multimodal AI. Specializes in cutting-edge generative models for creative applications.",
    projectsDelivered: "20+",
    yearsExperience: "3yr",
    linkedIn: "https://linkedin.com/in/vedant-pai-a45348258"
  },
  shubham: {
    name: "Shubham Rathod",
    avatar: "https://website.apexneural.cloud/assets/img/team/Shubham.png",
    role: "Full Stack AI Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Specialized in sports analytics and real-time video processing. Expert in object detection, tracking, and performance analysis systems.",
    projectsDelivered: "20+",
    yearsExperience: "5yr",
    linkedIn: "https://linkedin.com/in/shubham-rathod-a82027259"
  },
  ramya: {
    name: "Ramya",
    avatar: "https://website.apexneural.cloud/assets/img/team/ramya.jpeg",
    role: "Senior Engineer - Integrations and Applied AI",
    company: "ApexNeural AI Solutions",
    bio: "Building enterprise AI solutions for healthcare and insurance. Expert in claims processing, audit automation, and document intelligence.",
    projectsDelivered: "12+",
    yearsExperience: "8yr",
    linkedIn: "https://linkedin.com/in/tirumalaraju-ramya-99629975"
  },
  likhith: {
    name: "Likhith Masura",
    avatar: "https://website.apexneural.cloud/assets/img/team/Likhith.jpg",
    role: "Full Stack Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Expert in building scalable SaaS platforms and infrastructure. Specialized in database systems, cloud architecture, and developer tools.",
    projectsDelivered: "15+",
    yearsExperience: "10yr",
    linkedIn: "https://linkedin.com/in/likhith-masura-6b9141250"
  }
};

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    id: "agentic-ai-labeling",
    title: "AgenticAI Data Labeling Platform",
    description: "Built an autonomous AI agent system that handles complex data labeling tasks with human-in-the-loop validation, reducing labeling time by 80%.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop",
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/agentic-ai-labeling",
    overview: "Data labeling is the bottleneck of modern AI. We built an autonomous multi-agent system where agents collaborate to label images, text, and audio. The system features a 'Supervisor Agent' that critiques labels and a 'Worker Agent' that performs the task, creating a self-improving loop.",
    metrics: [
      { value: "99.2%", label: "Label Accuracy" },
      { value: "50,000", label: "Images/Hour" },
      { value: "90%", label: "Cost Reduction" },
      { value: "<1%", label: "Human Loop" }
    ],
    architecture: {
      description: "The system uses a Hub-and-Spoke agent architecture. A central 'Orchestrator' manages task distribution. 'Specialist' agents handles specific data types (Vision, NLP). All agents share a Vector Memory Store for context retention.",
      image: "https://website.apexneural.cloud/assets/img/casestudy/agentic_labeling_arch.png",
      components: [
        { title: "Orchestrator", description: "LangGraph state machine for workflow control" },
        { title: "Vision Agent", description: "GPT-4o for complex image reasoning" },
        { title: "Memory Store", description: "Qdrant Vector DB for semantic retrieval" },
        { title: "Verification", description: "Cross-validation consensus protocol" }
      ]
    },
    implementation: {
      language: "python",
      code: `from langgraph import StateGraph

class LabelingState(TypedDict):
    image_url: str
    current_label: str
    confidence: float

def supervisor_node(state: LabelingState):
    # Supervisor critiques the label
    if state['confidence'] < 0.9:
        return 'send_to_human_review'
    return 'finalize_label'

workflow = StateGraph(LabelingState)
workflow.add_node('supervisor', supervisor_node)`,
      explanation: "Using a shared vector memory allows agents to recall similar past edge-cases, preventing them from making the same mistake twice."
    },
    workflow: {
      steps: [
        "Ingestion: Raw data hits the pipeline.",
        "Routing: Orchestrator identifies data type.",
        "Labeling: Worker agents generate initial labels.",
        "Critique: Supervisor agent reviews confidence.",
        "Output: JSON structure pushed to data lake."
      ],
      image: "https://website.apexneural.cloud/assets/case-study/agentic-labeling/workflow.png"
    },
    results: {
      quote: "This platform allowed us to label our entire training dataset in weekend, a task that was projected to take 3 months.",
      outcomes: [
        { title: "Speed", description: "Reduced TTM (Time to Market) by 4 months" },
        { title: "Quality", description: "Surpassed human-crowdsourced accuracy" },
        { title: "Scale", description: "Auto-scaled to 100 concurrent agents" }
      ]
    },
    tags: ["AgenticAI", "Multi-Modal", "Machine Learning", "Python"],
    author: teamMembers.hansika
  },
  {
    id: "content-phase-ai-platform",
    title: "Content Phase - The Ultimate AI Social Media Manager",
    description: "Comprehensive platform that replaces social media agencies with AI-powered content creation, scheduling, and multi-platform publishing.",
    technology: "AI Automation",
    industry: "Content & Media",
    serviceType: "Product Build",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop",
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/content-phase-ai-platform",
    overview: "Content Phase is a comprehensive platform that replaces the need for a social media agency. It combines a sophisticated scheduling engine with creative AI to handle the entire lifecycle of a social post: from brainstorming ideas to creating final art and hitting publish. It's built to be as simple as sending a chat message but powerful enough to run a global brand.",
    metrics: [
      { value: "10x Faster", label: "Content Creation" },
      { value: "2-3 Seconds", label: "Image Generation" },
      { value: "97.5%", label: "Cost Savings" },
      { value: "5+", label: "Platforms" }
    ],
    architecture: {
      description: "The platform uses a layered microservices architecture designed for scale and reliability. At the top, unified Client Interfaces (Web & Telegram) communicate through a robust API Gateway. The Core Service Layer manages intelligent orchestration, utilizing distinct services for Credentials, Content AI, and Scheduling.",
      image: "https://website.apexneural.cloud/assets/case-study/content-phase/architecture.png",
      components: [
        { title: "API Gateway", description: "Unified entry point for Web & Telegram clients" },
        { title: "Content AI Service", description: "GPT-4o powered content generation engine" },
        { title: "Scheduling Engine", description: "Intelligent post timing optimization" },
        { title: "Multi-Platform Publisher", description: "Facebook, Instagram, Twitter, LinkedIn, Reddit" }
      ]
    },
    implementation: {
      language: "python",
      code: `async def generate_content(topic: str, platform: str):
    # Generate platform-optimized content
    prompt = f"Create a {platform} post about {topic}"
    content = await openai.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    
    # Generate matching visual
    image = await generate_image(content.text)
    return {"text": content.text, "image": image}`,
      explanation: "The platform handles the technical complexity of API tokens and image resizing so users can focus on their business."
    },
    workflow: {
      steps: [
        "User provides topic or idea via chat interface",
        "AI generates professional photos and captions",
        "Content is optimized for each platform's requirements",
        "Scheduling engine determines optimal posting times",
        "Automated publishing across all connected platforms"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/content-phase/workflow.png"
    },
    results: {
      quote: "Content Phase reduced our social media management time from 20 hours per week to just 2 hours.",
      outcomes: [
        { title: "Efficiency", description: "10x faster content creation" },
        { title: "Cost", description: "$4.44 monthly cost vs agency fees" },
        { title: "Reach", description: "Consistent presence across 5+ platforms" }
      ]
    },
    tags: ["AI Automation", "Social Media", "Content Generation", "Multi-Platform"],
    author: teamMembers.parmeet
  },
  {
    id: "firecrawl-agentic-rag",
    title: "FireCrawl Agentic RAG Platform",
    description: "Persistent agentic RAG system with real-time web crawling that solves the staleness problem in traditional RAG implementations.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop",
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/firecrawl-agentic-rag",
    overview: "The FireCrawl Agent solves the 'staleness' problem in RAG by integrating real-time web crawling. We built a persistent system where users can upload PDFs and engage in a dialogue that automatically crawls the web for missing context. The system was recently migrated to PostgreSQL to support multi-user sessions and high-concurrency workloads.",
    metrics: [
      { value: "98.5%", label: "Retrieval Accuracy" },
      { value: "Multi-Hop", label: "Context Depth" },
      { value: "99.9%", label: "System Uptime" },
      { value: "JWT/RSA", label: "Auth Security" }
    ],
    architecture: {
      description: "The system utilizes a modern full-stack architecture with a FastAPI backend and a React/TypeScript frontend. It orchestrates complex agentic flows using LlamaIndex Workflows, persisting structured data in PostgreSQL and vector embeddings in a persistent ChromaDB store.",
      image: "https://website.apexneural.cloud/assets/img/casestudy/firecrawl_arch.png",
      components: [
        { title: "Orchestrator", description: "LlamaIndex Workflows for state-managed agent runs" },
        { title: "Web Scraper", description: "FireCrawl for intelligent, LLM-ready web ingestion" },
        { title: "Primary Store", description: "PostgreSQL with SQLAlchemy for session persistence" },
        { title: "Vector Store", description: "ChromaDB for local document semantic indexing" }
      ]
    },
    implementation: {
      language: "python",
      code: `async def process_document(self, file_path: str):
    # Setup persistent ChromaDB client
    chroma_client = chromadb.PersistentClient(path='./chroma_db')
    chroma_collection = chroma_client.get_or_create_collection('demo')
    vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
    
    # Create index with persistence
    index = VectorStoreIndex.from_vector_store(vector_store)
    return index`,
      explanation: "Persistent ChromaDB ensures that document embeddings survive server restarts, enabling long-running research sessions."
    },
    workflow: {
      steps: [
        "User uploads PDF documents",
        "System chunks and embeds documents in ChromaDB",
        "User asks questions via chat interface",
        "Agent searches local docs, falls back to web if needed",
        "FireCrawl fetches and processes live web content"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/firecrawl/workflow.png"
    },
    results: {
      quote: "Finally, a RAG system that doesn't give me stale answers from 2023 when I need current information.",
      outcomes: [
        { title: "Freshness", description: "Real-time web data integration" },
        { title: "Accuracy", description: "98.5% retrieval accuracy" },
        { title: "Scale", description: "Multi-user concurrent sessions" }
      ]
    },
    tags: ["RAG", "LlamaIndex", "FireCrawl", "PostgreSQL", "ChromaDB"],
    author: teamMembers.hansika
  },
  {
    id: "code-improvement-platform",
    title: "Code Improvement & E2E Testing Platform",
    description: "Automated pipeline for code analysis, bug detection, and end-to-end testing with video capture for every failure.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop",
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/code-improvement-platform",
    overview: "Software development often suffers from two major bottlenecks: slow, inconsistent manual code reviews and complex, brittle E2E testing setups. Our platform addresses these by providing an automated pipeline that not only identifies bugs and security vulnerabilities using Pydantic AI agents but also executes actual test suites (Pytest, Jest, Playwright) in isolated environments, capturing videos and logs for every failure.",
    metrics: [
      { value: "96.5%", label: "Analysis Accuracy" },
      { value: "75%", label: "Review Time Reduction" },
      { value: "3x Faster", label: "Test Execution Speed" },
      { value: "90%+", label: "Automation Coverage" }
    ],
    architecture: {
      description: "The system architecture is built around a Unified Workflow Orchestrator that manages isolated project workspaces. It utilizes specialized Pydantic AI agents for distinct tasks: code analysis, bug detection, endpoint discovery, and PRP generation.",
      image: "https://website.apexneural.cloud/assets/img/casestudy/code_improvement_arch.png",
      components: [
        { title: "Workflow Orchestrator", description: "Manages the lifecycle of project analysis and test execution" },
        { title: "Specialist Agents", description: "Pydantic AI agents trained for security, logic, and testing" },
        { title: "Test Executor", description: "Robust runner supporting Pytest, Playwright, Cypress" },
        { title: "Artifact Manager", description: "Captures screenshots, videos, and network logs" }
      ]
    },
    implementation: {
      language: "python",
      code: `class CodeAnalysisAgent(Agent):
    def analyze(self, codebase: str) -> AnalysisResult:
        # Run security scan
        vulnerabilities = self.security_scan(codebase)
        # Check for code smells
        code_smells = self.detect_smells(codebase)
        # Generate improvement suggestions
        return AnalysisResult(
            vulnerabilities=vulnerabilities,
            code_smells=code_smells,
            suggestions=self.generate_suggestions()
        )`,
      explanation: "Each project runs in a secure, containerized directory structure to prevent cross-contamination between analysis jobs."
    },
    workflow: {
      steps: [
        "Repository ingestion and workspace isolation",
        "Multi-agent code analysis and vulnerability scanning",
        "Automated test suite execution",
        "Video and log capture for failures",
        "Report generation with actionable insights"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/code-improvement/workflow.png"
    },
    results: {
      quote: "This platform caught security vulnerabilities that three senior developers missed in their manual review.",
      outcomes: [
        { title: "Quality", description: "96.5% accuracy in bug detection" },
        { title: "Speed", description: "75% reduction in review time" },
        { title: "Coverage", description: "90%+ automation coverage" }
      ]
    },
    tags: ["Code Analysis", "E2E Testing", "Pydantic AI", "Playwright"],
    author: teamMembers.rahul
  },
  {
    id: "triverse-academy",
    title: "Triverse Academy - Full-Stack Learning Platform",
    description: "Unified educational platform with three learning paths: MindForge courses, VisionStream videos, and CodeSphere interactive projects.",
    technology: "AI Automation",
    industry: "EdTech",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop",
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/triverse-academy",
    overview: "Triverse Academy addresses the challenge of delivering diverse educational content through a unified platform. The system seamlessly integrates three learning paths: MindForge (21 Agentic Design Pattern courses with downloadable materials), VisionStream (24+ DeepLearning.AI video courses with auto-fetched thumbnails), and CodeSphere (interactive coding projects).",
    metrics: [
      { value: "21", label: "Courses Delivered" },
      { value: "24+", label: "Video Courses" },
      { value: "22", label: "API Endpoints" },
      { value: "100%", label: "Test Coverage" }
    ],
    architecture: {
      description: "The platform uses a modern three-tier architecture: React frontend (Vite + TailwindCSS), FastAPI backend with async/await support, and PostgreSQL database with Alembic migrations. Authentication is handled by the Apex SaaS Framework with JWT tokens.",
      image: "https://website.apexneural.cloud/assets/case-study/triverse/architecture.png",
      components: [
        { title: "React Frontend", description: "Vite-powered SPA with React Router and Framer Motion" },
        { title: "FastAPI Backend", description: "Async Python API with SQLAlchemy ORM" },
        { title: "Auth System", description: "Apex SaaS Framework with JWT tokens" },
        { title: "S3 Integration", description: "Dynamic URL generation for course documents" }
      ]
    },
    implementation: {
      language: "python",
      code: `@app.get("/api/courses/{course_id}")
async def get_course(course_id: str, user: User = Depends(get_current_user)):
    course = await db.get_course(course_id)
    # Generate signed S3 URL for materials
    materials_url = s3.generate_presigned_url(
        course.materials_key,
        expiration=3600
    )
    return CourseResponse(course=course, materials_url=materials_url)`,
      explanation: "The system features automatic thumbnail fetching from DeepLearning.AI pages and dynamic S3 URL generation for secure content delivery."
    },
    workflow: {
      steps: [
        "User authenticates via Apex SaaS Framework",
        "Browse courses across three learning paths",
        "Access downloadable materials via signed URLs",
        "Track progress with health monitoring",
        "Complete interactive coding projects"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/triverse/workflow.png"
    },
    results: {
      quote: "Triverse Academy unified our fragmented learning resources into a cohesive, professional platform.",
      outcomes: [
        { title: "Content", description: "45+ courses across three paths" },
        { title: "Quality", description: "100% test coverage" },
        { title: "UX", description: "Modern animated interface" }
      ]
    },
    tags: ["EdTech", "React", "FastAPI", "PostgreSQL"],
    author: teamMembers.rahul
  },
  {
    id: "paralegal-ai-assistant",
    title: "Paralegal AI Assistant",
    description: "AI assistant for legal professionals that ingests PDFs, creates vector embeddings, and provides natural language queries with web search fallback.",
    technology: "Agentic AI",
    industry: "LegalTech",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop",
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/paralegal-ai-assistant",
    overview: "Legal professionals spend 60% of their time on document review and research. We built an AI assistant that ingests legal PDFs, chunks them intelligently, creates vector embeddings, and allows natural language queries. When documents don't have the answer, it seamlessly falls back to web search for case law and legal precedents.",
    metrics: [
      { value: "<3s", label: "Query Response" },
      { value: "512 chunks/doc", label: "Document Processing" },
      { value: "12 APIs", label: "Auth Endpoints" },
      { value: "85%", label: "Research Time Saved" }
    ],
    architecture: {
      description: "The system uses a layered architecture with React frontend, FastAPI backend with Apex SaaS Framework for authentication, and a RAG pipeline combining ChromaDB for vector storage, OpenAI for embeddings/LLM, and Firecrawl for web search fallback.",
      image: "https://website.apexneural.cloud/assets/case-study/paralegal/architecture.png",
      components: [
        { title: "FastAPI Backend", description: "Async Python API with JWT authentication" },
        { title: "Apex Auth", description: "Complete auth flow: signup, login, forgot/reset password" },
        { title: "RAG Pipeline", description: "PDF ingestion → chunking → embeddings → ChromaDB" },
        { title: "Web Search Fallback", description: "Firecrawl for legal precedent research" }
      ]
    },
    implementation: {
      language: "python",
      code: `from apex.auth import signup, login, forgot_password
from apex import Client, set_default_client, bootstrap

# Initialize Apex with custom User model
apex_client = Client(
    database_url=DATABASE_URL,
    user_model=User,
    enable_jwt=True
)
set_default_client(apex_client)`,
      explanation: "The Apex SaaS Framework provides a complete authentication system out of the box, letting us focus on the core RAG functionality."
    },
    workflow: {
      steps: [
        "Legal professional uploads PDF documents",
        "System chunks and embeds documents",
        "User asks natural language questions",
        "RAG pipeline searches local documents",
        "Falls back to web search if local docs insufficient"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/paralegal/workflow.png"
    },
    results: {
      quote: "This assistant reduced our legal research time by 85%. What used to take hours now takes minutes.",
      outcomes: [
        { title: "Speed", description: "Sub-3 second query responses" },
        { title: "Accuracy", description: "High-quality legal citations" },
        { title: "Efficiency", description: "85% reduction in research time" }
      ]
    },
    tags: ["LegalTech", "RAG", "ChromaDB", "Apex SaaS"],
    author: teamMembers.rahul
  },
  {
    id: "motia-content-creation",
    title: "Motia Social Media Content Automation Platform",
    description: "Fully automated content repurposing system that transforms articles into platform-optimized posts for Twitter and LinkedIn.",
    technology: "AI Automation",
    industry: "Content & Media",
    serviceType: "Product Build",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&h=1080&fit=crop",
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/motia-content-creation",
    overview: "Social media content creation is repetitive and time-consuming for writers and founders. Motia was built to fully automate content repurposing by transforming articles into platform-optimized posts using AI-driven workflows. Users can focus 100% on their core writing while the platform multiplies their reach across Twitter and LinkedIn instantly.",
    metrics: [
      { value: "<60s", label: "Processing Time" },
      { value: "95%", label: "Manual Effort Reduced" },
      { value: "2 Platforms", label: "Twitter & LinkedIn" },
      { value: "3 articles/month", label: "Free Tier" }
    ],
    architecture: {
      description: "Motia follows a step-based, event-driven architecture. The React frontend triggers workflows through APIs. Each backend step emits and listens to events, enabling decoupled processing.",
      image: "https://website.apexneural.cloud/assets/case-study/motia/architecture.png",
      components: [
        { title: "React Frontend", description: "User dashboard and content submission UI" },
        { title: "Motia Workbench", description: "Central workflow orchestration engine" },
        { title: "Scraping Service", description: "Firecrawl extracts markdown from article URLs" },
        { title: "AI Generation", description: "OpenRouter + GPT-4o for content creation" }
      ]
    },
    implementation: {
      language: "typescript",
      code: `// Motia workflow step
export const generateContent = step({
  name: 'generate-content',
  input: z.object({ articleUrl: z.string() }),
  handler: async ({ articleUrl }) => {
    const markdown = await firecrawl.scrape(articleUrl);
    const posts = await openrouter.generate({
      model: 'gpt-4o',
      prompt: \`Transform this article into Twitter threads...\`
    });
    return { posts };
  }
});`,
      explanation: "The event-driven architecture ensures that authentication, content generation, and payments are isolated services that communicate via the event bus."
    },
    workflow: {
      steps: [
        "User submits article URL",
        "Firecrawl extracts clean markdown",
        "GPT-4o generates platform-specific posts",
        "Posts scheduled via Typefully API",
        "PayPal subscription handles billing"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/motia/workflow.png"
    },
    results: {
      quote: "Motia eliminated my writer's block and ensures I have a consistent online presence without the grind.",
      outcomes: [
        { title: "Time", description: "95% reduction in manual effort" },
        { title: "Speed", description: "Under 60 seconds per article" },
        { title: "Reach", description: "Consistent multi-platform presence" }
      ]
    },
    tags: ["Content Automation", "Firecrawl", "OpenRouter", "Typefully"],
    author: teamMembers.rahul
  },
  {
    id: "zep-memory-assistant",
    title: "Zep Memory Assistant - AI Agent with Human-Like Memory",
    description: "Autonomous memory-powered agent system with Zep Cloud vector memory store and Microsoft AutoGen multi-agent orchestration.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop",
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/zep-memory-assistant",
    overview: "Traditional AI chatbots forget everything between sessions, leading to repetitive conversations and poor user experience. We built an autonomous memory-powered agent system where AI agents maintain long-term context using Zep Cloud's vector memory store, integrated with Microsoft AutoGen for sophisticated multi-agent orchestration.",
    metrics: [
      { value: "95%", label: "Context Retention" },
      { value: "<500ms", label: "Response Latency" },
      { value: "99%", label: "Memory Accuracy" },
      { value: "∞", label: "Session Persistence" }
    ],
    architecture: {
      description: "The system uses a Hub-and-Spoke architecture with FastAPI as the central backend orchestrator. The React/Vite frontend communicates with the API, which manages multiple subsystems: Zep Cloud for vector-based long-term memory, AutoGen for agent orchestration, PostgreSQL for persistent data.",
      image: "https://website.apexneural.cloud/assets/case-study/zep/architcture.png",
      components: [
        { title: "ZepConversableAgent", description: "Custom AutoGen agent with Zep memory hooks" },
        { title: "Zep Cloud Memory", description: "Vector store for semantic fact retrieval" },
        { title: "FastAPI Backend", description: "RESTful API with async support and JWT auth" },
        { title: "Multi-Tenant Orgs", description: "RBAC-enabled organization management" }
      ]
    },
    implementation: {
      language: "python",
      code: `class ZepConversableAgent(ConversableAgent):
    def __init__(self, zep_client: ZepClient, **kwargs):
        super().__init__(**kwargs)
        self.zep = zep_client
    
    async def process_message(self, message: str) -> str:
        # Retrieve relevant memories
        memories = await self.zep.memory.search(message)
        # Add to context
        context = self.build_context(memories)
        response = await self.generate(message, context)
        # Store new memory
        await self.zep.memory.add(message, response)
        return response`,
      explanation: "The custom ZepConversableAgent extends AutoGen's base agent to automatically persist and retrieve memories for every conversation."
    },
    workflow: {
      steps: [
        "User initiates conversation",
        "Agent retrieves relevant past memories",
        "Context-enriched response generation",
        "New facts automatically stored",
        "Memory persists across sessions"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/zep/workflow.png"
    },
    results: {
      quote: "Finally, an AI assistant that actually remembers our previous conversations and learns my preferences.",
      outcomes: [
        { title: "Memory", description: "Infinite session persistence" },
        { title: "Speed", description: "Sub-500ms response latency" },
        { title: "Enterprise", description: "Multi-tenant with RBAC" }
      ]
    },
    tags: ["Zep Cloud", "AutoGen", "Memory", "Multi-Agent"],
    author: teamMembers.rahul
  },
  {
    id: "parlant-conversational-agent",
    title: "Parlant AI Conversational Agent for Financial Services",
    description: "AI-powered conversational agent with enterprise-grade security, glassmorphism UI, and seamless payment integration.",
    technology: "Agentic AI",
    industry: "FinTech",
    serviceType: "AI Agent Development",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop",
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/parlant-conversational-agent",
    overview: "Financial services require 24/7 customer support, but traditional solutions are expensive and inconsistent. Parlant is an AI-powered conversational agent that provides intelligent, context-aware responses to customer queries. Built with FastAPI, React, and GPT-4o, it features enterprise-grade security with JWT authentication and a stunning glassmorphism UI.",
    metrics: [
      { value: "<2s", label: "Response Time" },
      { value: "99.9%", label: "Availability" },
      { value: "95%", label: "User Satisfaction" },
      { value: "70%", label: "Cost Reduction" }
    ],
    architecture: {
      description: "The system uses a modern three-tier architecture. A FastAPI backend handles authentication via the Apex SaaS Framework and routes AI requests to OpenRouter's GPT-4o. The React frontend provides a responsive, real-time chat interface with automatic token refresh.",
      image: "https://website.apexneural.cloud/assets/case-study/parlant/architecture.png",
      components: [
        { title: "FastAPI Backend", description: "Async API with Apex SaaS authentication" },
        { title: "React Frontend", description: "Vite-powered SPA with glassmorphism UI" },
        { title: "OpenRouter AI", description: "GPT-4o integration for conversations" },
        { title: "PostgreSQL", description: "Async database with Alembic migrations" }
      ]
    },
    implementation: {
      language: "python",
      code: `from fastapi import FastAPI, Depends
from apex import ApexClient

app = FastAPI()
apex = ApexClient(database_url=DATABASE_URL)

@app.post("/api/auth/login")
async def login(user_data: UserLogin):
    token = await apex.authenticate(user_data)
    return {"access_token": token}`,
      explanation: "The Apex SaaS Framework handles all authentication complexity, allowing us to focus on the conversational AI functionality."
    },
    workflow: {
      steps: [
        "User authenticates via secure login",
        "Customer submits query via chat",
        "GPT-4o processes with financial context",
        "Response delivered in real-time",
        "Conversation history persisted"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/parlant/workflow.png"
    },
    results: {
      quote: "Parlant handles 70% of our customer inquiries automatically, with higher satisfaction scores than human agents.",
      outcomes: [
        { title: "Cost", description: "70% reduction in support costs" },
        { title: "Speed", description: "Sub-2 second responses" },
        { title: "Satisfaction", description: "95% user satisfaction rate" }
      ]
    },
    tags: ["FinTech", "Conversational AI", "GPT-4o", "Apex SaaS"],
    author: teamMembers.rahul
  },
  {
    id: "galactic-toxicity-intelligence-engine",
    title: "Galactic Therapeutics – AI Toxicity Prediction & Chemical Safety Intelligence",
    description: "AI engine for pharmaceutical R&D that classifies compound toxicity, estimates severity, and surfaces risk mechanisms before lab work starts.",
    technology: "Machine Learning",
    industry: "Healthcare",
    serviceType: "Research & Prototype",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=1080&fit=crop",
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/galactic-toxicity-intelligence-engine",
    overview: "Pharmaceutical R&D must evaluate thousands of molecules for toxicity. Traditional assays are slow and expensive. Galactic Therapeutics provides an AI engine that classifies compounds as toxic/non-toxic, estimates severity, and surfaces risk mechanisms before lab work starts.",
    metrics: [
      { value: "Dozens", label: "Prediction Scope" },
      { value: "3 Levels", label: "Risk Bands" },
      { value: "Pre-screen", label: "Efficiency" },
      { value: "3R Support", label: "Benefit" }
    ],
    architecture: {
      description: "Built as a toxicity prediction microservice. Accepts molecular structures (SMILES), computes descriptors/graph features, and runs them through an ensemble of QSAR and GNN models. A React frontend visualizes risk radar plots.",
      image: "https://website.apexneural.cloud/assets/tox/tox-arc.png",
      components: [
        { title: "Toxicity Engine", description: "Microservice with QSAR and GNN models" },
        { title: "Safety Database", description: "Stores compounds and predictions" },
        { title: "Explainability Layer", description: "Surfaces substructures for risk" },
        { title: "React Visualization", description: "Toxicity radar plots and badges" }
      ]
    },
    implementation: {
      language: "python",
      code: `class ToxicityPredictor:
    def predict(self, smiles: str) -> ToxResult:
        # Compute molecular descriptors
        descriptors = self.compute_descriptors(smiles)
        # Run through ensemble
        qsar_score = self.qsar_model.predict(descriptors)
        gnn_score = self.gnn_model.predict(self.to_graph(smiles))
        # Combine predictions
        return ToxResult(
            risk_level=self.combine(qsar_score, gnn_score),
            mechanisms=self.explain(smiles)
        )`,
      explanation: "The ensemble approach combines traditional QSAR models with modern Graph Neural Networks for more robust predictions."
    },
    workflow: {
      steps: [
        "Researcher inputs SMILES structure",
        "System computes molecular descriptors",
        "Ensemble models predict toxicity",
        "Explainability layer identifies mechanisms",
        "Results visualized as radar plot"
      ],
      image: "https://website.apexneural.cloud/assets/tox/workflow.png"
    },
    results: {
      quote: "Galactic Therapeutics pre-screens compounds before expensive lab assays, supporting 3R principles.",
      outcomes: [
        { title: "Speed", description: "Pre-screen before lab work" },
        { title: "Coverage", description: "Dozens of toxicity endpoints" },
        { title: "Ethics", description: "Supports 3R principles" }
      ]
    },
    tags: ["Pharma", "Toxicity", "QSAR", "GNN", "Drug Discovery"],
    author: teamMembers.sunny
  },
  {
    id: "kutum-family-information-os",
    title: "Kutum – The Family Information OS",
    description: "Secure family OS for centralizing documents, health records, and milestones with smart nudges for expiries and follow-ups.",
    technology: "AI Automation",
    industry: "Family & Consumer",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1080&fit=crop",
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/kutum-family-information-os",
    overview: "Families juggle scattered data points—documents, health records, milestones—across chats and folders. Kutum acts as a secure OS where users centralize details (sizes, passport numbers, health history) and the system handles the 'remembering'. It layers smart nudges for expiries and follow-ups, ensuring nothing falls through the cracks.",
    metrics: [
      { value: "Unlimited", label: "Profiles" },
      { value: "10+", label: "Doc Types" },
      { value: "AES-256", label: "Security" },
      { value: "Web/Mobile", label: "Platform" }
    ],
    architecture: {
      description: "Modular architecture centered on three domains: People, Documents, and Health. Each flows into a centralized Notification Engine that scans for date-based triggers. Authentication uses secure recovery phrases/QR codes to protect the family vault.",
      image: "https://website.apexneural.cloud/assets/kutum/kutum-arch.png",
      components: [
        { title: "Auth & Recovery", description: "Secure access with recovery phrase and QR" },
        { title: "People Module", description: "Member profiles, attributes, and milestones" },
        { title: "Documents Vault", description: "Encrypted storage with OCR and expiry tracking" },
        { title: "Notification Engine", description: "Contextual nudges from structured dates" }
      ]
    },
    implementation: {
      language: "typescript",
      code: `interface FamilyMember {
  id: string;
  name: string;
  documents: Document[];
  healthRecords: HealthRecord[];
  milestones: Milestone[];
}

async function checkExpiries(member: FamilyMember) {
  const expiring = member.documents.filter(
    doc => doc.expiryDate < addMonths(new Date(), 3)
  );
  for (const doc of expiring) {
    await sendNudge(member, doc);
  }
}`,
      explanation: "The notification engine scans for date-based triggers like expiries, birthdays, and follow-ups, generating contextual nudges."
    },
    workflow: {
      steps: [
        "Family creates secure vault",
        "Add members with profiles",
        "Upload and scan documents",
        "System tracks expiries and dates",
        "Receive smart nudges before deadlines"
      ],
      image: "https://website.apexneural.cloud/assets/kutum/workflow.png"
    },
    results: {
      quote: "Kutum ensures our family never misses a renewal or appointment. It's like having a personal assistant for the household.",
      outcomes: [
        { title: "Security", description: "AES-256 encryption" },
        { title: "Convenience", description: "Automatic nudges" },
        { title: "Reach", description: "Web and mobile platforms" }
      ]
    },
    tags: ["Family", "Document Management", "Smart Nudges", "Security"],
    author: teamMembers.kushal
  },
  {
    id: "prism-recruitment-automation",
    title: "Prism – AI-Powered Recruitment Automation",
    description: "End-to-end recruitment automation using n8n, GPT-4, Airtable, and Google Workspace for fully automated screening and scheduling.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Product Build",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop",
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/prism-recruitment-automation",
    overview: "Prism turns the fragmented recruitment process into a cohesive automation layer. It listens to HR inboxes, parses resumes, uses GPT-4 to score candidates, orchestrates interview scheduling via GCal/Gmail, and even drafts final offer/rejection emails based on interviewer feedback.",
    metrics: [
      { value: "100% Auto", label: "Screening" },
      { value: "n8n + 5 Apps", label: "Tools" },
      { value: "30min/app", label: "Time Saved" },
      { value: "Standardized", label: "Consistency" }
    ],
    architecture: {
      description: "Built on n8n as the central orchestrator. Workflows connect Gmail (Trigger/Comms), OpenAI (Reasoning), Airtable (State/Database), and Google Calendar (Scheduling). Webhooks facilitate handoffs between stages.",
      image: "https://website.apexneural.cloud/assets/prism/p-archt.png",
      components: [
        { title: "n8n Orchestrator", description: "Low-code engine managing 4 core workflows" },
        { title: "OpenAI Node", description: "GPT-4 for resume parsing and scoring" },
        { title: "Airtable", description: "Structured database for candidate state" },
        { title: "Google Workspace", description: "Gmail and Calendar integration" }
      ]
    },
    implementation: {
      language: "javascript",
      code: `// n8n Code Node: Calculate Match Score
const candidate = items[0].json;
const requirements = ['React', 'Node', 'AI'];
let score = 0;

requirements.forEach(req => {
  if (candidate.skills.toLowerCase().includes(req.toLowerCase())) {
    score += 10;
  }
});

return { json: { ...candidate, match_score: score } };`,
      explanation: "The n8n workflow uses code nodes for custom logic while leveraging built-in integrations for Gmail, Airtable, and OpenAI."
    },
    workflow: {
      steps: [
        "Resume arrives in HR inbox",
        "n8n triggers parsing workflow",
        "GPT-4 scores against requirements",
        "High scorers auto-scheduled for interviews",
        "Final decision drafts offer/rejection emails"
      ],
      image: "https://website.apexneural.cloud/assets/prism/workflow.png"
    },
    results: {
      quote: "Prism replaced our manual spreadsheet process. What took 30 minutes per application now happens automatically.",
      outcomes: [
        { title: "Automation", description: "100% automated screening" },
        { title: "Speed", description: "30 min saved per application" },
        { title: "Consistency", description: "Standardized evaluation" }
      ]
    },
    tags: ["n8n", "Recruitment", "GPT-4", "Airtable", "Automation"],
    author: teamMembers.akshay
  },
  {
    id: "real-time-rag-voice-agent",
    title: "Real-Time Voice Agent with RAG",
    description: "Voice agent merging Deepgram speech input, OpenRouter LLM reasoning, and Cartesia voice synthesis for latency-free AI conversations.",
    technology: "Multimodal AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1920&h=1080&fit=crop",
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/real-time-rag-voice-agent",
    overview: "Traditional chatbots are limited by text-based interaction and delayed response cycles. Real-Time RAG Voice Agent solves this by merging speech input (Deepgram), instant LLM reasoning (OpenRouter), and natural voice synthesis (Cartesia), enabling latency-free, context-aware AI conversations.",
    metrics: [
      { value: "< 500ms", label: "Response Latency" },
      { value: "98%", label: "Accuracy" },
      { value: "Cloud & Local", label: "Platforms" },
      { value: "95%", label: "UX Boost" }
    ],
    architecture: {
      description: "The system uses a modular RAG pipeline optimized for real-time audio. Speech input is processed by Deepgram, routed to OpenRouter LLM, synthesized using Cartesia's neural voice, and streamed back via LiveKit.",
      image: "https://website.apexneural.cloud/assets/case-study/voice-agent/system.png",
      components: [
        { title: "Deepgram", description: "Real-time speech-to-text transcription" },
        { title: "OpenRouter LLM", description: "Context-driven RAG-enabled responses" },
        { title: "Cartesia", description: "Lifelike speech with expressive tone" },
        { title: "LiveKit", description: "Real-time voice sessions and WebRTC" }
      ]
    },
    implementation: {
      language: "python",
      code: `async def process_voice(audio_stream: AsyncIterator[bytes]):
    async for chunk in audio_stream:
        # Transcribe in real-time
        text = await deepgram.transcribe(chunk)
        if text:
            # Generate response
            response = await llm.generate(text)
            # Synthesize speech
            audio = await cartesia.synthesize(response)
            yield audio`,
      explanation: "The bidirectional streaming pipeline ensures low-latency, natural dialogue flow between the user and AI agent."
    },
    workflow: {
      steps: [
        "User speaks into microphone",
        "Deepgram transcribes in real-time",
        "OpenRouter processes with RAG context",
        "Cartesia synthesizes natural speech",
        "LiveKit streams audio back to user"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/voice-agent/workflow.png"
    },
    results: {
      quote: "The voice agent feels like talking to a knowledgeable human. The latency is imperceptible.",
      outcomes: [
        { title: "Latency", description: "Sub-500ms response time" },
        { title: "Natural", description: "Expressive voice synthesis" },
        { title: "Flexible", description: "Cloud and local deployment" }
      ]
    },
    tags: ["Voice AI", "Deepgram", "Cartesia", "LiveKit", "RAG"],
    author: teamMembers.rahul
  },
  {
    id: "groundx-document-processing",
    title: "Document Processing Pipeline with Ground X",
    description: "World-class document processing using Ground X's X-Ray analysis for complex PDFs with figures, tables, and structured output.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "Data Engineering",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1920&h=1080&fit=crop",
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/groundx-document-processing",
    overview: "Processing complex documents like financial reports and technical manuals is a major hurdle for RAG systems. This project implements a world-class pipeline using Ground X's X-Ray analysis. Unlike standard OCR, this system understands the relationship between figures, tables, and text.",
    metrics: [
      { value: "SOTA", label: "Accuracy" },
      { value: "PDF/DocX/Image", label: "Types" },
      { value: "Real-time", label: "Processing" },
      { value: "Advanced", label: "Table Detection" }
    ],
    architecture: {
      description: "The system utilizes a Streamlit frontend for document ingestion. The CORE logic is handled by Ground X for parsing and bucket management. Processed data is fetched as 'X-Ray' objects for LLM synthesis.",
      image: "https://website.apexneural.cloud/assets/case-study/groundx-pipeline/architecture.png",
      components: [
        { title: "Ground X Engine", description: "High-fidelity parsing and X-Ray analysis" },
        { title: "Streamlit UI", description: "Interactive dashboard for uploads" },
        { title: "OpenRouter LLM", description: "Document-based Q&A and synthesis" },
        { title: "Bucket Management", description: "Automated organization of assets" }
      ]
    },
    implementation: {
      language: "python",
      code: `def process_document(file_path: str) -> XRayResult:
    # Upload to Ground X
    bucket = groundx.buckets.create(name=file_path)
    doc = groundx.documents.upload(bucket.id, file_path)
    
    # Get X-Ray analysis
    xray = groundx.documents.get_xray(doc.id)
    return XRayResult(
        narrative=xray.narrative,
        tables=xray.tables,
        figures=xray.figures
    )`,
      explanation: "Ground X's X-Ray analysis creates a rich narrative and structured JSON output, understanding relationships between document elements."
    },
    workflow: {
      steps: [
        "Upload document via Streamlit",
        "Ground X parses and analyzes",
        "X-Ray extracts narratives and structure",
        "LLM synthesizes for Q&A",
        "Results displayed interactively"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/groundx-pipeline/workflow.png"
    },
    results: {
      quote: "Ground X understands our complex financial reports better than any OCR system we've tried.",
      outcomes: [
        { title: "Accuracy", description: "State-of-the-art parsing" },
        { title: "Structure", description: "Tables and figures extracted" },
        { title: "Speed", description: "Real-time processing" }
      ]
    },
    tags: ["Ground X", "Document Processing", "OCR", "RAG"],
    author: teamMembers.hansika
  },
  {
    id: "graphiti-mcp-demo",
    title: "Graphiti MCP: Persistent Memory for AI Agents",
    description: "MCP server integrating Zep's Graphiti and Neo4j for persistent agent memory in Cursor and Claude environments.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop",
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/graphiti-mcp-demo",
    overview: "AI agents today often suffer from 'session amnesia,' where valuable context is lost between sessions. By implementing an MCP server that integrates with Zep's Graphiti and Neo4j, we built a memory layer that allows agents in Cursor and Claude to store, retrieve, and link information dynamically.",
    metrics: [
      { value: "100%", label: "Context Retention" },
      { value: "Neo4j", label: "Database" },
      { value: "<200ms", label: "Latency" },
      { value: "OpenRouter", label: "Model API" }
    ],
    architecture: {
      description: "The architecture centers around the MCP Server acting as a bridge between AI hosts (Cursor/Claude) and a Neo4j Graph Database. Graphiti manages the extraction and persistence of memories.",
      image: "https://website.apexneural.cloud/assets/case-study/graphiti-mcp/architecture.png",
      components: [
        { title: "MCP Server", description: "Tool discovery via SSE/stdio" },
        { title: "Graphiti Engine", description: "Memory extraction and graph management" },
        { title: "Neo4j Aura", description: "Cloud-hosted graph database" },
        { title: "MCP Hosts", description: "Cursor and Claude Desktop clients" }
      ]
    },
    implementation: {
      language: "python",
      code: `@mcp.tool("store_memory")
async def store_memory(content: str, context: dict):
    # Extract entities and relationships
    entities = await graphiti.extract_entities(content)
    # Store in Neo4j graph
    for entity in entities:
        await neo4j.create_node(entity)
        await neo4j.create_relationships(entity, context)
    return {"stored": len(entities)}`,
      explanation: "The MCP server supports both SSE and stdio transports for maximum compatibility with different AI host environments."
    },
    workflow: {
      steps: [
        "Agent processes user message",
        "MCP extracts relevant entities",
        "Graphiti stores in Neo4j graph",
        "Future queries retrieve linked memories",
        "Agent knowledge grows over time"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/graphiti-mcp/workflow.png"
    },
    results: {
      quote: "Our agents now remember everything. They learn from past interactions and provide increasingly personalized responses.",
      outcomes: [
        { title: "Memory", description: "100% context retention" },
        { title: "Speed", description: "Sub-200ms retrieval" },
        { title: "Growth", description: "Knowledge accumulates" }
      ]
    },
    tags: ["MCP", "Graphiti", "Neo4j", "Persistent Memory"],
    author: teamMembers.hansika
  },
  {
    id: "veo3-ai-video-production",
    title: "High-Fidelity AI Video Production Using Veo 3",
    description: "Exploration of Veo 3 for high-quality video generation with superior temporal consistency and prompt adherence.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop",
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/veo3-ai-video-production",
    overview: "AI video generation has rapidly evolved, but most tools still struggle with temporal consistency, prompt adherence, and cinematic realism. This project explores how Veo 3 was used to produce high-quality video outputs efficiently, proving superior to KlingAI, Runway Gen-2, and Pika.",
    metrics: [
      { value: "65%", label: "Iterations Reduced" },
      { value: "High", label: "Scene Consistency" },
      { value: "<10%", label: "Manual Fixes" },
      { value: "3x Faster", label: "Production Time" }
    ],
    architecture: {
      description: "The workflow was designed around Veo 3 as the core video generation engine, supported by structured prompt engineering, reference conditioning, and selective post-processing.",
      image: "https://website.apexneural.cloud/assets/case-study/veo3-ai-video/architecture.png",
      components: [
        { title: "Prompt Design", description: "Scene-level prompts with constraints" },
        { title: "Veo 3 Model", description: "Primary video generation engine" },
        { title: "Reference Conditioning", description: "Visual anchors for consistency" },
        { title: "Output Validation", description: "Manual checks for coherence" }
      ]
    },
    implementation: {
      language: "yaml",
      code: `# Structured Prompt Strategy
scene_1:
  camera: "dolly_in_slow"
  lighting: "cinematic_golden_hour"
  subject: "cyberpunk_city_street"
  action: "rain_falling_naturally"
  constraints: ["no_flicker", "maintain_geometry"]`,
      explanation: "Structured prompts with explicit camera, lighting, and constraint parameters dramatically improve output consistency."
    },
    workflow: {
      steps: [
        "Design structured scene prompts",
        "Set reference conditioning images",
        "Generate video with Veo 3",
        "Validate temporal consistency",
        "Apply minimal post-processing"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/veo3-ai-video/workflow.png"
    },
    results: {
      quote: "Veo 3 reduced our video production iterations by 65%. The temporal consistency is remarkably better than competitors.",
      outcomes: [
        { title: "Quality", description: "High scene consistency" },
        { title: "Efficiency", description: "65% fewer iterations" },
        { title: "Speed", description: "3x faster production" }
      ]
    },
    tags: ["Veo 3", "Video Generation", "AI Video", "Generative AI"],
    author: teamMembers.vedant
  },
  {
    id: "volleyvision-sports-ai",
    title: "VolleyVision — AI-Powered Sports Video Analytics Platform",
    description: "Automated volleyball match analysis using multiple deep learning models for ball tracking, player detection, and action recognition.",
    technology: "Computer Vision",
    industry: "Sports Tech",
    serviceType: "Product Build",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1920&h=1080&fit=crop",
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/volleyvision-sports-ai",
    overview: "Manual sports video analysis is slow, subjective, and resource-intensive. VolleyVision replaces this manual process with a fully automated, AI-driven pipeline that analyzes volleyball match footage frame-by-frame. Using multiple specialized deep learning models, the platform simultaneously tracks the ball trajectory, detects players, recognizes game actions, and segments the court.",
    metrics: [
      { value: "98.5%", label: "Ball Tracking Accuracy" },
      { value: "30–35 FPS", label: "Throughput" },
      { value: "5 Actions", label: "Recognized" },
      { value: "<35 ms", label: "Latency/Frame" }
    ],
    architecture: {
      description: "VolleyVision is built using a layered microservices architecture. The React frontend communicates with a FastAPI backend via REST APIs. Each ML capability is encapsulated in an isolated service for independent upgrades.",
      image: "https://website.apexneural.cloud/assets/case-study/volley-vision/architecture.png",
      components: [
        { title: "Ball Tracking", description: "TrackNet model for trajectory prediction" },
        { title: "Player Detection", description: "YOLOv8 for real-time detection" },
        { title: "Action Recognition", description: "Temporal CNN for play classification" },
        { title: "Court Segmentation", description: "U-Net for boundary detection" }
      ]
    },
    implementation: {
      language: "python",
      code: `class VolleyVisionPipeline:
    def process_frame(self, frame: np.ndarray) -> AnalysisResult:
        # Parallel inference
        ball = self.tracknet.predict(frame)
        players = self.yolo.detect(frame)
        court = self.unet.segment(frame)
        action = self.action_model.classify(frame)
        
        return AnalysisResult(
            ball_position=ball,
            players=players,
            court_bounds=court,
            action=action
        )`,
      explanation: "Each machine learning model runs in isolation, allowing independent upgrades and experimentation without breaking the pipeline."
    },
    workflow: {
      steps: [
        "Upload match footage",
        "Frame extraction and preprocessing",
        "Parallel ML inference",
        "Annotation overlay",
        "Export analysis report"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/volley-vision/workflow.png"
    },
    results: {
      quote: "VolleyVision replaced 6 hours of manual video review with 15 minutes of automated analysis.",
      outcomes: [
        { title: "Accuracy", description: "98.5% ball tracking" },
        { title: "Speed", description: "30-35 FPS real-time" },
        { title: "Scale", description: "Cloud-native scalability" }
      ]
    },
    tags: ["Computer Vision", "Sports Analytics", "YOLOv8", "TrackNet"],
    author: teamMembers.shubham
  },
  {
    id: "legalops-hub-malaysia",
    title: "LegalOps Hub — Malaysian Legal AI Agent System",
    description: "15 specialized AI agents across 4 workflows for Malaysian legal professionals, handling bilingual documentation and court-specific compliance.",
    technology: "Agentic AI",
    industry: "LegalTech",
    serviceType: "AI Agent Development",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop",
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/legalops-hub-malaysia",
    overview: "The LegalOps Hub orchestrates 15 specialized AI agents across 4 distinct workflows: Intake (5 agents), Drafting (5 agents), Research (2 agents), and Evidence (3 agents). Each agent is purpose-built for the Malaysian legal context, handling challenges like mixed Malay-English documentation and court-specific template compliance.",
    metrics: [
      { value: "15", label: "Specialized Agents" },
      { value: "100%", label: "Intake Success" },
      { value: "86%", label: "OCR Accuracy" },
      { value: "~90%", label: "Time Savings" }
    ],
    architecture: {
      description: "The system is built on a modular, multi-agent architecture orchestrated by LangGraph. Each workflow operates as an independent graph triggered via API. State is managed through 'Matter Snapshots'—structured JSON payloads.",
      image: "https://website.apexneural.cloud/assets/case-study/legalops/architecture.png",
      components: [
        { title: "Intake Workflow", description: "5 agents for document ingestion" },
        { title: "Drafting Workflow", description: "5 agents for legal document generation" },
        { title: "Research Workflow", description: "2 agents for case law search" },
        { title: "Evidence Workflow", description: "3 agents for exhibit management" }
      ]
    },
    implementation: {
      language: "python",
      code: `class IntakeAgent(Agent):
    def process(self, document: bytes) -> MatterSnapshot:
        # OCR with bilingual support
        text = self.ocr(document, languages=['en', 'ms'])
        # Extract party names
        parties = self.extract_parties(text)
        # Classify matter type
        matter_type = self.classify(text)
        return MatterSnapshot(
            parties=parties,
            matter_type=matter_type,
            raw_text=text
        )`,
      explanation: "The system uses Google Gemini 2.0 Flash for high-speed bilingual reasoning and LangGraph for sophisticated state management across the agent swarm."
    },
    workflow: {
      steps: [
        "Document intake and OCR",
        "Party and matter extraction",
        "Research agent queries case law",
        "Drafting agent generates documents",
        "Evidence agent organizes exhibits"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/legalops/workflow.png"
    },
    results: {
      quote: "LegalOps Hub reduced our document processing time by 90%. The bilingual support is essential for Malaysian practice.",
      outcomes: [
        { title: "Agents", description: "15 specialized AI agents" },
        { title: "Accuracy", description: "86% OCR for mixed documents" },
        { title: "Efficiency", description: "90% time savings" }
      ]
    },
    tags: ["LegalTech", "Multi-Agent", "LangGraph", "Bilingual AI"],
    author: teamMembers.rahul
  },
  {
    id: "recovery-copilot",
    title: "RecoveryCopilot: Autonomous Health Insurance Audit System",
    description: "Autonomous agents for health insurance claims auditing that identify overpayments and policy violations in real-time.",
    technology: "Agentic AI",
    industry: "InsurTech",
    serviceType: "AI Agent Development",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop",
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/recovery-copilot",
    overview: "Health insurance claims processing is operationally heavy and error-prone. Manual auditors often miss subtle policy exclusions. RecoveryCopilot deploys autonomous agents that read claim documents, extract structured medical data, and cross-reference every line item against vector-embedded policy documents to find overpayments and violations.",
    metrics: [
      { value: "<30s/claim", label: "Audit Speed" },
      { value: "$2.5M+", label: "Recovery Found" },
      { value: "98.5%", label: "Accuracy" },
      { value: "90%", label: "Effort Reduction" }
    ],
    architecture: {
      description: "The platform operates on a Hub-and-Spoke architecture. The Supervisor Agent acts as the central brain, dispatching tasks to worker agents via an event bus. State is persisted in PostgreSQL, while policy documents are stored in PGVector.",
      image: "https://website.apexneural.cloud/assets/case-study/recovery-copilot/architecture.png",
      components: [
        { title: "Supervisor Agent", description: "Central orchestrator for task dispatch" },
        { title: "Extractor Agent", description: "Medical data extraction from claims" },
        { title: "Policy Matcher", description: "Vector search against policy docs" },
        { title: "Auditor Agent", description: "Identifies violations and overpayments" }
      ]
    },
    implementation: {
      language: "python",
      code: `class ClaimAuditor(Agent):
    async def audit(self, claim: ClaimDocument) -> AuditResult:
        # Extract line items
        items = await self.extractor.extract(claim)
        violations = []
        for item in items:
            # Check against policy
            policy_match = await self.vector_search(item)
            if self.is_violation(item, policy_match):
                violations.append(Violation(item, policy_match))
        return AuditResult(claim, violations)`,
      explanation: "The system audits 100% of claims (vs 5-10% manual sampling), ensuring complete policy compliance without adding headcount."
    },
    workflow: {
      steps: [
        "Claim document ingested",
        "Medical data extracted",
        "Line items vectorized",
        "Policy matching via PGVector",
        "Violations flagged and reported"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/recovery-copilot/workflow.png"
    },
    results: {
      quote: "RecoveryCopilot transformed our claims department from a cost center to a value recovery engine, finding $2.5M in overpayments.",
      outcomes: [
        { title: "Recovery", description: "$2.5M+ identified" },
        { title: "Speed", description: "<30s per claim" },
        { title: "Coverage", description: "100% claims audited" }
      ]
    },
    tags: ["InsurTech", "Claims Audit", "PGVector", "Agentic AI"],
    author: teamMembers.ramya
  },
  {
    id: "documentation-writer-flow",
    title: "Hybrid AI Documentation Generator",
    description: "Multi-agent documentation platform using local LLMs for analysis and cloud LLMs for polished writing at minimal cost.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1920&h=1080&fit=crop",
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/documentation-writer-flow",
    overview: "Technical documentation is essential but time-consuming. This platform uses a hybrid AI approach: local LLMs (LM Studio with DeepSeek-R1) for analysis at zero API cost, while leveraging cloud LLMs (GPT-4o-mini) only for final polished writing. The system features a multi-agent crew that analyzes codebases and generates documentation automatically.",
    metrics: [
      { value: "98%", label: "Documentation Quality" },
      { value: "95%", label: "Time Reduction" },
      { value: "$0.10-0.50", label: "Cost/Generation" },
      { value: "10-20 sec", label: "Generation Speed" }
    ],
    architecture: {
      description: "The system uses a hybrid hub-and-spoke architecture where CrewAI coordinates specialized agents. Local agents handle compute-intensive analysis, cloud agents focus on final writing where language quality is critical.",
      image: "https://website.apexneural.cloud/assets/case-study/doc-writer/architecture.png",
      components: [
        { title: "Local Agents", description: "LM Studio DeepSeek-R1 for analysis" },
        { title: "Cloud Agents", description: "GPT-4o-mini for polished writing" },
        { title: "CrewAI Orchestrator", description: "Multi-agent coordination" },
        { title: "Next.js Frontend", description: "Intuitive interface with real-time updates" }
      ]
    },
    implementation: {
      language: "python",
      code: `class HybridDocWriter(Crew):
    def __init__(self):
        self.analyzer = Agent(
            llm=LMStudio("deepseek-r1"),  # Local, free
            role="Code Analyzer"
        )
        self.writer = Agent(
            llm=OpenAI("gpt-4o-mini"),  # Cloud, quality
            role="Documentation Writer"
        )`,
      explanation: "The hybrid architecture ensures professional quality output while keeping costs minimal—$0.10-0.50 per documentation generation."
    },
    workflow: {
      steps: [
        "Input GitHub repository URL",
        "Local agent analyzes codebase",
        "Structure and outline planned",
        "Cloud agent writes polished docs",
        "Quality check and export"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/doc-writer/workflow.png"
    },
    results: {
      quote: "Documentation that used to take weeks now takes minutes. The hybrid approach keeps our costs near zero.",
      outcomes: [
        { title: "Speed", description: "95% time reduction" },
        { title: "Cost", description: "$0.10-0.50 per generation" },
        { title: "Quality", description: "98% documentation quality" }
      ]
    },
    tags: ["Documentation", "Hybrid AI", "CrewAI", "LM Studio"],
    author: teamMembers.ramya
  },
  {
    id: "ultimate-ai-assistant-using-mcp",
    title: "Ultimate AI Assistant Using Model Context Protocol",
    description: "Production-ready modular AI system using MCP to orchestrate Firecrawl for web scraping and Ragie for multimodal RAG.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&h=1080&fit=crop",
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/ultimate-ai-assistant-using-mcp",
    overview: "Modern AI applications require integration with multiple specialized services. The Ultimate AI Assistant demonstrates a production-ready approach to building modular AI systems using the Model Context Protocol (MCP). By orchestrating Firecrawl for web scraping and Ragie for multimodal RAG, users interact naturally with powerful AI capabilities.",
    metrics: [
      { value: "<30 min", label: "Integration Time" },
      { value: "2+", label: "MCP Servers" },
      { value: "<5 sec", label: "Query Response" },
      { value: "JSON-based", label: "User Config" }
    ],
    architecture: {
      description: "The system follows a modular architecture where a central MCP Agent orchestrates multiple specialized MCP servers. Each server runs as an independent process, communicating via the standardized Model Context Protocol.",
      image: "https://website.apexneural.cloud/assets/case-study/ultimate/architecture.png",
      components: [
        { title: "Streamlit Frontend", description: "Conversational UI and configuration" },
        { title: "MCP Agent", description: "Central orchestrator for tool selection" },
        { title: "Firecrawl Server", description: "Intelligent web scraping" },
        { title: "Ragie Server", description: "Multimodal RAG capabilities" }
      ]
    },
    implementation: {
      language: "python",
      code: `class MCPAgent:
    def __init__(self, servers: List[MCPServer]):
        self.servers = {s.name: s for s in servers}
    
    async def process(self, query: str) -> str:
        # Select appropriate tool
        tool = self.select_tool(query)
        server = self.servers[tool.server]
        # Execute via MCP
        result = await server.execute(tool.name, query)
        return self.synthesize(result)`,
      explanation: "By leveraging MCP, teams can integrate best-in-class services without building everything from scratch."
    },
    workflow: {
      steps: [
        "User submits query via Streamlit",
        "MCP Agent selects appropriate tool",
        "Request routed to specialized server",
        "Result synthesized and returned",
        "Conversation context maintained"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/ultimate/workflow.png"
    },
    results: {
      quote: "MCP let us integrate world-class services in under 30 minutes. The modular approach makes upgrades trivial.",
      outcomes: [
        { title: "Speed", description: "<30 min integration" },
        { title: "Modularity", description: "Independent server upgrades" },
        { title: "Power", description: "Best-in-class capabilities" }
      ]
    },
    tags: ["MCP", "Firecrawl", "Ragie", "Modular AI"],
    author: teamMembers.ramya
  },
  {
    id: "aitv-cross-modal-generation",
    title: "AITV: A Unified Cross-Modal Generation System",
    description: "Unified architecture for Audio, Image, Text, and Video cross-modal conversion through a shared semantic representation.",
    technology: "Multimodal AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=1080&fit=crop",
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/aitv-cross-modal-generation",
    overview: "Traditional AI systems treat audio, image, text, and video as isolated domains. This fragmentation introduces friction when building real-world products. AITV addresses this by introducing a unified cross-modal architecture that allows any modality to be converted into any other through a shared semantic representation.",
    metrics: [
      { value: "4", label: "Modalities" },
      { value: "12+", label: "Conversion Paths" },
      { value: "High", label: "Semantic Retention" },
      { value: "Decoupled", label: "Pipeline Modularity" }
    ],
    architecture: {
      description: "AITV is built around a hub-and-spoke multimodal architecture. All incoming modalities are first encoded into a shared semantic latent space. From this unified representation, specialized decoders generate the target modality.",
      image: "https://website.apexneural.cloud/assets/case-study/aitv-cross-modal/architecture.png",
      components: [
        { title: "Modality Encoders", description: "Transform inputs to semantic latent space" },
        { title: "Shared Latent Space", description: "Modality-agnostic representation" },
        { title: "Modality Decoders", description: "Generate target modality" },
        { title: "Cross-Modal Orchestrator", description: "Routes conversion requests" }
      ]
    },
    implementation: {
      language: "python",
      code: `class CrossModalConverter:
    def convert(self, source: Any, source_type: str, target_type: str):
        # Encode to shared latent space
        encoder = self.encoders[source_type]
        latent = encoder.encode(source)
        
        # Decode to target modality
        decoder = self.decoders[target_type]
        return decoder.decode(latent)`,
      explanation: "The shared semantic latent space avoids lossy chained conversions and enables true cross-compatibility between modalities."
    },
    workflow: {
      steps: [
        "Input any modality (A/I/T/V)",
        "Encode to shared latent space",
        "Select target modality",
        "Decode from latent representation",
        "Output in target format"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/aitv-cross-modal/workflow.png"
    },
    results: {
      quote: "AITV eliminated the need for multiple conversion pipelines. One unified system handles all our cross-modal needs.",
      outcomes: [
        { title: "Coverage", description: "4 modalities, 12+ paths" },
        { title: "Quality", description: "High semantic retention" },
        { title: "Architecture", description: "Fully decoupled pipeline" }
      ]
    },
    tags: ["Multimodal", "Cross-Modal", "Latent Space", "AITV"],
    author: teamMembers.vedant
  },
  {
    id: "notebook-lm-clone",
    title: "NotebookLM Clone - Document-Grounded AI Assistant",
    description: "Open-source NotebookLM clone with 100% citation accuracy, multi-format support, and AI podcast generation from documents.",
    technology: "RAG & Retrieval",
    industry: "Research",
    serviceType: "Product Build",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&h=1080&fit=crop",
    date: "Jun 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/notebook-lm-clone",
    overview: "Document-based AI assistants often struggle with accuracy and citation. This project builds an open-source NotebookLM clone that ensures every AI response is grounded in source documents with precise citations. The system processes PDFs, audio, video, and web content, and even generates AI podcasts from documents.",
    metrics: [
      { value: "100%", label: "Citation Accuracy" },
      { value: "7+", label: "Document Types" },
      { value: "Real-time", label: "Processing" },
      { value: "Full Context", label: "Memory Retention" }
    ],
    architecture: {
      description: "The system follows a modular RAG architecture with a Streamlit frontend orchestrating specialized processing components. Each component handles a specific document type, all connected through a central vector database.",
      image: "https://website.apexneural.cloud/assets/case-study/notebook-llm/architecture.png",
      components: [
        { title: "Document Processor", description: "PyMuPDF for PDF, TXT, Markdown" },
        { title: "Audio Transcriber", description: "AssemblyAI with speaker diarization" },
        { title: "YouTube Transcriber", description: "Video-to-text with timestamps" },
        { title: "Web Scraper", description: "Firecrawl content extraction" }
      ]
    },
    implementation: {
      language: "python",
      code: `class DocumentRAG:
    def query(self, question: str) -> CitedResponse:
        # Retrieve relevant chunks
        chunks = self.vector_db.search(question)
        # Generate with citations
        response = self.llm.generate(question, chunks)
        # Extract and verify citations
        citations = self.extract_citations(response, chunks)
        return CitedResponse(text=response, citations=citations)`,
      explanation: "Every AI response is grounded in source documents with precise citations, ensuring users can trust and verify the information."
    },
    workflow: {
      steps: [
        "Upload documents (PDF, audio, video, web)",
        "Process and embed content",
        "Ask questions via chat",
        "Receive cited responses",
        "Generate AI podcasts from docs"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/notebook-llm/workflow.png"
    },
    results: {
      quote: "Finally, an AI that cites its sources. Every answer can be traced back to the exact document paragraph.",
      outcomes: [
        { title: "Trust", description: "100% citation accuracy" },
        { title: "Versatility", description: "7+ document types" },
        { title: "Innovation", description: "AI podcast generation" }
      ]
    },
    tags: ["NotebookLM", "Citations", "RAG", "Multi-format"],
    author: teamMembers.rahul
  },
  {
    id: "stock-portfolio-analysis-agent",
    title: "Real-Time Stock Portfolio Analysis Agent",
    description: "Autonomous AI agent that streams every step of its analysis workflow in real-time for complete transparency.",
    technology: "Agentic AI",
    industry: "FinTech",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop",
    date: "Jun 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/stock-portfolio-analysis-agent",
    overview: "Traditional portfolio tools provide results but hide the process. This project builds an autonomous AI agent that not only analyzes stock portfolios but streams every step of its workflow in real-time—from data fetching to allocation calculations—giving users complete visibility into the decision-making process.",
    metrics: [
      { value: "< 3 sec", label: "Processing Speed" },
      { value: "100%", label: "Real-time Updates" },
      { value: "99.8%", label: "Data Accuracy" },
      { value: "Full", label: "Visibility" }
    ],
    architecture: {
      description: "The system follows a layered architecture with clear separation between frontend UI, AG-UI Protocol for real-time streaming, FastAPI backend, and data sources. CrewAI Flow manages the multi-step analysis workflow.",
      image: "https://website.apexneural.cloud/assets/case-study/stock-portfolio/architecture.png",
      components: [
        { title: "React/Next.js Frontend", description: "CopilotKit integration for agent interaction" },
        { title: "AG-UI Protocol", description: "Real-time bidirectional communication" },
        { title: "FastAPI Backend", description: "Workflow execution and data flow" },
        { title: "CrewAI Flow Engine", description: "Multi-step analysis orchestration" }
      ]
    },
    implementation: {
      language: "python",
      code: `class PortfolioAnalysisFlow(Flow):
    @step(stream=True)
    async def fetch_data(self, symbols: List[str]):
        yield StreamEvent("Fetching stock data...")
        data = await yfinance.download(symbols)
        yield StreamEvent(f"Retrieved {len(data)} data points")
        return data
    
    @step(stream=True)
    async def analyze(self, data):
        yield StreamEvent("Calculating allocations...")
        # Analysis logic
        yield StreamEvent("Generating insights...")`,
      explanation: "The AG-UI Protocol enables real-time event streaming from the CrewAI workflow to the React frontend, showing every step as it happens."
    },
    workflow: {
      steps: [
        "User inputs portfolio symbols",
        "Agent fetches real-time data",
        "Allocations calculated (streamed)",
        "Insights generated (streamed)",
        "Final report displayed"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/stock-portfolio/workflow.png"
    },
    results: {
      quote: "For the first time, I can see exactly how the AI arrives at its recommendations. Complete transparency.",
      outcomes: [
        { title: "Transparency", description: "Full workflow visibility" },
        { title: "Speed", description: "Sub-3 second analysis" },
        { title: "Trust", description: "Verifiable decision process" }
      ]
    },
    tags: ["FinTech", "CrewAI", "AG-UI", "Real-time Streaming"],
    author: teamMembers.rahul
  },
  {
    id: "agentic-deep-researcher",
    title: "Agentic Deep Researcher – Multi-Agent Web Research System",
    description: "Multi-agent system for comprehensive web research with parallel search, source verification, and synthesized reports.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    date: "Jun 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/agentic-deep-researcher",
    overview: "Traditional search provides links, not answers. The Agentic Deep Researcher orchestrates multiple AI agents to perform comprehensive research: planning queries, executing parallel searches, verifying sources, and synthesizing coherent reports with citations.",
    metrics: [
      { value: "Recursive", label: "Search Depth" },
      { value: "95%+", label: "Source Accuracy" },
      { value: "Multi-hop", label: "Reasoning" },
      { value: "Cited", label: "Reports" }
    ],
    architecture: {
      description: "The system uses a hierarchical multi-agent architecture. A Planner agent decomposes queries, Researcher agents execute searches in parallel, a Verifier cross-checks sources, and a Synthesizer produces the final report.",
      image: "https://website.apexneural.cloud/assets/case-study/deep-researcher/architecture.png",
      components: [
        { title: "Planner Agent", description: "Query decomposition and strategy" },
        { title: "Researcher Agents", description: "Parallel web search execution" },
        { title: "Verifier Agent", description: "Source cross-checking" },
        { title: "Synthesizer Agent", description: "Report generation with citations" }
      ]
    },
    implementation: {
      language: "python",
      code: `class DeepResearcher(Crew):
    def research(self, query: str) -> Report:
        # Plan research strategy
        plan = self.planner.decompose(query)
        # Execute parallel searches
        results = await asyncio.gather(*[
            self.researcher.search(sub_query)
            for sub_query in plan.sub_queries
        ])
        # Verify and synthesize
        verified = self.verifier.check(results)
        return self.synthesizer.generate(verified)`,
      explanation: "Parallel search execution across multiple sub-queries dramatically reduces research time while improving coverage."
    },
    workflow: {
      steps: [
        "User submits research query",
        "Planner decomposes into sub-queries",
        "Researchers execute in parallel",
        "Verifier cross-checks sources",
        "Synthesizer generates cited report"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/deep-researcher/workflow.png"
    },
    results: {
      quote: "What used to take hours of manual research now completes in minutes with better source coverage.",
      outcomes: [
        { title: "Depth", description: "Recursive multi-hop search" },
        { title: "Accuracy", description: "95%+ source verification" },
        { title: "Quality", description: "Fully cited reports" }
      ]
    },
    tags: ["Research", "Multi-Agent", "Web Search", "CrewAI"],
    author: teamMembers.rahul
  },
  {
    id: "kutum-ai-nudges-engine",
    title: "Kutum AI Nudges – Intelligent Family Reminder Engine",
    description: "Semantic reminder engine that understands context and lead times to deliver actionable family nudges.",
    technology: "AI Automation",
    industry: "Family & Consumer",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=1920&h=1080&fit=crop",
    date: "May 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/kutum-ai-nudges-engine",
    overview: "Traditional reminders are binary. But families need context. The Kutum AI Nudges Engine doesn't just store expiry dates; it understands the semantic meaning. When a passport expires in 6 months, the system knows renewal takes 4-6 weeks, so it nudges 3 months before with actionable advice.",
    metrics: [
      { value: "25+", label: "Nudge Types" },
      { value: "50+", label: "Lead Time Rules" },
      { value: "15+", label: "Context Variables" },
      { value: "3", label: "Delivery Channels" }
    ],
    architecture: {
      description: "The engine operates across three core domains: Documents (passports, IDs), Health (medications, follow-ups), and Life Events (birthdays, admissions). Each domain has its own intelligence layer considering lead times and dependencies.",
      image: "https://website.apexneural.cloud/assets/case-study/kutum-nudges/architecture.png",
      components: [
        { title: "Document Domain", description: "Passport, ID, policy expiry logic" },
        { title: "Health Domain", description: "Medication and follow-up reminders" },
        { title: "Life Events", description: "Birthdays, anniversaries, admissions" },
        { title: "Delivery Engine", description: "Push, email, and SMS channels" }
      ]
    },
    implementation: {
      language: "typescript",
      code: `interface NudgeRule {
  documentType: string;
  leadTimeDays: number;
  contextFactors: string[];
  message: (doc: Document) => string;
}

const passportRule: NudgeRule = {
  documentType: 'passport',
  leadTimeDays: 90, // 3 months before
  contextFactors: ['country', 'renewalTime'],
  message: (doc) => \`\${doc.holderName}'s passport expires in \${doc.daysToExpiry} days. Indian passport renewal takes 4-6 weeks.\`
};`,
      explanation: "The engine encodes real-world knowledge—like how long Indian passport renewal takes—into its recommendation system."
    },
    workflow: {
      steps: [
        "Document/health data stored with dates",
        "Engine calculates optimal nudge timing",
        "Context factors applied (country, type)",
        "Personalized message generated",
        "Delivered via preferred channel"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/kutum-nudges/workflow.png"
    },
    results: {
      quote: "Kutum nudged us 3 months before Dad's passport expired. We had time to gather documents and renew without stress.",
      outcomes: [
        { title: "Coverage", description: "25+ nudge types" },
        { title: "Intelligence", description: "50+ lead time rules" },
        { title: "Delivery", description: "3 channels supported" }
      ]
    },
    tags: ["Family", "Smart Reminders", "Context-Aware", "Notifications"],
    author: teamMembers.kushal
  },
  {
    id: "kutum-ocr-document-processing",
    title: "Kutum OCR – Intelligent Document Extraction & Processing",
    description: "Multi-model OCR pipeline for Indian documents including passports, Aadhaar, and health reports with 98.2% accuracy.",
    technology: "Computer Vision",
    industry: "Family & Consumer",
    serviceType: "Product Build",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&h=1080&fit=crop",
    date: "May 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/kutum-ocr-document-processing",
    overview: "Families accumulate critical documents—passports, driver's licenses, Aadhaar cards, insurance policies. Manually entering every detail causes most users to abandon the process. Kutum OCR eliminates this friction. Users photograph documents, and AI extracts structured data automatically in under 3 seconds.",
    metrics: [
      { value: "15+", label: "Document Types" },
      { value: "98.2%", label: "Extraction Accuracy" },
      { value: "<3 sec", label: "Processing Time" },
      { value: "JPG/PNG/PDF", label: "Formats" }
    ],
    architecture: {
      description: "A multi-model pipeline that selects the optimal extraction strategy per document type. Aadhaar uses QR decoding, passports use MRZ reading, health reports use layout analysis.",
      image: "https://website.apexneural.cloud/assets/case-study/kutum-ocr/architecture.png",
      components: [
        { title: "Document Classifier", description: "Identifies document type from image" },
        { title: "MRZ Reader", description: "Passport machine-readable zone extraction" },
        { title: "QR Decoder", description: "Aadhaar embedded data extraction" },
        { title: "Layout Analyzer", description: "Health report table extraction" }
      ]
    },
    implementation: {
      language: "python",
      code: `class DocumentOCR:
    def extract(self, image: bytes) -> DocumentData:
        # Classify document type
        doc_type = self.classifier.predict(image)
        
        # Select extraction strategy
        if doc_type == 'passport':
            return self.mrz_reader.extract(image)
        elif doc_type == 'aadhaar':
            return self.qr_decoder.extract(image)
        else:
            return self.layout_analyzer.extract(image)`,
      explanation: "Indian documents present unique challenges—Aadhaar QR codes, passport MRZ, varied health report formats—requiring a multi-model approach."
    },
    workflow: {
      steps: [
        "User photographs document",
        "Classifier identifies document type",
        "Appropriate extractor selected",
        "Structured data returned",
        "User verifies and saves"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/kutum-ocr/workflow.png"
    },
    results: {
      quote: "I photographed my passport and Kutum filled in all 12 fields automatically. What used to take 5 minutes took 3 seconds.",
      outcomes: [
        { title: "Coverage", description: "15+ Indian document types" },
        { title: "Accuracy", description: "98.2% extraction rate" },
        { title: "Speed", description: "Under 3 seconds" }
      ]
    },
    tags: ["OCR", "Document Processing", "Indian Documents", "MRZ"],
    author: teamMembers.kushal
  },
  {
    id: "apex-saas-framework",
    title: "Apex SaaS Framework",
    description: "Comprehensive FastAPI boilerplate with pre-configured authentication, multi-tenancy, and payment integration.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Infrastructure",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    date: "Apr 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/apex-saas-framework",
    overview: "Apex SaaS Framework is a comprehensive FastAPI boilerplate designed to eliminate the repetitive setup work required for modern SaaS applications. It provides a robust foundation with pre-configured authentication, multi-tenancy, and payment integration, allowing developers to focus purely on business logic.",
    metrics: [
      { value: "< 2 min", label: "Setup Time" },
      { value: "90%", label: "Boilerplate Reduction" },
      { value: "100%", label: "Test Coverage" }
    ],
    architecture: {
      description: "The framework follows a strict Clean Architecture pattern, ensuring separation of concerns. It leverages FastAPI for the interface layer, SQLAlchemy 2.0 for persistence, and a domain-centric core that isolates business rules.",
      image: "https://website.apexneural.cloud/assets/case-study/DBAAS-Package/architecture.png",
      components: [
        { title: "API Layer", description: "FastAPI routers and Pydantic schemas" },
        { title: "Domain Layer", description: "Pure Python business logic and services" },
        { title: "Infrastructure", description: "Database, Email, and Storage adapters" },
        { title: "Core Security", description: "Authentication, RBAC, and configuration" }
      ]
    },
    implementation: {
      language: "python",
      code: `from apex import Apex

# Initialize your production-ready SaaS app in 2 lines
app = Apex().app

# Includes:
# - Auth (JWT, OAuth2)
# - Multi-tenancy
# - RBAC
# - Stripe/PayPal integration`,
      explanation: "Apex follows the principle of 'Extensibility First'—every component can be customized or replaced without touching core framework code."
    },
    workflow: {
      steps: [
        "Install Apex via pip",
        "Configure environment variables",
        "Initialize app in 2 lines",
        "Add your business logic",
        "Deploy to production"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/apex-saas/workflow.png"
    },
    results: {
      quote: "Apex saved us 3 months of boilerplate development. We went from idea to production SaaS in 2 weeks.",
      outcomes: [
        { title: "Speed", description: "2-minute setup" },
        { title: "Quality", description: "100% test coverage" },
        { title: "Savings", description: "90% less boilerplate" }
      ]
    },
    tags: ["SaaS", "FastAPI", "Boilerplate", "Clean Architecture"],
    author: teamMembers.likhith
  },
  {
    id: "dbaas-e-books",
    title: "DBaaS E-Books",
    description: "Knowledge distribution engine that dynamically generates structured educational content in EPUB and PDF formats.",
    technology: "Generative AI",
    industry: "EdTech",
    serviceType: "Product Build",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1920&h=1080&fit=crop",
    date: "Apr 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/dbaas-e-books",
    overview: "DBaaS E-Books is a knowledge distribution engine designed to bridge the gap between complex technical concepts and actionable business execution. Powered by the Tale-weaver core, it dynamically generates structured educational content—from EPUBs to PDFs—teaching founders how to discover ideas, validate markets, and execute builds.",
    metrics: [
      { value: "Idea to Launch", label: "Coverage" },
      { value: "Practical", label: "Depth" },
      { value: "Founders", label: "Audience" }
    ],
    architecture: {
      description: "The system utilizes a modular backend service (Tale-weaver) to orchestrate content generation. It decouples writing tone, genre structure, and output formatting from the core content logic.",
      image: "https://website.apexneural.cloud/assets/case-study/DBAAS-ebook/architecture.png",
      components: [
        { title: "Content Engine", description: "Genre selection and chapter outlining" },
        { title: "Format Service", description: "EPUB and PDF rendering" },
        { title: "Metadata Layer", description: "Author bios and semantic tagging" },
        { title: "AI Orchestrator", description: "Narrative flow consistency" }
      ]
    },
    implementation: {
      language: "python",
      code: `async def create_epub(book_data: BookData) -> bytes:
    """Generate an EPUB file from book data."""
    book = epub.EpubBook()
    book.set_title(book_data.title)
    book.set_language('en')
    
    for chapter in book_data.chapters:
        c = epub.EpubHtml(title=chapter.title)
        c.content = await generate_chapter_html(chapter)
        book.add_item(c)
    
    return epub.write_epub_to_bytes(book)`,
      explanation: "The Tale-weaver core allows dynamic re-packaging of knowledge into various formats suitable for e-readers or print."
    },
    workflow: {
      steps: [
        "Define book topic and structure",
        "AI generates chapter content",
        "Format service renders EPUB/PDF",
        "Metadata and cover added",
        "Distribution-ready output"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/dbaas-ebook/workflow.png"
    },
    results: {
      quote: "We generated a complete founder's guide in hours, not months. The quality rivals traditionally written books.",
      outcomes: [
        { title: "Coverage", description: "Idea to launch journey" },
        { title: "Quality", description: "Professional formatting" },
        { title: "Speed", description: "Hours, not months" }
      ]
    },
    tags: ["E-Books", "Content Generation", "EPUB", "PDF"],
    author: teamMembers.likhith
  },
  {
    id: "dbaas-e-courses",
    title: "DBaaS E-Courses: Scaling Education with AI",
    description: "Autonomous course generation system producing Google Slides presentations and neural audio lectures.",
    technology: "Generative AI",
    industry: "EdTech",
    serviceType: "Product Build",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop",
    date: "Mar 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/dbaas-e-courses",
    overview: "DBaaS E-Courses bridge the gap between complex platforms and user mastery. We built a system that autonomously generates structured learning paths, converting raw documentation into Google Slides presentations, neural audio lectures, and interactive quizzes.",
    metrics: [
      { value: "Idea to Launch", label: "Coverage" },
      { value: "Beginner to Advanced", label: "Levels" },
      { value: "High", label: "Hands-On Focus" }
    ],
    architecture: {
      description: "The solution orchestrates a pipeline of AI services. A FastAPI backend manages the course lifecycle, interfacing with OpenAI for content generation and Piper TTS for audio. The Google Slides API handles visual rendering.",
      image: "https://website.apexneural.cloud/assets/case-study/DBAAS-ecourse/architecture.png",
      components: [
        { title: "FastAPI Backend", description: "Course lifecycle management" },
        { title: "LLM Content Generation", description: "GPT-4o for lesson content" },
        { title: "Text-to-Speech", description: "Piper TTS for audio lectures" },
        { title: "Slides Rendering", description: "Google Slides API integration" }
      ]
    },
    implementation: {
      language: "python",
      code: `async def generate_course(topic: str, level: str) -> Course:
    # Generate course structure
    outline = await openai.generate_outline(topic, level)
    
    # Create slides and audio for each lesson
    lessons = []
    for lesson in outline.lessons:
        slides = await create_slides(lesson)
        audio = await piper_tts.synthesize(lesson.script)
        lessons.append(Lesson(slides=slides, audio=audio))
    
    return Course(topic=topic, lessons=lessons)`,
      explanation: "The system ensures that every founder and builder has access to high-quality, up-to-date education generated on demand."
    },
    workflow: {
      steps: [
        "Define course topic and level",
        "AI generates lesson structure",
        "Slides created via Google API",
        "Audio synthesized with Piper TTS",
        "Course published and accessible"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/dbaas-ecourse/workflow.png"
    },
    results: {
      quote: "We generated 20 hours of course content in a single day. The audio quality is indistinguishable from human narration.",
      outcomes: [
        { title: "Speed", description: "Hours to create full courses" },
        { title: "Quality", description: "Neural audio lectures" },
        { title: "Scale", description: "Unlimited course generation" }
      ]
    },
    tags: ["E-Courses", "Google Slides", "TTS", "EdTech"],
    author: teamMembers.likhith
  },
  {
    id: "dbaas-platform",
    title: "DBaaS Platform",
    description: "Digital Business as a Service platform combining Reddit signal mining, AI-driven analysis, and generative UI for landing pages.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop",
    date: "Mar 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/dbaas-platform",
    overview: "DBaaS (Digital Business as a Service) is a platform that provides access to sophisticated market research and web development. By combining Reddit signal mining, AI-driven pain point analysis, and generative UI, it allows entrepreneurs to validate ideas and launch professional landing pages without writing code.",
    metrics: [
      { value: "Minutes", label: "Idea Validation" },
      { value: "End-to-end", label: "Workflow" },
      { value: "High", label: "User Guidance" }
    ],
    architecture: {
      description: "The platform is built on React 18 + Vite frontend and microservices backend. Key features include global state management via Zustand, resilient API handling, and containerized deployment.",
      image: "https://website.apexneural.cloud/assets/case-study/DBAAS-landing%20page/Architecture.png",
      components: [
        { title: "Frontend Core", description: "React 18, Vite, Tailwind, shadcn/ui" },
        { title: "AI Services", description: "Market analysis and Reddit scraping" },
        { title: "State Management", description: "Zustand and React Query" },
        { title: "Infrastructure", description: "Docker containers for deployment" }
      ]
    },
    implementation: {
      language: "typescript",
      code: `// Resilient API Client with Interceptors
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  response => response,
  error => handleApiError(error)
);`,
      explanation: "The platform features extensive fallback strategies ensuring reliable operation even when external services are unavailable."
    },
    workflow: {
      steps: [
        "User describes business idea",
        "Reddit signals mined for validation",
        "AI analyzes pain points",
        "Landing page generated",
        "Deploy with one click"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/dbaas-platform/workflow.png"
    },
    results: {
      quote: "DBaaS validated my SaaS idea in 10 minutes and generated a landing page that converted 12% of visitors.",
      outcomes: [
        { title: "Speed", description: "Minutes to validate ideas" },
        { title: "Quality", description: "Professional landing pages" },
        { title: "Guidance", description: "High user guidance level" }
      ]
    },
    tags: ["DBaaS", "Reddit Mining", "Generative UI", "No-Code"],
    author: teamMembers.likhith
  },
  {
    id: "champions-gen-sports-ai",
    title: "Champions Gen: Sports Intelligence Platform",
    description: "Player intelligence platform predicting injury risks and forecasting performance by aggregating GPS, medical, and match data.",
    technology: "Machine Learning",
    industry: "Sports Tech",
    serviceType: "Platform Development",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&h=1080&fit=crop",
    date: "Feb 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/champions-gen-sports-ai",
    overview: "Champions Gen is a cutting-edge player intelligence platform designed to give professional clubs a competitive edge. By aggregating data from GPS wearables, medical records, and match statistics, it predicts injury risks before they happen and forecasts future player performance.",
    metrics: [
      { value: "35%", label: "Injury Reduction" },
      { value: "92%", label: "Valuation Accuracy" },
      { value: "50k+", label: "Data Points/Player" },
      { value: "6 Months", label: "Prediction Window" }
    ],
    architecture: {
      description: "The platform is built on a modular 'AI Core' containing three engines: Injury Prediction, Performance Forecasting, and Market Valuation. Data flows from external sources through a normalization layer before processing.",
      image: "https://website.apexneural.cloud/assets/case-study/champions-gen/architecture.png",
      components: [
        { title: "Injury Engine", description: "Survival Analysis for risk scoring" },
        { title: "Performance Engine", description: "Sequence models for rating forecasts" },
        { title: "Valuation Engine", description: "Market regression for transfer values" },
        { title: "Explainability Layer", description: "SHAP-based feature importance" }
      ]
    },
    implementation: {
      language: "python",
      code: `class InjuryPredictionEngine:
    def predict_risk(self, player_id: str, load_metrics: Dict):
        # Aggregate recent workload
        workload = self.aggregate_workload(player_id, days=14)
        # Apply survival analysis model
        hazard = self.survival_model.predict(workload, load_metrics)
        # Explain risk factors
        explanation = shap.explain(self.model, workload)
        return RiskScore(hazard=hazard, explanation=explanation)`,
      explanation: "The SHAP-based explainability layer answers 'Why high risk?' so medical staff can take targeted preventive action."
    },
    workflow: {
      steps: [
        "Ingest GPS and medical data",
        "Normalize across data sources",
        "Run through AI engines",
        "Generate risk scores and forecasts",
        "Deliver to role-specific dashboards"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/champions-gen/workflow.png"
    },
    results: {
      quote: "Champions Gen reduced our injury rate by 35% and helped us identify undervalued transfer targets.",
      outcomes: [
        { title: "Health", description: "35% injury reduction" },
        { title: "Accuracy", description: "92% valuation accuracy" },
        { title: "Data", description: "50k+ points per player" }
      ]
    },
    tags: ["Sports AI", "Injury Prediction", "Performance Forecasting", "SHAP"],
    author: teamMembers.parmeet
  },
  {
    id: "private-agentic-rag-api",
    title: "100% Private Agentic RAG API",
    description: "Fully local agentic RAG system using Ollama for 100% privacy with no data leaving user infrastructure.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop",
    date: "Feb 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/private-agentic-rag-api",
    overview: "Most RAG systems rely on cloud-based LLMs, posing significant privacy risks for sensitive data. This project implements a fully local agentic system where a Researcher agent performs deep web searches and a Writer agent synthesizes the findings, all running on local Ollama instances.",
    metrics: [
      { value: "100%", label: "Privacy" },
      { value: "<5 min", label: "Setup Time" },
      { value: "Qwen2.5/Llama3", label: "Local LLM" },
      { value: "Low Latency", label: "Performance" }
    ],
    architecture: {
      description: "The system follows a multi-layered architecture with LitServe-powered API gateway, CrewAI for agent orchestration, and local Ollama server for inference. No data leaves the user's infrastructure.",
      image: "https://website.apexneural.cloud/assets/case-study/private-rag-api/architecture.png",
      components: [
        { title: "LitServe API", description: "High-performance serving engine" },
        { title: "CrewAI Agents", description: "Researcher and Writer coordination" },
        { title: "Ollama Local LLM", description: "Private inference engine" },
        { title: "Flask Web UI", description: "Glassmorphism dashboard" }
      ]
    },
    implementation: {
      language: "python",
      code: `class PrivateRAGAPI(LitServer):
    def __init__(self):
        self.ollama = OllamaClient(model="qwen2.5:14b")
        self.researcher = ResearcherAgent(llm=self.ollama)
        self.writer = WriterAgent(llm=self.ollama)
    
    async def process(self, query: str) -> str:
        research = await self.researcher.search(query)
        return await self.writer.synthesize(research)`,
      explanation: "By running on local Ollama instances, this system ensures that no sensitive data ever leaves the user's infrastructure."
    },
    workflow: {
      steps: [
        "User submits query via API",
        "Researcher agent searches locally",
        "Writer agent synthesizes findings",
        "Response returned via LitServe",
        "All processing stays local"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/private-rag-api/workflow.png"
    },
    results: {
      quote: "Finally, we can use AI on our sensitive documents without worrying about data leaving our servers.",
      outcomes: [
        { title: "Privacy", description: "100% local processing" },
        { title: "Speed", description: "5-minute setup" },
        { title: "Flexibility", description: "Multiple local LLM options" }
      ]
    },
    tags: ["Private AI", "Ollama", "LitServe", "Local LLM"],
    author: teamMembers.hansika
  },
  {
    id: "researchflow-mcp",
    title: "ResearchFlow MCP: Autonomous Deep Research Protocol",
    description: "MCP server enabling recursive deep research with fact verification and comprehensive report synthesis.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "AI Agent Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    date: "Jan 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/researchflow-mcp",
    overview: "Current LLMs struggle with deep research. They hallucinate, stop after one search, or lack current data. ResearchFlow is an MCP server that provides a structured 'Deep Research' tool enabling Claude or Cursor to recursively search, analyze sources, verify facts, and synthesize comprehensive reports.",
    metrics: [
      { value: "Recursive", label: "Search Depth" },
      { value: "95%+", label: "Fact Accuracy" },
      { value: "< 2 Mins", label: "Setup Time" },
      { value: "Web/Academic", label: "Sources" }
    ],
    architecture: {
      description: "The ResearchFlow architecture places the MCP Server as the central conductor. It orchestrates multi-step plans, calls external APIs (Exa, Arxiv), and feeds results back to the LLM for synthesis.",
      image: "https://website.apexneural.cloud/assets/case-study/researchflow-mcp/architecture.png",
      components: [
        { title: "MCP Server", description: "Python server implementing MCP" },
        { title: "Search Tools", description: "Exa.ai, Google, Wikipedia connectors" },
        { title: "Planner Agent", description: "Query decomposition" },
        { title: "Verifier", description: "Cross-source fact checking" }
      ]
    },
    implementation: {
      language: "python",
      code: `@mcp.tool("deep_research")
async def deep_research(query: str, depth: int = 3) -> Report:
    plan = await self.planner.decompose(query)
    results = []
    for sub_query in plan.queries:
        search_results = await self.search(sub_query)
        verified = await self.verifier.check(search_results)
        results.extend(verified)
    return self.synthesizer.generate(results)`,
      explanation: "The recursive search loop continues until the confidence threshold is met, ensuring comprehensive coverage of the topic."
    },
    workflow: {
      steps: [
        "User asks complex question",
        "Planner decomposes into sub-queries",
        "Recursive search across sources",
        "Verifier cross-checks facts",
        "Synthesizer generates final report"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/researchflow-mcp/workflow.png"
    },
    results: {
      quote: "ResearchFlow transformed Claude into a proper research assistant. It now cites sources and verifies claims.",
      outcomes: [
        { title: "Depth", description: "Recursive multi-hop search" },
        { title: "Accuracy", description: "95%+ fact verification" },
        { title: "Setup", description: "Under 2 minutes" }
      ]
    },
    tags: ["MCP", "Deep Research", "Fact Verification", "Claude"],
    author: teamMembers.hansika
  },
  {
    id: "scalescrape-visual-extraction",
    title: "ScaleScrape: Enterprise-Grade Visual Data Harvesting",
    description: "Visual-first scraping platform using YOLO for element detection, immune to DOM changes and anti-bot systems.",
    technology: "Computer Vision",
    industry: "Enterprise",
    serviceType: "Data Engineering",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    date: "Jan 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/scalescrape-visual-extraction",
    overview: "Traditional web scraping is brittle. Anti-bot systems and dynamic DOM changes constantly break scrapers. ScaleScrape treats the web visually. Instead of CSS selectors, it uses a Vision model to identify data components just like a human would, making it immune to code obfuscation.",
    metrics: [
      { value: "99.2%", label: "Success Rate" },
      { value: "5M+", label: "Daily Pages" },
      { value: "High", label: "Bypass Rate" },
      { value: "Zero", label: "Maintenance" }
    ],
    architecture: {
      description: "The system runs on ephemeral headless browsers managed by K8s. A smart proxy rotator handles IP reputation. The Visual Extraction Node uses YOLO for element detection and LLM for JSON formatting.",
      image: "https://website.apexneural.cloud/assets/case-study/scalescrape-visual-extraction/architecture.png",
      components: [
        { title: "Browser Fleet", description: "Headless Playwright with stealth plugins" },
        { title: "Smart Proxy Mesh", description: "AI-driven residential IP rotation" },
        { title: "Vision Extractor", description: "YOLOv8 for UI element detection" },
        { title: "Schema Normalizer", description: "LLM for Pydantic model mapping" }
      ]
    },
    implementation: {
      language: "python",
      code: `class VisualScraper:
    async def extract(self, url: str, schema: Type[BaseModel]) -> BaseModel:
        # Render and screenshot
        screenshot = await self.browser.screenshot(url)
        # Detect elements visually
        elements = self.yolo.detect(screenshot)
        # Extract text from regions
        text_regions = self.ocr.extract(screenshot, elements)
        # Normalize to schema
        return self.llm.parse(text_regions, schema)`,
      explanation: "The visual approach means zero maintenance when websites update their HTML—as long as it looks the same, it scrapes the same."
    },
    workflow: {
      steps: [
        "URL queued for scraping",
        "Stealth browser renders page",
        "YOLO detects data regions",
        "OCR extracts text",
        "LLM normalizes to schema"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/scalescrape-visual-extraction/workflow.png"
    },
    results: {
      quote: "ScaleScrape survived 3 major website redesigns without a single code change. Traditional scrapers would have broken each time.",
      outcomes: [
        { title: "Reliability", description: "99.2% success rate" },
        { title: "Scale", description: "5M+ pages daily" },
        { title: "Maintenance", description: "Zero code updates" }
      ]
    },
    tags: ["Web Scraping", "Computer Vision", "YOLOv8", "Anti-Bot"],
    author: teamMembers.shubham
  },
  {
    id: "linkedin-job-scraper-apify",
    title: "LinkedIn Job Scraper: Scalable Data Harvesting with Apify",
    description: "Robust LinkedIn scraper using Apify Actors with residential proxy rotation and stealth browser fingerprinting.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Data Engineering",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1920&h=1080&fit=crop",
    date: "Dec 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/linkedin-job-scraper-apify",
    overview: "Scraping LinkedIn is notoriously difficult due to strict anti-bot measures. This case study details how we utilized Apify's infrastructure to deploy a robust scraper that rotates residential proxies and manages browser fingerprints. The system extracts job titles, descriptions, and salary ranges.",
    metrics: [
      { value: "98%", label: "Success Rate" },
      { value: "10,000+", label: "Jobs/Hour" },
      { value: "Optimized", label: "Proxy Cost" },
      { value: "JSON/CSV", label: "Format" }
    ],
    architecture: {
      description: "The architecture leverages Apify Actors for browser orchestration. A central Manager script queues URLs while worker actors scrape in parallel using stealth-mode Playwright.",
      image: "https://website.apexneural.cloud/assets/case-study/linkedin-scraper/architecture.png",
      components: [
        { title: "Apify Actor", description: "Serverless container for scraping" },
        { title: "Residential Proxies", description: "Rotated IPs for geo-specific scraping" },
        { title: "Request Queue", description: "URL frontier with retry logic" },
        { title: "Data Transformer", description: "HTML to structured entity mapping" }
      ]
    },
    implementation: {
      language: "python",
      code: `from apify import Actor

class LinkedInScraper:
    async def run(self):
        async with Actor:
            # Configure stealth browser
            browser = await Actor.launch_browser(
                stealth_mode=True,
                proxy_rotation="residential"
            )
            # Process job URLs
            while url := await Actor.request_queue.fetch():
                job_data = await self.extract_job(browser, url)
                await Actor.push_data(job_data)`,
      explanation: "Apify's infrastructure handles the complexity of browser orchestration, proxy management, and data persistence."
    },
    workflow: {
      steps: [
        "Queue LinkedIn job URLs",
        "Actors scrape in parallel",
        "Residential proxies rotate",
        "Data normalized to schema",
        "Export to JSON/CSV"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/linkedin-scraper/workflow.png"
    },
    results: {
      quote: "We scrape 10,000+ LinkedIn jobs per hour with 98% success rate. Apify handles all the anti-bot complexity.",
      outcomes: [
        { title: "Scale", description: "10,000+ jobs per hour" },
        { title: "Reliability", description: "98% success rate" },
        { title: "Cost", description: "Optimized proxy usage" }
      ]
    },
    tags: ["LinkedIn", "Apify", "Web Scraping", "Proxies"],
    author: teamMembers.shubham
  },
  {
    id: "pydantic-schema-validation",
    title: "Industrial-Strength Data Validation with Pydantic",
    description: "Advanced Pydantic patterns for data validation across APIs, LLM outputs, and configuration management.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Integration & API",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop",
    date: "Dec 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/pydantic-schema-validation",
    overview: "In dynamic languages like Python, data bugs are common. Pydantic solves this by parsing and validating data against pre-defined classes. We use it everywhere—from validating API requests in FastAPI to cleaning LLM outputs. This case study demonstrates advanced usage patterns.",
    metrics: [
      { value: "Hundreds", label: "Bugs Prevented" },
      { value: "Rust Core", label: "Performance" },
      { value: "Excellent", label: "Dev Experience" },
      { value: "100%", label: "Adoption" }
    ],
    architecture: {
      description: "Pydantic sits at the boundary of your application. It intercepts raw data, validates it against a schema, and converts it into a typed Python object. If validation fails, it raises precise errors.",
      image: "https://website.apexneural.cloud/assets/case-study/pydantic/architecture.png",
      components: [
        { title: "BaseModel", description: "Core class defining data schema" },
        { title: "Validator", description: "Custom constraint enforcement" },
        { title: "Serialization", description: "Safe JSON/Dict conversion" },
        { title: "Settings Config", description: "Type-safe environment variables" }
      ]
    },
    implementation: {
      language: "python",
      code: `from pydantic import BaseModel, field_validator

class User(BaseModel):
    name: str
    age: int
    email: str
    
    @field_validator('age')
    @classmethod
    def age_must_be_adult(cls, v: int) -> int:
        if v < 18:
            raise ValueError('Must be 18 or older')
        return v`,
      explanation: "Custom validators enforce complex constraints beyond simple type checking, like 'age must be > 18'."
    },
    workflow: {
      steps: [
        "Define schema with BaseModel",
        "Add custom validators",
        "Apply to API endpoints",
        "Validate LLM outputs",
        "Manage configuration"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/pydantic/workflow.png"
    },
    results: {
      quote: "Pydantic eliminated entire categories of bugs. Our API error rate dropped by 80% after adoption.",
      outcomes: [
        { title: "Quality", description: "Hundreds of bugs prevented" },
        { title: "Speed", description: "Rust-powered performance" },
        { title: "DX", description: "Excellent developer experience" }
      ]
    },
    tags: ["Pydantic", "Validation", "FastAPI", "Type Safety"],
    author: teamMembers.rahul
  },
  {
    id: "payment-api-integration",
    title: "Secure Payment API Integration: Idempotency & Webhooks",
    description: "Idempotent payment integration pattern with Stripe ensuring exactly-once transaction processing.",
    technology: "AI Automation",
    industry: "FinTech",
    serviceType: "Integration & API",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
    date: "Nov 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/payment-api-integration",
    overview: "Integrating a payment gateway like Stripe looks easy, but edge cases abound. Network timeouts, double-clicks, and delayed webhooks can lead to double charges or missed provisioning. This guide details our 'Idempotent Transaction Pattern' which guarantees exactly-once payment actions.",
    metrics: [
      { value: "99.99%", label: "Uptime" },
      { value: "Zero", label: "Double Charges" },
      { value: "ACID", label: "Integrity" },
      { value: "TLS 1.3", label: "Security" }
    ],
    architecture: {
      description: "The payment flow involves three parties: Client, Server, and Gateway (Stripe). We use Idempotency Keys for all write operations. Fulfillment happens asynchronously via Webhooks with cryptographic signature verification.",
      image: "https://website.apexneural.cloud/assets/case-study/payment-api/architecture.png",
      components: [
        { title: "Payment Intent", description: "Stateful charge lifecycle tracking" },
        { title: "Idempotency Layer", description: "Prevents duplicate side effects" },
        { title: "Webhook Handler", description: "Async event processing" },
        { title: "Reconciliation Job", description: "Nightly DB-Stripe sync" }
      ]
    },
    implementation: {
      language: "python",
      code: `import stripe

async def create_payment(amount: int, idempotency_key: str):
    try:
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency="usd",
            idempotency_key=idempotency_key  # Critical!
        )
        return intent
    except stripe.error.IdempotencyError:
        # Same key, same result - no double charge
        return await get_existing_intent(idempotency_key)`,
      explanation: "Idempotency keys guarantee that retried requests (due to network failures) don't duplicate side effects like charges."
    },
    workflow: {
      steps: [
        "Client submits payment with idempotency key",
        "Server creates PaymentIntent",
        "Client confirms with card details",
        "Webhook receives confirmation",
        "Fulfillment triggered exactly once"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/payment-api/workflow.png"
    },
    results: {
      quote: "Zero double charges since implementing idempotency keys. The reconciliation job catches any edge cases.",
      outcomes: [
        { title: "Reliability", description: "99.99% uptime" },
        { title: "Integrity", description: "Zero double charges" },
        { title: "Security", description: "TLS 1.3 + signature verification" }
      ]
    },
    tags: ["Stripe", "Payments", "Idempotency", "Webhooks"],
    author: teamMembers.rahul
  },
  {
    id: "claude-mcp-integration-guide",
    title: "Claude MCP Guide: Connecting Local Tools to AI",
    description: "Step-by-step guide for configuring MCP servers to give Claude access to local files, databases, and custom tools.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "Integration & API",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1920&h=1080&fit=crop",
    date: "Nov 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/claude-mcp-integration-guide",
    overview: "The Model Context Protocol (MCP) is a standardized way for AI assistants to talk to external systems. This guide explains how to set up claude_desktop_config.json to enable local servers—like a SQLite inspector or File System agent. By the end, Claude can read logs, query databases, and edit files directly.",
    metrics: [
      { value: "Medium", label: "Complexity" },
      { value: "Unlimited", label: "Power" },
      { value: "JSON Config", label: "Setup" },
      { value: "Open Std", label: "Protocol" }
    ],
    architecture: {
      description: "MCP operates on a Client-Host-Server model. Claude Desktop acts as the Host. You run local Servers (Python scripts). The Host connects via Stdio, and Claude can execute tools and receive outputs in the chat context.",
      image: "https://website.apexneural.cloud/assets/case-study/claude-mcp-integration-guide/architecture.png",
      components: [
        { title: "Host (Claude)", description: "The UI for user interaction" },
        { title: "MCP Client", description: "Internal connection manager" },
        { title: "MCP Server", description: "Executable exposing tools" },
        { title: "Transport", description: "Stdio or SSE communication" }
      ]
    },
    implementation: {
      language: "json",
      code: `{
  "mcpServers": {
    "filesystem": {
      "command": "uvx",
      "args": ["mcp-server-filesystem", "/Users/me/projects"]
    },
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "dev.db"]
    }
  }
}`,
      explanation: "The claude_desktop_config.json file tells Claude which MCP servers to connect to and how to launch them."
    },
    workflow: {
      steps: [
        "Create claude_desktop_config.json",
        "Add MCP server configurations",
        "Restart Claude Desktop",
        "Ask Claude to use local tools",
        "Claude reads files, queries DBs, etc."
      ],
      image: "https://website.apexneural.cloud/assets/case-study/claude-mcp/workflow.png"
    },
    results: {
      quote: "Now Claude can read my log files and query my dev database directly. It's like having a pair programmer with root access.",
      outcomes: [
        { title: "Power", description: "Unlimited local tool access" },
        { title: "Setup", description: "Simple JSON configuration" },
        { title: "Standard", description: "Open MCP protocol" }
      ]
    },
    tags: ["MCP", "Claude", "Local Tools", "Configuration"],
    author: teamMembers.hansika
  },
  {
    id: "toon-json-prompting",
    title: "Advanced Prompting: Toon Styles & JSON Mode",
    description: "Dual-pipeline prompting techniques for consistent 3D character styles and guaranteed JSON output from LLMs.",
    technology: "Prompt Engineering",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=1920&h=1080&fit=crop",
    date: "Oct 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/toon-json-prompting",
    overview: "Prompt engineering splits into two disciplines: Creative (Style) and Structural (Format). This case study covers both. Part 1 explores 'Toon' prompting for consistent 3D Pixar/Disney style characters. Part 2 explores 'JSON Mode' for machine-readable LLM outputs.",
    metrics: [
      { value: "High", label: "Consistency" },
      { value: "100%", label: "Parse Rate" },
      { value: "3D/2D", label: "Style" },
      { value: "MJ/GPT", label: "Platform" }
    ],
    architecture: {
      description: "For Image Generation, we use 'Style Tokens'—pre-defined lighting and render terms. For Text, we utilize native JSON Mode combined with Zod/Pydantic schema definitions.",
      image: "https://website.apexneural.cloud/assets/case-study/toon-json-prompting/architecture.png",
      components: [
        { title: "Style Prompt", description: "Aesthetic keywords injection" },
        { title: "Negative Prompt", description: "Artifact removal" },
        { title: "System Instruction", description: "JSON generator behavior" },
        { title: "Schema Definition", description: "Exact output structure" }
      ]
    },
    implementation: {
      language: "json",
      code: `{
  "style_tokens": [
    "3D Pixar style",
    "Octane Render",
    "Subsurface Scattering",
    "Global Illumination"
  ],
  "negative_tokens": [
    "low quality",
    "blurry",
    "distorted"
  ],
  "json_schema": {
    "type": "object",
    "properties": {
      "character": { "type": "string" },
      "scene": { "type": "string" }
    }
  }
}`,
      explanation: "Style tokens create consistent aesthetics while JSON schemas guarantee valid, parseable output for API integration."
    },
    workflow: {
      steps: [
        "Define style token lexicon",
        "Add negative prompts",
        "Set JSON schema for text output",
        "Generate with consistency",
        "Parse outputs reliably"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/toon-json-prompting/workflow.png"
    },
    results: {
      quote: "Our character consistency improved dramatically. JSON mode eliminated parsing failures entirely.",
      outcomes: [
        { title: "Style", description: "Consistent 3D/2D output" },
        { title: "Reliability", description: "100% JSON parse rate" },
        { title: "Flexibility", description: "Works across platforms" }
      ]
    },
    tags: ["Prompt Engineering", "JSON Mode", "Character Design", "Style Tokens"],
    author: teamMembers.vedant
  },
  {
    id: "runpod-serverless-gpu",
    title: "RunPod & The Serverless GPU Revolution",
    description: "Serverless GPU deployment for AI inference with 80% cost reduction and sub-2 second cold starts.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Infrastructure",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop",
    date: "Oct 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/runpod-serverless-gpu",
    overview: "Traditional cloud providers are expensive and complex for transient AI workloads. RunPod offers 'Serverless Pods'—Docker containers that wake up only when a request comes in. We migrated our text-to-image pipeline to RunPod, reducing idle costs by 80%.",
    metrics: [
      { value: "80%", label: "Cost Savings" },
      { value: "<2s", label: "Cold Start" },
      { value: "H100/A6000", label: "GPUs" },
      { value: "Auto-zero", label: "Scale" }
    ],
    architecture: {
      description: "A custom Docker image with baked-in model weights is deployed to RunPod's Serverless platform. A global load balancer routes requests to available pods. Network Volumes provide persistent storage for LoRA adapters.",
      image: "https://website.apexneural.cloud/assets/case-study/runpod/architecture.png",
      components: [
        { title: "Custom Handler", description: "Python entrypoint for model loading" },
        { title: "Network Volume", description: "Shared high-speed storage" },
        { title: "Auto-Scaler", description: "0-100 GPUs based on queue depth" },
        { title: "Registry", description: "Optimized inference image" }
      ]
    },
    implementation: {
      language: "python",
      code: `import runpod

def handler(job):
    prompt = job["input"]["prompt"]
    # Model is pre-loaded in Docker image
    image = generate_image(prompt)
    return {"image_url": upload_to_s3(image)}

runpod.serverless.start({"handler": handler})`,
      explanation: "Baking model weights into the Docker image eliminates download time during cold starts, enabling sub-2 second response times."
    },
    workflow: {
      steps: [
        "Build Docker with model weights",
        "Deploy to RunPod Serverless",
        "API request hits load balancer",
        "Pod wakes up (or uses warm pool)",
        "Inference and response"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/runpod/workflow.png"
    },
    results: {
      quote: "RunPod cut our inference costs by 80%. We scale to zero when idle and spin up instantly when needed.",
      outcomes: [
        { title: "Cost", description: "80% reduction" },
        { title: "Speed", description: "<2s cold start" },
        { title: "Scale", description: "0 to 100 GPUs" }
      ]
    },
    tags: ["RunPod", "Serverless", "GPU", "Inference"],
    author: teamMembers.vedant
  },
  {
    id: "comfyui-advanced-workflows",
    title: "ComfyUI: Modular Image Generation Architecture",
    description: "Node-based workflow design for complex image generation pipelines with caching and reproducibility.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop",
    date: "Sep 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/comfyui-advanced-workflows",
    overview: "Standard interfaces like Automatic1111 mask the complexity of diffusion models. ComfyUI exposes the internal wiring. By treating latent space, VAE, CLIP, and Sampler as separate nodes, we can build complex workflows that simple UIs cannot handle. It's the professional's choice for reproducibility.",
    metrics: [
      { value: "2x Faster", label: "Efficiency" },
      { value: "Low VRAM", label: "Memory" },
      { value: "Infinite", label: "Flexibility" },
      { value: ".json Flow", label: "Format" }
    ],
    architecture: {
      description: "ComfyUI operates on a graph execution model. Data flows from left to right: Checkpoint Loader → CLIP Text Encode → KSampler → VAE Decode → Save Image. Intermediate results are cached for fast iteration.",
      image: "https://website.apexneural.cloud/assets/case-study/comfyui-workflows-001/architecture.png",
      components: [
        { title: "Checkpoint Loader", description: "Loads Safetensors model to VRAM" },
        { title: "KSampler", description: "Core denoising engine" },
        { title: "ControlNet Stack", description: "Structural guidance injection" },
        { title: "Latent Upscaler", description: "Latent space upscaling" }
      ]
    },
    implementation: {
      language: "json",
      code: `{
  "3": {
    "class_type": "KSampler",
    "inputs": {
      "seed": 12345,
      "steps": 20,
      "cfg": 7.5,
      "sampler_name": "euler",
      "scheduler": "normal",
      "denoise": 1.0,
      "model": ["4", 0],
      "positive": ["6", 0],
      "negative": ["7", 0],
      "latent_image": ["5", 0]
    }
  }
}`,
      explanation: "The JSON workflow format enables version control and sharing of complex generation pipelines."
    },
    workflow: {
      steps: [
        "Design node graph visually",
        "Connect components (model, CLIP, sampler)",
        "Add ControlNet for guidance",
        "Execute with caching",
        "Export reproducible JSON"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/comfyui/workflow.png"
    },
    results: {
      quote: "ComfyUI's caching means I can iterate on prompts without reloading the 6GB model each time. Massive speedup.",
      outcomes: [
        { title: "Speed", description: "2x faster iteration" },
        { title: "Efficiency", description: "Low VRAM usage" },
        { title: "Reproducibility", description: "JSON workflow export" }
      ]
    },
    tags: ["ComfyUI", "Stable Diffusion", "Node Graph", "Workflows"],
    author: teamMembers.vedant
  },
  {
    id: "character-consistency-genai",
    title: "Mastering Character Consistency in GenAI",
    description: "Consistency stack combining IP-Adapter, FaceID, and LoRA for identical characters across generations.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=1080&fit=crop",
    date: "Sep 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/character-consistency-genai",
    overview: "The biggest hurdle for AI comics and movies is that models behave like a chaotic dream—every generation yields a different person. We employ a 'Consistency Stack': combining IP-Adapter (general features), FaceID (identity), and LoRA (clothing). This ensures our protagonist looks the same across scenes.",
    metrics: [
      { value: "95%+", label: "Similarity" },
      { value: "360 Deg", label: "Angles" },
      { value: "Locked", label: "Outfit" },
      { value: "Full", label: "Control" }
    ],
    architecture: {
      description: "Consistency is achieved through layering constraints. We start with a Reference Sheet. During generation, IP-Adapter FaceID Plus injects facial embeddings directly into attention layers, bypassing prompt ambiguity.",
      image: "https://website.apexneural.cloud/assets/case-study/character-consistency/architecture.png",
      components: [
        { title: "Reference Sheet", description: "Front, side, and 3/4 views" },
        { title: "IP-Adapter FaceID", description: "Facial feature transfer" },
        { title: "OpenPose", description: "Body position control" },
        { title: "Inpainting", description: "Detail fixing in post-prod" }
      ]
    },
    implementation: {
      language: "python",
      code: `from ip_adapter import IPAdapterFaceID

class ConsistencyPipeline:
    def generate(self, prompt: str, reference_face: Image) -> Image:
        # Extract face embedding
        face_embedding = self.face_encoder.encode(reference_face)
        # Inject into generation
        image = self.pipeline(
            prompt=prompt,
            ip_adapter_image_embeds=face_embedding,
            controlnet_conditioning=[self.pose_image]
        )
        return image`,
      explanation: "We 'force' the model to draw the reference face by injecting embeddings directly into cross-attention layers."
    },
    workflow: {
      steps: [
        "Create character reference sheet",
        "Extract face embeddings",
        "Generate with IP-Adapter FaceID",
        "Apply OpenPose for body control",
        "Inpaint details as needed"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/character-consistency/workflow.png"
    },
    results: {
      quote: "Our character 'Alex' now looks like Alex whether he's at a cafe or on Mars. 95%+ similarity across scenes.",
      outcomes: [
        { title: "Consistency", description: "95%+ similarity" },
        { title: "Flexibility", description: "360-degree angles" },
        { title: "Control", description: "Locked outfit and identity" }
      ]
    },
    tags: ["Character Consistency", "IP-Adapter", "FaceID", "LoRA"],
    author: teamMembers.vedant
  },
  {
    id: "ip-adapter-style-transfer",
    title: "IP-Adapter: The Image Prompt Revolution",
    description: "Using IP-Adapter for image-based prompting to transfer styles and objects with pixel-level precision.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&h=1080&fit=crop",
    date: "Aug 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/ip-adapter-style-transfer",
    overview: "Text prompts are often insufficient to describe complex visual styles or specific objects. IP-Adapter solves this by decoupling cross-attention. You can feed an image—a specific chair or Van Gogh painting—into the model as a prompt. It generates new content that mimics the style or content with uncanny accuracy.",
    metrics: [
      { value: "Pixel-Level", label: "Precision" },
      { value: "22MB", label: "Weight" },
      { value: "Style/Object", label: "Versatility" },
      { value: "SD1.5/SDXL", label: "Compatibility" }
    ],
    architecture: {
      description: "IP-Adapter is a plug-and-play module. It uses CLIP Vision to extract embeddings from the reference image, then projects them into the UNet's cross-attention layers, 'hijacking' the text prompt pathway.",
      image: "https://website.apexneural.cloud/assets/case-study/ip-adapter/architecture.png",
      components: [
        { title: "Image Encoder", description: "Pixels to semantic vectors" },
        { title: "Projector", description: "Maps to text embedding dimension" },
        { title: "Decoupled Cross-Attn", description: "Separate image attention" },
        { title: "Weight Slider", description: "Reference influence control" }
      ]
    },
    implementation: {
      language: "python",
      code: `from ip_adapter import IPAdapterPlus

pipeline = IPAdapterPlus(model_path="ip-adapter-plus_sd15.bin")

# Use image as style prompt
output = pipeline.generate(
    prompt="a cozy living room",
    ip_adapter_image=van_gogh_starry_night,
    ip_adapter_scale=0.8  # 80% style influence
)`,
      explanation: "Unlike LoRAs which require fine-tuning, IP-Adapter is plug-and-play with a single 22MB weight file."
    },
    workflow: {
      steps: [
        "Select reference image (style or object)",
        "Load IP-Adapter weights",
        "Set influence scale (0.0-1.0)",
        "Generate with text + image prompt",
        "Fine-tune balance as needed"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/ip-adapter/workflow.png"
    },
    results: {
      quote: "IP-Adapter let us transfer the exact Van Gogh style to our product photos. No fine-tuning required.",
      outcomes: [
        { title: "Precision", description: "Pixel-level style transfer" },
        { title: "Simplicity", description: "22MB plug-and-play" },
        { title: "Versatility", description: "Style or object transfer" }
      ]
    },
    tags: ["IP-Adapter", "Style Transfer", "Image Prompt", "Cross-Attention"],
    author: teamMembers.vedant
  },
  {
    id: "guidelines-vs-traditional-prompt",
    title: "Parlant Guidelines vs Traditional LLM Prompts",
    description: "Comparison of monolithic prompts vs Parlant's modular conditional guidelines for production AI systems.",
    technology: "Prompt Engineering",
    industry: "Enterprise",
    serviceType: "Research & Prototype",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop",
    date: "Jul 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/guidelines-vs-traditional-prompt",
    overview: "Traditional LLM prompts pack all instructions into a single massive prompt, creating unmaintainable systems where critical rules get ignored. This project demonstrates Parlant's structured approach with conditional guidelines and dynamic tools, proving modular agent design dramatically improves reliability.",
    metrics: [
      { value: "95%", label: "Complexity Reduction" },
      { value: "100%", label: "Rule Enforcement" },
      { value: "10x", label: "Maintainability" },
      { value: "70%", label: "Token Reduction" }
    ],
    architecture: {
      description: "The system implements two parallel architectures. Traditional uses a 223-line monolithic prompt. Parlant uses a structured server with conditional guidelines and tool orchestration. Both handle identical queries for comparison.",
      image: "https://website.apexneural.cloud/assets/case-study/guidelines-vs-traditional-llm/architecture.png",
      components: [
        { title: "Traditional Pipeline", description: "Massive prompt → GPT-4 → Unstructured response" },
        { title: "Parlant Agent Server", description: "Conditional guidelines + tool orchestration" },
        { title: "Guideline Engine", description: "Evaluates conditions, triggers tools" },
        { title: "Tool Registry", description: "8 specialized tools" }
      ]
    },
    implementation: {
      language: "python",
      code: `# Traditional: 223-line monolithic prompt
prompt = """You are a financial advisor. Rules:
1. Never give specific stock tips
2. Always recommend diversification
... (220 more lines)
"""

# Parlant: Modular conditional guidelines
@guideline(condition="query.contains('stock tip')")
def no_stock_tips(context):
    return "I cannot provide specific stock tips."

@guideline(condition="query.topic == 'portfolio'")
def recommend_diversification(context):
    return tools.calculate_allocation(context.portfolio)`,
      explanation: "Conditional guidelines trigger only when relevant, reducing token usage by 70% while guaranteeing rule enforcement."
    },
    workflow: {
      steps: [
        "Query arrives at agent",
        "Guideline engine evaluates conditions",
        "Relevant guidelines triggered",
        "Tools executed as needed",
        "Structured response returned"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/guidelines/workflow.png"
    },
    results: {
      quote: "Our 223-line prompt became 15 conditional guidelines. Reliability went from 80% to 100% rule enforcement.",
      outcomes: [
        { title: "Reliability", description: "100% rule enforcement" },
        { title: "Efficiency", description: "70% token reduction" },
        { title: "Maintainability", description: "10x easier updates" }
      ]
    },
    tags: ["Parlant", "Guidelines", "Prompt Engineering", "Agent Design"],
    author: teamMembers.rahul
  },
  {
    id: "context-engineering-workflow",
    title: "Context Engineering Pipeline for AI Research Assistant",
    description: "Multi-agent hub-and-spoke architecture for research with RAG, memory, web search, and tool calling agents.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1920&h=1080&fit=crop",
    date: "Jun 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/context-engineering-workflow",
    overview: "Research tasks require synthesizing information from multiple sources—documents, web, conversation history, and APIs. Traditional single-source systems fall short. This project delivers an intelligent research assistant orchestrating specialized AI agents to gather, evaluate, and synthesize information with comprehensive citations.",
    metrics: [
      { value: "99.2%", label: "Context Relevance" },
      { value: "<8s", label: "Response Time" },
      { value: "4 Types", label: "Source Integration" },
      { value: "98.5%", label: "Citation Accuracy" }
    ],
    architecture: {
      description: "The system employs a Hub-and-Spoke multi-agent architecture powered by CrewAI Flows. A central ResearchAssistantFlow orchestrates RAG, Memory, Web Search, and Tool Calling agents in parallel.",
      image: "https://website.apexneural.cloud/assets/case-study/context-ramya/architecture.png",
      components: [
        { title: "ResearchAssistantFlow", description: "Central orchestrator" },
        { title: "RAG Agent", description: "TensorLake + Voyage + Qdrant" },
        { title: "Memory Agent", description: "Zep Cloud for conversation history" },
        { title: "Web Search Agent", description: "Firecrawl for real-time info" }
      ]
    },
    implementation: {
      language: "python",
      code: `class ResearchAssistantFlow(Flow):
    @step(parallel=True)
    async def gather_context(self, query: str):
        # Run agents in parallel
        rag_result = await self.rag_agent.search(query)
        memory_result = await self.memory_agent.retrieve(query)
        web_result = await self.web_agent.search(query)
        tool_result = await self.tool_agent.execute(query)
        return [rag_result, memory_result, web_result, tool_result]
    
    @step
    async def synthesize(self, contexts: List) -> Response:
        evaluated = await self.evaluator.filter(contexts)
        return await self.synthesizer.generate(evaluated)`,
      explanation: "Parallel agent execution followed by sequential evaluation and synthesis ensures comprehensive yet coherent responses."
    },
    workflow: {
      steps: [
        "User submits research query",
        "Agents gather context in parallel",
        "Evaluator filters relevance",
        "Synthesizer generates response",
        "Citations attached"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/context-ramya/workflow.png"
    },
    results: {
      quote: "The context engineering pipeline synthesizes from 4 sources in under 8 seconds with 98.5% citation accuracy.",
      outcomes: [
        { title: "Relevance", description: "99.2% context quality" },
        { title: "Speed", description: "<8s response time" },
        { title: "Sources", description: "4 integrated types" }
      ]
    },
    tags: ["Context Engineering", "CrewAI", "Multi-Agent", "RAG"],
    author: teamMembers.hansika
  },
  {
    id: "multiplatform-deep-researcher",
    title: "Multiplatform Deep Researcher using MCP and Multi-Agent Orchestration",
    description: "MCP-powered multi-agent system for parallel research across Instagram, LinkedIn, YouTube, X, and the open web.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&h=1080&fit=crop",
    date: "May 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/multiplatform-deep-researcher",
    overview: "Modern research requires extracting information across multiple platforms—social media, video, and the open web. Manual research is slow and inconsistent. The Multiplatform Deep Researcher uses an MCP-powered, multi-agent architecture for parallel, platform-specific deep research.",
    metrics: [
      { value: "5+", label: "Platforms" },
      { value: "Async", label: "Parallelism" },
      { value: "Web + Social", label: "Data Sources" },
      { value: "80%+", label: "Effort Reduced" }
    ],
    architecture: {
      description: "The system follows a multi-agent, MCP-centric architecture. CrewAI orchestrates specialized research agents for each platform. Agents interact with Bright Data's Web MCP server for reliable web-scale data access.",
      image: "https://website.apexneural.cloud/assets/case-study/multiplatform-researcher/architecture.jpg",
      components: [
        { title: "Streamlit UI", description: "Interactive query interface" },
        { title: "CrewAI Orchestrator", description: "Agent lifecycle management" },
        { title: "Platform Agents", description: "Instagram, LinkedIn, YouTube, X, Web" },
        { title: "Bright Data MCP", description: "Web scraping and proxy rotation" }
      ]
    },
    implementation: {
      language: "python",
      code: `class MultiplatformResearcher(Crew):
    def __init__(self):
        self.agents = {
            "instagram": InstagramAgent(mcp=bright_data),
            "linkedin": LinkedInAgent(mcp=bright_data),
            "youtube": YouTubeAgent(mcp=bright_data),
            "twitter": XAgent(mcp=bright_data),
            "web": WebAgent(mcp=bright_data)
        }
    
    async def research(self, query: str, platforms: List[str]):
        tasks = [self.agents[p].research(query) for p in platforms]
        results = await asyncio.gather(*tasks)
        return self.synthesize(results)`,
      explanation: "Each platform has a dedicated agent that understands its specific data format and access patterns."
    },
    workflow: {
      steps: [
        "User defines research query",
        "Select target platforms",
        "Agents research in parallel",
        "MCP handles web access",
        "Results aggregated and displayed"
      ],
      image: "https://website.apexneural.cloud/assets/case-study/multiplatform-researcher/workflow.png"
    },
    results: {
      quote: "What used to take a research team days now completes in minutes. 80%+ reduction in manual effort.",
      outcomes: [
        { title: "Coverage", description: "5+ platforms" },
        { title: "Speed", description: "Async parallel research" },
        { title: "Efficiency", description: "80%+ effort reduction" }
      ]
    },
    tags: ["MCP", "Multi-Agent", "Bright Data", "Research"],
    author: teamMembers.hansika
  }
];

// Helper function to get case study by ID
export function getCaseStudyById(id: string): CaseStudyDetail | undefined {
  return caseStudyDetails.find(cs => cs.id === id);
}
