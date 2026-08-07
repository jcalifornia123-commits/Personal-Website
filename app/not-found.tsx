import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 text-slate-200 shadow-soft">
      <div className="text-6xl font-semibold text-white">404</div>
      <div className="space-y-4">
        <p className="text-xl text-slate-300">This page could not be found.</p>
        <p className="text-slate-400">Try going back to the homepage or exploring work and builds.</p>
      </div>
      <Link href="/" className="rounded-full border border-accent px-5 py-3 text-sm text-accent transition hover:bg-accent/10">
        Return home
      </Link>
    </div>
  );
}
