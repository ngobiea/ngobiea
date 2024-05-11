import SkillCard from './skillCard';


import {
  aws,
  git,
  vitest,
  vsCode,
  docker,
  kubernetes,
  firebase,
  postman,
  jenkins,
  github,
  webdriverIo,
  drawIo,
} from '../icons';

const tools = [
  vsCode,
  git,
  github,
  drawIo,
  docker,
  kubernetes,
  jenkins,
  aws,
  firebase,
  webdriverIo,
  vitest,
  postman,

];

export default function Tools() {
  return (
    <div className='grid grid-cols-2 gap-y-4 gap-x-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden'>
      {tools.map((tool) => (
        <SkillCard
          title={tool.title}
          icon={tool.icon}
          key={tool.title}
          url={tool.url}
        />
      ))}
    </div>
  );
}
