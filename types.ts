
export interface Skill {
  name: string;
  category: string;
  level: number; // 0 to 100
  iconName?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  type: 'Full-time' | 'Founder / Executive' | 'Contract' | 'Advisory';
  keyAchievements?: string[];
  skills?: string[];
  currentRole?: boolean;
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
  liveUrl?: string;
  category: 'Fintech & Financial Systems' | 'Mobility, Logistics & Tourism' | 'Public Sector & Utilities' | 'Healthcare, Privacy & Retail' | 'Cyber Defense & Security';
  architectureOverview?: string;
  dateAdded?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badgeIcon?: string;
  category: 'Cybersecurity' | 'Marketing & SEO' | 'Cloud & Systems' | 'Compliance';
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: 'Cybersecurity' | 'Web3' | 'AI' | 'Software Development' | 'Strategic Leadership';
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  readTime?: string;
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

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  avatar: string;
  quote: string;
  engagementScope: string;
  outcomeMetric: string;
  rating: number; // 1 to 5
  verifiedLinkedin?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Engagement Models' | 'Pricing & Retainers' | 'Scope & Deliverables' | 'Process & Timeline';
}

export interface LinkedInProfileInfo {
  name: string;
  pronouns?: string;
  headline: string;
  linkedinUrl: string;
  location: string;
  connections: string;
  about: string;
  currentRoles: Array<{
    title: string;
    company: string;
    period: string;
  }>;
  topSkills: string[];
}

