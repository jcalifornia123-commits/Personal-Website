import SectionHeader from '@/components/SectionHeader';
import WorkCard from '@/components/WorkCard';
import { workItems } from '@/data/work';

export const metadata = {
  title: 'Work • Portfolio',
  description: 'Detailed view of professional experience, internships, and company work.'
};

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <SectionHeader
          title="Work"
          description="A more complete look at the experience and company-facing work I’ve shipped."
        />
        <p className="max-w-2xl text-slate-300">
          Work entries include internships, consulting, and product-facing analytics work with clear outcomes and the tools used.
        </p>
      </section>
      <div className="grid gap-6">
        {workItems.map((item) => (
          <WorkCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
