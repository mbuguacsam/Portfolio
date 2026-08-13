import { ExperienceItem, Project, Skill, Certification, BlogPost, LinkedInProfileInfo, Testimonial, FaqItem } from './types';

export const LINKEDIN_PROFILE: LinkedInProfileInfo = {
  name: "Samson (Chege) Mbugua",
  pronouns: "He/Him",
  headline: "AI Automation & Business Systems Consultant | n8n, Zapier, Replit, Notion | Founder & CEO, AutoFinancePro | AI Readiness Audits for Kenyan Businesses",
  linkedinUrl: "https://www.linkedin.com/in/samson-chege-mbugua/",
  location: "Nairobi, Kenya & Remote Global",
  connections: "500+ connections",
  about: "I am an AI Automation & Business Systems Consultant, Founder & CEO of AutoFinancePro, and Strategic Systems Advisor. I specialize in designing n8n workflows, Zapier integrations, Replit apps, Notion systems, and conducting AI Readiness Audits for Kenyan businesses and global enterprises. Combining deep cybersecurity knowledge with full-stack automation engineering, I help founders and executives eliminate manual overhead and build resilient, automated platforms.",
  currentRoles: [
    {
      title: "Founder & CEO",
      company: "AutoFinancePro",
      period: "2022 — Present"
    },
    {
      title: "AI Automation & Business Systems Consultant",
      company: "Hpalls Digital & Strategic Advisory",
      period: "2021 — Present"
    }
  ],
  topSkills: [
    "AI Automation (n8n, Zapier, Replit, Notion)",
    "AI Readiness Audits for Kenyan Businesses",
    "Founder & CEO, AutoFinancePro Leadership",
    "Cyber Defense & Zero-Trust Architecture",
    "Fractional CTO & Strategic Systems Advisory",
    "Fintech & Microfinance Platform Engineering"
  ]
};

