import { notFound } from 'next/navigation';
import { Header } from './header';
import { projects } from '@/data/projects';
import SkillCard from '@/components/skills/skillCard';
import { Typography } from '@/components/materialTailwind';
import { MdCheckCircle } from 'react-icons/md';
import getRepo from '@/actions/get-repo';

import Particles from '@/components/particles';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props['params'][]> {
  return projects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Readonly<Props>) {
  const slug = params?.slug;
  const foundProject = projects.find((project) => project.slug === slug);

  if (!foundProject) {
    notFound();
  } else {
  }
  const repo = await getRepo({
    owner: foundProject.github.author,
    repo: foundProject.github.name,
    isPublic: foundProject.github.isPublic,
  });

  return (
    <>
      <Header
        project={foundProject}
        stars={(repo?.stargazers_count as number) || 0}
      />
      <div className='w-full h-px bg-gray-800' />

      <main className='container mx-auto space-y-5 pb-20 px-4'>
        <section className='relative'>
          <Typography
            color='white'
            className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
          >
            Rationale
          </Typography>
          <Typography className='text-gray-300 dark:text-gray-400'>
            {foundProject.rationale}
          </Typography>
          <Particles
            className='absolute inset-0 -z-10 animate-fade-in'
            quantity={100}
          />
        </section>
        <section className='relative'>
          <Typography
            color='white'
            className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
          >
            Technologies
          </Typography>
          <div className='grid grid-cols-2 gap-y-4 gap-x-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden'>
            {foundProject.technologies.map((tech) => (
              <SkillCard
                key={tech.title}
                icon={tech.icon}
                title={tech.title}
                url={tech.url}
              />
            ))}
          </div>
          <Particles
            className='absolute inset-0 -z-10 animate-fade-in'
            quantity={100}
          />
        </section>
        <div className='w-full h-px bg-gray-800' />
        <section className='relative'>
          <Typography
            color='white'
            className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
          >
            Tools
          </Typography>
          <div className='grid grid-cols-2 gap-y-4 gap-x-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden'>
            {foundProject.tools.map((tool) => (
              <SkillCard
                key={tool.title}
                icon={tool.icon}
                title={tool.title}
                url={tool.url}
              />
            ))}
          </div>
          <Particles
            className='absolute inset-0 -z-10 animate-fade-in'
            quantity={100}
          />
        </section>
        <div className='w-full h-px bg-gray-800' />
        <section className='relative'>
          <Typography
            color='white'
            className='py-2 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
          >
            Lessons Learned
          </Typography>
          <ul className='space-y-1 text-gray-500 list-inside dark:text-gray-400'>
            {foundProject.lessonsLearned.map((lesson) => (
              <li key={lesson} className='flex  w-full'>
                <MdCheckCircle className='w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-2' />

                <Typography className=''>{lesson}</Typography>
              </li>
            ))}
          </ul>
          <Particles
            className='absolute inset-0 -z-10 animate-fade-in'
            quantity={100}
          />
        </section>
      </main>
    </>
  );
}
