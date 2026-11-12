// Single source of truth for everything the page says. Components only render this.

export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface Stop {
  year: string;
  period: string;
  title: string;
  org: string;
  summary?: string;
  stats: Stat[];
  current?: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'R K Jyothish',
  role: ['Cloud Infrastructure', 'Lead & Backend Engineer'],
  location: ['Based in', 'Bengaluru, India'],
  title: 'R K Jyothish · Cloud Infrastructure Lead',
  description:
    'Cloud Infrastructure Lead and backend engineer running multi-cloud systems on AWS and GCP for 50+ enterprise tenants.',
} as const;

// Cycled on the intro screen: English, Hindi, Tamil, Kannada, Spanish, French.
export const greetings = ['Hello', 'Namaste', 'Vanakkam', 'Namaskara', 'Hola', 'Bonjour'] as const;

export const nav = [
  { label: 'Journey', href: '#journey' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const;

export const intro = {
  before: 'I keep systems for ',
  highlight: '50+ enterprise tenants',
  after: ' running across AWS and GCP.',
  body: 'Architecture, deployments, security, cost and production reliability, with zero-downtime migrations along the way. Below is the journey that got me here.',
} as const;

export const timeline: Stop[] = [
  {
    year: '2021',
    period: 'Sep 2021 - Aug 2025',
    title: 'B.Tech, Computer Science and Engineering',
    org: 'Vellore Institute of Technology, Chennai',
    stats: [
      { value: 9.51, decimals: 2, label: 'CGPA out of 10' },
      { value: 500, suffix: '+', label: 'competitive problems solved' },
    ],
  },
  {
    year: '2023',
    period: 'Aug - Nov 2023',
    title: 'Project Intern',
    org: 'Indira Gandhi Centre for Atomic Research',
    stats: [{ value: 8, suffix: '+', label: 'modular components for a virtual desktop system' }],
  },
  {
    year: '2025',
    period: 'Jan - Jun 2025',
    title: 'Software Developer Engineer Intern',
    org: 'VComply Technologies',
    summary: 'Added a scalable caching layer to our Lambda APIs and kept data in sync across 10+ entity types.',
    stats: [
      { value: 60, suffix: '%', label: 'lower Lambda API latency' },
      { value: 10, suffix: '+', label: 'entity types kept in sync' },
    ],
  },
  {
    year: '2025-26',
    period: 'Jul 2025 - Jul 2026',
    title: 'Software Developer Engineer 1',
    org: 'VComply Technologies',
    summary: 'Built a database-trigger pipeline that handles 100k+ events a day, using controlled concurrency and scheduled cron jobs.',
    stats: [
      { value: 100, suffix: 'k+', label: 'pipeline events a day at peak' },
      { value: 35, prefix: '~', suffix: '%', label: 'faster incident recovery' },
      { value: 0, label: 'downtime during production migration' },
    ],
  },
  {
    year: 'Now',
    period: 'Aug 2026 - Present',
    title: 'Cloud Infrastructure Lead',
    org: 'VComply Technologies, Bengaluru',
    current: true,
    summary: 'Lead cloud infrastructure for the company: production environments on AWS and GCP serving customers in Europe, the US and the Middle East.',
    stats: [
      { value: 80, prefix: '~', suffix: '%', label: 'less manual release and review work' },
      { value: 3, label: 'production environments across AWS and GCP' },
    ],
  },
];

export const project = {
  name: 'Task Hub',
  date: 'Nov 2025',
  tagline: 'AI-augmented task manager',
  summary:
    'A full-stack platform where a natural-language assistant creates, updates, lists and summarizes tasks for you.',
  features: [
    '10+ REST endpoints behind JWT authentication',
    'Calendar scheduling',
    'Analytics dashboard',
    'Groq-powered natural-language assistant',
  ],
  stack: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
} as const;

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'Java', 'SQL', 'C++'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs'] },
  { label: 'Cloud', items: ['AWS', 'GCP'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { label: 'Tools', items: ['Git', 'Sentry', 'Grafana'] },
];

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', date: 'Jan 2024' },
  { name: 'Google Cloud Digital Leader', date: 'Dec 2023' },
] as const;

export const ratings: Stat[] = [
  { value: 1659, label: 'LeetCode' },
  { value: 1525, label: 'CodeChef' },
  { value: 1074, label: 'Codeforces' },
];

export const contact = {
  heading: ["Let's build", 'something reliable'],
  email: 'rkjyothish@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rkjyothish' },
    { label: 'GitHub', href: 'https://github.com/JyothishRK' },
  ],
} as const;

export function formatStat(stat: Stat): string {
  return `${stat.prefix ?? ''}${stat.value.toFixed(stat.decimals ?? 0)}${stat.suffix ?? ''}`;
}
