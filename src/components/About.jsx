import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="about" className="section-offset border-t border-white/10 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionTitle eyebrow="About" title="Developer based in the UAE.">
          I focus on practical software that helps people run, manage, and improve real workflows.
        </SectionTitle>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-200">
            I am a computer science student and developer based in the UAE, focused on building practical business software, Android apps, and automation systems. My work combines full-stack development, mobile development, and product thinking. I enjoy turning real operational problems into usable software, especially for small businesses, service providers, and client-focused MVPs.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Focus', 'Business software and MVPs'],
              ['Approach', 'Build, test, improve'],
              ['Strength', 'Product-minded development'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-950">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{label}</p>
                <p className="mt-3 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
