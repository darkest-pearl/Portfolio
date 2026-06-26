export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Musab Mohammed Ibrahim. Built with React, Vite, and Tailwind CSS.</p>
        <a href="#home" className="font-semibold text-cyan-200 hover:text-cyan-100">
          Back to top
        </a>
      </div>
    </footer>
  );
}
