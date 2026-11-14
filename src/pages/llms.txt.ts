import type { APIRoute } from 'astro';
import {
  certifications,
  contact,
  formatStat,
  intro,
  profile,
  project,
  skills,
  timeline,
} from '../data/site';

// Plain-text summary for AI assistants (llmstxt.org), built from the same data as the page.
export const GET: APIRoute = ({ site }) => {
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.description}`,
    '',
    `${intro.before}${intro.highlight}${intro.after} ${intro.body}`,
    '',
    `Site: ${new URL('/', site)}`,
    `Location: ${profile.location[1]}`,
    '',
    '## Experience and education',
    ...timeline.map((s) =>
      [
        `- ${s.title}, ${s.org} (${s.period})`,
        s.summary && `  ${s.summary}`,
        ...s.stats.map((st) => `  - ${formatStat(st)} ${st.label}`),
      ]
        .filter(Boolean)
        .join('\n'),
    ),
    '',
    '## Project',
    `- ${project.name} (${project.date}): ${project.summary} Stack: ${project.stack.join(', ')}.`,
    '',
    '## Skills',
    ...skills.map((g) => `- ${g.label}: ${g.items.join(', ')}`),
    '',
    '## Certifications',
    ...certifications.map((c) => `- ${c.name} (${c.date})`),
    '',
    '## Contact',
    `- Email: ${contact.email}`,
    ...contact.links.map((l) => `- ${l.label}: ${l.href}`),
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
