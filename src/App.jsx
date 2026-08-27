import { useEffect, useState } from 'react';
import {
  capabilities,
  contactLinks,
  education,
  labProjects,
  navItems,
  projects,
  quickFacts,
} from './data/portfolio.js';

function ArrowUpRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.372 6.839 9.74.5.095.682-.222.682-.494 0-.244-.009-1.055-.014-1.914-2.782.619-3.369-1.22-3.369-1.22-.454-1.185-1.11-1.5-1.11-1.5-.908-.637.069-.624.069-.624 1.003.073 1.531 1.057 1.531 1.057.892 1.568 2.341 1.115 2.91.853.091-.663.349-1.115.635-1.371-2.22-.26-4.555-1.14-4.555-5.069 0-1.12.39-2.036 1.029-2.753-.103-.26-.446-1.304.098-2.716 0 0 .84-.276 2.75 1.052A9.36 9.36 0 0 1 12 6.93c.85.004 1.705.118 2.504.346 1.909-1.328 2.747-1.052 2.747-1.052.546 1.412.203 2.456.1 2.716.64.717 1.028 1.633 1.028 2.753 0 3.94-2.339 4.808-4.566 5.063.359.317.678.943.678 1.9 0 1.371-.012 2.478-.012 2.815 0 .274.18.592.688.491C19.138 20.62 22 16.78 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}

function MailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.875 3A1.875 1.875 0 1 0 4.88 6.75 1.875 1.875 0 0 0 4.875 3ZM21 13.69c0-3.85-2.055-5.64-4.795-5.64-2.21 0-3.2 1.216-3.75 2.07V8.25H9.2V21h3.255v-6.315c0-1.665.315-3.28 2.38-3.28 2.035 0 2.06 1.905 2.06 3.39V21H21v-7.31Z" />
    </svg>
  );
}

function WhatsappIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.49A11.73 11.73 0 0 0 2.07 17.64L.4 23.7l6.2-1.63a11.68 11.68 0 0 0 5.61 1.43h.01A11.78 11.78 0 0 0 24 11.74a11.67 11.67 0 0 0-3.48-8.25ZM12.22 21.52h-.01a9.74 9.74 0 0 1-4.97-1.36l-.36-.21-3.68.97.98-3.58-.23-.37a9.76 9.76 0 1 1 8.27 4.55Zm5.35-7.31c-.29-.15-1.74-.86-2.01-.95-.27-.1-.47-.15-.67.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.14-1.24-.45-2.35-1.46-.87-.78-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.36-.02-.51-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.36-.27.29-1.03 1-1.03 2.44s1.05 2.83 1.2 3.03c.14.19 2.06 3.14 4.99 4.41.7.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.12-.27-.19-.56-.34Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={'section-header section-header--' + align + ' reveal'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function ProjectArtwork({ kind }) {
  if (kind === 'niqdah') {
    return (
      <div className="project-art project-art--niqdah" aria-hidden="true">
        <div className="art-orb art-orb--one" />
        <div className="phone-shell">
          <div className="phone-top"><span /><span /></div>
          <div className="phone-label">Safe to spend</div>
          <div className="phone-number">AED 1,236</div>
          <div className="phone-ring">
            <div className="phone-ring__inner">72%</div>
          </div>
          <div className="phone-row"><span>Obligations</span><strong>Protected</strong></div>
          <div className="phone-row"><span>Savings goal</span><strong>On track</strong></div>
        </div>
        <div className="ai-chip"><span className="ai-chip__spark">✦</span><span>AI explains. Math stays deterministic.</span></div>
      </div>
    );
  }

  if (kind === 'hawelly') {
    return (
      <div className="project-art project-art--hawelly" aria-hidden="true">
        <div className="route-map">
          <span className="route-dot route-dot--a" />
          <span className="route-dot route-dot--b" />
          <span className="route-line" />
          <span className="route-pulse" />
        </div>
        <div className="quote-card quote-card--top">
          <span>Transfer request</span><strong>UAE → Egypt</strong>
        </div>
        <div className="quote-card quote-card--middle">
          <span>Quote prepared</span><strong>AED 2,500</strong>
        </div>
        <div className="quote-card quote-card--bottom">
          <span>Operations</span><strong>Funding → Payout</strong>
        </div>
      </div>
    );
  }

  if (kind === 'aldayaa') {
    return (
      <div className="project-art project-art--aldayaa" aria-hidden="true">
        <div className="dash-window">
          <div className="dash-top"><i /><i /><i /><span>restaurant.ops</span></div>
          <div className="dash-grid">
            <div className="dash-side">
              <b />
              <b />
              <b />
              <b />
            </div>
            <div className="dash-main">
              <div className="dash-stat-row">
                <div><span>Orders</span><strong>48</strong></div>
                <div><span>Kitchen</span><strong>12</strong></div>
                <div><span>Low stock</span><strong>03</strong></div>
              </div>
              <div className="dash-chart">
                {[38, 56, 46, 72, 62, 88, 76, 94].map((h, index) => <i key={index} style={{ height: h + '%' }} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art project-art--xbux" aria-hidden="true">
      <div className="ledger-grid" />
      <div className="ledger-card ledger-card--a"><span>Sender</span><strong>Funded</strong></div>
      <div className="ledger-card ledger-card--b"><span>Payout</span><strong>Verified</strong></div>
      <div className="ledger-card ledger-card--c"><span>Settlement</span><strong>Audited</strong></div>
      <svg className="ledger-flow" viewBox="0 0 600 220" fill="none">
        <path d="M95 120C180 28 267 199 350 98c53-64 95-45 158 6" stroke="currentColor" strokeWidth="2" strokeDasharray="7 9" />
      </svg>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal reveal--delay-2" aria-label="Animated visual showing mobile, web and operations software">
      <div className="hero-visual__halo" />
      <div className="orbit orbit--one"><span>ANDROID</span></div>
      <div className="orbit orbit--two"><span>FULL-STACK</span></div>
      <div className="orbit orbit--three"><span>AI SYSTEMS</span></div>

      <div className="hero-window">
        <div className="hero-window__top">
          <div className="window-dots"><i /><i /><i /></div>
          <span>musab.build / workspace</span>
          <span className="window-status">● LIVE</span>
        </div>
        <div className="hero-window__body">
          <aside>
            <div className="mini-logo">MI</div>
            <i className="active" />
            <i />
            <i />
            <i />
          </aside>
          <div className="workspace">
            <div className="workspace-title"><span>Current build</span><strong>Systems that move real work.</strong></div>
            <div className="workspace-grid">
              <div className="workspace-card workspace-card--phone">
                <div className="mini-phone">
                  <div className="mini-phone__top" />
                  <span>Safe to spend</span>
                  <strong>AED 1.2k</strong>
                  <div className="mini-bars"><i /><i /><i /><i /></div>
                </div>
                <small>Niqdah · Android + AI</small>
              </div>
              <div className="workspace-card workspace-card--flow">
                <div className="flow-node">Request</div>
                <div className="flow-line" />
                <div className="flow-node">Quote</div>
                <div className="flow-line" />
                <div className="flow-node flow-node--accent">Payout</div>
                <small>Hawelly · Operations</small>
              </div>
            </div>
            <div className="workspace-footer">
              <span><i className="pulse-dot" /> engineering in progress</span>
              <span>React · Kotlin · Firebase · PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-card floating-card--left">
        <span className="floating-card__icon">⌁</span>
        <div><small>Architecture</small><strong>Privacy by design</strong></div>
      </div>
      <div className="floating-card floating-card--right">
        <span className="floating-card__icon">↗</span>
        <div><small>Workflow</small><strong>Idea → test → ship</strong></div>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Musab Ibrahim home">
        <span className="brand-mark">MI</span>
        <span className="brand-copy"><strong>Musab Ibrahim</strong><small>Product-minded developer</small></span>
      </a>

      <nav className={'nav-links ' + (open ? 'nav-links--open' : '')} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
      <button className={'menu-button ' + (open ? 'is-open' : '')} type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="availability reveal">
            <span className="availability-dot" />
            Building across web, Android & AI
          </div>
          <h1 className="reveal reveal--delay-1">
            I build software that <span className="text-gradient">moves real work.</span>
          </h1>
          <p className="hero-lead reveal reveal--delay-2">
            Full-stack and Android developer turning complicated workflows into focused products—from finance and remittance operations to restaurant systems and automation.
          </p>
          <div className="hero-actions reveal reveal--delay-3">
            <a className="button button--primary magnetic" href="#work">Explore selected work <ArrowUpRight /></a>
            <a className="button button--ghost" href="https://github.com/darkest-pearl" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          </div>
          <div className="hero-facts reveal reveal--delay-4">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  );
}

function Marquee() {
  const items = ['Kotlin', 'React', 'Next.js', 'Firebase', 'PostgreSQL', 'Prisma', 'Node.js', 'AI integration', 'Workflow design'];
  return (
    <div className="marquee" aria-label="Technology stack">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => <span key={item + index}><i>✦</i>{item}</span>)}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={'project-card project-card--' + project.kind + ' reveal'}>
      <div className="project-card__meta">
        <span className="project-index">0{index + 1}</span>
        <span className="status-pill"><i />{project.status}</span>
      </div>
      <ProjectArtwork kind={project.kind} />
      <div className="project-card__content">
        <div className="project-title-row">
          <div><span className="project-kicker">{project.category}</span><h3>{project.name}</h3></div>
          <span className="project-year">{project.year}</span>
        </div>
        <p>{project.description}</p>
        <ul className="project-points">
          {project.points.map((point) => <li key={point}><CheckIcon />{point}</li>)}
        </ul>
        <div className="tech-list">
          {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-actions">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon /> Repository <ArrowUpRight size={15} /></a>
          ) : (
            <span className="project-private">Private repository · case study available</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="section section--work section-anchor">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Selected work · 2026"
          title={<>Products with <span className="text-gradient">operational depth.</span></>}
          copy="I prefer projects where interface work, backend logic, product decisions, security boundaries, and deployment all have to agree."
        />
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>

        <div className="lab-block reveal">
          <div className="lab-heading">
            <div><span className="eyebrow">More from the lab</span><h3>Smaller builds, foundations & experiments.</h3></div>
            <a href="https://github.com/darkest-pearl" target="_blank" rel="noreferrer">View all GitHub work <ArrowUpRight size={16} /></a>
          </div>
          <div className="lab-grid">
            {labProjects.map((project) => (
              <a key={project.name} className="lab-card" href={project.github} target="_blank" rel="noreferrer">
                <div className="lab-icon">{project.symbol}</div>
                <div><span>{project.type}</span><h4>{project.name}</h4><p>{project.description}</p></div>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="section section--capabilities section-anchor">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Capabilities"
          title={<>One builder, <span className="text-gradient">multiple layers.</span></>}
          copy="I work across product surfaces and system boundaries rather than treating frontend, backend, mobile, and operations as separate worlds."
        />
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-card reveal" key={item.title}>
              <div className="capability-number">0{index + 1}</div>
              <div className="capability-symbol">{item.symbol}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="capability-tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['01', 'Understand the workflow', 'Map the real task, user roles, edge cases, constraints, and failure states before coding.'],
    ['02', 'Shape the system', 'Turn requirements into a narrow product scope, architecture, data model, and verifiable milestones.'],
    ['03', 'Build in evidence', 'Implement in focused increments with tests, smoke checks, security boundaries, and deployment readiness.'],
    ['04', 'Polish the experience', 'Refine motion, wording, responsiveness, loading states, accessibility, and the details users actually notice.'],
  ];

  return (
    <section className="section section--process">
      <div className="section-shell process-layout">
        <div className="process-sticky">
          <SectionHeader
            eyebrow="How I build"
            title={<>From messy requirement to <span className="text-gradient">working system.</span></>}
            copy="The goal is not to generate the most code. It is to reduce ambiguity until the product is coherent enough to test, explain, and improve."
          />
        </div>
        <div className="process-list">
          {steps.map(([number, title, copy]) => (
            <article className="process-step reveal" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section--about section-anchor">
      <div className="section-shell about-layout">
        <div className="about-portrait reveal">
          <div className="portrait-frame">
            <img src="https://avatars.githubusercontent.com/u/123247692?v=4" alt="Musab Ibrahim GitHub profile" loading="lazy" />
            <div className="portrait-grid" />
            <div className="portrait-label"><span>BASED IN</span><strong>United Arab Emirates</strong></div>
          </div>
          <div className="about-code" aria-hidden="true">
            <span>builder.profile</span>
            <p><b>focus:</b> "practical systems"</p>
            <p><b>mode:</b> "learn → build → verify"</p>
            <p><b>bias:</b> "ship the useful thing"</p>
          </div>
        </div>

        <div className="about-copy">
          <SectionHeader
            eyebrow="About"
            title={<>Engineering with an <span className="text-gradient">operations mindset.</span></>}
          />
          <div className="about-prose reveal">
            <p className="about-lead">
              I am a computer science developer who gravitates toward software with real operational consequences: money that must reconcile, permissions that must hold, restaurant actions that must stay tenant-scoped, and mobile experiences that must remain understandable.
            </p>
            <p>
              My background also includes teaching, workforce coordination, technical support, and language-focused work. That mix affects how I build: I care about the human workflow around the code, not only the code itself.
            </p>
          </div>

          <div className="education-card reveal">
            <span className="education-label">Education</span>
            <div>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <small>{education.note}</small>
            </div>
            <span className="education-year">{education.year}</span>
          </div>

          <div className="about-principles reveal">
            <div><span>01</span><strong>Truth over polish theater.</strong><p>Status labels stay honest: active development, MVP, foundation, or private case study.</p></div>
            <div><span>02</span><strong>Automation with guardrails.</strong><p>AI helps reason and accelerate; deterministic logic owns money, permissions, and invariants.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ type }) {
  if (type === 'github') return <GithubIcon />;
  if (type === 'linkedin') return <LinkedinIcon />;
  if (type === 'whatsapp') return <WhatsappIcon />;
  return <MailIcon />;
}

function Contact() {
  return (
    <section id="contact" className="contact section-anchor">
      <div className="contact-glow" />
      <div className="section-shell contact-inner">
        <span className="eyebrow reveal">Contact</span>
        <h2 className="reveal reveal--delay-1">Have a difficult workflow?<br /><span className="text-gradient">Let’s turn it into software.</span></h2>
        <p className="reveal reveal--delay-2">For development work, product collaboration, technical opportunities, or a focused project conversation.</p>
        <div className="contact-primary reveal reveal--delay-3">
          <a href="mailto:musabcreate@gmail.com">musabcreate@gmail.com <ArrowUpRight size={28} /></a>
        </div>
        <div className="contact-grid reveal reveal--delay-4">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
              <span className="contact-icon"><ContactIcon type={link.icon} /></span>
              <div><small>{link.label}</small><strong>{link.value}</strong></div>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <div><span className="brand-mark brand-mark--small">MI</span><p>Designed and built by Musab Ibrahim.</p></div>
        <p>React · Vite · Motion-minded CSS · {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', max > 0 ? String(window.scrollY / max) : '0');
    };

    const onPointerMove = (event) => {
      root.style.setProperty('--pointer-x', event.clientX + 'px');
      root.style.setProperty('--pointer-y', event.clientY + 'px');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <div className="site">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Capabilities />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
