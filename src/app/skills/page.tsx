import { Typography } from '@/components/materialTailwind';
import Languages from '@/components/skills/languages';
import Frameworks from '@/components/skills/frameworks';
import Tools from '@/components/skills/tools';
import Databases from '@/components/skills/database';
import Particles from '@/components/particles';
export default function SkillsPage() {
  return (
    <main className='container min-h-screen px-4 mx-auto space-y-2'>
      <section className='py-5 space-y-5 relative'>
        <Typography
          color='white'
          className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
        >
          Programming Languages
        </Typography>
        <div>
          <Languages />
        </div>
      </section>
      <div className='w-full h-px bg-gray-800' />

      <section className='py-5 space-y-5 relative'>
        <Typography
          color='white'
          className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
        >
          Frameworks {`&`} Libraries
        </Typography>
        <div>
          <Frameworks />
        </div>
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        />
      </section>
      <div className='w-full h-px bg-gray-800' />

      <section className='py-5 space-y-5 relative'>
        <Typography
          variant='h1'
          color='white'
          className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
        >
          Tools
        </Typography>
        <div>
          <Tools />
        </div>
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        />
      </section>
      <div className='w-full h-px bg-gray-800' />

      <section className='py-5 space-y-5 relative'>
        <Typography
          variant='h1'
          color='white'
          className='py-2 text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
        >
          Databases
        </Typography>
        <div>
          <Databases />
        </div>
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        />
      </section>
    </main>
  );
}
