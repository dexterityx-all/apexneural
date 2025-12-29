export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  technology: string;
  industry: string;
  serviceType: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  externalUrl: string;
}

export const technologies = [
  "All Technologies",
  "Agentic AI",
  "AI Automation",
  "Machine Learning",
  "Computer Vision",
  "Generative AI",
  "Multimodal AI",
  "RAG & Retrieval",
  "Prompt Engineering",
] as const;

export const industries = [
  "All Industries",
  "Healthcare",
  "Sports Tech",
  "InsurTech",
  "LegalTech",
  "FinTech",
  "EdTech",
  "Content & Media",
  "Family & Consumer",
  "Enterprise",
  "Research",
] as const;

export const serviceTypes = [
  "All Services",
  "Product Build",
  "Platform Development",
  "AI Agent Development",
  "Integration & API",
  "Data Engineering",
  "Research & Prototype",
  "Infrastructure",
] as const;

export type Technology = typeof technologies[number];
export type Industry = typeof industries[number];
export type ServiceType = typeof serviceTypes[number];

// Team member avatars with correct URLs from the website
const teamAvatars = {
  hansika: "https://website.apexneural.cloud/assets/img/team/hansika.jpeg",
  parmeet: "https://website.apexneural.cloud/assets/img/team/Parmeet.jpg",
  kushal: "https://website.apexneural.cloud/assets/img/team/Kushal.jpg",
  rahul: "https://website.apexneural.cloud/assets/img/team/Rahul.jpg",
  sunny: "https://website.apexneural.cloud/assets/img/team/Sunny.jpg",
  akshay: "https://website.apexneural.cloud/assets/img/team/Akshay.png",
  vedant: "https://website.apexneural.cloud/assets/img/team/Vedant.jpg",
  shubham: "https://website.apexneural.cloud/assets/img/team/Shubham.png",
  ramya: "https://website.apexneural.cloud/assets/img/team/ramya.jpeg",
  likhith: "https://website.apexneural.cloud/assets/img/team/Likhith.jpg",
};

// Case study card images - using high-quality Unsplash images
const caseStudyImages = {
  agenticAI: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  socialMedia: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
  webCrawl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
  codeReview: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  learning: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
  legal: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
  automation: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
  memory: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
  conversation: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
  healthcare: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop",
  family: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=500&fit=crop",
  recruitment: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
  voice: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop",
  document: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=500&fit=crop",
  graph: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  video: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
  sports: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=500&fit=crop",
  legalTech: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
  insurance: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
  docs: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=500&fit=crop",
  assistant: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=500&fit=crop",
  crossModal: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
  notebook: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
  finance: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
  research: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop",
  nudges: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
  ocr: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
  saas: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  ebooks: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop",
  courses: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
  database: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
  sportsAI: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=500&fit=crop",
  privateRAG: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
  researchFlow: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
  scraping: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
  linkedin: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=500&fit=crop",
  validation: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
  payment: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  mcp: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
  toon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
  gpu: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=500&fit=crop",
  comfyui: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=500&fit=crop",
  character: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=500&fit=crop",
  ipAdapter: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&h=500&fit=crop",
  prompting: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=500&fit=crop",
  context: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=500&fit=crop",
  multiplatform: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
};

