import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProjectLayout from '@/components/ProjectLayout';
import { buildItems } from '@/data/builds';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return buildItems.map((item) => ({ slug: item.slug }));
}

export default function BuildDetailPage({ params }: Props) {
  const item = buildItems.find((build) => build.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <ProjectLayout
        title={item.name}
        subtitle={item.description}
        image={item.image}
        meta={[`Status: ${item.status}`, `Tech: ${item.tech.join(' · ')}`, item.github ? `GitHub available` : 'No repo yet']}
        ctaLink={item.demo}
      >
        <div className="space-y-8">
          <section className="space-y-4 rounded-3xl bg-slate-950/80 p-8 text-slate-300">
            <h2 className="text-2xl font-semibold text-white">Why I built it</h2>
            <p>
              This project is part of a personal exploration into how data and AI can make training and performance more intuitive and practical.
            </p>
            <p>
              It is designed to be a lightweight space for experimentation, so the implementation is intentionally flexible and easy to change.
            </p>
          </section>
          <section className="space-y-4 rounded-3xl bg-slate-950/80 p-8 text-slate-300">
            <h2 className="text-2xl font-semibold text-white">How it works</h2>
            <p>
              The current version focuses on quick iteration, small feature sets, and tight feedback loops rather than polished product polish.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              {item.github ? (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-accent hover:text-white"
                >
                  GitHub repo
                </a>
              ) : null}
              {item.demo ? (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-accent hover:text-white"
                >
                  View demo
                </a>
              ) : null}
            </div>
          </section>
        </div>
      </ProjectLayout>
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">
        <p>
          Tip: update build details in <span className="mono">/data/builds.ts</span> and swap the image in <span className="mono">/public/images</span> when you add a new experiment.
        </p>
        <Link href="/builds" className="mt-4 inline-flex text-accent transition hover:text-white">
          ← Back to builds
        </Link>
      </div>
    </div>
  );
}
