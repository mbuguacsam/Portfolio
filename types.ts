
export interface Skill {
  name: string;
  category: string;
  level: number; // 0 to 100
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'Full-time' | 'Internship' | 'Contract';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcome: string;
  image: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: 'Cybersecurity' | 'Web3' | 'AI' | 'Software Development';
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface ContactSubmission {
  id: string;
  timestamp: number;
  name: string;
  email: string;
  message: string;
  analysis?: {
    category: string;
    urgency: 'Low' | 'Medium' | 'High';
    sentiment: string;
    summary: string;
  };
}

export interface SystemLog {
  id: string;
  timestamp: number;
  level: 'INFO' | 'WARN' | 'ERROR' | 'SYSTEM';
  message: string;
}
