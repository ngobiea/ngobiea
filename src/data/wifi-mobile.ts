import { flutter, riverpod, vsCode, git, github } from '@/components/icons';

export const wifiMobile: Project = {
  date: '2024-01-01',
  rationale: '',
  description: `WiFi Share mobile is a the mobile version of WiFi Share. It is a free and open source utility software application. 
    It provides the ease of sharing computer's internet connection with other devices. It is built with Flutter and Riverpod.`,

  title: 'WiFi Share-Mobile',
  features: [],
  technologies: [flutter, riverpod],
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
    url: 'https://github.com/ngobiea/wifi_share',
      isPublic: true,
        downloadUrl: null,
  },
  slug: 'wifi_share',
  status: {
    status: 'Completed',
    comment: 'The project was completed on time and within budget',
  },
  youtube: null,
};