export const caseStudies: CaseStudy[] = [
  // Case Study 1
  {
    id: "agentic-ai-labeling",
    title: "AgenticAI Data Labeling Platform",
    description: "Built an autonomous AI agent system that handles complex data labeling tasks with human-in-the-loop validation, reducing labeling time by 80%.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "8 min read",
    image: caseStudyImages.agenticAI,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/agentic-ai-labeling"
  },
  // Case Study 2
  {
    id: "content-phase-ai-platform",
    title: "Content Phase - AI Social Media Manager",
    description: "AI-powered social media management platform that automates content creation, scheduling, and engagement optimization.",
    technology: "AI Automation",
    industry: "Content & Media",
    serviceType: "Product Build",
    readTime: "6 min read",
    image: caseStudyImages.socialMedia,
    author: { name: "Parmeet Singh", avatar: teamAvatars.parmeet },
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/content-phase-ai-platform"
  },
  // Case Study 3
  {
    id: "firecrawl-agentic-rag",
    title: "FireCrawl Agentic RAG Platform",
    description: "Intelligent web crawling system with agentic RAG capabilities for automated data extraction and knowledge base creation.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "7 min read",
    image: caseStudyImages.webCrawl,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/firecrawl-agentic-rag"
  },
  // Case Study 4
  {
    id: "code-improvement-platform",
    title: "Code Improvement & E2E Testing Platform",
    description: "AI-powered platform for automated code review, improvement suggestions, and end-to-end testing generation.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "8 min read",
    image: caseStudyImages.codeReview,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/code-improvement-platform"
  },
  // Case Study 5
  {
    id: "triverse-academy",
    title: "Triverse Academy - Full-Stack Learning Platform",
    description: "Comprehensive learning management system with AI-powered personalization and interactive course delivery.",
    technology: "AI Automation",
    industry: "EdTech",
    serviceType: "Product Build",
    readTime: "9 min read",
    image: caseStudyImages.learning,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Dec 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/triverse-academy"
  },
  // Case Study 6
  {
    id: "paralegal-ai-assistant",
    title: "Paralegal AI Assistant",
    description: "Intelligent assistant for paralegals that automates document drafting, legal research, and case management workflows.",
    technology: "Agentic AI",
    industry: "LegalTech",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: caseStudyImages.legal,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/paralegal-ai-assistant"
  },
  // Case Study 7
  {
    id: "motia-content-creation",
    title: "Motia Social Media Content Automation",
    description: "Workflow automation platform for social media content creation using AI-powered generation and scheduling.",
    technology: "AI Automation",
    industry: "Content & Media",
    serviceType: "Product Build",
    readTime: "6 min read",
    image: caseStudyImages.automation,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/motia-content-creation"
  },
  // Case Study 8
  {
    id: "zep-memory-assistant",
    title: "Zep Memory Assistant",
    description: "Conversational AI with persistent memory capabilities for enhanced context retention and personalized interactions.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "7 min read",
    image: caseStudyImages.memory,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/zep-memory-assistant"
  },
  // Case Study 9
  {
    id: "parlant-conversational-agent",
    title: "Parlant AI Conversational Agent",
    description: "Advanced conversational AI agent with natural language understanding and multi-turn dialogue management.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "8 min read",
    image: caseStudyImages.conversation,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/parlant-conversational-agent"
  },
  // Case Study 10
  {
    id: "galactic-toxicity-intelligence-engine",
    title: "Galactic Therapeutics - Toxicity Prediction",
    description: "Machine learning platform for pharmaceutical toxicity prediction, accelerating drug discovery by identifying potential issues early.",
    technology: "Machine Learning",
    industry: "Healthcare",
    serviceType: "Research & Prototype",
    readTime: "12 min read",
    image: caseStudyImages.healthcare,
    author: { name: "Sunny", avatar: teamAvatars.sunny },
    date: "Nov 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/galactic-toxicity-intelligence-engine"
  },
  // Case Study 11
  {
    id: "kutum-family-information-os",
    title: "Kutum - Family Information OS",
    description: "AI-powered family management platform that helps coordinate schedules, manage household tasks, and strengthen family connections.",
    technology: "AI Automation",
    industry: "Family & Consumer",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: caseStudyImages.family,
    author: { name: "Kushal Kumar", avatar: teamAvatars.kushal },
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/kutum-family-information-os"
  },
  // Case Study 12
  {
    id: "prism-recruitment-automation",
    title: "Prism - Recruitment Automation",
    description: "End-to-end recruitment automation platform that uses AI to screen candidates, schedule interviews, and provide hiring recommendations.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Product Build",
    readTime: "8 min read",
    image: caseStudyImages.recruitment,
    author: { name: "Akshay", avatar: teamAvatars.akshay },
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/prism-recruitment-automation"
  },
  // Case Study 13
  {
    id: "real-time-rag-voice-agent",
    title: "Real-Time Voice Agent with RAG",
    description: "Voice-enabled AI agent with real-time retrieval augmented generation for intelligent conversational assistance.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "9 min read",
    image: caseStudyImages.voice,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/real-time-rag-voice-agent"
  },
  // Case Study 14
  {
    id: "groundx-document-processing",
    title: "Document Processing Pipeline with Ground X",
    description: "Enterprise document processing system with advanced parsing, extraction, and intelligent indexing capabilities.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "Data Engineering",
    readTime: "8 min read",
    image: caseStudyImages.document,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/groundx-document-processing"
  },
  // Case Study 15
  {
    id: "graphiti-mcp-demo",
    title: "Graphiti MCP: Persistent Memory",
    description: "Knowledge graph-based persistent memory system for AI agents with temporal awareness and relationship tracking.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "Research & Prototype",
    readTime: "10 min read",
    image: caseStudyImages.graph,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/graphiti-mcp-demo"
  },
  // Case Study 16
  {
    id: "veo3-ai-video-production",
    title: "High-Fidelity AI Video with Veo 3",
    description: "Production-quality AI video generation using Google's Veo 3 for marketing content and creative productions.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: caseStudyImages.video,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Oct 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/veo3-ai-video-production"
  },
  // Case Study 17
  {
    id: "volleyvision-sports-ai",
    title: "VolleyVision - Sports Analytics Platform",
    description: "Computer vision system for real-time volleyball match analysis, tracking player movements, ball trajectory, and generating tactical insights.",
    technology: "Computer Vision",
    industry: "Sports Tech",
    serviceType: "Product Build",
    readTime: "10 min read",
    image: caseStudyImages.sports,
    author: { name: "Shubham Rathod", avatar: teamAvatars.shubham },
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/volleyvision-sports-ai"
  },
  // Case Study 18
  {
    id: "legalops-hub-malaysia",
    title: "LegalOps Hub - Malaysian Legal AI",
    description: "Agentic AI platform for Malaysian legal professionals, automating document review, case research, and compliance checking.",
    technology: "Agentic AI",
    industry: "LegalTech",
    serviceType: "AI Agent Development",
    readTime: "11 min read",
    image: caseStudyImages.legalTech,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/legalops-hub-malaysia"
  },
  // Case Study 19
  {
    id: "recovery-copilot",
    title: "RecoveryCopilot - Insurance Audit AI",
    description: "AI-powered insurance claims auditing system that identifies recovery opportunities and automates the audit workflow.",
    technology: "Agentic AI",
    industry: "InsurTech",
    serviceType: "AI Agent Development",
    readTime: "9 min read",
    image: caseStudyImages.insurance,
    author: { name: "Ramya", avatar: teamAvatars.ramya },
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/recovery-copilot"
  },
  // Case Study 20
  {
    id: "documentation-writer-flow",
    title: "Hybrid AI Documentation Generator",
    description: "Automated documentation generation system using hybrid AI approach for technical writing and API documentation.",
    technology: "Generative AI",
    industry: "Enterprise",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: caseStudyImages.docs,
    author: { name: "Ramya", avatar: teamAvatars.ramya },
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/documentation-writer-flow"
  },
  // Case Study 21
  {
    id: "ultimate-ai-assistant-using-mcp",
    title: "Ultimate AI Assistant Using MCP",
    description: "Comprehensive AI assistant leveraging Model Context Protocol for enhanced tool use and multi-system integration.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "AI Agent Development",
    readTime: "10 min read",
    image: caseStudyImages.assistant,
    author: { name: "Ramya", avatar: teamAvatars.ramya },
    date: "Sep 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/ultimate-ai-assistant-using-mcp"
  },
  // Case Study 22
  {
    id: "aitv-cross-modal-generation",
    title: "AITV - Cross-Modal Generation",
    description: "Multi-modal AI platform for generating video content from text, images, and audio with seamless cross-modal synthesis.",
    technology: "Multimodal AI",
    industry: "Content & Media",
    serviceType: "Product Build",
    readTime: "8 min read",
    image: caseStudyImages.crossModal,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/aitv-cross-modal-generation"
  },
  // Case Study 23
  {
    id: "notebook-lm-clone",
    title: "NotebookLM Clone",
    description: "Open-source implementation of Google's NotebookLM with enhanced features for document analysis and synthesis.",
    technology: "RAG & Retrieval",
    industry: "Research",
    serviceType: "Product Build",
    readTime: "9 min read",
    image: caseStudyImages.notebook,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/notebook-lm-clone"
  },
  // Case Study 24
  {
    id: "stock-portfolio-analysis-agent",
    title: "Stock Portfolio Analysis Agent",
    description: "AI agent for portfolio analysis with real-time market data integration and investment recommendations.",
    technology: "Agentic AI",
    industry: "FinTech",
    serviceType: "AI Agent Development",
    readTime: "10 min read",
    image: caseStudyImages.finance,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/stock-portfolio-analysis-agent"
  },
  // Case Study 25
  {
    id: "agentic-deep-researcher",
    title: "Agentic Deep Researcher",
    description: "Autonomous research agent that conducts comprehensive literature reviews and synthesizes findings across domains.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "AI Agent Development",
    readTime: "11 min read",
    image: caseStudyImages.research,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/agentic-deep-researcher"
  },
  // Case Study 26
  {
    id: "kutum-ai-nudges-engine",
    title: "Kutum AI Nudges",
    description: "Behavioral nudge engine for family wellness using AI to provide timely, personalized recommendations.",
    technology: "Machine Learning",
    industry: "Family & Consumer",
    serviceType: "Product Build",
    readTime: "6 min read",
    image: caseStudyImages.nudges,
    author: { name: "Kushal Kumar", avatar: teamAvatars.kushal },
    date: "Aug 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/kutum-ai-nudges-engine"
  },
  // Case Study 27
  {
    id: "kutum-ocr-document-processing",
    title: "Kutum OCR",
    description: "Advanced OCR system for family document digitization with intelligent categorization and search.",
    technology: "Computer Vision",
    industry: "Family & Consumer",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: caseStudyImages.ocr,
    author: { name: "Kushal Kumar", avatar: teamAvatars.kushal },
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/kutum-ocr-document-processing"
  },
  // Case Study 28
  {
    id: "apex-saas-framework",
    title: "Apex SaaS Framework",
    description: "Comprehensive SaaS boilerplate with built-in AI capabilities, enabling rapid development of intelligent applications.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Infrastructure",
    readTime: "9 min read",
    image: caseStudyImages.saas,
    author: { name: "Likhith Masura", avatar: teamAvatars.likhith },
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/apex-saas-framework"
  },
  // Case Study 29
  {
    id: "dbaas-e-books",
    title: "DBaaS E-Books",
    description: "Digital publishing platform with AI-powered content generation and distribution for educational e-books.",
    technology: "Generative AI",
    industry: "EdTech",
    serviceType: "Product Build",
    readTime: "6 min read",
    image: caseStudyImages.ebooks,
    author: { name: "Likhith Masura", avatar: teamAvatars.likhith },
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/dbaas-e-books"
  },
  // Case Study 30
  {
    id: "dbaas-e-courses",
    title: "DBaaS E-Courses",
    description: "AI-enhanced course creation platform with automated curriculum generation and learner analytics.",
    technology: "AI Automation",
    industry: "EdTech",
    serviceType: "Product Build",
    readTime: "7 min read",
    image: caseStudyImages.courses,
    author: { name: "Likhith Masura", avatar: teamAvatars.likhith },
    date: "Jul 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/dbaas-e-courses"
  },
  // Case Study 31
  {
    id: "dbaas-platform",
    title: "DBaaS Platform",
    description: "Enterprise-grade database management platform with automated scaling, monitoring, and AI-powered query optimization.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Infrastructure",
    readTime: "10 min read",
    image: caseStudyImages.database,
    author: { name: "Likhith Masura", avatar: teamAvatars.likhith },
    date: "Jun 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/dbaas-platform"
  },
  // Case Study 32
  {
    id: "champions-gen-sports-ai",
    title: "Champions Gen - Sports Intelligence",
    description: "Machine learning platform for predictive sports analytics, enabling teams to optimize player performance and game strategy.",
    technology: "Machine Learning",
    industry: "Sports Tech",
    serviceType: "Platform Development",
    readTime: "7 min read",
    image: caseStudyImages.sportsAI,
    author: { name: "Parmeet Singh", avatar: teamAvatars.parmeet },
    date: "Jun 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/champions-gen-sports-ai"
  },
  // Case Study 33
  {
    id: "private-agentic-rag-api",
    title: "100% Private Agentic RAG API",
    description: "Fully private, on-premise RAG system with agentic capabilities for sensitive enterprise data.",
    technology: "RAG & Retrieval",
    industry: "Enterprise",
    serviceType: "Platform Development",
    readTime: "11 min read",
    image: caseStudyImages.privateRAG,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Jun 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/private-agentic-rag-api"
  },
  // Case Study 34
  {
    id: "researchflow-mcp",
    title: "ResearchFlow MCP",
    description: "Research workflow automation using Model Context Protocol for seamless tool integration and data management.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "Platform Development",
    readTime: "9 min read",
    image: caseStudyImages.researchFlow,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "May 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/researchflow-mcp"
  },
  // Case Study 35
  {
    id: "scalescrape-visual-extraction",
    title: "ScaleScrape - Visual Data Harvesting",
    description: "Large-scale web scraping platform with visual extraction capabilities for structured data collection.",
    technology: "Computer Vision",
    industry: "Enterprise",
    serviceType: "Data Engineering",
    readTime: "8 min read",
    image: caseStudyImages.scraping,
    author: { name: "Shubham Rathod", avatar: teamAvatars.shubham },
    date: "May 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/scalescrape-visual-extraction"
  },
  // Case Study 36
  {
    id: "linkedin-job-scraper-apify",
    title: "LinkedIn Job Scraper",
    description: "Automated LinkedIn job data extraction system using Apify for recruitment analytics and market research.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Data Engineering",
    readTime: "6 min read",
    image: caseStudyImages.linkedin,
    author: { name: "Shubham Rathod", avatar: teamAvatars.shubham },
    date: "May 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/linkedin-job-scraper-apify"
  },
  // Case Study 37
  {
    id: "pydantic-schema-validation",
    title: "Industrial Data Validation with Pydantic",
    description: "Enterprise-grade data validation framework using Pydantic for ensuring data quality in industrial applications.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Integration & API",
    readTime: "7 min read",
    image: caseStudyImages.validation,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Apr 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/pydantic-schema-validation"
  },
  // Case Study 38
  {
    id: "payment-api-integration",
    title: "Secure Payment API Integration",
    description: "End-to-end secure payment gateway integration with fraud detection and compliance features.",
    technology: "AI Automation",
    industry: "FinTech",
    serviceType: "Integration & API",
    readTime: "8 min read",
    image: caseStudyImages.payment,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Apr 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/payment-api-integration"
  },
  // Case Study 39
  {
    id: "claude-mcp-integration-guide",
    title: "Claude MCP Guide",
    description: "Comprehensive integration guide for Claude's Model Context Protocol with best practices and implementation patterns.",
    technology: "Agentic AI",
    industry: "Enterprise",
    serviceType: "Research & Prototype",
    readTime: "12 min read",
    image: caseStudyImages.mcp,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Apr 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/claude-mcp-integration-guide"
  },
  // Case Study 40
  {
    id: "toon-json-prompting",
    title: "Advanced Prompting: Toon Styles & JSON",
    description: "Advanced prompt engineering techniques for cartoon style generation with structured JSON output control.",
    technology: "Prompt Engineering",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "6 min read",
    image: caseStudyImages.toon,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Mar 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/toon-json-prompting"
  },
  // Case Study 41
  {
    id: "runpod-serverless-gpu",
    title: "RunPod & Serverless GPU",
    description: "Serverless GPU infrastructure setup using RunPod for scalable AI model deployment and inference.",
    technology: "AI Automation",
    industry: "Enterprise",
    serviceType: "Infrastructure",
    readTime: "8 min read",
    image: caseStudyImages.gpu,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Mar 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/runpod-serverless-gpu"
  },
  // Case Study 42
  {
    id: "comfyui-advanced-workflows",
    title: "ComfyUI: Modular Image Generation",
    description: "Advanced ComfyUI workflows for modular image generation with custom nodes and pipeline optimization.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "9 min read",
    image: caseStudyImages.comfyui,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Feb 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/comfyui-advanced-workflows"
  },
  // Case Study 43
  {
    id: "character-consistency-genai",
    title: "Mastering Character Consistency in GenAI",
    description: "Techniques for maintaining character consistency across generated images using advanced diffusion models.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "10 min read",
    image: caseStudyImages.character,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Feb 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/character-consistency-genai"
  },
  // Case Study 44
  {
    id: "ip-adapter-style-transfer",
    title: "IP-Adapter: Image Prompt Revolution",
    description: "Implementation of IP-Adapter for image-guided generation with style transfer and composition control.",
    technology: "Generative AI",
    industry: "Content & Media",
    serviceType: "Research & Prototype",
    readTime: "8 min read",
    image: caseStudyImages.ipAdapter,
    author: { name: "Vedant Pai", avatar: teamAvatars.vedant },
    date: "Jan 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/ip-adapter-style-transfer"
  },
  // Case Study 45
  {
    id: "guidelines-vs-traditional-prompt",
    title: "Parlant Guidelines vs Traditional LLM Prompts",
    description: "Comparative analysis of Parlant's guideline-based approach versus traditional prompt engineering methods.",
    technology: "Prompt Engineering",
    industry: "Enterprise",
    serviceType: "Research & Prototype",
    readTime: "7 min read",
    image: caseStudyImages.prompting,
    author: { name: "Rahul", avatar: teamAvatars.rahul },
    date: "Jan 2024",
    externalUrl: "https://website.apexneural.cloud/case-studies/guidelines-vs-traditional-prompt"
  },
  // Case Study 46
  {
    id: "context-engineering-workflow",
    title: "Context Engineering Pipeline",
    description: "Advanced context engineering techniques for optimizing LLM performance with structured context management.",
    technology: "Prompt Engineering",
    industry: "Enterprise",
    serviceType: "Research & Prototype",
    readTime: "9 min read",
    image: caseStudyImages.context,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Dec 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/context-engineering-workflow"
  },
  // Case Study 47
  {
    id: "multiplatform-deep-researcher",
    title: "Multiplatform Deep Researcher",
    description: "Cross-platform research agent that aggregates and synthesizes information from multiple sources and APIs.",
    technology: "Agentic AI",
    industry: "Research",
    serviceType: "AI Agent Development",
    readTime: "11 min read",
    image: caseStudyImages.multiplatform,
    author: { name: "Hansika", avatar: teamAvatars.hansika },
    date: "Dec 2023",
    externalUrl: "https://website.apexneural.cloud/case-studies/multiplatform-deep-researcher"
  },
];
