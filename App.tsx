
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Code, 
  Cpu, 
  TrendingUp, 
  Mail, 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight,
  Award,
  Calendar,
  User,
  ArrowLeft,
  Image as ImageIcon,
  Wand2,
  Zap,
  Upload,
  RefreshCw,
  Download,
  Sparkles,
  Target,
  FileCheck,
  Terminal,
  Activity,
  Share2,
  Globe
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SKILLS, PROJECTS, INITIAL_BLOG_POSTS } from './constants';
import { Project, BlogPost, SystemLog, ContactSubmission } from './types';
import { api, BackendService } from './api';

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SkillsRadar = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  const data = categories.map(cat => {
    const catSkills = SKILLS.filter(s => s.category === cat);
    const avgLevel = catSkills.reduce((acc, curr) => acc + curr.level, 0) / catSkills.length;
    return { name: cat, value: avgLevel };
  });

  const size = 320;
  const center = size / 2;
  const radius = center * 0.7;

  const points = data.map((d, i) => {
    const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
    const x = center + radius * (d.value / 100) * Math.cos(angle);
    const y = center + radius * (d.value / 100) * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const labels = data.map((d, i) => {
    const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
    const x = center + (radius + 40) * Math.cos(angle);
    const y = center + (radius + 20) * Math.sin(angle);
    return { x, y, name: d.name };
  });

  const iconMap: Record<string, any> = {
    'Cybersecurity & IT': Shield,
    'Software & Data': Code,
    'Web3 & Emerging Tech': Globe,
    'Growth & Marketing': TrendingUp,
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-black/40 border border-white/5 rounded-[3rem] backdrop-blur-xl shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <svg width={size} height={size} className="relative z-10">
        {[0.2, 0.4, 0.6, 0.8, 1].map((r, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={radius * r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        {data.map((_, i) => {
          const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          );
        })}

        <motion.polygon
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          points={points}
          fill="rgba(37, 99, 235, 0.2)"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {data.map((d, i) => {
          const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
          const x = center + radius * (d.value / 100) * Math.cos(angle);
          const y = center + radius * (d.value / 100) * Math.sin(angle);
          return (
            <motion.circle
              key={i}
              initial={{ r: 0 }}
              whileInView={{ r: 5 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              cx={x}
              cy={y}
              fill="#fff"
              stroke="#2563eb"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {labels.map((l, i) => {
          const Icon = iconMap[l.name] || Activity;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              style={{
                position: 'absolute',
                left: l.x,
                top: l.y,
                transform: 'translate(-50%, -50%)',
              }}
              className="flex flex-col items-center text-center w-32"
            >
              <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30 mb-2">
                <Icon size={14} className="text-blue-400" />
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 heading-font">
                {l.name}
              </span>
              <span className="text-xs font-bold text-white accent-font">
                {Math.round(data[i].value)}% Mastery
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Activity size={12} className="text-blue-500" />
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest heading-font">Global Expertise Ledger</span>
        </div>
        <p className="text-xs text-gray-500 font-medium max-w-[200px]">
          Live telemetry mapping technical proficiency across primary system sectors.
        </p>
      </div>
    </div>
  );
};

const updateMetaTags = (titleSuffix?: string, description?: string, image?: string) => {
  if (typeof document === 'undefined') return;

  const defaultTitle = "Samson Mbugua | Cyber Defense Expert & Strategic Advisor";
  const defaultDesc = "I design and build secure, scalable digital ecosystems across fintech, insurance, and mobility, blending technical expertise with strategic vision.";
  const title = titleSuffix ? `${titleSuffix} | Samson Mbugua` : defaultTitle;
  const desc = description || defaultDesc;
  const img = image || "Pro photo.png";

  document.title = title;

  const metaData = [
    { name: "description", content: desc },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:image", content: img },
    { property: "og:type", content: "article" },
    { property: "og:url", content: window.location.href },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: img },
  ];

  metaData.forEach(({ name, property, content }) => {
    let el = name ? document.querySelector(`meta[name="${name}"]`) : document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      if (name) el.setAttribute('name', name);
      if (property) el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  });
};

const SystemTerminal = () => {
  const [logs, setLogs] = useState<SystemLog[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLogs(BackendService.getLogs());
    const handleNewLog = (e: any) => {
      setLogs(prev => [e.detail, ...prev].slice(0, 30));
    };
    window.addEventListener('system_log', handleNewLog);
    return () => window.removeEventListener('system_log', handleNewLog);
  }, []);

  return (
    <div className="bg-black/80 border-t border-white/10 p-4 font-mono text-[10px] hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 text-blue-500">
          <Terminal size={14} />
          <span className="font-black uppercase tracking-widest heading-font">Backend Systems Ledger</span>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span>Node: Primary-Cluster-Alpha</span>
          </div>
          <span>Uptime: 99.99%</span>
        </div>
      </div>
      <div ref={scrollRef} className="h-24 overflow-y-auto space-y-1 custom-scrollbar accent-font">
        {logs.map(log => (
          <div key={log.id} className="flex gap-4">
            <span className="text-gray-600">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
            <span className={`font-black ${log.level === 'SYSTEM' ? 'text-blue-500' : log.level === 'WARN' ? 'text-yellow-500' : 'text-gray-400'}`}>
              {log.level}
            </span>
            <span className="text-gray-300">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = ({ onNavAction }: { onNavAction: (href?: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Advisory', href: 'advisory' },
    { name: 'Projects', href: 'projects' },
    { name: 'About', href: 'about' },
    { name: 'AI Lab', href: 'ai-studio' },
    { name: 'Insights', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavAction(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-xl font-black tracking-tighter text-white heading-font">
          SAMSON <span className="text-blue-500">MBUGUA</span>
        </a>

        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-bold text-gray-400 hover:text-white transition-colors duration-300 heading-font uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-300 hover:text-white" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col space-y-4 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-bold text-gray-300 hover:text-white border-b border-white/5 pb-2 heading-font uppercase"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, action, dark = false }: { title: string; subtitle?: string; action?: React.ReactNode; dark?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
  >
    <div className="flex-grow">
      <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase heading-font ${dark ? 'text-black' : 'text-white'}`}>{title}</h2>
      {subtitle && <p className={`max-w-2xl text-lg leading-relaxed ${dark ? 'text-gray-700' : 'text-gray-400'}`}>{subtitle}</p>}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className={`h-1.5 mt-6 rounded-full ${dark ? 'bg-black' : 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]'}`}
      ></motion.div>
    </div>
    {action && <div className="shrink-0 w-full md:w-auto">{action}</div>}
  </motion.div>
);

const Hero = ({ onNavAction }: { onNavAction: (href?: string) => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-900/10 blur-[180px] rounded-full"
        ></motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[11px] font-bold tracking-[0.25em] uppercase mb-10 accent-font"
          >
            Strategic Systems Advisor
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-7xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter text-gradient heading-font"
          >
            Samson <br /> Mbugua
          </motion.h1>
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-4xl text-gray-400 font-medium mb-12 max-w-xl leading-tight heading-font"
          >
            Cyber Defense Expert <span className="text-gray-800 mx-2">/</span> Software Founder <span className="text-gray-800 mx-2">/</span> Strategic Advisor
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-500 max-w-xl mb-14 leading-relaxed font-medium"
          >
            Designing and building secure, scalable digital ecosystems across fintech, insurance, and mobility, blending technical expertise with strategic vision.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-6"
          >
            <button onClick={() => onNavAction('projects')} className="px-10 py-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center group shadow-2xl uppercase tracking-widest text-sm accent-font">
              View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://calendly.com/samson-mbugua/project-management" target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition-all uppercase tracking-widest text-sm accent-font">
              Book a Strategy Session
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="hidden lg:block relative justify-self-center"
        >
          <div className="relative group p-4">
            <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-2xl transform group-hover:scale-110 transition-transform duration-700"></div>
            <img 
              src="Pro photo.png"
              alt="Samson Mbugua" 
              className="w-[300px] h-auto object-cover rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative z-10 contrast-[1.05] saturate-[1.02]"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(37,99,235,0.4)] z-20"
          >
            <p className="text-4xl font-black text-white leading-none tracking-tighter heading-font">Senior</p>
            <p className="text-[12px] font-bold text-blue-100 opacity-90 uppercase tracking-[0.35em] mt-3 accent-font">Systems Architect</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AdvisoryHighlight = () => (
  <section id="advisory" className="section-padding bg-white text-black">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Strategic Systems Advisory" 
        subtitle="I help founders, startups, and enterprises make confident technical decisions, optimize workflows, and implement innovative solutions."
        dark
      />
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-3 gap-10"
      >
        <motion.div 
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="p-10 bg-gray-50 border border-gray-200 rounded-[3rem] space-y-8 group transition-colors hover:bg-white"
        >
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
            <Shield size={32} />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight heading-font">Security Architecture</h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Reviewing system architectures for fintech and insurtech platforms to ensure robust security and data integrity.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-sm font-bold text-gray-500 accent-font"><ChevronRight size={16} className="text-blue-600 mr-2"/> Risk Assessment</li>
            <li className="flex items-center text-sm font-bold text-gray-500 accent-font"><ChevronRight size={16} className="text-blue-600 mr-2"/> Vulnerability Audit</li>
            <li className="flex items-center text-sm font-bold text-gray-500 accent-font"><ChevronRight size={16} className="text-blue-600 mr-2"/> Compliance Mapping</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="p-10 bg-gray-50 border border-gray-200 rounded-[3rem] space-y-8 group transition-colors hover:bg-white"
        >
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
            <Target size={32} />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight heading-font">Growth Strategy</h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Leveraging SEO and Inbound Marketing certifications to bridge technical development with measurable growth.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-sm font-bold text-gray-500 accent-font"><ChevronRight size={16} className="text-blue-600 mr-2"/> Technical SEO</li>
            <li className="flex items-center text-sm font-bold text-gray-500 accent-font"><ChevronRight size={16} className="text-blue-600 mr-2"/> HubSpot Automation</li>
            <li className="flex items-center text-sm font-bold text-gray-500 accent-font"><ChevronRight size={16} className="text-blue-600 mr-2"/> Funnel Optimization</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="p-10 bg-black text-white rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden group"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            className="absolute inset-0 bg-blue-600"
          ></motion.div>
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl relative z-10 group-hover:scale-110 transition-transform">
            <Zap size={32} />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight relative z-10 heading-font">Founder Advisory</h3>
          <p className="text-gray-300 leading-relaxed font-medium opacity-80 relative z-10">
            Dedicated technical due diligence and high-priority orchestration for founders scaling disruptive tech products.
          </p>
          <div className="pt-4 relative z-10">
            <a href="https://calendly.com/samson-mbugua/project-management" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest hover:text-blue-300 transition-colors accent-font">
              Partner with Samson <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const ProjectDetail = ({ project, onBack }: { project: Project, onBack: () => void }) => {
  useEffect(() => {
    updateMetaTags(project.title, project.problem, project.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }} 
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <button onClick={onBack} className="flex items-center gap-4 text-blue-500 font-black uppercase tracking-widest hover:text-blue-400 text-sm transition-colors mb-16 accent-font">
        <ArrowLeft size={24} /> Return to Portfolio
      </button>

      <div className="relative h-[600px] rounded-[4rem] overflow-hidden mb-24 group shadow-2xl">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase mb-6 accent-font">Case Study</span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-4 heading-font">{project.title}</h1>
          <p className="text-2xl text-blue-400 font-bold uppercase tracking-tight accent-font">{project.tagline}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-24">
        <div className="lg:col-span-2 space-y-24">
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500"><Zap size={24}/></div>
              <h2 className="text-3xl font-black uppercase tracking-tight heading-font">The Friction</h2>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed font-medium italic">"{project.problem}"</p>
          </section>

          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500"><Cpu size={24}/></div>
              <h2 className="text-3xl font-black uppercase tracking-tight heading-font">Strategic Response</h2>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">{project.solution}</p>
          </section>

          <section className="p-12 bg-blue-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} className="absolute inset-0 bg-black"></motion.div>
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white"><Award size={24}/></div>
                <h2 className="text-3xl font-black uppercase tracking-tight heading-font">Persistence & Outcome</h2>
              </div>
              <p className="text-2xl font-black italic mb-8">"{project.outcome}"</p>
              <div className="h-1.5 w-24 bg-white/30 rounded-full"></div>
            </div>
          </section>
        </div>

        <div className="space-y-16">
          <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] sticky top-32">
            <h3 className="text-xl font-black uppercase tracking-widest mb-10 flex items-center gap-4 text-white heading-font">
              <Terminal size={20} className="text-blue-500" /> Stack Ledger
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span key={tech} className="px-5 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-300 accent-font">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ onSelectProject }: { onSelectProject: (p: Project) => void }) => (
  <section id="projects" className="section-padding bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Featured Systems" 
        subtitle="Engineering high-resilience solutions for real-world digital friction." 
      />
      <div className="grid lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            className="bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex flex-col hover:border-blue-500/50 transition-all duration-500 group shadow-2xl"
          >
            <div className="h-72 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
              <div className="absolute bottom-8 left-10 right-10">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2 heading-font">{project.title}</h3>
                <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em] accent-font">{project.tagline}</p>
              </div>
            </div>
            <div className="p-10 flex-grow space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500"><Zap size={16}/></div>
                  <h4 className="text-xs font-black text-white uppercase tracking-widest heading-font">Problem</h4>
                </div>
                <p className="text-gray-400 text-base leading-relaxed font-medium line-clamp-3 italic">"{project.problem}"</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500"><Code size={16}/></div>
                  <h4 className="text-xs font-black text-white uppercase tracking-widest heading-font">Architectural Solution</h4>
                </div>
                <p className="text-gray-400 text-base leading-relaxed font-medium line-clamp-3">{project.solution}</p>
              </div>
            </div>
            <div className="px-10 pb-10">
              <button onClick={() => onSelectProject(project)} className="w-full py-5 bg-white text-black text-sm font-bold uppercase rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95 tracking-widest accent-font">View Case Study</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-[#0f0f0f]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading title="Executive Profile" subtitle="Technologist. Founder. Cyber Defense Expert." />
          <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-medium mb-16">
            <p>
              I design and build secure, scalable digital ecosystems across fintech, insurance, and mobility, blending technical expertise with strategic vision. With a background in <span className="text-white font-bold">Information Assurance and Computer Information Systems</span>, I help founders, startups, and enterprises make confident technical decisions, optimize workflows, and implement innovative solutions.
            </p>
            <p>
              As an <span className="text-blue-500 font-bold underline decoration-blue-500/50">SEO-certified</span> and <span className="text-blue-500 font-bold underline decoration-blue-500/50">HubSpot Inbound Marketing-certified</span> professional, I combine cybersecurity, software development, and growth strategy to deliver measurable results. My experience spans AI web application reviews, email optimization, workflow automation, and creating web curricula—enabling businesses to leverage technology for sustainable growth.
            </p>
            <p>
              I’m passionate about <span className="text-white font-bold">Web3, blockchain, and emerging technologies</span>, helping organizations navigate complex technical landscapes while building future-ready digital products.
            </p>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pt-6 grid grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <h4 className="text-blue-500 font-black text-4xl mb-2 heading-font">3.8</h4>
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest accent-font">GPA (Information Assurance)</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="text-blue-500 font-black text-4xl mb-2 heading-font">5+</h4>
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest accent-font">Global Partnerships</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }} 
          whileInView={{ opacity: 1, scale: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="flex flex-col items-center justify-center gap-10"
        >
          <SkillsRadar />
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {Array.from(new Set(SKILLS.map(s => s.category))).map((cat, i) => (
              <motion.div 
                key={cat} 
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-2 group cursor-default"
              >
                <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest group-hover:text-white transition-colors accent-font">Category {i+1}</span>
                <span className="text-[10px] font-bold text-gray-300 text-center heading-font uppercase">{cat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AIVisionStudio = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mimeType, setMimeType] = useState("image/png");
  const [dynamicSuggestions, setDynamicSuggestions] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        setSourceImage(base64);
        setResultImage(null);
        setDynamicSuggestions([]);
        
        setIsAnalyzing(true);
        try {
          const suggestions = await getDynamicSuggestions(base64, file.type);
          setDynamicSuggestions(suggestions);
        } catch (error) {
          console.error("Analysis failed", error);
        } finally {
          setIsAnalyzing(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onGenerate = async () => {
    if (!sourceImage || !prompt) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = sourceImage.split(',')[1];
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: prompt },
          ],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResultImage(`data:${mimeType};base64,${part.inlineData.data}`);
        }
      }
    } catch (error) {
      console.error(error);
      alert("AI Generation failed. Please try a different prompt.");
    } finally {
      setIsGenerating(false);
    }
  };

  const getDynamicSuggestions = async (base64Image: string, mime: string) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const base64Data = base64Image.split(',')[1];
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { data: base64Data, mimeType: mime } },
          { text: "Analyze this image and provide 5 brief, professional technical directives to edit it. Focus on lighting, environment, or style. Return ONLY a bulleted list of prompts, no other text." },
        ],
      },
    });
    return (response.text || "").split('\n').map(l => l.replace(/^[*-•\d.]+\s*/, '').trim()).filter(l => l.length > 0).slice(0, 5);
  };

  const activeSuggestions = dynamicSuggestions.length > 0 ? dynamicSuggestions : ["Futuristic overlay", "Cyber Defense theme", "High-contrast render"];

  return (
    <section id="ai-studio" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="AI Vision Lab" 
          subtitle="Experimental neural interface. Manipulate digital imagery with executive-grade AI models."
        />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-md">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-white uppercase tracking-tight heading-font">
                <Wand2 className="text-blue-500" size={32} /> Neural Directives
              </h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 accent-font">Input Buffer</label>
                  {!sourceImage ? (
                    <div onClick={() => fileInputRef.current?.click()} className="h-56 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 hover:bg-white/5 transition-all group">
                      <Upload className="text-gray-600 group-hover:text-blue-500 mb-4" size={48} />
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest accent-font">Select Image Asset</p>
                      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                    </div>
                  ) : (
                    <div className="relative group rounded-3xl overflow-hidden border border-white/10">
                      <img src={sourceImage} className="h-56 w-full object-cover" alt="Source" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                        <button onClick={() => setSourceImage(null)} className="p-4 bg-red-600 rounded-full text-white"><RefreshCw size={24} /></button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 accent-font">System Prompt</label>
                  <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter technical directive..." className="w-full bg-black/40 border-2 border-white/10 rounded-2xl px-6 py-5 outline-none text-white font-medium focus:border-blue-500 transition-all min-h-[150px] accent-font" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest accent-font">Contextual Suggestions</p>
                    {isAnalyzing && <Sparkles className="text-blue-500 animate-pulse" size={16} />}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeSuggestions.map(s => (
                      <button key={s} onClick={() => setPrompt(s)} className={`px-4 py-2 border rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all accent-font ${dynamicSuggestions.length > 0 ? 'bg-blue-600/10 border-blue-500/30 text-blue-400 hover:bg-blue-600/20' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:border-blue-500/30'}`}>{s}</button>
                    ))}
                  </div>
                </div>
                <button onClick={onGenerate} disabled={!sourceImage || !prompt || isGenerating} className="w-full py-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-500 text-white font-black uppercase rounded-2xl transition-all shadow-xl flex items-center justify-center gap-4 active:scale-95 tracking-widest accent-font">
                  {isGenerating ? <><RefreshCw className="animate-spin" size={20} /> Processing...</> : <><Zap size={20} /> Synthesize</>}
                </button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[600px] h-full">
            <div className="sticky top-32 w-full h-full min-h-[500px] bg-white/5 border border-white/10 rounded-[4rem] overflow-hidden flex items-center justify-center shadow-inner">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-8">
                    <div className="w-24 h-24 border-4 border-blue-500/20 rounded-full border-t-blue-500 animate-spin"></div>
                    <p className="text-lg font-black uppercase tracking-widest text-white animate-pulse heading-font">Neural Render in Progress</p>
                  </motion.div>
                ) : resultImage ? (
                  <motion.div key="r" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full h-full p-8 flex flex-col items-center">
                    <img src={resultImage} className="max-w-full max-h-[400px] object-contain rounded-3xl shadow-2xl" alt="Result" />
                    <div className="mt-10 flex gap-6 w-full">
                      <a href={resultImage} download className="flex-1 py-5 bg-white text-black text-xs font-bold uppercase rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all shadow-xl tracking-widest accent-font"><Download size={18} /> Export Master</a>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center text-center p-12 opacity-30">
                    <ImageIcon size={100} strokeWidth={1} />
                    <p className="mt-6 text-xl font-black uppercase tracking-widest heading-font">Output Buffer Empty</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = ({ selectedPost, setSelectedPost }: { selectedPost: BlogPost | null, setSelectedPost: (post: BlogPost | null) => void }) => {
  const [posts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  
  useEffect(() => {
    if (selectedPost) {
      updateMetaTags(selectedPost.title, selectedPost.excerpt, selectedPost.image);
    } else {
      updateMetaTags();
    }
  }, [selectedPost]);

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({ title: post.title, text: post.excerpt, url: window.location.href }).catch(err => console.error("Share failed", err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section id="blog" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SectionHeading title="Strategic Insights" subtitle="Deep dives into cybersecurity, systems architecture, and technical growth strategy." />
              <div className="grid md:grid-cols-3 gap-10">
                {posts.map(post => (
                  <motion.article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-xl"
                  >
                    <div className="h-56 overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="p-10 space-y-6">
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest accent-font">{post.category}</span>
                      <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight heading-font uppercase">{post.title}</h3>
                      <p className="text-gray-500 text-sm font-medium line-clamp-2">{post.excerpt}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="d" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <button onClick={() => setSelectedPost(null)} className="flex items-center gap-4 text-blue-500 font-bold uppercase tracking-widest hover:text-blue-400 text-sm transition-colors accent-font">
                  <ArrowLeft size={24} /> Back to Insights
                </button>
                <button onClick={() => handleShare(selectedPost)} className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all">
                  <Share2 size={20} />
                </button>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tighter heading-font uppercase">{selectedPost.title}</h1>
              <div className="flex gap-10 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-16 border-b border-white/10 pb-10 accent-font">
                <span className="flex items-center gap-2"><Calendar size={14}/> {selectedPost.date}</span>
                <span className="flex items-center gap-2"><User size={14}/> By {selectedPost.author}</span>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-gray-400 font-medium leading-[1.8] space-y-8">
                {selectedPost.content.split('\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ContactSubmission['analysis'] | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const result = await api.processContactSubmission(name, email, message);
    setAnalysis(result.analysis || null);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <SectionHeading 
            title="Initiate Partnership" 
            subtitle="Let’s solve complex system challenges together. Available for senior advisory roles and systems architecture reviews." 
            dark
          />
          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg"><Mail size={32}/></div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 accent-font">Direct Communication</p>
                <p className="text-2xl font-black heading-font">samson.mbugua@hpalls.com</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a href="https://www.linkedin.com/in/samson-m-a1332a174/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors"><Linkedin size={32}/></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 accent-font">Network Professional</p>
                  <p className="text-2xl font-black group-hover:text-blue-600 transition-colors heading-font">LinkedIn Profile</p>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-8">
              <a href="https://calendly.com/samson-mbugua/project-management" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors"><Calendar size={32}/></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 accent-font">Schedule Strategy</p>
                  <p className="text-2xl font-black group-hover:text-blue-600 transition-colors heading-font">Book a Meeting</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="p-12 bg-gray-50 rounded-[4rem] border border-gray-200 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <input name="name" required type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 outline-none font-bold focus:border-blue-600 transition-all accent-font" />
                  <input name="email" required type="email" placeholder="Professional Email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 outline-none font-bold focus:border-blue-600 transition-all accent-font" />
                </div>
                <textarea name="message" required rows={5} placeholder="Project or Advisory Details" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 outline-none font-medium focus:border-blue-600 transition-all accent-font"></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full py-6 bg-black text-white font-bold uppercase rounded-2xl hover:bg-gray-900 transition-all tracking-[0.2em] shadow-xl disabled:bg-gray-400 flex items-center justify-center gap-3 accent-font"
                  >
                    {loading ? <><RefreshCw className="animate-spin" size={18}/> Validating...</> : "Send Message"}
                  </button>
                  <a 
                    href="https://calendly.com/samson-mbugua/project-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-6 bg-blue-600 text-white font-bold uppercase rounded-2xl hover:bg-blue-700 transition-all tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 text-center accent-font"
                  >
                    Direct Booking
                  </a>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <FileCheck size={40} />
                </div>
                <h3 className="text-3xl font-black uppercase mb-4 heading-font">Transmission Success</h3>
                <p className="text-gray-600 font-medium mb-8 italic">Your request has been prioritized and logged in our secure persistence layer.</p>
                {analysis && (
                  <div className="bg-white p-6 rounded-3xl border border-gray-200 text-left mb-8 shadow-sm">
                    <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2 accent-font">
                      <Activity size={12} /> AI Lead Assessment
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <p className="text-[8px] text-gray-500 uppercase font-black mb-1 accent-font">Category</p>
                        <p className="text-sm font-bold heading-font uppercase">{analysis.category}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <p className="text-[8px] text-gray-500 uppercase font-black mb-1 accent-font">Urgency</p>
                        <p className={`text-sm font-bold heading-font uppercase ${analysis.urgency === 'High' ? 'text-red-500' : 'text-green-600'}`}>
                          {analysis.urgency}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <button onClick={() => setSubmitted(false)} className="text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors accent-font">Submit Another Lead</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black">
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-black uppercase tracking-tighter heading-font">SAMSON <span className="text-blue-500">MBUGUA</span></h3>
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-2 accent-font">© {new Date().getFullYear()} — Cyber Defense & Strategic Advisory</p>
      </div>
      <div className="flex gap-8">
        <a href="https://www.linkedin.com/in/samson-m-a1332a174/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors accent-font">LinkedIn</a>
        <a href="https://github.com/mbuguacsam" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors accent-font">GitHub</a>
      </div>
    </div>
    <SystemTerminal />
  </footer>
);

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavAction = (href?: string) => {
    setSelectedPost(null);
    setSelectedProject(null);
    if (href) {
      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    BackendService.log("Platform cold-start sequence initiated.", "SYSTEM");
    BackendService.log("Initializing secure persistence modules...", "INFO");
    BackendService.log("System Ready.", "SYSTEM");
    updateMetaTags();
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-blue-600 selection:text-white bg-[#0a0a0a]">
      <Navbar onNavAction={handleNavAction} />
      <main>
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <Blog selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
          ) : selectedProject ? (
            <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
          ) : (
            <>
              <Hero onNavAction={handleNavAction} />
              <AdvisoryHighlight />
              <Projects onSelectProject={(p) => setSelectedProject(p)} />
              <About />
              <AIVisionStudio />
              <Blog selectedPost={null} setSelectedPost={setSelectedPost} />
              <Contact />
            </>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
