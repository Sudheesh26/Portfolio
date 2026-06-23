export type Experience = {
  company: string;
  client?: string;
  role: string;
  label: string;
  period: string;
  stack: string[];
  bullets: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "HCLTech",
    role: "Cloud & AI Engineer",
    label: "Cloud, Automation & AI Agent Engineering",
    period: "2021 – Present",
    stack: ["Azure", "GCP", "SCVMM", "Python", "LangGraph", "RAG", "FAISS", "Postgres", "Azure DevOps", "Jira", "Filenet", "MCP Client"],
    bullets: [
      "Cloud engineer for Unilever (Azure/GCP): provisioned VMs, managed load balancers & failover clusters, improved uptime 15% via hypervisor tuning.",
      "Automation engineer for Motorists Insurance: Python-based document workflows using Filenet extraction and Excel validation pipelines.",
      "AI Agent engineer (Internal HCL): built an AI Agent for Jira & Azure DevOps with LangGraph, MCP Client, RAG, FAISS & Postgres — automating sprint workflows and readiness scoring.",
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  problem: string;
  outcome: string;
  stack: string[];
  featured?: boolean;
  label?: string;
  href?: string;
  description?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Smart Attendance System",
    tagline: "Face-recognition attendance engine with 95%+ ML accuracy.",
    problem:
      "Educational institutions needed automated, real-time attendance without manual entry or human error.",
    outcome:
      "95%+ accuracy via an ensemble of LBPH, SVM, KNN and Random Forest. Real-time tracking with an admin dashboard for report generation.",
    stack: ["Flask", "OpenCV", "MySQL", "LBPH", "SVM", "KNN", "Random Forest", "scikit-learn"],
    featured: true,
    label: "Featured Project",
    href: "https://github.com/Sudheesh26/Face-Recognition-attendance",
    description:
      "A real-time face recognition attendance system with multi-model ensemble (LBPH, SVM, KNN, Random Forest) for accurate recognition. Features live video capture, automated attendance marking with 30%+ confidence threshold, student registration portal (captures 100 training images per student), admin dashboard with statistics and filtering, and duplicate-prevention (one mark per day per student). Built with Flask, OpenCV, scikit-learn, and MySQL. Optimized with PCA dimensionality reduction and weighted voting (LBPH 40% / ensemble 60%).",
  },
  {
    title: "TasteBuds / FoodApp-For-HCL",
    tagline: "ML-powered cafeteria ordering platform with demand prediction.",
    problem: "Cafeterias overproduced food and lacked next-day demand visibility.",
    outcome:
      "Hackathon LeaderBoard Award winner at HackBees 1.0. Reduced waste via Random-Forest demand prediction.",
    stack: ["Node.js", "MongoDB", "React", "Express", "Random Forest", "Render"],
    label: "Hackathon Winner — HackBees 1.0",
    href: "https://github.com/Sudheesh26/FoodApp-For-HCL-",
    description:
      "Built for HCL Technologies Madurai (still under development). A dual-site food ordering system with a Client-End for employees to place orders and a Vendor-End for managing orders. Hosted on Render.com. Uses Random Forest for demand prediction to reduce food waste.",
  },
];

export type SkillCategory = {
  title: string;
  children: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI / ML Systems",
    children: ["LangGraph", "LangChain", "TensorFlow", "PyTorch", "RAG", "AI Agents", "DSA"],
  },
  {
    title: "Cloud & Infrastructure",
    children: ["Azure", "GCP", "SCVMM", "Load Balancing", "Resource Groups", "Failover Clusters"],
  },
  {
    title: "Databases & Dev Tools",
    children: ["PostgreSQL", "MySQL", "MongoDB", "Git", "GitHub", "Jupyter", "VS Code"],
  },
  {
    title: "Frontend & Platforms",
    children: ["React", "Node.js", "JavaScript", "Python", "TypeScript", "REST APIs"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  url: string;
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Microsoft AZ-900 — Azure Fundamentals", issuer: "Microsoft", url: "https://www.credly.com/badges/ce588772-4b14-44a6-bbb9-ae88984fba80/public_url" },
  { name: "Python for Data Science", issuer: "NPTEL", url: "https://drive.google.com/file/d/1FzNRJORv3wzi-H68WMBaYwP4-EVGEZn3/view" },
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/d3ac7ba2b7dc" },
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", url: "https://www.credly.com/badges/5cd42171-e4ad-4f88-9537-09e04edc2e84/public_url" },
  { name: "Professional Cloud Architect", issuer: "Google Cloud", url: "https://www.credly.com/badges/bd7018bb-b940-4303-9aab-25d43e3098f0/public_url" },
  { name: "Machine Learning Internship", issuer: "Corizo", url: "#" },
];

export const CONTACT = {
  email: "its.sudheeshh@gmail.com",
  phone: "+91 9499926047",
  github: "https://github.com/Sudheesh26",
  linkedin: "https://linkedin.com/in/sudheesh-h-a85420210",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];