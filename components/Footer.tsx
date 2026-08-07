export default function Footer() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-6xl border-t border-white/10 pt-8 text-sm text-slate-500">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Built for career growth, product thinking, and long-term learning.</p>
        <div className="flex flex-wrap items-center gap-3 text-slate-400">
          <a href="mailto:hello@example.com" className="transition hover:text-white">
            Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="/resume.pdf" className="transition hover:text-white">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
