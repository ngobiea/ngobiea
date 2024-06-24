import {
  typescript,
  electron,
  reactJs,
  tailwindCss,
  redux,
  reactHookForm,
  vsCode,
  git,
  github,
} from '@/components/icons';

export const wifi: Project = {
  startDate: new Date(2024, 1, 1),
  endDate: new Date(2024, 1, 30),
  rationale: 'At one time I needed to share my phone wifi with my laptop and  found it difficult to do so. I decided to build a software that makes it easy to share wifi networks with other devices.',
  description: `WiFi Share is a free and open source utility software application. 
    It provides the ease of sharing computer's internet connection with other devices.
    It uses QR codes to share WiFi networks.`,
  title: 'WiFi Share',
  features: [
    'Current WiFi Network Information',
    'WiFi Network Sharing',
    'WiFi QR Code Scanning',
    'Auto-Connect to WiFi Network',
    'Scan Available WiFi Networks',
    'WiFi QR Code Generation',
    'WiFi QR Code Importing',
    'WiFi QR Code Exporting',
    'Retrieved Stored WiFi Networks',
  ],
  technologies: [
    typescript,
    electron,
    reactJs,
    tailwindCss,
    redux,
    reactHookForm,
  ],
  tools: [vsCode, git, github],
  url: 'https://wifi-share.dev',
  images: [
    {
      alt: 'Image 1',
      src: 'https://via.placeholder.com/150',
    },
  ],
  lessonsLearned: [
    'I learned how to build desktop applications with Electron.js and React.js',
    'I learned how to manage app-wide state with Redux',
    'I learned how to use React Hook Form for form validation',
    'I learned the application of QR codes in real-world applications'
  ],
  published: true,
  github: {
    author: 'ngobiea',
    name: 'wifi-share',
    url: 'https://github.com/ngobiea/wifi-share',
    isPublic: true,
    downloadUrl: 'https://sourceforge.net/projects/wifi-share/',
  },
  slug: 'wifi-share',
  status: {
    status: 'Completed',
    comment: 'The project was completed on time and within budget',
  },
  youtube: 'https://youtu.be/IgnFBFy1Efo',
};
