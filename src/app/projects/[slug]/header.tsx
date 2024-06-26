'use client';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si';
import Particles from '@/components/particles';
import { MdOutlineStarOutline } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { Tooltip } from '@material-tailwind/react';
type Props = {
  project: Project;
  stars: number;
};
export const Header: React.FC<Props> = ({ project, stars }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.github.isPublic) {
    links.push({
      label: 'GitHub',
      href: project.github.url,
    });
  }
  if (project.youtube) {
    links.push({
      label: 'View Project',
      href: project.youtube,
    });
  }
  if (project.github.downloadUrl !== null) { 
    links.push({
      label: 'Download',
      href: project.github.downloadUrl,
    });
  
  }
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

  return (
    <header ref={ref} className=''>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? 'bg-gray-900/0 border-transparent'
            : ' bg-gray-900  border-gray-200 lg:border-transparent'
        }`}
      >
        <div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
          <div className='flex justify-between gap-8'>
            {project.github.isPublic && (
              <Tooltip content='GitHub Stars' placement='bottom'>
                <span
                  className={`duration-200 hover:font-medium flex items-center gap-1 hover:text-gray-100 ${
                    isIntersecting ? 'text-gray-400' : 'text-gray-600'
                  } `}
                >
                  <MdOutlineStarOutline className='w-5 h-5' />{' '}
                  {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                    stars
                  )}
                </span>
              </Tooltip>
            )}
            {project.youtube && (
              <Tooltip content='Watch on YouTube' placement='bottom'>
                <Link target='_blank' href={project.youtube}>
                  <SiYoutube
                    className={`w-6 h-6 duration-200 hover:font-medium hover:text-gray-100 ${
                      isIntersecting ? ' text-gray-400 ' : 'text-gray-600 '
                    } `}
                  />
                </Link>
              </Tooltip>
            )}

            {project.github.isPublic ? (
              <Tooltip content='View on Github' placement='bottom'>
                <Link target='_blank' href={project.github.url}>
                  <FaGithub
                    className={`w-6 h-6 duration-200 hover:font-medium ${
                      isIntersecting
                        ? ' text-gray-400 hover:text-gray-100'
                        : 'text-gray-600 hover:text-gray-100'
                    } `}
                  />
                </Link>
              </Tooltip>
            ) : (
              <Tooltip content='Private Repository' placement='bottom'>
                <span>
                  <RiGitRepositoryPrivateFill
                    className={`w-6 h-6 duration-200 hover:font-medium ${
                      isIntersecting
                        ? ' text-gray-400 hover:text-gray-100'
                        : 'text-gray-600 hover:text-gray-100'
                    } `}
                  />
                </span>
              </Tooltip>
            )}
          </div>
          <Tooltip content='Back to Projects' placement='bottom'>
            <Link
              href='/projects'
              className={`duration-200 hover:font-medium hover:text-gray-100 ${
                isIntersecting ? ' text-gray-400' : 'text-gray-600'
              } `}
            >
              <BiArrowBack className='w-6 h-6 ' />
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className='container mx-auto relative isolate overflow-hidden  py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl font-display'>
              {project.title}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              {project.description}
            </p>
          </div>

          <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
              {links.map((link) => (
                <Link target='_blank' key={link.label} href={link.href}>
                  {link.label} <span aria-hidden='true'>&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      />
    </header>
  );
};
