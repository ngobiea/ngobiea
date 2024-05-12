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
  date: new Date(2024, 1, 1).toISOString(),
  rationale: '',
  description: `WiFi Share is a free and open source utility software application. 
    It provides the ease of sharing computer's internet connection with other devices. It is built with Electron.js, React.js, and Tailwind CSS.,
          share your computer's internet connection with other devices.`,
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
    'I learned how to manage state with Redux',
    'I learned how to use React Hook Form for form validation',
  ],
  published: true,
  github: {
    author: 'ngobiea',
    name: 'wifi-share',
    url: 'https://github.com/ngobiea/wifi-share',
    isPublic: true,
    downloadUrl: 'https://github.com/ngobiea/wifi-share/releases/tag/v1.6.3',
  },
  slug: 'wifi-share',
  status: {
    status: 'Completed',
    comment: 'The project was completed on time and within budget',
  },
  youtube: 'https://youtu.be/IgnFBFy1Efo',
};
