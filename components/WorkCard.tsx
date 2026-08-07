import Link from 'next/link';
import { WorkItem } from '@/data/work';

type WorkCardProps = {
  item: WorkItem;
  featured?: boolean;
};

export default function WorkCard({ item, featured }: WorkCardProps) {
  return (
    <article className={`section-card overflow-hidden rounded-3xl p-6 shadow-soft transition hover:-translate-y-1 hover:border-white/10 ${featured ? 'md:p-8' : ''}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span>{item.company}</span>
            <span className="h-px flex-1 bg-white/10" />
            <span>{item.dates}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {item.role}
            </h3>
            <p className="max-w-2xl text-slate-300">{item.description}</p>
          </div>
        </div>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:border-accent hover:text-white"
          >
            Visit
          </a>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-400">
        {item.tech.map((tech) => (
          <span key={tech} className="meta-chip inline-flex items-center rounded-full px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          {item.highlights && item.highlights.length ? (
            <ul className="space-y-2 text-sm text-slate-300">
              {item.highlights.slice(0, featured ? 3 : 2).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <Link
          href={`/work/${item.slug}`}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white"
        >
          Case study
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
