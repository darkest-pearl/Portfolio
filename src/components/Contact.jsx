import SectionTitle from './SectionTitle.jsx';
import { contactLinks } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="section-offset border-t border-white/10 bg-slate-900/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <SectionTitle eyebrow="Contact" title="Need a product demo or MVP build?">
            Reach out for project discussions, portfolio review, client demos, or freelance development work.
          </SectionTitle>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const isLink = link.href && link.href !== '#';
              const CardElement = isLink ? 'a' : 'div';
              return (
                <CardElement
                  key={link.label}
                  {...(isLink ? {
                    href: link.href,
                    target: link.href.startsWith('http') ? '_blank' : undefined,
                    rel: link.href.startsWith('http') ? 'noreferrer' : undefined,
                  } : {})}
                  className={`rounded-2xl border border-white/10 bg-slate-950/70 p-5 ${
                    isLink 
                      ? 'transition duration-300 hover:border-cyan-300/30 hover:bg-slate-950 cursor-pointer' 
                      : 'opacity-70'
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-200">{link.label}</span>
                  <span className="mt-2 block break-words text-sm text-slate-200">{link.value}</span>
                </CardElement>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
