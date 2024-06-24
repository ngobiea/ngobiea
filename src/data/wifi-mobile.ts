import { flutter, riverpod, vsCode, git, github } from '@/components/icons';

export const wifiMobile: Project = {
  startDate: new Date(2024, 4, 11),
  endDate: null,
  rationale: 'I want to build a mobile version of WiFi Share to target older versions of Android that do not support wifi sharing.',
  description: `The mobile version of WiFi Share. It will mainly target older versions of Android that do not support wifi sharing.
   It is a free and open source utility software application. 
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
    'I learned how to build mobile applications with Flutter and Riverpod',
    'I learned how to manage state with Riverpod',
  ],
  published: true,
  github: {
    author: 'ngobiea',
    name: 'wifi_share',
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
