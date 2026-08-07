import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProjectLayout from '@/components/ProjectLayout';
import { workItems } from '@/data/work';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export default function WorkDetailPage({ params }: Props) {
  const item = workItems.find((work) => work.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <ProjectLayout
        title={`${item.role} @ ${item.company}`}
        subtitle={item.description}
        image={item.image}
        meta={[`Dates: ${item.dates}`, `Company: ${item.company}`, `Role: ${item.role}`, `Tech: ${item.tech.join(' · ')}`]}
        ctaLink={item.link}
      >
        <div className="space-y-8">
          <section className="space-y-4 rounded-3xl bg-slate-950/80 p-8 text-slate-300">
            <h2 className="text-2xl font-semibold text-white">What I worked on</h2>
            <p>
              This case study page summarizes the main problem, the product work, and the technical approach used to deliver value quickly and iteratively.
            </p>
            <ul className="space-y-3 text-slate-300">
              {item.highlights.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-4 rounded-3xl bg-slate-950/80 p-8 text-slate-300">
            <h2 className="text-2xl font-semibold text-white">Why this work mattered</h2>
            <p>
              The most important result was a clearer foundation for product decision-making and a better view of how the team could build around endurance performance signals.
            </p>
            <p>
              These ideas were intentionally scoped to provide value quickly while leaving room for future improvement as the product and data pipeline matured.
            </p>
          </section>
        </div>
      </ProjectLayout>
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">
        <p>
          Tip: keep this page updated by editing <span className="mono">/data/work.ts</span> and replacing the image in <span className="mono">/public/images</span>.
        </p>
        <Link href="/work" className="mt-4 inline-flex text-accent transition hover:text-white">
          ← Back to work overview
        </Link>
      </div>
    </div>
  );
}
