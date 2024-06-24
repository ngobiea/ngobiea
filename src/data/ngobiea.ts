import {
  typescript,
  nextjs,
  reactJs,
  tailwindCss,
  vsCode,
  git,
  github,
} from '@/components/icons';

export const ngobiea: Project = {
  title: 'ngobiea',
  rationale: '',
  startDate: new Date(2024, 4, 1),
  endDate: new Date(2024, 4, 12),
  description: `I built my personal portfolio to showcase my projects, skills, and experiences.`,
  features: [
    'Project showcase',
    'Skills showcase',
    'Experience showcase',
    'Contact form',
  ],
  images: [],
  lessonsLearned: [
    'I learned how to build web applications with Next.js',
    'I learn the use of Github API to access and manage my repositories',
  ],
  published: true,
  github: {
    author: 'ngobiea',
    url: '',
    name: 'ngobiea',
    isPublic: true,
    downloadUrl: null,
  },
  slug: 'ngobiea',
  status: {
    status: 'Completed',
    comment: 'The project was completed on time',
  },
  technologies: [typescript, nextjs, reactJs, tailwindCss],
  tools: [vsCode, git, github],
  url: 'https://github.com/ngobiea/ngobiea',
  youtube: 'https://www.youtube.com/watch?v=6O3Jf0Vl3qE',
};
