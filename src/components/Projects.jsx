import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/portfolio.js';

const getStatusDotClass = (status) => {
  const s = status.toLowerCase();
  if (s.includes('active development') || s.includes('production-ready')) {
    return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
  }
  if (s.includes('concept') || s.includes('early product')) {
    return 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]';
  }
  return 'bg-slate-400';
};

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-cyan-300">{project.name}</h3>
          <p className="mt-2 text-sm font-medium text-cyan-200">{project.type}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-300">
          <span className={`h-1.5 w-1.5 rounded-full ${getStatusDotClass(project.status)}`} />
          {project.status}
        </span>
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-white/10 group-hover:bg-white/[0.05]">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          View GitHub
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Request Demo
          <svg className="ml-1.5 h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((project) => project.highlight);
  const other = projects.filter((project) => !project.highlight);

  return (
    <section id="projects" className="section-offset border-t border-white/10 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Work & Projects" title="Built around real business workflows.">
          These projects are presented honestly as MVPs, active products, prototypes, or production-ready foundations depending on their current state.
        </SectionTitle>

        <div className="mt-12 space-y-16">
          {/* Featured Projects Sub-Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Featured Work</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>

          {/* Other Projects Sub-Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Other Projects & Concepts</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {other.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white">Other GitHub work</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            I also maintain additional repositories and experiments across web development, Android, automation, and backend workflows. This portfolio focuses on the strongest product-oriented examples instead of listing every repository.
          </p>
          <a
            href="https://github.com/darkest-pearl"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full border border-cyan-300/30 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          >
            Browse GitHub Profile
            <svg className="ml-1.5 h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
