import Link from 'next/link';
import React from 'react';
import { Typography } from '@/components/materialTailwind';
import { Inter } from 'next/font/google';
import { navigation } from '@/utils/nav';
import DownloadCV from '@/components/download-cv';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden`}
    >
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-gray-500 hover:text-gray-300'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <section className='flex flex-col items-center justify-center'>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-gray-300/0 via-gray-300/50 to-gray-300/0' />
        <section className=''>
          <h1 className='z-10 text-xl sm:text-xl   pb-3 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display  whitespace-nowrap bg-clip-text'>
            Hi, I{`'`}m
          </h1>
          <h1 className='z-10 text-3xl sm:text-5xl md:text-7xl  pb-3 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text '>
            Augustine{`  `}F. Ngobie
          </h1>
        </section>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-gray-300/0 via-gray-300/50 to-gray-300/0' />
        <section className='my-16 text-center animate-fade-in'>
          <Typography variant='h2' className='text-sm text-gray-500 '>
            A professional software engineer {`&`} developer.
          </Typography>
        </section>

        <DownloadCV
          fullWidth={false}
          className={
            'animate-fade-in text-sm duration-500 text-gray-500 hover:text-black border-gray-500 hover:bg-gray-500'
          }
        />
      </section>
    </main>
  );
}
