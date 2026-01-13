
import { ExperienceItem, Project, Skill, Certification, BlogPost } from './types';

export const SKILLS: Skill[] = [
  // Cybersecurity & IT
  { name: 'Information Assurance', category: 'Cybersecurity & IT', level: 95 },
  { name: 'Risk Management', category: 'Cybersecurity & IT', level: 92 },
  { name: 'Secure Systems Design', category: 'Cybersecurity & IT', level: 90 },
  { name: 'Cyber Defense Operations', category: 'Cybersecurity & IT', level: 88 },
  
  // Software & Data
  { name: 'React & TypeScript', category: 'Software & Data', level: 94 },
  { name: 'Firebase & Supabase', category: 'Software & Data', level: 90 },
  { name: 'MongoDB & APIs', category: 'Software & Data', level: 85 },
  { name: 'AI-assisted Workflows', category: 'Software & Data', level: 92 },

  // Web3 & Emerging Tech
  { name: 'Blockchain Fundamentals', category: 'Web3 & Emerging Tech', level: 88 },
  { name: 'DAO Governance', category: 'Web3 & Emerging Tech', level: 82 },
  { name: 'Tokenized Systems', category: 'Web3 & Emerging Tech', level: 85 },
  { name: 'DeFi Architecture', category: 'Web3 & Emerging Tech', level: 80 },

  // Growth & Marketing
  { name: 'SEO (Certified)', category: 'Growth & Marketing', level: 92 },
  { name: 'HubSpot Inbound Marketing', category: 'Growth & Marketing', level: 88 },
  { name: 'CRM Automation', category: 'Growth & Marketing', level: 85 },
  { name: 'Email Optimization', category: 'Growth & Marketing', level: 90 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    title: 'Founder / CEO',
    company: 'Hpalls Corporation',
    period: '2022 - Present',
    type: 'Full-time',
    description: [
      'Spearheading development of secure fintech and mobility solutions.',
      'Architecting resilient infrastructure for cross-border digital services.',
      'Driving strategic partnerships with global technology providers.'
    ]
  },
  {
    id: '2',
    title: 'IT Coordinator',
    company: 'ABC Undergroup',
    period: '2021 - 2022',
    type: 'Full-time',
    description: [
      'Managed end-to-end IT infrastructure and security protocols.',
      'Implemented risk management strategies to safeguard corporate data.',
      'Led technical support teams for distributed workforce operations.'
    ]
  },
  {
    id: '3',
    title: 'Supervisor',
    company: 'The Rapids & Zawadi USA',
    period: '2019 - 2021',
    type: 'Full-time',
    description: [
      'Overseeing operational excellence and team leadership in dynamic environments.',
      'Implementing secure digital workflows for internal communications.',
      'Optimizing resource allocation for high-impact project delivery.'
    ]
  },
  {
    id: 'intern-1',
    title: 'AI Web App Reviewer',
    company: 'Scenario.life',
    period: 'Recent',
    type: 'Internship',
    description: [
      'Evaluating complex AI-driven web architectures for security and scalability.',
      'Providing deep-dive UX/UI audits for emerging technology startups.'
    ]
  },
  {
    id: 'intern-2',
    title: 'Growth Specialist',
    company: 'Freemodel',
    period: 'Internship',
    type: 'Internship',
    description: [
      'Optimized HubSpot email campaigns leading to increased lead conversion.',
      'Automated marketing workflows to improve CRM data integrity.'
    ]
  },
  {
    id: 'intern-3',
    title: 'SEO Specialist',
    company: 'MedTech',
    period: 'Internship',
    type: 'Internship',
    description: [
      'Developed technical SEO strategies for health-tech platforms.',
      'Boosted organic traffic through keyword optimization and high-authority link building.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'auto-finance-pro',
    title: 'Auto Finance Pro',
    tagline: 'Fintech + Insurance + AI Platform',
    problem: 'Fragmentation in the auto financing and insurance sector leads to high friction and security risks for borrowers.',
    solution: 'Built a unified AI-driven platform that streamlines credit assessment, insurance quotes, and funding in a secure environment.',
    techStack: ['React', 'Firebase', 'OpenAI API', 'Tailwind'],
    outcome: 'Reduced application processing time by 40% while enhancing data privacy compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nnus-sacco',
    title: 'NNUS Sacco Booking System',
    tagline: 'Secure Cooperative Financial Tool',
    problem: 'Legacy manual booking systems in Saccos lead to data inconsistencies and financial leakages.',
    solution: 'Developed a robust digital booking and management system with secure ledger capabilities.',
    techStack: ['TypeScript', 'MongoDB', 'Express', 'Auth0'],
    outcome: 'Improved financial transparency and user trust with real-time audit logs.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mechanic-mtaani',
    title: 'Mechanic Mtaani',
    tagline: 'On-demand Mobility Services',
    problem: 'Difficulty in finding trusted, verified mechanics in metropolitan areas leads to safety risks.',
    solution: 'Created a decentralized marketplace connecting vehicle owners with vetted professional mechanics.',
    techStack: ['React Native', 'Supabase', 'Stripe', 'Google Maps API'],
    outcome: 'Successfully onboarded 200+ mechanics and served 5,000+ service requests.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'BSc Information Assurance & CIS', issuer: 'Davenport University (GPA 3.8)', year: 'Graduated' },
  { name: 'SEO Professional Certification', issuer: 'Industry Certified', year: '2022' },
  { name: 'Inbound Marketing Certification', issuer: 'HubSpot', year: '2023' }
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
    title: 'The Future of Post-Quantum Cryptography in Fintech',
    author: 'Samson Mbugua',
    date: 'May 12, 2024',
    category: 'Cybersecurity',
    excerpt: 'As quantum computing advances, our current encryption standards face existential threats. Here is how we build resilient fintech systems today.',
    content: 'Full long-form content about quantum resistance...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    tags: ['Cryptography', 'Fintech', 'Quantum']
  },
  {
    id: '2',
    title: 'Architecting Decentralized Identity for African Mobility',
    author: 'Samson Mbugua',
    date: 'April 28, 2024',
    category: 'Web3',
    excerpt: 'How Web3 can bridge the trust gap in metropolitan transportation through verifiable credentials and DAO-led governance.',
    content: 'Deep dive into DID and transportation networks...',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800',
    tags: ['Web3', 'Identity', 'Transport']
  },
  {
    id: '3',
    title: 'AI Workflows: From Prompt Engineering to System Integration',
    author: 'Samson Mbugua',
    date: 'April 15, 2024',
    category: 'AI',
    excerpt: 'Scaling AI within a startup environment requires more than just API calls. It requires a fundamental shift in software architecture.',
    content: 'Technical analysis of AI orchestration...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Workflows', 'SaaS']
  }
];
