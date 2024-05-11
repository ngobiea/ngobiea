import SkillCard from './skillCard';

import { javascript, typescript, dart, python, java, cpp } from '../icons';
const languages = [javascript, typescript, dart, python, java, cpp];

export default function Languages() {
  return (
    <div className='grid grid-cols-2 gap-y-4 gap-x-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden'>
      {languages.map((language) => (
        <SkillCard
          title={language.title}
          icon={language.icon}
          key={language.title}
          url={language.url}
        />
      ))}
    </div>
  );
}
