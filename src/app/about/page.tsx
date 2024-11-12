import { Typography } from '@/components/materialTailwind';
import EductionTimeline from '@/components/education';
import ExperienceTimeline from '@/components/experience';
import Particles from '@/components/particles';
export default function AboutPage() {
  return (
    <>
      <header>
        <Typography
          variant='h1'
          color='white'
          className='py-2 text-center px-3'
        >
          About Me
        </Typography>

        <Typography variant='lead' color='white' className='text-center px-3'>
          Innovative Software Engineer and dedicated Lecturer. Expert in full
          stack development with a proven record of creating and managing
          dynamic applications, driving technological growth, and imparting
          technical knowledge to aspiring developers. Passionate about
          contributing to the digital transformation of education and other
          sectors in Sierra Leone. Seeking opportunities to deepen expertise in
          Cyber Security, Data Science, or Artificial Intelligence to impact the
          country’s technological advancement.
        </Typography>
      </header>
      <div className='w-full h-px bg-gray-800' />

      <main className='px-4 mx-auto container relative'>
        <section className='sm:flex sm:justify-center md:justify-start w-full'>
          <div>
            <Typography variant='h1' color='white' className='py-5'>
              Education
            </Typography>
            <EductionTimeline />
          </div>
        </section>
        <div className='w-full h-px bg-gray-800' />

        <section className='sm:flex sm:justify-center md:justify-end w-full relative'>
          <div className=''>
            <Typography variant='h1' color='white' className='py-5'>
              Experience
            </Typography>
            <ExperienceTimeline />
          </div>
        </section>
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        />
      </main>
    </>
  );
}
