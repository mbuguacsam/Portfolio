
import { ExperienceItem, Project, Skill, Certification, BlogPost } from './types';

export const SKILLS: Skill[] = [
  // Cybersecurity & IT
  { name: 'Information Assurance', category: 'Cybersecurity & IT', level: 95 },
  { name: 'Risk Management', category: 'Cybersecurity & IT', level: 92 },
  { name: 'Secure Systems Design', category: 'Cybersecurity & IT', level: 90 },
  { name: 'Cyber Defense Operations', category: 'Cybersecurity & IT', level: 88 },
  
  // Software & Data
  { name: 'React & TypeScript', category: 'Software & Data', level: 94 },
  { name: 'Supabase & Backend', category: 'Software & Data', level: 90 },
  { name: 'API Orchestration', category: 'Software & Data', level: 85 },
  { name: 'AI Integration', category: 'Software & Data', level: 92 },

  // Web3 & Emerging Tech
  { name: 'Blockchain Systems', category: 'Web3 & Emerging Tech', level: 88 },
  { name: 'DAO Governance', category: 'Web3 & Emerging Tech', level: 82 },
  { name: 'Tokenomics Design', category: 'Web3 & Emerging Tech', level: 85 },
  { name: 'DID Architectures', category: 'Web3 & Emerging Tech', level: 80 },

  // Growth & Marketing
  { name: 'SEO (Certified)', category: 'Growth & Marketing', level: 92 },
  { name: 'HubSpot Inbound', category: 'Growth & Marketing', level: 88 },
  { name: 'CRM Automation', category: 'Growth & Marketing', level: 85 },
  { name: 'Lead Acquisition', category: 'Growth & Marketing', level: 90 },
];

export const PROJECTS: Project[] = [
  {
    id: 'auto-finance-pro',
    title: 'Auto Finance Pro',
    tagline: 'Fintech + Insurance + AI Platform',
    problem: 'Fragmentation in the auto financing and insurance sector leads to high friction and security risks for borrowers.',
    solution: 'Built a unified AI-driven platform that streamlines credit assessment, insurance quotes, and funding in a secure environment.',
    techStack: ['React', 'Supabase', 'Gemini API', 'Tailwind'],
    outcome: 'Reduced application processing time by 40% while enhancing data privacy compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nnus-sacco',
    title: 'NNUS Sacco Booking',
    tagline: 'Secure Cooperative Financial Tool',
    problem: 'Legacy manual booking systems in Saccos lead to data inconsistencies and financial leakages.',
    solution: 'Developed a robust digital booking and management system with secure ledger capabilities.',
    techStack: ['TypeScript', 'Supabase', 'PostgreSQL', 'Auth0'],
    outcome: 'Improved financial transparency and user trust with real-time audit logs.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mechanic-mtaani',
    title: 'Mechanic Mtaani',
    tagline: 'On-demand Mobility Services',
    problem: 'Difficulty in finding trusted, verified mechanics in metropolitan areas leads to safety risks.',
    solution: 'Created a decentralized marketplace connecting vehicle owners with vetted professional mechanics.',
    techStack: ['React Native', 'Supabase', 'Stripe', 'Google Maps'],
    outcome: 'Successfully onboarded 200+ mechanics and served 5,000+ service requests.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'zero-trust-landscape',
    title: 'The Evolving Landscape of Zero-Trust Security',
    author: 'Samson Mbugua',
    date: 'May 24, 2024',
    category: 'Cybersecurity',
    excerpt: 'Exploring the advancements and challenges in Zero-Trust Architecture implementation for modern enterprises.',
    content: 'Zero-trust security is no longer a buzzword but a fundamental shift in security strategy. In an era where the traditional network perimeter has dissolved due to remote work, cloud migration, and sophisticated cyber threats, the "never trust, always verify" principle has become critical.\n\nAdvancements in Zero-Trust Architecture (ZTA) now leverage AI-driven identity verification and micro-segmentation to isolate workloads and prevent lateral movement of attackers. However, the challenges remain significant: legacy system compatibility, user experience friction, and the complexity of managing granular access policies across a distributed ecosystem. Implementing zero-trust requires a cultural shift as much as a technical one, focusing on least-privileged access and continuous monitoring of every request, regardless of its origin.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Zero-Trust', 'Cybersecurity', 'Enterprise Security']
  },
  {
    id: '1',
    title: 'Quantum-Resistant Cryptography in Fintech',
    author: 'Samson Mbugua',
    date: 'May 12, 2024',
    category: 'Cybersecurity',
    excerpt: 'As quantum computing advances, our current encryption standards face existential threats.',
    content: 'Full long-form content about quantum resistance in financial systems...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    tags: ['Cryptography', 'Fintech', 'Quantum']
  },
  {
    id: '2',
    title: 'Decentralized Identity for African Mobility',
    author: 'Samson Mbugua',
    date: 'April 28, 2024',
    category: 'Web3',
    excerpt: 'How Web3 can bridge the trust gap in metropolitan transportation through verifiable credentials.',
    content: 'Deep dive into DID and transportation networks in Africa...',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800',
    tags: ['Web3', 'Identity', 'Transport']
  }
];
