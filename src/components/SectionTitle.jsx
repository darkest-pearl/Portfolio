export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{children}</p>}
    </div>
  );
}
