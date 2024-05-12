import { typescript, nextjs, reactJs, tailwindCss, vsCode, git, github } from '@/components/icons';

export const ngobiea: Project = {
  title: 'ngobiea',
  rationale: '',
  date: new Date(2024, 4, 1).toISOString(),
  description: `I built my personal portfolio to showcase my projects, skills, and experiences. It is built with Next.js, React.js, Tailwind CSS, and TypeScript.`,
  features: [
    'Project showcase',
    'Skills showcase',
    'Experience showcase',
    'Contact form',
  ],
  images: [],
  lessonsLearned: [
    'I learned how to build web applications with Next.js and React.js',
    'I learned how to manage state with React.js',
    'I learned how to use Tailwind CSS for styling',
    'I learned how to use TypeScript for type safety',
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