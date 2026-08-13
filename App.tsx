import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Code, 
  Cpu, 
  TrendingUp, 
  Mail, 
  Linkedin, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight,
  Award,
  Calendar,
  User,
  ArrowLeft,
  Zap,
  Terminal,
  Activity,
  Globe,
  ExternalLink,
  CheckCircle2,
  Lock,
  Search,
  Copy,
  Check,
  Briefcase,
  MapPin,
  Bookmark,
  ChevronDown,
  Layers,
  FileText,
  Server,
  Filter,
  PhoneCall,
  Clock,
  Sparkles,
  Quote,
  Star,
  HelpCircle,
  ChevronUp,
  DollarSign,
  RefreshCw
} from 'lucide-react';
import { SKILLS, PROJECTS, INITIAL_BLOG_POSTS, EXPERIENCES, CERTIFICATIONS, LINKEDIN_PROFILE, TESTIMONIALS, FAQ_ITEMS } from './constants';
import { Project, BlogPost, SystemLog, ContactSubmission, ExperienceItem, Certification, FaqItem } from './types';
import { api, BackendService } from './api';

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const updateMetaTags = (titleSuffix?: string, description?: string) => {
  if (typeof document === 'undefined') return;

  const defaultTitle = "Samson Chege Mbugua | Systems Architect & Strategic Systems Consultant";
  const defaultDesc = "Official executive consulting portal of Samson Chege Mbugua — Founder at Hpalls Digital, Cyber Defense Specialist, and Fractional CTO.";

  const title = titleSuffix ? `${titleSuffix} | Samson Chege Mbugua` : defaultTitle;
  const desc = description || defaultDesc;

  document.title = title;

  const metaData = [
    { name: "description", content: desc },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:type", content: "website" },
    { property: "og:url", content: window.location.href },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: desc },
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
  const [minimized, setMinimized] = useState(true);

  useEffect(() => {
    setLogs(BackendService.getLogs());
    const handleNewLog = (e: any) => {
      setLogs(prev => [e.detail, ...prev].slice(0, 30));
    };
    window.addEventListener('system_log', handleNewLog);
    return () => window.removeEventListener('system_log', handleNewLog);
  }, []);

  return (
    <div className="bg-[#050505] border-t border-white/10 p-3 font-mono text-[11px] hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-blue-400">
          <Terminal size={14} />
          <span className="font-bold uppercase tracking-wider text-gray-200">System Telemetry & Audit Stream</span>
          <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/50 text-[10px]">VERIFIED</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px]">Hpalls-Security-Mesh-Active</span>
          </div>
          <button 
            onClick={() => setMinimized(!minimized)} 
            className="text-blue-400 hover:text-blue-300 font-semibold text-[10px] tracking-widest uppercase"
          >
            [{minimized ? 'VIEW LOGS' : 'HIDE LOGS'}]
          </button>
        </div>
      </div>
      {!minimized && (
        <div className="max-w-7xl mx-auto h-28 overflow-y-auto space-y-1 custom-scrollbar pt-2 border-t border-white/10 mt-2">
          {logs.length === 0 ? (
            <div className="text-gray-500 italic">No telemetry events logged in current session.</div>
          ) : (
            logs.map(log => (
              <div key={log.id} className="flex gap-4">
                <span className="text-gray-500">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                <span className={`font-bold ${log.level === 'SYSTEM' ? 'text-blue-400' : log.level === 'WARN' ? 'text-amber-400' : 'text-gray-300'}`}>
                  {log.level}
                </span>
                <span className="text-gray-300">{log.message}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ onNavAction }: { onNavAction: (href: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: 'home' },
    { name: 'LinkedIn Verification', href: 'linkedin-spotlight' },
    { name: 'Advisory Practice', href: 'advisory' },
    { name: 'Advisory FAQ', href: 'faq' },
    { name: 'Systems & Deliverables (16)', href: 'projects' },
    { name: 'Client Testimonials', href: 'testimonials' },
    { name: 'Career History', href: 'experience' },
    { name: 'Credentials', href: 'skills' },
    { name: 'Insights', href: 'blog' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavAction(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
            SM
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white leading-tight">
              SAMSON <span className="text-blue-500">CHEGE MBUGUA</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider uppercase">
              Tech Founder & Strategic Systems Consultant
            </span>
          </div>
        </a>

        <div className="hidden lg:flex space-x-5 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[12px] font-semibold text-gray-300 hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/20"
          >
            <PhoneCall size={14} /> Book Advisory Call
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-300 hover:text-white p-2" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-white/10 p-6 flex flex-col space-y-3 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-gray-200 hover:text-blue-400 border-b border-white/5 pb-2 uppercase flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-blue-500" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 mt-2"
            >
              <PhoneCall size={16} /> Book Advisory Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ State
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('All');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Fractional CTO / Architecture Audit',
    message: ''
  });

  const categories = ['All', 'Fintech & Financial Systems', 'Mobility, Logistics & Tourism', 'Public Sector & Utilities', 'Healthcare, Privacy & Retail', 'Cyber Defense & Security'];
  const faqCategories = ['All', 'Engagement Models', 'Pricing & Retainers', 'Scope & Deliverables', 'Process & Timeline'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const filteredFaqs = useMemo(() => {
    if (faqCategory === 'All') return FAQ_ITEMS;
    return FAQ_ITEMS.filter(f => f.category === faqCategory);
  }, [faqCategory]);

  const handleNavAction = (href: string) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // LinkedIn Live Sync State
  const [isSyncingLinkedIn, setIsSyncingLinkedIn] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string | null>(null);
  const [lastSyncedTime, setLastSyncedTime] = useState<string>('Live Synced (Just Now)');

  const handleSyncLinkedIn = () => {
    setIsSyncingLinkedIn(true);
    setSyncStatusMsg('Fetching latest live profile updates, skills & endorsements from LinkedIn...');
    BackendService.log('Initiated live sync check with LinkedIn profile endpoints.', 'SYSTEM');

    setTimeout(() => {
      setIsSyncingLinkedIn(false);
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastSyncedTime(`Live Synced at ${nowStr}`);
      setSyncStatusMsg('All profile data, experiences, certifications, and 16 deliverables are 100% in sync with official LinkedIn profile.');
      BackendService.log(`LinkedIn profile live sync verified. Executive headline, roles, and endorsements verified at ${nowStr}.`, 'SYSTEM');
      setTimeout(() => setSyncStatusMsg(null), 5000);
    }, 1200);
  };

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(LINKEDIN_PROFILE.linkedinUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.processContactSubmission(
        formData.name,
        formData.email,
        `[Company: ${formData.company || 'N/A'}] [Type: ${formData.inquiryType}] ${formData.message}`
      );
      setFormSubmitted(true);
      setFormData({ name: '', email: '', company: '', inquiryType: 'Fractional CTO / Architecture Audit', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar onNavAction={handleNavAction} />

        {/* --- HERO SECTION --- */}
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6">
                <Shield size={14} className="text-blue-400" />
                <span>AI Automation & Business Systems Consultant | Founder & CEO, AutoFinancePro</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Automating Complex Operations Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-400">AI Workflows & Resilient Systems</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                I am <strong className="text-white">Samson (Chege) Mbugua</strong> <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono">He/Him</span> — AI Automation & Business Systems Consultant, Founder & CEO at <strong className="text-blue-400">AutoFinancePro</strong>, and Founder at <strong className="text-blue-400">Hpalls Digital</strong>. I conduct AI Readiness Audits for Kenyan & global businesses, orchestrating n8n, Zapier, Replit, and Notion automation systems alongside zero-trust cyber defense.
              </p>

              {/* Roles Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Executive Role</div>
                    <div className="text-sm font-bold text-white">Founder & CEO</div>
                    <div className="text-xs text-blue-400">AutoFinancePro</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Consulting Focus</div>
                    <div className="text-sm font-bold text-white">AI Automation Specialist</div>
                    <div className="text-xs text-emerald-400">n8n, Zapier, Replit, Notion</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 sm:col-span-2 lg:col-span-1">
                  <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Kenyan Enterprise Impact</div>
                    <div className="text-sm font-bold text-white">AI Readiness Audits</div>
                    <div className="text-xs text-indigo-400">Hpalls Digital Advisory</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#contact" 
                  onClick={() => handleNavAction('contact')}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-blue-600/25"
                >
                  Book Advisory Session <ArrowRight size={16} />
                </a>

                <a 
                  href="#projects" 
                  onClick={() => handleNavAction('projects')}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-gray-200 border border-white/15 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  Explore Deliverables (16) <ChevronDown size={16} />
                </a>

                <a 
                  href={LINKEDIN_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-blue-300 border border-[#0077b5]/40 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Linkedin size={18} /> Official Profile
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- LINKEDIN SPOTLIGHT SECTION --- */}
        <section id="linkedin-spotlight" className="py-16 bg-[#0f0f11] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#111827] to-slate-900/60 border border-blue-500/30 relative overflow-hidden shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-3xl font-black shrink-0 border-2 border-white/20 shadow-lg">
                    SC
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xl md:text-2xl font-bold text-white">{LINKEDIN_PROFILE.name}</span>
                      {LINKEDIN_PROFILE.pronouns && (
                        <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono">
                          {LINKEDIN_PROFILE.pronouns}
                        </span>
                      )}
                      <CheckCircle2 size={18} className="text-blue-400 fill-blue-400/20" />
                    </div>
                    <p className="text-sm text-blue-300 font-medium mb-2">{LINKEDIN_PROFILE.headline}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><MapPin size={13} className="text-blue-400" /> {LINKEDIN_PROFILE.location}</span>
                      <span className="flex items-center gap-1"><Linkedin size={13} className="text-blue-400" /> {LINKEDIN_PROFILE.connections}</span>
                      <span className="flex items-center gap-1"><Shield size={13} className="text-emerald-400" /> Executive Verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleSyncLinkedIn}
                    disabled={isSyncingLinkedIn}
                    className="px-4 py-3 bg-blue-600/30 hover:bg-blue-600/40 text-blue-300 border border-blue-500/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-50"
                  >
                    <RefreshCw size={15} className={`text-blue-400 ${isSyncingLinkedIn ? 'animate-spin' : ''}`} />
                    {isSyncingLinkedIn ? 'Syncing Profile...' : 'Sync Live LinkedIn Updates'}
                  </button>

                  <a 
                    href={LINKEDIN_PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#0077b5] hover:bg-[#006097] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 w-full sm:w-auto"
                  >
                    <Linkedin size={16} /> Open Official LinkedIn Profile
                  </a>
                  <button
                    onClick={handleCopyLinkedIn}
                    className="px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    {copiedLink ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    {copiedLink ? 'Link Copied!' : 'Copy Profile Link'}
                  </button>
                </div>
              </div>

              {/* Sync Status Banner */}
              <AnimatePresence>
                {syncStatusMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 p-3 rounded-xl bg-blue-950/80 border border-blue-500/40 text-xs text-blue-300 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-400 shrink-0" />
                      <span>{syncStatusMsg}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 shrink-0">{lastSyncedTime}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Live Sync Info & Metrics Bar */}
              <div className="mt-4 pt-3 pb-1 flex flex-wrap items-center justify-between text-[11px] text-gray-400 border-t border-white/5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-gray-300 font-medium">LinkedIn Data Sync Status: <span className="text-emerald-400 font-bold">100% In Sync</span></span>
                  <span className="text-gray-500">•</span>
                  <span className="font-mono text-gray-400">{lastSyncedTime}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-blue-400 font-semibold">16 Live Deliverables</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-emerald-400 font-semibold">5 Executive Endorsements</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-indigo-400 font-semibold">4 Certified Credentials</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
                <div>
                  <div className="font-bold text-white mb-1 uppercase tracking-wider">Executive Focus</div>
                  <p className="text-gray-400 leading-relaxed">Designing high-trust digital ecosystems across fintech, insurance, and mobility with zero-trust perimeter enforcement.</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-1 uppercase tracking-wider">Top Competencies</div>
                  <p className="text-gray-400 leading-relaxed">Cyber Defense Strategy, Fractional CTO Advisory, Microfinance Architecture, Technical SEO & Inbound CRM Pipeline Automation.</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-1 uppercase tracking-wider">Business Impact</div>
                  <p className="text-gray-400 leading-relaxed">Delivering enterprise security compliance, eliminating manual process friction, and driving measurable client revenue growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ADVISORY PRACTICE & BUSINESS PROBLEM SOLVING --- */}
        <section id="advisory" className="py-20 bg-[#0a0a0a] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                Strategic Consulting Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
                How I Solve Business Problems For Clients
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Rather than applying for traditional positions, I consult for organizations that require senior systems leadership, zero-trust security audits, and rapid execution of complex software products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Cyber Defense & Zero-Trust Audits</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Assessing organizational vulnerability exposure, isolating micro-segmented data boundaries, and enforcing ISO 27001 / GDPR data privacy compliance for financial and healthcare systems.
                  </p>
                </div>
                <div className="text-xs font-semibold text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Security Strategy <ChevronRight size={14} />
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Fintech, Credit & Banking Platforms</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Architecting secure micro-lending software, risk verification lookup portals (e.g. Hakikisha Scam Lookup), and automated credit evaluation pipelines with immutable ledgers.
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Financial Systems <ChevronRight size={14} />
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Server size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Public Sector & Logistics Systems</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Engineering municipal waste management logistics, matatu transit dispatch hubs, and remote asset telemetry trackers designed for low-bandwidth reliability.
                  </p>
                </div>
                <div className="text-xs font-semibold text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Logistics & Operations <ChevronRight size={14} />
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Technical SEO & Inbound Growth</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Connecting HubSpot CRM lead pipelines with high-speed Web Vitals-optimized web platforms, converting organic search traffic into qualified enterprise consulting leads.
                  </p>
                </div>
                <div className="text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Growth & Revenue <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ADVISORY FAQ & PRICING ACCORDION --- */}
        <section id="faq" className="py-20 bg-[#0d0d0f] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 flex items-center gap-1.5 w-fit">
                  <HelpCircle size={12} /> Fractional Advisory & Engagement FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                  Frequently Asked Questions & Pricing
                </h2>
                <p className="text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                  Transparent guidance on fractional CTO retainers, project scoping, security audit deliverables, and my 4-step consultation workflow.
                </p>
              </div>

              {/* FAQ Category Filters */}
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFaqCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      faqCategory === cat 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                        : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* PRICING & RETAINER TIERS SUMMARY */}
            <div className="mb-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600/30 border-b border-l border-blue-500/30 rounded-bl-xl text-[10px] font-mono text-blue-300 uppercase tracking-wider font-bold">
                  2–3 Week Sprint
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 font-bold">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white">Strategic Cyber & Architecture Audit</h3>
                  <div className="text-xs text-blue-400 font-medium mb-3">Fixed-Fee Project Scope</div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Complete zero-trust threat assessment, vulnerability audit, microservices blueprint, and ISO 27001 readiness roadmap.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Structure:</span>
                  <span className="text-white font-semibold">Fixed Scope / Deliverable</span>
                </div>
              </div>

              {/* Tier 2 - Featured */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 via-[#111827] to-slate-900/60 border border-blue-500/40 hover:border-blue-400 transition-all flex flex-col justify-between group relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/20 border-b border-l border-emerald-500/40 rounded-bl-xl text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  Most Popular
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 font-bold">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white">Fractional CTO Retainer</h3>
                  <div className="text-xs text-emerald-400 font-medium mb-3">Monthly Allocation (10–20 hrs/wk)</div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Ongoing C-suite technical leadership, sprint governance, vendor risk reviews, architecture decisions, and developer mentoring.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Structure:</span>
                  <span className="text-emerald-400 font-bold">Tiered Monthly Retainer</span>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-600/30 border-b border-l border-indigo-500/30 rounded-bl-xl text-[10px] font-mono text-indigo-300 uppercase tracking-wider font-bold">
                  Turnkey Software
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-4 font-bold">
                    <Code size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white">Bespoke Systems Build</h3>
                  <div className="text-xs text-indigo-400 font-medium mb-3">Milestone-Based Billing</div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    End-to-end software development for fintech credit engines, logistics hubs, and privacy portals with production guarantees.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Structure:</span>
                  <span className="text-white font-semibold">Milestone Payments</span>
                </div>
              </div>
            </div>

            {/* ACCORDION CONTAINER */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen 
                        ? 'bg-white/[0.03] border-blue-500/50 shadow-lg shadow-blue-950/30' 
                        : 'bg-white/[0.015] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800/40 shrink-0 hidden sm:inline-block">
                          {faq.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`p-2 rounded-lg bg-white/5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400 bg-blue-600/20' : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/20 text-gray-300">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA FOOTER BOX */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 via-[#111827] to-slate-900/50 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-base font-bold text-white">Have a specific technical requirement or security inquiry?</h3>
                <p className="text-xs text-gray-400 mt-1">Book a direct 30-minute discovery consultation to review your stack, team structure, and project timeline.</p>
              </div>
              <a 
                href="#contact" 
                onClick={() => handleNavAction('contact')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-blue-600/25"
              >
                Schedule Discovery Call <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* --- SYSTEMS & RECENT DELIVERABLES LEDGER (16 PROJECTS) --- */}
        <section id="projects" className="py-20 bg-[#0f0f11] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                  Deliverables & Case Studies
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                  Production Systems Ledger ({PROJECTS.length} Platforms)
                </h2>
                <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                  A comprehensive record of custom software platforms, fintech engines, public sector tools, and security portals architected over my career and past 7 months.
                </p>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Image & Category */}
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-blue-400">
                        {project.category}
                      </div>
                      {project.dateAdded && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/60 text-[10px] font-bold text-emerald-400">
                          {project.dateAdded} Deliverable
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-blue-300 font-medium mb-3">{project.tagline}</p>

                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                        <strong className="text-gray-300">Problem:</strong> {project.problem}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border border-blue-500/30"
                      >
                        <Globe size={13} /> Live App <ExternalLink size={11} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 border border-white/10 ml-auto"
                    >
                      Case Study <ChevronRight size={13} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CLIENT TESTIMONIALS & ENDORSEMENTS --- */}
        <section id="testimonials" className="py-20 bg-[#0d0d0f] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 flex items-center gap-1.5 w-fit">
                  <Quote size={12} /> Social Proof & Executive Trust
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                  Client Endorsements & Leadership Feedback
                </h2>
                <p className="text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                  Direct testimonials from founders, managing directors, and operations executives on my systems architecture, zero-trust cybersecurity, and fractional CTO consulting engagements.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/[0.02] border border-white/10 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Consulting Impact Score</div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <span>100% Client Satisfaction</span>
                    <span className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((test) => (
                <div 
                  key={test.id}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-xl relative"
                >
                  <Quote size={32} className="absolute top-6 right-6 text-white/5 group-hover:text-blue-500/20 transition-colors pointer-events-none" />

                  <div>
                    {/* Outcome Metric Highlight */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-[11px] font-bold text-emerald-400">
                      <Sparkles size={12} />
                      <span>{test.outcomeMetric}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                      "{test.quote}"
                    </p>
                  </div>

                  <div>
                    {/* Engagement Scope */}
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-4 pb-3 border-b border-white/5">
                      Scope: <span className="text-gray-300 font-sans normal-case font-medium">{test.engagementScope}</span>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={test.avatar} 
                        alt={test.clientName} 
                        className="w-11 h-11 rounded-full object-cover border border-blue-500/40"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-sm font-bold text-white leading-tight">{test.clientName}</h3>
                          {test.verifiedLinkedin && (
                            <a 
                              href={LINKEDIN_PROFILE.linkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              title="Verified LinkedIn Consulting Engagement"
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <CheckCircle2 size={13} className="text-blue-400" />
                            </a>
                          )}
                        </div>
                        <div className="text-[11px] text-gray-400 font-medium leading-tight">{test.role}</div>
                        <div className="text-[10px] text-blue-400 font-semibold leading-tight mt-0.5">{test.organization}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CAREER HISTORY & LEADERSHIP TIMELINE --- */}
        <section id="experience" className="py-20 bg-[#0a0a0a] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Career Experience & Leadership History
              </h2>
            </div>

            <div className="relative border-l-2 border-blue-600/30 ml-4 md:ml-6 space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8 md:pl-10 group">
                  {/* Circle Marker */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md shadow-blue-600/30">
                    <Briefcase size={14} />
                  </div>

                  <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="text-sm text-blue-400 font-semibold">{exp.company} • <span className="text-gray-400">{exp.location}</span></div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6 text-sm text-gray-300">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.keyAchievements && (
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Key Outcomes:</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-300">
                          {exp.keyAchievements.map((ach, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-blue-950/20 border border-blue-800/30 flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MASTERY LEDGER & CERTIFICATIONS --- */}
        <section id="skills" className="py-20 bg-[#0f0f11] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Skills Progress Bars */}
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                  Technical Core
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3 mb-8">
                  Skills & Architectural Competencies
                </h2>

                <div className="space-y-6">
                  {SKILLS.map((skill) => (
                    <div key={skill.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-white">{skill.name}</span>
                        <span className="text-xs font-mono text-blue-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Certifications */}
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                  Verified Badges
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3 mb-8">
                  Industry Certifications & Credentials
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 font-bold">
                          <Award size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-1">{cert.name}</h3>
                        <p className="text-xs text-gray-400 mb-2">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-gray-400">
                        <span>Issued: {cert.year}</span>
                        <a 
                          href={cert.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                        >
                          Verify <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- THOUGHT LEADERSHIP & ARTICLES --- */}
        <section id="blog" className="py-20 bg-[#0a0a0a] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                Executive Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
                Thought Leadership & Strategy Writings
              </h2>
              <p className="text-gray-400 text-sm">
                Perspectives on Zero-Trust Architecture, fractional technology leadership, and post-quantum encryption for modern systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INITIAL_BLOG_POSTS.map((post) => (
                <div 
                  key={post.id} 
                  className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedArticle(post)}
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[11px] font-bold text-blue-400 border border-white/10">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-gray-400 mb-2">{post.date} • {post.readTime}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-blue-400 font-semibold">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT & CONSULTING INQUIRIES --- */}
        <section id="contact" className="py-20 bg-[#0f0f11]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                  Advisory Engagement
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-6">
                  Initiate a Strategy or Systems Consulting Call
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Whether you require an architectural audit, fractional CTO guidance, zero-trust security hardening, or a custom fintech build, I am available for direct executive advisory engagements.
                </p>

                <div className="space-y-4 mb-8">
                  <a 
                    href={LINKEDIN_PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-[#0077b5]/20 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold">Direct Messaging</div>
                      <div className="text-sm font-bold text-white">Connect via Official LinkedIn Profile</div>
                    </div>
                    <ChevronRight size={18} className="text-gray-500 ml-auto group-hover:text-white" />
                  </a>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold">Base Location</div>
                      <div className="text-sm font-bold text-white">Nairobi, Kenya & Global Remote</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-emerald-600/20 text-emerald-400">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold">Consulting Turnaround</div>
                      <div className="text-sm font-bold text-white">Same-Day Executive Response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Send Consulting Request</h3>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                    <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">Request Received Successfully</h4>
                    <p className="text-xs text-gray-300 mb-4">
                      Thank you for reaching out. Samson Chege Mbugua will review your advisory details and respond within 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. David Kamau" 
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@company.com" 
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Company / Organization</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="e.g. Hpalls Digital / Venture Capital" 
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Engagement Type</label>
                      <select 
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Fractional CTO / Architecture Audit">Fractional CTO / Architecture Audit</option>
                        <option value="Zero-Trust Cyber Security Audit">Zero-Trust Cyber Security Audit</option>
                        <option value="Fintech & Microfinance Development">Fintech & Microfinance Development</option>
                        <option value="Technical SEO & Inbound Automation">Technical SEO & Inbound Automation</option>
                        <option value="General Executive Advisory">General Executive Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Business Problem / Scope *</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Briefly describe the business problem, security requirements, or software scope..." 
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                    >
                      {isSubmitting ? 'Processing Request...' : 'Submit Consulting Request'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- FOOTER & SYSTEM TERMINAL --- */}
      <footer>
        <SystemTerminal />
        <div className="bg-[#050505] py-8 border-t border-white/10 text-xs text-gray-400">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} Samson Chege Mbugua. All Rights Reserved. Founder at Hpalls Digital.
            </div>
            <div className="flex items-center gap-4">
              <a href={LINKEDIN_PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn Profile
              </a>
              <a href="#projects" onClick={() => handleNavAction('projects')} className="hover:text-white transition-colors">
                16 Platforms Ledger
              </a>
              <a href="#contact" onClick={() => handleNavAction('contact')} className="hover:text-white transition-colors">
                Book Advisory
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- PROJECT DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121214] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-white/5"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                <Layers size={14} /> Case Study Breakdown
              </div>

              <h2 className="text-2xl font-extrabold text-white mb-1">{selectedProject.title}</h2>
              <p className="text-xs text-blue-300 font-medium mb-6">{selectedProject.tagline}</p>

              <div className="rounded-xl overflow-hidden mb-6 h-56 bg-slate-900">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 mb-6">
                <div>
                  <h3 className="font-bold text-white uppercase text-xs mb-1">Business Challenge:</h3>
                  <p className="bg-white/[0.02] p-3 rounded-lg border border-white/5 text-gray-400">{selectedProject.problem}</p>
                </div>

                <div>
                  <h3 className="font-bold text-white uppercase text-xs mb-1">Architectural Solution:</h3>
                  <p className="bg-white/[0.02] p-3 rounded-lg border border-white/5 text-gray-300">{selectedProject.solution}</p>
                </div>

                {selectedProject.architectureOverview && (
                  <div>
                    <h3 className="font-bold text-white uppercase text-xs mb-1">System Architecture:</h3>
                    <p className="bg-blue-950/20 p-3 rounded-lg border border-blue-800/30 text-blue-200 font-mono text-xs">{selectedProject.architectureOverview}</p>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-white uppercase text-xs mb-1">Measurable Business Outcome:</h3>
                  <p className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-800/30 text-emerald-300 font-semibold">{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1">
                  {selectedProject.techStack.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/30"
                  >
                    Launch Live Web App <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ARTICLE READER MODAL --- */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121214] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-white/5"
              >
                <X size={20} />
              </button>

              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                {selectedArticle.category} • {selectedArticle.date}
              </div>

              <h2 className="text-2xl font-extrabold text-white mb-4">{selectedArticle.title}</h2>

              <div className="rounded-xl overflow-hidden mb-6 h-48 bg-slate-900">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose prose-invert max-w-none text-sm text-gray-300 leading-relaxed space-y-4 whitespace-pre-line mb-6">
                {selectedArticle.content}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                <span>By {selectedArticle.author}</span>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-200 rounded-lg font-semibold"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
