export type WorkItem = {
  slug: string;
  company: string;
  role: string;
  dates: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  link?: string;
};

export const workItems: WorkItem[] = [
  {
    slug: 'performance-insights-intern',
    company: 'Stride Analytics',
    role: 'Product + Analytics Intern',
    dates: 'Summer 2025',
    description:
      'Built tracking and insights pipelines for a product team focused on endurance performance and wearable integrations.',
    highlights: [
      'Designed a modular dashboard for training load, sleep quality, and recovery signals.',
      'Instrumented event analytics and quarterly metrics for product iteration.',
      'Delivered reusable charts and summaries used by coaching teams and investors.'
    ],
    tech: ['TypeScript', 'Next.js', 'Figma', 'Snowflake', 'dbt'],
    image: '/images/placeholder-work.svg',
    link: 'https://example.com'
  },
  {
    slug: 'ai-ops-builder',
    company: 'Nova Labs',
    role: 'AI Operations Consultant',
    dates: '2024–Present',
    description:
      'Collaborated on AI tooling and product workflows to help teams ship faster and stay aligned on metrics.',
    highlights: [
      'Built a lightweight internal tool for monitoring model changes and adoption.',
      'Defined testing workflows for data quality and synthesis across product features.'
    ],
    tech: ['Python', 'Prompt engineering', 'SQL', 'Figma', 'Notion'],
    image: '/images/placeholder-work.svg'
  },
  {
    slug: 'data-platform-project',
    company: 'BridgePoint',
    role: 'Data Platform Analyst',
    dates: '2023–2024',
    description:
      'Launched the first generation of a metrics platform supporting product, revenue, and experimentation insights.',
    highlights: [
      'Built end-to-end reporting for growth and retention experiments.',
      'Automated weekly dashboards for leadership and cross-functional partners.'
    ],
    tech: ['Looker', 'SQL', 'dbt', 'Airflow'],
    image: '/images/placeholder-work.svg',
    link: 'https://example.com'
  }
];
