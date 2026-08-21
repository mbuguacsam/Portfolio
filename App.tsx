import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  Coins,
  ExternalLink,
  Github,
  HeartPulse,
  Leaf,
  Linkedin,
  Link2,
  Menu,
  MessageCircle,
  PawPrint,
  RadioTower,
  ReceiptText,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { LINKEDIN_PROFILE, LINKEDIN_SOURCES, PROJECTS } from './constants';
import { Project } from './types';

const projectIconMap = {
  wrench: Wrench,
  message: MessageCircle,
  cross: HeartPulse,
  coins: Coins,
  leaf: Leaf,
  compass: Compass,
  receipt: ReceiptText,
  broadcast: RadioTower,
  paw: PawPrint,
} as const;

type IconName = keyof typeof projectIconMap;

const linkedInSourceMap = new Map(LINKEDIN_SOURCES.map((source) => [source.id, source]));

function ProjectIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = projectIconMap[name as IconName] ?? Sparkles;
  return <Icon size={size} strokeWidth={1.8} />;
}

function scrollToId(id: string, closeMenu?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  closeMenu?.();
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28 }}
      className="project-card"
      style={{ '--project-accent': project.accent } as React.CSSProperties}
    >
      <div className="project-card__topline">
        <span className="project-number">{project.number}</span>
        <span className="project-label">{project.label}</span>
        <span className="project-icon"><ProjectIcon name={project.icon} size={19} /></span>
      </div>
      <div className="project-card__identity">
        <p className="project-live-brand">Live as {project.liveBrand}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
      </div>
      <div className="project-card__body">
        <div>
          <span className="micro-label">The brief</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span className="micro-label">The response</span>
          <p>{project.solution}</p>
        </div>
      </div>
      <div className="project-stack" aria-label={`${project.title} technology and capability tags`}>
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="project-card__actions">
        <button className="text-button" onClick={() => onOpen(project)}>
          Read full article <ArrowUpRight size={16} />
        </button>
        <a className="quiet-link" href={project.url} target="_blank" rel="noreferrer">
          Open live <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectArticle({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="article-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} article`}
    >
      <div className="article-shell">
        <div className="article-topbar">
          <button className="close-button" onClick={onClose} aria-label="Close article">
            <X size={20} />
            <span>Close</span>
          </button>
          <span className="article-topbar__mark">Samson Mbugua / Portfolio article</span>
          <a href={project.url} target="_blank" rel="noreferrer" className="article-topbar__link">
            View live project <ExternalLink size={14} />
          </a>
        </div>
        <article className="article-content">
          <header className="article-header">
            <div className="article-header__meta">
              <span>{project.number}</span>
              <span>{project.category}</span>
              <span>{project.label}</span>
            </div>
            <p className="article-kicker">{project.liveBrand} / {project.title}</p>
            <h1>{project.title}</h1>
            <p className="article-standfirst">{project.article.standfirst}</p>
            <div className="article-stack">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </header>

          <div className="article-grid">
            <aside className="article-aside">
              <span className="micro-label">Article index</span>
              <ol>
                {project.article.sections.map((section, index) => (
                  <li key={section.heading}><span>0{index + 1}</span>{section.heading}</li>
                ))}
              </ol>
              <div className="article-aside__rule" />
              <span className="micro-label">Live link</span>
              <a href={project.url} target="_blank" rel="noreferrer" className="article-aside__url">
                {project.url.replace('https://', '')} <ExternalLink size={13} />
              </a>
            </aside>
            <div className="article-body">
              {project.article.sections.map((section) => (
                <section key={section.heading} className="article-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
              <blockquote className="article-takeaway">
                <Sparkles size={18} />
                <p>{project.article.takeaway}</p>
              </blockquote>
              <section className="article-public-surface">
                <span className="micro-label">What is visible on the live page</span>
                <p>{project.article.publicSurface}</p>
              </section>
              <section className="article-automation-lens">
                <span className="micro-label">Automation / AI lens</span>
                <p>{project.article.automationLens}</p>
              </section>
              <section className="article-sources">
                <div className="article-sources__heading">
                  <span className="micro-label">LinkedIn source trail</span>
                  <span>{project.article.sourceIds.length} linked sources</span>
                </div>
                <div className="article-sources__list">
                  {project.article.sourceIds.map((sourceId) => {
                    const source = linkedInSourceMap.get(sourceId);
                    if (!source) return null;
                    return (
                      <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="article-source-link">
                        <span><small>{source.kind} / {source.date}</small><strong>{source.title}</strong></span>
                        <ArrowUpRight size={15} />
                      </a>
                    );
                  })}
                </div>
              </section>
              <footer className="article-footer">
                <a href={project.url} target="_blank" rel="noreferrer" className="primary-button">
                  Open {project.liveBrand} <ArrowUpRight size={17} />
                </a>
                <button className="secondary-button" onClick={onClose}>Back to all projects</button>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openNote, setOpenNote] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.title = 'Samson Mbugua | Product systems portfolio';
  }, []);

  const filters = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map((project) => project.category)))], []);
  const filteredProjects = useMemo(
    () => activeFilter === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);
  const goTo = (id: string) => scrollToId(id, closeMenu);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a href="#top" className="brand" onClick={(event) => { event.preventDefault(); goTo('top'); }}>
          <span className="brand__symbol">SM</span>
          <span>
            <strong>Samson Mbugua</strong>
            <small>Product systems portfolio</small>
          </span>
        </a>
        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <a href="#work" onClick={(event) => { event.preventDefault(); goTo('work'); }}>Work</a>
          <a href="#about" onClick={(event) => { event.preventDefault(); goTo('about'); }}>About</a>
          <a href="#writing" onClick={(event) => { event.preventDefault(); goTo('writing'); }}>Writing & links</a>
          <a href={LINKEDIN_PROFILE.url} target="_blank" rel="noreferrer" className="nav-link--accent">LinkedIn <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen((current) => !current)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="top" className="hero section-frame">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__dot" />Nairobi, Kenya / building for the real world</p>
            <h1>I build useful systems for the moments where <em>business gets stuck.</em></h1>
            <p className="hero__lead">I’m Samson Mbugua, a software engineer and product builder. This is a focused record of the live products I have shaped across mobility, finance, commerce, civic systems, travel, and media.</p>
            <div className="hero__actions">
              <button className="primary-button" onClick={() => goTo('work')}>Explore the work <ArrowDown size={17} /></button>
              <a className="secondary-button" href="https://github.com/mbuguacsam" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a>
            </div>
            <div className="hero__facts">
              <div><strong>09</strong><span>selected live projects</span></div>
              <div><strong>01</strong><span>source portfolio repository</span></div>
              <div><strong>∞</strong><span>systems still worth improving</span></div>
            </div>
          </div>
          <div className="hero__visual" aria-label="Abstract systems diagram">
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
            <div className="hero-grid" />
            <div className="hero-node hero-node--one"><span>01</span><b>observe</b></div>
            <div className="hero-node hero-node--two"><span>02</span><b>model</b></div>
            <div className="hero-node hero-node--three"><span>03</span><b>ship</b></div>
            <div className="hero-core"><span>SM</span><small>systems<br />in motion</small></div>
            <div className="hero-visual__caption">A portfolio is not a list of screens.<br /><strong>It is a map of decisions.</strong></div>
          </div>
        </section>

        <section id="about" className="intro-band section-frame">
          <div className="section-marker">00 / Context</div>
          <div className="intro-band__content">
            <h2>Product work is systems work.</h2>
            <div>
              <p>I care about the connective tissue around a product: the handoff from customer to operator, the state change from application to decision, and the record that makes an action explainable later.</p>
              <p>The projects below are intentionally presented as working product stories. Some are branded differently on their live pages today; those names are shown clearly so the portfolio stays honest about what is publicly visible.</p>
              <p>The broader practice remains visible here too: AI readiness audits, n8n and Zapier workflow automation, rapid Lovable/Base44/Replit builds, CRM and WhatsApp handoffs, cybersecurity-aware controls, and the human approval points that keep automation accountable.</p>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-frame">
          <div className="section-heading">
            <div>
              <div className="section-marker">01 / Selected work</div>
              <h2>Nine products.<br /><em>One way of thinking.</em></h2>
            </div>
            <p className="section-heading__note">Read the short card for the system at a glance, then open the full article for the problem, product response, architecture thinking, automation lens, and current public surface.</p>
          </div>
          <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button key={filter} className={activeFilter === filter ? 'filter-button filter-button--active' : 'filter-button'} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>
                {filter}
              </button>
            ))}
          </div>
          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="writing" className="links-section section-frame">
          <div className="section-marker">02 / Writing & backlinks</div>
          <div className="links-section__grid">
            <div>
              <h2>Keep the context close to the work.</h2>
              <p>Each project has a full article so the portfolio can explain decisions, not just display polished screenshots. The links below are the canonical places to verify the work and the person behind it.</p>
            </div>
            <div className="link-ledger">
              <a href="https://samson-mbugua.vercel.app/" target="_blank" rel="noreferrer" className="link-ledger__item">
                <span><span className="micro-label">Personal website</span><strong>samson-mbugua.vercel.app</strong></span><ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/mbuguacsam" target="_blank" rel="noreferrer" className="link-ledger__item">
                <span><span className="micro-label">Source & profile</span><strong>github.com/mbuguacsam</strong></span><Github size={18} />
              </a>
              <a href={LINKEDIN_PROFILE.url} target="_blank" rel="noreferrer" className="link-ledger__item">
                <span><span className="micro-label">Professional profile</span><strong>LinkedIn / Samson Mbugua</strong></span><Linkedin size={18} />
              </a>
            </div>
          </div>
          <div className="link-note">
            <button onClick={() => setOpenNote((current) => !current)} className="link-note__toggle" aria-expanded={openNote}>
              <span><Link2 size={16} /> LinkedIn source trail / {LINKEDIN_SOURCES.length} sources</span>{openNote ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {openNote && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  The source trail combines the authenticated activity posts currently available on LinkedIn with the TechGuard Insights newsletter. Individual project articles use the most relevant sources so readers can move from a product decision to the original automation, AI, governance, or operations context.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="source-index">
            <div className="source-index__heading">
              <span className="micro-label">Writing archive / LinkedIn backlinks</span>
              <span>Posts + newsletter</span>
            </div>
            <div className="source-index__grid">
              {LINKEDIN_SOURCES.map((source) => (
                <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="source-index__item">
                  <span><small>{source.kind} / {source.date}</small><strong>{source.title}</strong><em>{source.summary}</em></span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section section-frame">
          <div className="closing-section__mark"><CheckCircle2 size={22} /> Open to thoughtful systems work.</div>
          <h2>Good products make the next decision easier.</h2>
          <p>If you are looking at one of these systems, start with the article, inspect the live product, and follow the source trail. The same practice that informs the articles—automation with boundaries, AI with approved context, and human accountability—also guides the broader advisory work.</p>
          <div className="closing-section__actions">
            <a href={LINKEDIN_PROFILE.url} target="_blank" rel="noreferrer" className="primary-button">Connect on LinkedIn <Linkedin size={17} /></a>
            <button className="secondary-button" onClick={() => goTo('work')}>Review the projects <ArrowDown size={17} /></button>
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <div><strong>Samson Mbugua</strong><span>Software engineer / product systems builder</span></div>
        <div className="site-footer__links"><a href="https://samson-mbugua.vercel.app/" target="_blank" rel="noreferrer">Personal site</a><a href="https://github.com/mbuguacsam" target="_blank" rel="noreferrer">GitHub</a><a href={LINKEDIN_PROFILE.url} target="_blank" rel="noreferrer">LinkedIn</a></div>
        <span className="site-footer__year">© 2026</span>
      </footer>

      <AnimatePresence>
        {activeProject && <ProjectArticle project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
