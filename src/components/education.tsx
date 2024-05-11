import { Timeline } from '@/components/materialTailwind';
import EECard from './eecard';
import { FaUserGraduate } from 'react-icons/fa';
const educations = [
  {
    title: 'Primary School',
    institution: "St. Peter's The Rock School",
    date: '2005 - 2011',
  },
  {
    title: 'Junior High School',
    institution: 'Albert Academy Junior School',
    date: '2011 - 2014',
  },
  {
    title: 'Senior High School',
    institution: 'W.A.M. Collegiate Senior School',
    date: '2014 - 2017',
  },
  {
    title: 'Diploma Electrical Engineering',
    institution: 'Milton Margai Technical University',
    date: '2017 - 2019',
  },
  {
    title: 'BSc Software Engineering',
    institution: 'COMSATS University Islamabad',
    date: '2020 - 2024',
  },
];

export default function EductionTimeline() {
  return (
    <div>
      <Timeline className='sm:w-[25rem]'>
        {educations.map((education, index) => (
          <EECard
            date={education.date}
            icon={<FaUserGraduate className='h-5 w-5' />}
            institution={education.institution}
            title={education.title}
            isLast={index !== educations.length - 1}
            key={education.title}
          />
        ))}
      </Timeline>
    </div>
  );
}
