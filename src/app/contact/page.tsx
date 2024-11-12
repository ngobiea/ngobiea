
import Link from 'next/link';
import { Card } from '@/components/card';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import Particles from '@/components/particles';
const socials = [
  {
    icon: <BiLogoGmail size={20} />,
    href: 'mailto:ngobiea@gmail.com',
    label: 'Email',
    handle: 'ngobiea@gmail.com',
  },
  {
    icon: <BiLogoGmail size={20} />,
    href: 'mailto:augustine.fngobie@limkokwing.edu.sl',
    label: 'Email',
    handle: 'augustine.fngobie@limkokwing.edu.sl',
  },
  {
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/augustine-foday-ngobie-569723294/',
    label: 'LinkedIn',
    handle: 'Augustine Ngobie',
  },
  {
    icon: <FaGithub size={20} />,
    href: 'https://github.com/ngobiea',
    label: 'Github',
    handle: 'ngobiea',
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: 'https://wa.me/23272205781',
    label: 'WhatsApp',
    handle: '+23272205781',
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: 'https://wa.me/23230519953',
    label: 'WhatsApp',
    handle: '+23230519953',
  },
];
export default function ContactPage() {
  return (
    <main className='container flex items-center justify-center min-h-screen px-4 py-3 mx-auto'>
      <section className='grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>
        {socials.map((s) => (
          <Card key={s.label}>
            <Link
              href={s.href}
              target='_blank'
              className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16'
            >
              <span
                className='absolute w-px h-2/3 bg-gradient-to-b from-gray-500 via-gray-500/50 to-transparent'
                aria-hidden='true'
              />
              <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-gray-200 group-hover:text-white group-hover:bg-gray-900 border-gray-500 bg-gray-900 group-hover:border-gray-200 drop-shadow-orange'>
                {s.icon}
              </span>{' '}
              <div className='z-10 flex flex-col items-center'>
                <span className='lg:text-xl font-medium duration-150 xl:text-3xl text-gray-200 group-hover:text-white font-display text-center'>
                  {s.handle}
                </span>
                <span className='mt-4 text-sm text-center duration-1000 text-gray-400 group-hover:text-gray-200'>
                  {s.label}
                </span>
              </div>
            </Link>
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
