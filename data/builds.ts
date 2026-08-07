export type BuildItem = {
  slug: string;
  name: string;
  status: 'Building' | 'Live' | 'Experiment' | 'Finished';
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  details?: string;
};

export const buildItems: BuildItem[] = [
  {
    slug: 'training-hub',
    name: 'Training Hub',
    status: 'Live',
    description:
      'A personal dashboard that blends cycling, running, and recovery data into a single weekly view.',
    tech: ['Next.js', 'Supabase', 'D3', 'Strava API'],
    image: '/images/placeholder-build.svg',
    github: 'https://github.com/your-username/training-hub',
    demo: 'https://example.com'
  },
  {
    slug: 'race-predictor',
    name: 'Race Predictor',
    status: 'Experiment',
    description:
      'A lightweight model for forecast pacing and finish times using past training load and terrain.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit'],
    image: '/images/placeholder-build.svg',
    github: 'https://github.com/your-username/race-predictor'
  },
  {
    slug: 'ai-workout-planner',
    name: 'AI Workout Planner',
    status: 'Building',
    description:
      'A tool that generates focus sessions, recovery days, and weekly plans around endurance goals.',
    tech: ['OpenAI', 'React', 'Tailwind'],
    image: '/images/placeholder-build.svg',
    github: 'https://github.com/your-username/ai-workout-planner'
  },
  {
    slug: 'data-playground',
    name: 'Data Playground',
    status: 'Finished',
    description:
      'A set of small experiments with WHOOP, Garmin, and personal health data to uncover patterns and habits.',
    tech: ['JavaScript', 'Python', 'Observable', 'Notion'],
    image: '/images/placeholder-build.svg',
    github: 'https://github.com/your-username/data-playground'
  }
];
