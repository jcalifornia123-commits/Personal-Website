import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import WorkCard from '@/components/WorkCard';
import BuildCard from '@/components/BuildCard';
import { workItems } from '@/data/work';
import { buildItems } from '@/data/builds';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
      <section className="space-y-8 pt-6">
        <div className="max-w-4xl space-y-6">
          <p className="text-sm uppercase tracking-[0.38em] text-slate-400">Portfolio + experiment log</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Data Science + AI student building products around technology, fitness, and human performance.
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-slate-300">
            I like building products I actually want to use — from training analytics and performance tooling to AI experiments that help me move faster.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <Link href="/work" className="rounded-full border border-slate-700 bg-white/5 px-4 py-3 transition hover:border-accent hover:text-white">
              Explore work
            </Link>
            <Link href="/builds" className="rounded-full border border-slate-700 bg-white/5 px-4 py-3 transition hover:border-accent hover:text-white">
              See builds
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Work" description="Professional experience, internships, and product work that shaped the way I build." />
        <div className="grid gap-6">
          {workItems.slice(0, 2).map((item) => (
            <WorkCard key={item.slug} item={item} featured />
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link href="/work" className="text-sm font-semibold text-accent transition hover:text-white">
            View all work →
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Builds" description="Personal projects, data experiments, and product prototypes that I return to and iterate on." />
        <div className="grid gap-6 md:grid-cols-2">
          {buildItems.slice(0, 4).map((item) => (
            <BuildCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link href="/builds" className="text-sm font-semibold text-accent transition hover:text-white">
            See more builds →
          </Link>
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
        <SectionHeader title="About" description="A short view into how I think about technology, product, and performance." />
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4 text-slate-300">
            <p>
              I’m most interested in building tooling where data, AI, and human performance overlap — from endurance training analytics to product workflows that help teams ship with confidence.
            </p>
            <p>
              My approach is practical: I build small systems that solve real problems, test ideas fast, and then refine them based on what actually feels valuable.
            </p>
          </div>
          <div className="space-y-3 rounded-3xl bg-slate-900/80 p-6 text-sm text-slate-300">
            <div className="font-semibold text-white">Interests</div>
            <ul className="space-y-2">
              <li>Endurance sports + training analytics</li>
              <li>AI-first product tooling</li>
              <li>Practical data systems</li>
              <li>Human-centered performance work</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
        <SectionHeader title="Contact" description="Quick links if you want to connect, collaborate, or review my resume." />
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="mailto:hello@example.com" className="rounded-full border border-slate-700 px-4 py-3 transition hover:border-accent hover:text-white">
            Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-3 transition hover:border-accent hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-3 transition hover:border-accent hover:text-white">
            GitHub
          </a>
          <a href="/resume.pdf" className="rounded-full border border-slate-700 px-4 py-3 transition hover:border-accent hover:text-white">
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
