import { Timeline } from '@/components/materialTailwind';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import EECard from './eecard';

const experiences = [
  {
    title: 'Full Stack Web Developer',
    institution: 'SOULTERS DIGITAL INNOVATIONS',
    date: 'October 2023 - May 2024',
  },
  {
    title: 'Software Engineer & Developer',
    institution: 'FREELANCE',
    date: 'January 2024 - Present',
  },
];

export default function ExperienceTimeline() {
  return (
    <div className='sm:w-[25rem]'>
      <Timeline>
        {experiences.map((education, index) => (
          <EECard
            date={education.date}
            icon={<PiSuitcaseSimpleBold className='h-5 w-5' />}
            institution={education.institution}
            title={education.title}
            isLast={index !== experiences.length - 1}
            key={education.title}
          />
        ))}
      </Timeline>
    </div>
  );
}
