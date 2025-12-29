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
    projectsDelivered: "50+",
    yearsExperience: "15yr",
    linkedIn: "https://linkedin.com/in/hansika-vardini-mula-918ba3351"
  },
  parmeet: {
    name: "Parmeet Singh",
    avatar: "https://website.apexneural.cloud/assets/img/team/Parmeet.jpg",
    role: "AI Solutions Architect",
    company: "ApexNeural AI Solutions",
    bio: "Expert in AI-powered content systems and social media automation. Specializes in building scalable platforms that leverage generative AI for content creation and distribution.",
    projectsDelivered: "40+",
    yearsExperience: "12yr",
    linkedIn: "https://linkedin.com/in/parmeet-singh"
  },
  kushal: {
    name: "Kushal Kumar",
    avatar: "https://website.apexneural.cloud/assets/img/team/Kushal.jpg",
    role: "Full Stack AI Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Building intelligent consumer applications that bring AI capabilities to everyday life. Expert in mobile and web platforms with integrated AI features.",
    projectsDelivered: "35+",
    yearsExperience: "10yr",
    linkedIn: "https://linkedin.com/in/kushal-kumar"
  },
  rahul: {
    name: "Rahul",
    avatar: "https://website.apexneural.cloud/assets/img/team/Rahul.jpg",
    role: "AI Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Focused on building conversational AI and voice-enabled systems. Expert in LLM integration, RAG pipelines, and real-time AI applications.",
    projectsDelivered: "45+",
    yearsExperience: "8yr",
    linkedIn: "https://linkedin.com/in/rahul"
  },
  sunny: {
    name: "Sunny",
    avatar: "https://website.apexneural.cloud/assets/img/team/Sunny.jpg",
    role: "ML Research Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Specialized in machine learning for healthcare and pharmaceutical applications. Expert in toxicity prediction, drug discovery, and clinical AI systems.",
    projectsDelivered: "30+",
    yearsExperience: "10yr",
    linkedIn: "https://linkedin.com/in/sunny"
  },
  akshay: {
    name: "Akshay",
    avatar: "https://website.apexneural.cloud/assets/img/team/Akshay.png",
    role: "AI Product Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Building AI-powered HR and recruitment platforms. Expert in NLP, candidate matching algorithms, and workflow automation.",
    projectsDelivered: "35+",
    yearsExperience: "9yr",
    linkedIn: "https://linkedin.com/in/akshay"
  },
  vedant: {
    name: "Vedant Pai",
    avatar: "https://website.apexneural.cloud/assets/img/team/Vedant.jpg",
    role: "Generative AI Specialist",
    company: "ApexNeural AI Solutions",
    bio: "Expert in video generation and multimodal AI. Specializes in cutting-edge generative models for creative applications.",
    projectsDelivered: "25+",
    yearsExperience: "7yr",
    linkedIn: "https://linkedin.com/in/vedant-pai"
  },
  shubham: {
    name: "Shubham Rathod",
    avatar: "https://website.apexneural.cloud/assets/img/team/Shubham.png",
    role: "Computer Vision Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Specialized in sports analytics and real-time video processing. Expert in object detection, tracking, and performance analysis systems.",
    projectsDelivered: "30+",
    yearsExperience: "8yr",
    linkedIn: "https://linkedin.com/in/shubham-rathod"
  },
  ramya: {
    name: "Ramya",
    avatar: "https://website.apexneural.cloud/assets/img/team/ramya.jpeg",
    role: "AI Systems Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Building enterprise AI solutions for healthcare and insurance. Expert in claims processing, audit automation, and document intelligence.",
    projectsDelivered: "40+",
    yearsExperience: "11yr",
    linkedIn: "https://linkedin.com/in/ramya"
  },
  likhith: {
    name: "Likhith Masura",
    avatar: "https://website.apexneural.cloud/assets/img/team/Likhith.jpg",
    role: "Platform Engineer",
    company: "ApexNeural AI Solutions",
    bio: "Expert in building scalable SaaS platforms and infrastructure. Specialized in database systems, cloud architecture, and developer tools.",
    projectsDelivered: "45+",
    yearsExperience: "12yr",
    linkedIn: "https://linkedin.com/in/likhith-masura"
  }
};

// First case study with full content (template for all 47)
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
workflow.add_node('supervisor', supervisor_node)
# ...`,
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
  }
];

// Helper function to get case study by ID
export function getCaseStudyById(id: string): CaseStudyDetail | undefined {
  return caseStudyDetails.find(cs => cs.id === id);
}
