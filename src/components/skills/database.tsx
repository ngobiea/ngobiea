import SkillCard from './skillCard';

import { mongodb, mysql, postgresql, sqlite, sqlServer } from '../icons';

const databases = [mongodb, mysql, postgresql, sqlite, sqlServer];

export default function Databases() {
  return (
    <div className='grid grid-cols-2  gap-y-4 gap-x-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden'>
      {databases.map((database) => (
        <SkillCard
          title={database.title}
          icon={database.icon}
          key={database.title}
          url={database.url}
        />
      ))}
    </div>
  );
}
