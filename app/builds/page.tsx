import SectionHeader from '@/components/SectionHeader';
import BuildCard from '@/components/BuildCard';
import { buildItems } from '@/data/builds';

export const metadata = {
  title: 'Builds • Portfolio',
  description: 'Personal projects, experiments, and active product prototypes.'
};

export default function BuildsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <SectionHeader
          title="Builds"
          description="Personal experiments, tools, and product prototypes that show how I explore ideas and iterate quickly."
        />
        <p className="max-w-2xl text-slate-300">
          These builds are more fun and exploratory — the things I create while learning, testing ideas, and building something useful for myself.
        </p>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {buildItems.map((item) => (
          <BuildCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
