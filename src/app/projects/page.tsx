import { Card } from '@/components/card';
import { Article } from './article';
import { projects } from '@/data/projects';
import Particles from '@/components/particles';

export default function ProjectPage() {
  return (
    <main className='container mx-auto py-6 space-y-5 px-4'>
      <section className='max-w-2xl mx-auto lg:mx-0'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
          Projects
        </h1>
        <p className=' text-gray-400'>
          Some of the projects are from work, university and some are on my own
          time.
        </p>
        {/* <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        /> */}
      </section>
      <div className='hidden w-full h-px md:block bg-gray-800' />

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3 relative'>
        {projects.map((project, index) => (
          <Card key={project.title}>
            <Article project={project} views={index + 1} />
          </Card>
        ))}
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        />
      </section>
    </main>
  );
}
