'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Tooltip,
} from '@material-tailwind/react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { navigation } from '@/utils/nav';
import NavLink from './nav/nav-link';
const maxWidth = 960;
import DownloadCV from './download-cv';
export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= maxWidth && setOpenNav(false)
    );
  }, []);
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);


  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {navigation.map((item) => {
        return (
          <Typography
            as='li'
            key={item.href}
            variant='small'
            className='p-1 font-bold text-md duration-500 '
          >
            <NavLink href={item.href}>{item.name}</NavLink>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <Navbar
      className={`sticky top-0 z-40 h-max max-w-full rounded-none border-b px-4 py-2 lg:px-8 lg:py-4 text-white  backdrop-blur duration-200 ${
        isIntersecting
          ? 'bg-gray-900/0 border-transparent'
          : 'bg-gray-900/500  border-gray-300'
      }`}
    >
      <div className='flex items-center justify-between'>
        <Tooltip content='home'>
          <Link
            className='flex items-center text-gray-500 hover:text-gray-100'
            href='/'
          >
            <FaHome className='h-6 w-6' />
          </Link>
        </Tooltip>

        <div className='flex items-center gap-4'>
          <div className='mr-4 hidden lg:block'>{navList}</div>
          <div className='flex items-center gap-x-1'>
            <DownloadCV
              fullWidth={true}
              className='hidden lg:inline-block text-sm duration-500 text-gray-500 hover:text-black border-gray-500 hover:bg-gray-500'
            />
          </div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className='flex items-center gap-x-1'>
          <DownloadCV
            fullWidth={true}
            className='text-sm duration-500 text-gray-500 hover:text-black border-gray-500 hover:bg-gray-500'
          />
        </div>
      </Collapse>
    </Navbar>
  );
}
