import SectionTitle from './SectionTitle.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="section-offset border-t border-white/10 bg-slate-900/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Skills" title="A practical stack for product-focused development.">
          My strongest areas are building client-facing interfaces, Android experiences, backend workflows, and MVP foundations that solve operational problems.
        </SectionTitle>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-950/90">
              <h3 className="text-lg font-bold text-white transition duration-300">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition duration-300 hover:border-white/15 hover:bg-white/[0.08]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
