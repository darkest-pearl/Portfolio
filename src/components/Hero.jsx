export default function Hero() {
  return (
    <section id="home" className="section-offset relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Full-stack · Android · Firebase · Product MVPs
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Full-stack and Android developer building business automation systems, SaaS dashboards, mobile apps, and client-focused MVPs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build practical software products using modern web, Android, Firebase, PostgreSQL, Prisma, and automation-focused workflows.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-slate-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-6 flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-slate-400">Current focus</p>
                  <p className="mt-1 text-xl font-semibold text-white">Practical product development</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['Web', 'React, Next.js, dashboards'],
                    ['Android', 'Kotlin, Compose, Firebase'],
                    ['Backend', 'Node, Prisma, PostgreSQL'],
                    ['Product', 'MVPs, workflows, automation'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm font-semibold text-cyan-200">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm font-medium text-slate-300">
                    Focusing on engineering reliable software that aligns technical implementation with real-world business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
