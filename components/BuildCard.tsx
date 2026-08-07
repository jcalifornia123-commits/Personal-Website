import Link from 'next/link';
import { BuildItem } from '@/data/builds';

type BuildCardProps = {
  item: BuildItem;
};

const statusStyles: Record<BuildItem['status'], string> = {
  Building: 'bg-amber-500/10 text-amber-200 border-amber-500/20',
  Live: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20',
  Experiment: 'bg-sky-500/10 text-sky-200 border-sky-500/20',
  Finished: 'bg-slate-500/10 text-slate-200 border-slate-500/20'
};

export default function BuildCard({ item }: BuildCardProps) {
  return (
    <article className="section-card overflow-hidden rounded-3xl border border-white/10 p-5 shadow-soft transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
            <span className={`rounded-full border px-2 py-1 ${statusStyles[item.status]}`}>
              {item.status}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{item.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-400">
        {item.tech.map((tech) => (
          <span key={tech} className="meta-chip inline-flex items-center rounded-full px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {item.github ? (
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-accent hover:text-white"
          >
            GitHub
          </a>
        ) : null}
        {item.demo ? (
          <a
            href={item.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-accent hover:text-white"
          >
            Live demo
          </a>
        ) : null}
        <Link href={`/builds/${item.slug}`} className="ml-auto text-accent transition hover:text-white">
          Details →
        </Link>
      </div>
    </article>
  );
}