export const SKILLS: Skill[] = [
  // AI Automation & Business Systems
  { name: 'n8n & Zapier Workflow Orchestration', category: 'AI Automation & Business Systems', level: 98, description: 'Complex multi-step webhook automation, self-hosted n8n instances, and API connectors.' },
  { name: 'Replit & Custom AI App Development', category: 'AI Automation & Business Systems', level: 95, description: 'Rapid prototyping, microservices, AI bot deployment, and custom internal tools.' },
  { name: 'Notion Workspace & Operating Systems', category: 'AI Automation & Business Systems', level: 96, description: 'Automated relational databases, client portals, and company wiki systems.' },
  { name: 'AI Readiness Audits for Businesses', category: 'AI Automation & Business Systems', level: 97, description: 'Evaluating AI maturity, data readiness, tool selection, and implementation roadmaps for Kenyan & global firms.' },

  // Cybersecurity & IT
  { name: 'Information Assurance', category: 'Cybersecurity & IT', level: 96, description: 'Enterprise risk frameworks, threat modeling, and data sovereignty compliance.' },
  { name: 'Zero-Trust Architecture', category: 'Cybersecurity & IT', level: 94, description: 'Micro-segmentation, identity-first perimeter, and continuous authentication.' },
  { name: 'Risk & Vulnerability Audits', category: 'Cybersecurity & IT', level: 92, description: 'Penetration testing oversight, audit logging, and ISO 27001 mapping.' },
  
  // Software & Data
  { name: 'Enterprise React & TypeScript', category: 'Software & Data', level: 95, description: 'Resilient full-stack applications with high type-safety standards.' },
  { name: 'PostgreSQL, Supabase & Cloud SQL', category: 'Software & Data', level: 92, description: 'Relational data modeling, RLS security policies, and database tuning.' },
  { name: 'Fintech & Credit Operations', category: 'Software & Data', level: 94, description: 'Loan origination, payment ledger reconciliation, and risk scoring engines.' },

  // Growth & Marketing
  { name: 'Technical SEO (Certified)', category: 'Growth & Marketing', level: 94, description: 'Schema markup, core web vitals, crawl efficiency, and organic growth.' },
  { name: 'HubSpot Inbound Automation', category: 'Growth & Marketing', level: 90, description: 'Lead nurture workflows, CRM integration, and lifecycle scoring.' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'AI Automation & Business Systems Consultant',
    company: 'Hpalls Digital & Strategic Advisory',
    period: '2021 — Present',
    location: 'Nairobi, Kenya / Global Remote',
    type: 'Founder / Executive',
    currentRole: true,
    description: [
      'Conduct AI Readiness Audits for Kenyan businesses and international firms to identify automation opportunities and streamline business processes.',
      'Build end-to-end AI automation workflows using n8n, Zapier, Replit, and Notion to reduce manual operational overhead by up to 80%.',
      'Deliver executive technology advisory, zero-trust cyber defense audits, and bespoke software systems for high-growth ventures.'
    ],
    keyAchievements: [
      'Engineered 30+ custom n8n and Zapier automated pipelines connecting CRMs, payment gateways, and AI models.',
      'Advised 20+ businesses across East Africa on AI readiness, cloud security, and automated product roadmaps.',
      'Achieved a 40% reduction in customer onboarding friction through automated CRM pipeline orchestration.'
    ],
    skills: ['n8n', 'Zapier', 'Replit', 'Notion', 'AI Readiness Audits', 'Strategic Advisory', 'Cyber Defense']
  },
  {
    id: 'exp-2',
    title: 'Founder & CEO',
    company: 'AutoFinancePro',
    period: '2022 — Present',
    location: 'Nairobi, Kenya',
    type: 'Founder / CEO',
    currentRole: true,
    description: [
      'Founding executive leading product vision, zero-trust security architecture, and automated credit scoring for a multi-tenant auto finance platform.',
      'Built automated credit evaluation engines and secure bank API proxies connecting automotive lenders with underwriters.',
      'Designed end-to-end audit telemetry to satisfy stringent financial regulatory standards and data protection laws.'
    ],
    keyAchievements: [
      'Reduced loan application underwriting time from 48 hours to under 15 minutes.',
      'Zero security incidents reported across 50,000+ customer records.',
      'Pioneered bank-grade data encryption and zero-trust user authentication.'
    ],
    skills: ['Executive Leadership', 'Zero-Trust Security', 'Fintech Architecture', 'n8n Automations', 'React & TypeScript']
  },
  {
    id: 'exp-3',
    title: 'Senior Software & Systems Engineer',
    company: 'Mobility & Community Fintech Projects',
    period: '2019 — 2022',
    location: 'Nairobi, Kenya',
    type: 'Contract',
    currentRole: false,
    description: [
      'Designed and delivered high-uptime cooperative financial management software (NNUS Sacco Booking) and location-based mobility platforms (Mechanic Mtaani).',
      'Established real-time vehicle dispatching, secure transaction ledgers, and automated notification systems.',
      'Mentored engineering teams on secure coding guidelines, type safety, and Git workflow best practices.'
    ],
    keyAchievements: [
      'Onboarded over 200 vetted mechanics serving 5,000+ mobility requests on Mechanic Mtaani.',
      'Digitized legacy manual bookkeeping for Sacco co-operatives, eliminating financial leakages.'
    ],
    skills: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Google Maps API']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'SEO Certification',
    issuer: 'HubSpot Academy & Industry Standards',
    year: '2023',
    category: 'Marketing & SEO',
    credentialUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    badgeIcon: 'Search'
  },
  {
    id: 'cert-2',
    name: 'HubSpot Inbound Marketing Certified',
    issuer: 'HubSpot Academy',
    year: '2023',
    category: 'Marketing & SEO',
    credentialUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    badgeIcon: 'TrendingUp'
  },
  {
    id: 'cert-3',
    name: 'Information Assurance Specialist',
    issuer: 'Academic & Industry Credentials (3.8 GPA)',
    year: '2022',
    category: 'Cybersecurity',
    credentialUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    badgeIcon: 'Shield'
  },
  {
    id: 'cert-4',
    name: 'AWS & Cloud Systems Administration',
    issuer: 'Cloud Standards Authority',
    year: '2023',
    category: 'Cloud & Systems',
    credentialUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    badgeIcon: 'Cpu'
  }
];

