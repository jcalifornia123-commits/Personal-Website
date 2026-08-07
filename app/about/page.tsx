import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'About • Portfolio',
  description: 'More about my interests in technology, product, AI, endurance performance, and learning.'
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <SectionHeader title="About" description="A short story about what drives my work and what I build around." />
      </section>
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-slate-300">
          <p>
            I’m building at the intersection of product, AI, and human performance. My best work comes from projects that blend practical systems with a strong user perspective.
          </p>
          <p>
            I enjoy moving quickly from idea to prototype, then refining the experience through data, feedback, and thoughtful iteration.
          </p>
          <p>
            Outside of work, you’ll find me mapping training load, analyzing race trends, or testing a new tool that makes my next session easier to plan.
          </p>
        </div>
        <div className="space-y-6 rounded-[2rem] bg-slate-950/80 p-8 text-slate-300 shadow-soft">
          <div>
            <h2 className="text-xl font-semibold text-white">What I care about</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>Building tools that I use every week.</li>
              <li>Moving fast with strong product judgment.</li>
              <li>Balancing data rigor with elegant UX.</li>
              <li>Learning through experiments and real feedback.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">How I work</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>Start with a small, useful idea.</li>
              <li>Ship a minimum version quickly.</li>
              <li>Use metrics and user signals to iterate.</li>
              <li>Keep the codebase easy to update.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
