import SkillCard from './skillCard';

import {
  nodeJs,
  reactJs,
  nextjs,
  bootstrap,
  electron,
  express,
  materialDesign,
  flutter,
  reactNative,
  reactRouter,
  tailwindCss,
  redux,
  socketIo,
  webRtc,
  reactHookForm,
  mongoose,
  sequelize,
  mediaSoup,
} from '../icons';
const frameworks = [
  nodeJs,
  express,
  mongoose,
  sequelize,
  electron,
  flutter,
  reactJs,
  reactNative,
  nextjs,
  reactRouter,
  redux,
  reactHookForm,
  materialDesign,
  tailwindCss,
  bootstrap,
  socketIo,
  webRtc,
  mediaSoup,
];

export default function Frameworks() {
  return (
    <div className='grid grid-cols-2  gap-y-4 gap-x-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden'>
      {frameworks.map((framework) => (
        <SkillCard
          title={framework.title}
          icon={framework.icon}
          key={framework.title}
          url={framework.url}
        />
      ))}
    </div>
  );
}