export const PROJECTS: Project[] = [
  // --- Recent Deliverables (Past 7 Months) ---
  {
    id: 'hakikisha-scam-lookup',
    title: 'Hakikisha Scam & Risk Lookup',
    tagline: 'Anti-Fraud & Scam Intelligence Verification Engine',
    category: 'Fintech & Financial Systems',
    liveUrl: 'https://hakikisha-scam-lookup--NewNNUS.replit.app',
    dateAdded: '2026',
    problem: 'Consumers and small businesses face rising mobile money fraud, phishing accounts, and unverified merchant risks across peer-to-peer transactions.',
    solution: 'Engineered a real-time scam verification lookup portal allowing users to check phone numbers, account handles, and merchant credentials against a community and database intelligence ledger.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Risk Score Engine', 'Tailwind CSS'],
    outcome: 'Mitigated financial loss for users by providing instant, actionable risk scores before money transfer execution.',
    architectureOverview: 'Anonymized threat reporting pipeline with weighted trust scoring and rate-limited API protection.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'risiti-yangu',
    title: 'Risiti Yangu Expense & Tax Scanner',
    tagline: 'Smart Invoice Verification & Expense Management',
    category: 'Fintech & Financial Systems',
    liveUrl: 'https://risitiyangu.lovable.app',
    dateAdded: '2026',
    problem: 'Small business owners struggle with lost paper receipts, manual VAT categorization, and missing tax deductions during annual filing.',
    solution: 'Created an intuitive receipt scanning and expense tracking web portal that parses invoice details, calculates tax breakdowns, and generates audit-ready export summaries.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'OCR Parser', 'Export Ledger'],
    outcome: 'Reduced monthly accounting reconciliation overhead by 65% for participating small business clients.',
    architectureOverview: 'Client-side receipt extraction paired with encrypted cloud storage for audit trail preservation.',
    image: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gianet-microfinance',
    title: 'Gianet Microfinance Credit System',
    tagline: 'Core Micro-Lending & Borrower Operations Engine',
    category: 'Fintech & Financial Systems',
    liveUrl: 'https://gianetmirofinance.base44.app',
    dateAdded: '2026',
    problem: 'Traditional microfinance institutions face manual loan origination bottlenecks, high default rates, and cumbersome borrower tracking.',
    solution: 'Designed an end-to-end micro-lending management software featuring borrower credit scoring, automated repayment schedules, loan officer assignment, and delinquency tracking.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Microfinance Engine', 'Credit Risk Module'],
    outcome: 'Digitized credit workflows for 1,000+ active borrowers with zero manual ledger reconciliation errors.',
    architectureOverview: 'Multi-tenant database schema with strict role-based access control (RBAC) for loan officers and auditors.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'faragha-pulse',
    title: 'Faragha Pulse Confidentiality Shield',
    tagline: 'Data Privacy & Healthcare Telemetry Engine',
    category: 'Healthcare, Privacy & Retail',
    liveUrl: 'https://faragha-pulse-live.base44.app',
    dateAdded: '2026',
    problem: 'Sensitive patient information and confidential medical records face strict regulatory mandates under data protection laws.',
    solution: 'Built a privacy-first health telemetry monitor providing real-time data masking, granular user consent tracking, and immutable confidentiality logs.',
    techStack: ['React', 'TypeScript', 'Encryption Layer', 'Audit Logger', 'Tailwind CSS'],
    outcome: 'Achieved 100% compliance alignment with local and international healthcare data protection frameworks.',
    architectureOverview: 'End-to-end encrypted payload transport with field-level access permission rules.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'county-waste-management',
    title: 'County Smart Waste Logistics',
    tagline: 'Public Sector Municipal Sanitation & Dispatch System',
    category: 'Public Sector & Utilities',
    liveUrl: 'https://county-waste-management-system.base44.app',
    dateAdded: '2026',
    problem: 'Municipal authorities suffer from uncoordinated waste collection routes, illegal dumping blind spots, and delayed citizen service requests.',
    solution: 'Architected a public sector waste management platform uniting truck route optimization, bin capacity tracking, citizen incident reporting, and revenue collection.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Route Optimizer', 'Geographic Dispatch'],
    outcome: 'Decreased uncollected waste complaints by 50% across pilot municipal zones.',
    architectureOverview: 'Geospatial mapping engine with automated route allocation for collection vehicles.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'safi-go-matatu',
    title: 'SafiGo Urban Transit Hub',
    tagline: 'Matatu Fleet Dispatch & Digital Ticketing Ecosystem',
    category: 'Mobility, Logistics & Tourism',
    liveUrl: 'https://safi-go--MatatuHub.replit.app',
    dateAdded: '2026',
    problem: 'Informal public transit in urban centers experiences cash leakages, unpredictable scheduling, and chaotic passenger boarding.',
    solution: 'Engineered a digital matatu management hub supporting real-time route monitoring, seat reservation, contactless digital ticketing, and SACCO revenue dashboards.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Fleet Dispatch', 'Tailwind CSS'],
    outcome: 'Streamlined vehicle turnaround times and digitized daily fare collections across high-density transit corridors.',
    architectureOverview: 'High-frequency WebSocket event bus tracking live vehicle positions and booking state.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gd-pharmaceuticals',
    title: 'GD Pharmaceuticals B2B Portal',
    tagline: 'Regulated Drug Wholesale & Supply Chain Traceability',
    category: 'Healthcare, Privacy & Retail',
    liveUrl: 'https://gdpharmacuticals.base44.app',
    dateAdded: '2026',
    problem: 'Pharmaceutical distributors need strict batch lot traceability, temperature log compliance, and verified pharmacy purchasing workflows.',
    solution: 'Developed a B2B ordering and compliance portal enabling licensed pharmacies to place verified orders, inspect batch origin, and track delivery status.',
    techStack: ['React', 'TypeScript', 'Batch Tracker', 'Tailwind CSS', 'Verification Gateway'],
    outcome: 'Streamlined supply chain operations for over 100 partner pharmacies while enforcing regulatory compliance.',
    architectureOverview: 'Role-gated ordering engine requiring active pharmacy license validation before checkout.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'starlight-order-flow',
    title: 'Starlight Order Flow Engine',
    tagline: 'High-Throughput E-Commerce Order & Inventory Routing',
    category: 'Healthcare, Privacy & Retail',
    liveUrl: 'https://starlight-order-flow.base44.app',
    dateAdded: '2026',
    problem: 'Fast-growing e-commerce sellers suffer order fulfillment delays due to disconnected warehouse stock ledgers and manual dispatching.',
    solution: 'Built an order routing system that synchronizes storefront checkouts directly with warehouse fulfillment queues and logistics carriers.',
    techStack: ['React', 'TypeScript', 'Order Pipeline', 'Tailwind CSS', 'Inventory Sync'],
    outcome: 'Processed over 10,000 orders with sub-second status synchronization across multiple distribution nodes.',
    architectureOverview: 'Event-driven queue architecture ensuring zero order loss during flash sales.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kenya-tour-driver',
    title: 'Kenya Tour Driver Guide Portal',
    tagline: 'Professional Safari Driver Vetting & Operations Hub',
    category: 'Mobility, Logistics & Tourism',
    liveUrl: 'https://kenya-tour-driver-landing-page-mainzip--SamsonchegeM.replit.app',
    dateAdded: '2026',
    problem: 'Tour operators and safari travelers lack a verified, centralized portal to evaluate driver credentials, safety records, and booking availability.',
    solution: 'Created an operational hub connecting certified safari driver guides with tour companies, complete with credential verification and trip requests.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Verification Module', 'Booking Flow'],
    outcome: 'Elevated tour service reliability and driver trust for eco-tourism operators.',
    architectureOverview: 'Identity verification flow linking driver certification badges with public search records.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pori-safari-path',
    title: 'Pori Safari Path Ecotourism',
    tagline: 'Custom Safari Itinerary Builder & Reserve Booking',
    category: 'Mobility, Logistics & Tourism',
    liveUrl: 'https://pori-safari-path.base44.app',
    dateAdded: '2026',
    problem: 'International travelers face fragmented booking steps when coordinating national park permits, lodges, and wildlife game drives.',
    solution: 'Designed an ecotourism itinerary platform allowing users and travel agents to seamlessly bundle game reserve entry, luxury tent bookings, and transport.',
    techStack: ['React', 'TypeScript', 'Itinerary Engine', 'Tailwind CSS', 'Reservation System'],
    outcome: 'Boosted direct itinerary inquiries and streamlined park clearance paperwork.',
    architectureOverview: 'Dynamic itinerary pricing calculator with multi-reserve inventory aggregation.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'asset-fetch-tracking',
    title: 'AssetFetch Remote Tracking',
    tagline: 'Field Equipment & Safari Vehicle Asset Locator',
    category: 'Mobility, Logistics & Tourism',
    liveUrl: 'https://asset-fetch--Safariguide.replit.app',
    dateAdded: '2026',
    problem: 'Remote safari lodges and exploration teams lose visibility of field vehicles and high-value gear in low-bandwidth regions.',
    solution: 'Engineered a resilient field asset management tool supporting low-data status logging, offline sync, geofencing, and service schedules.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Geofencing Module', 'Offline Sync'],
    outcome: 'Eliminated unrecorded equipment movements and reduced emergency vehicle maintenance downtime.',
    architectureOverview: 'Local-first client storage that syncs telemetry payloads as soon as connectivity resumes.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pawmfort-concierge',
    title: 'Pawmfort Pet Care Concierge',
    tagline: 'Luxury Veterinary & Pet Care Operations Portal',
    category: 'Healthcare, Privacy & Retail',
    liveUrl: 'https://pawmfort.lovable.app/',
    dateAdded: '2026',
    problem: 'Pet owners experience friction when scheduling premium veterinary appointments, grooming sessions, and health record tracking.',
    solution: 'Built an elegant pet care concierge application featuring automated appointment booking, medical history tracking, and subscription care plans.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Scheduling Engine', 'Client Portal'],
    outcome: 'Expanded client retention rates and eliminated clinic booking conflicts.',
    architectureOverview: 'Calendar synchronization engine with automated WhatsApp/SMS reminders.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800'
  },

  // --- Foundational Enterprise Case Studies ---
  {
    id: 'auto-finance-pro',
    title: 'Auto Finance Pro',
    tagline: 'Automotive Credit Evaluation & Insurance Engine',
    category: 'Fintech & Financial Systems',
    liveUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    problem: 'Fragmentation in automotive financing and insurance leads to long processing times, manual document friction, and data security vulnerabilities.',
    solution: 'Designed a unified zero-trust platform combining credit evaluation, instant insurance quotation, and bank-grade encryption with automated underwriting workflows.',
    techStack: ['React', 'TypeScript', 'Supabase', 'Express API Proxy', 'Tailwind CSS'],
    outcome: 'Reduced application processing time by 40% while ensuring strict adherence to data protection standards.',
    architectureOverview: 'Server-side API proxy isolates credit keys. Micro-segmented storage prevents cross-tenant data leakage.',
    image: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nnus-sacco',
    title: 'NNUS Sacco Digital Banking',
    tagline: 'Secure Cooperative Financial Management Platform',
    category: 'Fintech & Financial Systems',
    liveUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    problem: 'Legacy paper booking systems in savings and credit co-operatives caused audit discrepancies, delayed member payouts, and revenue loss.',
    solution: 'Engineered a modern web platform featuring real-time transaction ledgers, automated audit logging, and encrypted user authentication.',
    techStack: ['TypeScript', 'Supabase', 'PostgreSQL', 'Auth0', 'Tailwind CSS'],
    outcome: 'Completely eliminated paper ledger reconciliation errors and enhanced member trust across 10,000+ transactions.',
    architectureOverview: 'Role-based access control (RBAC) with immutable audit logging on every cash allocation event.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mechanic-mtaani',
    title: 'Mechanic Mtaani Platform',
    tagline: 'On-Demand Mobility & Vetted Services Network',
    category: 'Mobility, Logistics & Tourism',
    liveUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    problem: 'Vehicle owners facing unexpected breakdowns lacked access to verified, reliable mechanics nearby, posing safety and pricing risks.',
    solution: 'Built a multi-platform marketplace matching stranded drivers with geotagged, background-checked automotive technicians in real-time.',
    techStack: ['React Native', 'Node.js', 'Stripe', 'Google Maps Platform', 'Tailwind CSS'],
    outcome: 'Onboarded 200+ certified technicians and processed over 5,000 emergency assistance requests across metropolitan Nairobi.',
    architectureOverview: 'Real-time WebSocket dispatch engine with secure payment hold until job completion verification.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'zero-trust-telemetry',
    title: 'Zero-Trust Telemetry Engine',
    tagline: 'Enterprise Cyber Threat Sentinel',
    category: 'Cyber Defense & Security',
    liveUrl: 'https://www.linkedin.com/in/samson-chege-mbugua/',
    problem: 'Distributed hybrid work environments suffer from perimeter blind spots and delayed incident detection.',
    solution: 'Architected a lightweight agentic telemetry monitor that logs system events, detects anomalous payload attempts, and triggers automated policy isolation.',
    techStack: ['TypeScript', 'Express', 'WebSockets', 'Tailwind CSS', 'Threat Intelligence'],
    outcome: 'Delivered sub-second threat detection feeds with contextual analysis for rapid SOC incident triage.',
    architectureOverview: 'Streaming event bus with client-side zero-trust verification and server-side threat scoring.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'zero-trust-landscape',
    title: 'The Evolving Landscape of Zero-Trust Security',
    author: 'Samson Chege Mbugua',
    date: 'August 2024',
    readTime: '5 min read',
    category: 'Cybersecurity',
    excerpt: 'Exploring operational frameworks in Zero-Trust Architecture (ZTA) implementation for high-growth enterprises and financial systems.',
    content: `Zero-trust security is a fundamental shift in business strategy. In an era where the traditional network perimeter has dissolved due to remote work, cloud migration, and sophisticated cyber threats, the "never trust, always verify" principle has become critical.

Advancements in Zero-Trust Architecture (ZTA) now leverage identity verification and micro-segmentation to isolate workloads and prevent lateral movement of attackers. However, the challenges remain significant: legacy system compatibility, user experience friction, and managing granular access policies across a distributed ecosystem.

Implementing zero-trust requires a cultural shift as much as a technical one, focusing on least-privileged access and continuous monitoring of every request. As cyber defense advisors, our goal is to build frictionless verification channels that protect mission-critical assets without hindering business velocity.`,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Zero-Trust', 'Cybersecurity', 'Enterprise Architecture', 'Identity']
  },
  {
    id: 'fractional-cto-playbook',
    title: 'Why Growing Ventures Need Fractional Systems Leadership',
    author: 'Samson Chege Mbugua',
    date: 'July 2024',
    readTime: '6 min read',
    category: 'Strategic Leadership',
    excerpt: 'How early and growth-stage companies leverage fractional CTO advisory to avoid costly architectural mistakes and accelerate time-to-market.',
    content: `Building software is cheap today; building the *right* architecture that scales securely without technical debt requires deep experience. Many founders hire full-time engineering teams before defining clear data sovereignty, API security, and infrastructure boundaries.

A Fractional Systems Advisor bridges the gap between executive strategy and technical execution. By conducting risk audits, vetting vendor dependencies, and establishing type-safe CI/CD pipelines early, ventures protect investor capital and build durable enterprise equity.`,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    tags: ['Fractional CTO', 'Consulting', 'Architecture', 'Startups']
  },
  {
    id: 'quantum-fintech',
    title: 'Quantum-Resistant Cryptography in Financial Systems',
    author: 'Samson Chege Mbugua',
    date: 'June 2024',
    readTime: '6 min read',
    category: 'Cybersecurity',
    excerpt: 'As quantum computing milestones accelerate, modern financial infrastructure must proactively migrate toward post-quantum encryption standards.',
    content: `Financial technology relies on public-key cryptography (RSA and ECC) to secure trillions of dollars in transactions daily. However, the emergence of quantum algorithms poses a structural threat to these mathematical safeguards.

Post-Quantum Cryptography (PQC) standards offer lattice-based encryption algorithms designed to withstand quantum attack vectors. For fintech architects and technical leaders, beginning crypto-agility assessments today is non-negotiable.

This involves inventorying existing cryptographic keys, identifying vulnerable TLS handshakes, and decoupling encryption primitives from application logic to allow seamless algorithm rotation in production environments.`,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    tags: ['Cryptography', 'Fintech', 'Quantum Security', 'Data Privacy']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Patrick Njoroge',
    role: 'Managing Director & Co-Founder',
    organization: 'Auto Finance Pro & Auto Credit Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'Samson’s systems advisory completely transformed our underwriting workflow. By implementing a zero-trust API gateway and automated credit evaluation engine, he helped us reduce application processing time from 2 days to under 15 minutes while maintaining strict data compliance.',
    engagementScope: 'Zero-Trust Architecture & Underwriting Automation',
    outcomeMetric: '40% Reduction in Application Turnaround Time',
    rating: 5,
    verifiedLinkedin: true
  },
  {
    id: 'test-2',
    clientName: 'Grace Wambui',
    role: 'Board Secretary & Head of Digital Banking',
    organization: 'NNUS Cooperative Society',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    quote: 'When we decided to digitize our cooperative booking and savings ledgers, Samson was the fractional advisor we trusted. His deep understanding of audit trails, financial security, and type-safe systems eliminated manual bookkeeping errors across 10,000+ member transactions.',
    engagementScope: 'Digital Banking Ledger & Audit System',
    outcomeMetric: '100% Paperless Ledger Accuracy',
    rating: 5,
    verifiedLinkedin: true
  },
  {
    id: 'test-3',
    clientName: 'Daniel Ochieng',
    role: 'Chief Operating Officer',
    organization: 'MatatuHub & SafeGo Mobility',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    quote: 'Samson designed our SafiGo urban transit dispatch hub in record time. His ability to handle real-time WebSockets, live route tracking, and contactless fare reconciliation under chaotic urban conditions was nothing short of remarkable.',
    engagementScope: 'Fleet Dispatch & Digital Ticketing Platform',
    outcomeMetric: '5,000+ Daily Transit Transactions Handled',
    rating: 5,
    verifiedLinkedin: true
  },
  {
    id: 'test-4',
    clientName: 'Dr. Evelyn Cherono',
    role: 'Chief Medical Officer & Director of Compliance',
    organization: 'Faragha Health Privacy Network',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    quote: 'Navigating medical record confidentiality and patient consent laws was a critical hurdle for us. Samson architected our Faragha Pulse confidentiality shield with granular consent masks, allowing us to pass external compliance audits seamlessly.',
    engagementScope: 'Healthcare Data Privacy & Consent Engine',
    outcomeMetric: 'Zero Audit Non-Conformances Reported',
    rating: 5,
    verifiedLinkedin: true
  },
  {
    id: 'test-5',
    clientName: 'Francis Mwangi',
    role: 'Director of Environmental Services',
    organization: 'County Municipal Waste Logistics',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    quote: 'Samson delivered a municipal waste route optimization platform that solved our collection blind spots. His pragmatic approach to public sector software meant workers and administrators adopted the system effortlessly.',
    engagementScope: 'Municipal Route Optimization & Dispatch',
    outcomeMetric: '50% Drop in Uncollected Service Complaints',
    rating: 5,
    verifiedLinkedin: true
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Engagement Models',
    question: 'What is a Fractional CTO engagement, and how does it work for my company?',
    answer: 'A Fractional CTO provides senior technical leadership, architectural governance, and security oversight on a flexible retainer (typically 10-20 hours/week) without the overhead of a $250k+ full-time executive salary. I partner directly with founders, CEOs, and engineering directors to solve complex technical bottlenecks, direct cloud migrations, establish zero-trust security compliance, and lead product roadmaps.'
  },
  {
    id: 'faq-2',
    category: 'Pricing & Retainers',
    question: 'How are advisory engagements priced, and what retainer structures are available?',
    answer: 'Engagements are structured into three transparent tiers: (1) Strategic Architecture & Cyber Security Audits (Fixed-fee project scope, typically 2-3 weeks turnaround); (2) Monthly Fractional CTO Retainer (Tiered weekly time allocation covering engineering management, roadmap governance, and zero-trust policy audits); and (3) Custom Bespoke System Engineering (Turnkey software development with milestone-based billing). Pricing is customized following an initial 30-minute discovery consultation.'
  },
  {
    id: 'faq-3',
    category: 'Scope & Deliverables',
    question: 'What concrete deliverables can I expect during a consulting engagement?',
    answer: 'Deliverables are concrete and operational, including: Comprehensive Zero-Trust Threat Audits & Remediation Roadmaps, Full-Stack Architecture Blueprints (microservices, database schemas, RBAC policies), API Gateways & Bank-Grade Security Proxies, Production Software Systems (as demonstrated across my 16+ live deliverables in fintech, logistics, and healthcare), and ISO 27001 / Data Protection Compliance documentation.'
  },
  {
    id: 'faq-4',
    category: 'Process & Timeline',
    question: 'What is the step-by-step process from initial contact to engagement kickoff?',
    answer: 'The consultation process follows 4 swift steps: (1) Discovery Call (30 min to diagnose core business bottlenecks and security risks); (2) Architectural Assessment & Proposal (Clear roadmap, deliverables, timeline, and fee structure delivered within 48 hours); (3) Kickoff & Systems Integration (Access provisioning, sprint planning, and zero-trust perimeter setup); and (4) Ongoing Governance & Sprint Execution (Weekly executive syncs, code audits, and milestone deployment).'
  },
  {
    id: 'faq-5',
    category: 'Engagement Models',
    question: 'Can you work with our existing engineering team or agency partners?',
    answer: 'Yes. I frequently advise and augment existing in-house engineering teams, dev shops, and third-party vendors. I serve as the strategic technical authority—reviewing code quality, establishing type-safe CI/CD pipelines, evaluating vendor security risks, and mentoring junior developers on enterprise security practices.'
  },
  {
    id: 'faq-6',
    category: 'Scope & Deliverables',
    question: 'How do you handle data privacy and IP ownership for custom software builds?',
    answer: 'All intellectual property, source code, data schemas, and architecture documentation created during the engagement belong 100% to your organization from day one. All advisory contracts include strict NDA clauses and follow ISO/GDPR compliant data handling standards.'
  }
];
