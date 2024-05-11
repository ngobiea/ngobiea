import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LocalFont from 'next/font/local';
import Providers from './providers';
import MainNav from '@/components/nav/main-nav';
import Particles from '@/components/particles';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export const metadata: Metadata = {
  title: 'ngobiea',
  description: 'I build things for the web.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    other: [
      {
        rel: 'android-chrome',
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
      },
      {
        rel: 'favicon',
        url: '../public/favicon_io/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'favicon',
        url: '../public/favicon_io/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${[inter.variable, calSans.variable].join(' ')} `}
    >
      <body className='bg-black bg-gradient-to-tl from-gray-900 via-gray-400/10 to-gray-900 min-h-screen'>
        <Providers>
          <MainNav />
          {children}
        </Providers>
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in overflow-hidden'
          quantity={200}
        />
      </body>
    </html>
  );
}
