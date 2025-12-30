export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  linkedIn: string;
  projectsDelivered: string;
  yearsExperience: string;
}

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

export const authors: Author[] = [
  {
    id: "hansika",
    slug: "hansika",
    name: "Hansika",
    role: "AI Solutions Architect",
    company: "Apex Neural",
    avatar: teamAvatars.hansika,
    bio: "Hansika specializes in designing and implementing intelligent AI systems, from agentic platforms to RAG pipelines. She leads complex enterprise deployments and has architected solutions for data labeling, document processing, and knowledge management.",
    linkedIn: "https://www.linkedin.com/in/hansika/",
    projectsDelivered: "10+",
    yearsExperience: "6yr",
  },
  {
    id: "parmeet-singh",
    slug: "parmeet-singh",
    name: "Parmeet Singh",
    role: "Lead System Architect",
    company: "Apex Neural",
    avatar: teamAvatars.parmeet,
    bio: "Parmeet specializes in building AI-powered automation systems and full-stack platforms. He architected the Content Phase platform from concept to production deployment.",
    linkedIn: "https://www.linkedin.com/in/parmeettalwar/",
    projectsDelivered: "15+",
    yearsExperience: "8yr",
  },
  {
    id: "rahul",
    slug: "rahul",
    name: "Rahul",
    role: "Senior AI Engineer",
    company: "Apex Neural",
    avatar: teamAvatars.rahul,
    bio: "Rahul is a versatile AI engineer with expertise in agentic systems, conversational AI, and full-stack development. He has delivered numerous projects spanning code automation, voice agents, and deep research platforms.",
    linkedIn: "https://www.linkedin.com/in/rahul/",
    projectsDelivered: "20+",
    yearsExperience: "7yr",
  },
  {
    id: "kushal-kumar",
    slug: "kushal-kumar",
    name: "Kushal Kumar",
    role: "Product Engineer",
    company: "Apex Neural",
    avatar: teamAvatars.kushal,
    bio: "Kushal focuses on building consumer-facing AI products with emphasis on user experience. He led the development of Kutum, the AI-powered family information platform.",
    linkedIn: "https://www.linkedin.com/in/kushal-kumar/",
    projectsDelivered: "8+",
    yearsExperience: "5yr",
  },
  {
    id: "sunny",
    slug: "sunny",
    name: "Sunny",
    role: "Machine Learning Engineer",
    company: "Apex Neural",
    avatar: teamAvatars.sunny,
    bio: "Sunny specializes in machine learning applications for healthcare and pharmaceutical industries. His work on toxicity prediction has accelerated drug discovery processes for multiple clients.",
    linkedIn: "https://www.linkedin.com/in/sunny/",
    projectsDelivered: "6+",
    yearsExperience: "5yr",
  },
  {
    id: "akshay",
    slug: "akshay",
    name: "Akshay",
    role: "AI Product Developer",
    company: "Apex Neural",
    avatar: teamAvatars.akshay,
    bio: "Akshay builds end-to-end AI products with focus on recruitment and HR automation. He developed Prism, the AI-powered recruitment platform that streamlines hiring workflows.",
    linkedIn: "https://www.linkedin.com/in/akshay/",
    projectsDelivered: "5+",
    yearsExperience: "4yr",
  },
  {
    id: "vedant-pai",
    slug: "vedant-pai",
    name: "Vedant Pai",
    role: "Generative AI Specialist",
    company: "Apex Neural",
    avatar: teamAvatars.vedant,
    bio: "Vedant is an expert in generative AI, specializing in video generation, image synthesis, and advanced prompting techniques. He leads innovation in cross-modal content generation.",
    linkedIn: "https://www.linkedin.com/in/vedant-pai/",
    projectsDelivered: "12+",
    yearsExperience: "6yr",
  },
  {
    id: "shubham-rathod",
    slug: "shubham-rathod",
    name: "Shubham Rathod",
    role: "Computer Vision Engineer",
    company: "Apex Neural",
    avatar: teamAvatars.shubham,
    bio: "Shubham specializes in computer vision and data extraction systems. He built VolleyVision for real-time sports analytics and ScaleScrape for large-scale visual data harvesting.",
    linkedIn: "https://www.linkedin.com/in/shubham-rathod/",
    projectsDelivered: "7+",
    yearsExperience: "5yr",
  },
  {
    id: "ramya",
    slug: "ramya",
    name: "Ramya",
    role: "AI Solutions Engineer",
    company: "Apex Neural",
    avatar: teamAvatars.ramya,
    bio: "Ramya builds intelligent automation solutions for insurance and enterprise clients. She developed RecoveryCopilot for insurance audit automation and various documentation systems.",
    linkedIn: "https://www.linkedin.com/in/ramya/",
    projectsDelivered: "8+",
    yearsExperience: "5yr",
  },
  {
    id: "likhith-masura",
    slug: "likhith-masura",
    name: "Likhith Masura",
    role: "Platform Engineer",
    company: "Apex Neural",
    avatar: teamAvatars.likhith,
    bio: "Likhith focuses on building scalable SaaS platforms and infrastructure. He developed the DBaaS platform ecosystem including e-books, e-courses, and the core database management system.",
    linkedIn: "https://www.linkedin.com/in/likhith-masura/",
    projectsDelivered: "10+",
    yearsExperience: "6yr",
  },
];

// Helper function to get author by slug
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

// Helper function to get author by name (for matching case study author names)
export function getAuthorByName(name: string): Author | undefined {
  return authors.find((author) => 
    author.name.toLowerCase() === name.toLowerCase() ||
    author.name.toLowerCase().includes(name.toLowerCase()) ||
    name.toLowerCase().includes(author.name.split(' ')[0].toLowerCase())
  );
}
