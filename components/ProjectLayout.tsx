import Link from 'next/link';
import type { ReactNode } from 'react';

type ProjectLayoutProps = {
  title: string;
  subtitle: string;
  meta: string[];
  image?: string;
  children: ReactNode;
  ctaLink?: string;
};

export default function ProjectLayout({ title, subtitle, meta, image, children, ctaLink }: ProjectLayoutProps) {
  return (
    <div className="space-y-10">
      <section className="section-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
              Project detail
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
            <p className="max-w-xl text-lg text-slate-300">{subtitle}</p>
            {ctaLink ? (
              <Link href={ctaLink} className="inline-flex items-center rounded-full border border-accent px-4 py-2 text-sm text-accent transition hover:bg-accent/10">
                View live work
              </Link>
            ) : null}
          </div>
          <div className="space-y-4 rounded-3xl bg-slate-950/75 p-6 text-sm text-slate-300 sm:p-8">
            <div className="text-sm uppercase tracking-[0.3em] text-slate-500">Snapshot</div>
            <div className="space-y-3">
              {meta.map((item) => (
                <div key={item} className="rounded-3xl bg-slate-900/70 px-4 py-3 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {image ? (
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-soft">
          <img src={image} alt={title} className="aspect-[16/9] w-full object-cover" />
        </div>
      ) : null}
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-slate-300">{children}</div>
      </section>
    </div>
  );
}
