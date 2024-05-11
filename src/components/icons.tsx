import DrawioIcon from './icons/drawio';
import mediasoupIcon from '@/assets/mediasoup.png';
import copyLeaksIcon from '@/assets/copyleaks.png';
import apexChartIcon from '@/assets/apex.svg';
import riverpodIcon from '@/assets/riverpod.png';
import Image from 'next/image';
import {
  SiNextdotjs,
  SiElectron,
  SiFlutter,
  SiReactrouter,
  SiTailwindcss,
  SiRedux,
  SiMaterialdesign,
  SiSocketdotio,
  SiReacthookform,
  SiMongoose,
  SiSequelize,
  SiVitest,
  SiWebrtc,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMicrosoftsqlserver,
  SiCypress,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDart,
  SiPython,
  SiWebdriverio,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPostman,
  SiReact,
  SiAmazons3,
  SiAmazonec2,
  SiAmazonsimpleemailservice,
  SiExpress,
  SiTensorflow,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFirebase,
} from 'react-icons/si';
import { FaJava, FaNode, FaRegFilePdf } from 'react-icons/fa';
import { TbBrandCpp, TbBrandVscode } from 'react-icons/tb';
// Languages
export const typescript = {
  title: 'TypeScript',
  icon: <SiTypescript className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://www.typescriptlang.org/',
};
export const javascript = {
  title: 'JavaScript',
  icon: <SiJavascript className='h-12 w-12 sm:w-12 sm:h-12 text-yellow-500' />,
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
};
export const html5 = {
  title: 'HTML5',
  icon: <SiHtml5 className='h-12 w-12 sm:w-12 sm:h-12 text-orange-500' />,
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
};
export const css3 = {
  title: 'CSS3',
  icon: <SiCss3 className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
};
export const dart = {
  title: 'Dart',
  icon: <SiDart className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://dart.dev/',
};
export const python = {
  title: 'Python',
  icon: <SiPython className='h-12 w-12 sm:w-12 sm:h-12 text-yellow-500 ' />,
  url: 'https://www.python.org/',
};
export const java = {
  title: 'Java',
  icon: <FaJava className='h-12 w-12 sm:w-12 sm:h-12 text-orange-500' />,
  url: 'https://www.java.com/',
};
export const cpp = {
  title: 'C++',
  icon: <TbBrandCpp className='h-12 w-12 sm:w-12 sm:h-12 text-red-500' />,
  url: 'https://isocpp.org/',
};

// Frameworks
export const nodeJs = {
  title: 'Node.js',
  icon: <FaNode className='h-12 w-12 sm:w-12 sm:h-12 text-green-500' />,
  url: 'https://nodejs.org/',
};
export const reactJs = {
  title: 'React.js',
  icon: <SiReact className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://reactjs.org/',
};
export const nextjs = {
  title: 'Next.js',
  icon: <SiNextdotjs className='h-12 w-12 sm:w-12 sm:h-12 text-white' />,
  url: 'https://nextjs.org/',
};
export const electron = {
  title: 'Electron.js',
  icon: <SiElectron className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://www.electronjs.org/',
};
export const flutter = {
  title: 'Flutter',
  icon: <SiFlutter className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://flutter.dev/',
};
export const reactNative = {
  title: 'React Native',
  icon: <SiReact className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://reactnative.dev/',
};
export const reactRouter = {
  title: 'React Router',
  icon: <SiReactrouter className='h-12 w-12 sm:w-12 sm:h-12 text-red-500' />,
  url: 'https://reactrouter.com/',
};
export const tailwindCss = {
  title: 'Tailwind CSS',
  icon: <SiTailwindcss className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://tailwindcss.com/',
};
export const bootstrap = {
  title: 'Bootstrap',
  icon: <SiBootstrap className='h-12 w-12 sm:w-12 sm:h-12 text-purple-500' />,
  url: 'https://getbootstrap.com/',
};
export const redux = {
  title: 'Redux ToolKit',
  icon: <SiRedux className='h-12 w-12 sm:w-12 sm:h-12 text-purple-500' />,
  url: 'https://redux-toolkit.js.org/',
};
export const materialDesign = {
  title: 'Material Design',
  icon: (
    <SiMaterialdesign className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />
  ),
  url: 'https://material.io/',
};
export const socketIo = {
  title: 'Socket.io',
  icon: <SiSocketdotio className='h-12 w-12 sm:w-12 sm:h-12 text-white' />,
  url: 'https://socket.io/',
};
export const mediaSoup = {
  title: 'MediaSoup',
  icon: (
    <Image
      src={mediasoupIcon}
      width={100}
      height={100}
      alt='mediasoup'
      className='pt-4 w-40 text-white'
    />
  ),
  url: 'https://mediasoup.org/',
};
export const riverpod = {
  title: 'Riverpod',
  icon: (
    <Image
      src={riverpodIcon}
      width={50}
      height={50}
      alt='riverpod'
      className='pt-4 text-white'
    />
  ),
  url: 'https://riverpod.dev/',
};
export const copyLeaks = {
  title: 'CopyLeaks',
  icon: (
    <Image
      src={copyLeaksIcon}
      width={100}
      height={100}
      alt='copyleaks'
      className='pt-4 w-40 text-white'
    />
  ),
  url: 'https://copyleaks.com/',
};
export const webRtc = {
  title: 'WebRTC',
  icon: <SiWebrtc className='h-12 w-12 sm:w-12 sm:h-12 text-amber-500' />,
  url: 'https://webrtc.org/',
};
export const reactHookForm = {
  title: 'React Hook Form',
  icon: <SiReacthookform className='h-12 w-12 sm:w-12 sm:h-12 text-pink-500' />,
  url: 'https://react-hook-form.com/',
};
export const express = {
  title: 'Express',
  icon: <SiExpress className='h-12 w-12 sm:w-12 sm:h-12 text-green-500' />,
  url: 'https://expressjs.com/',
};
export const tensorflow = {
  title: 'Tensorflow.js',
  icon: <SiTensorflow className='h-12 w-12 sm:w-12 sm:h-12 text-orange-500' />,
  url: 'https://www.tensorflow.org/js',
};
export const mongoose = {
  title: 'Mongoose',
  icon: <SiMongoose className='h-12 w-12 sm:w-12 sm:h-12 text-green-500' />,
  url: 'https://mongoosejs.com/',
};
export const sequelize = {
  title: 'Sequelize',
  icon: <SiSequelize className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://sequelize.org/',
};
export const vitest = {
  title: 'Vitest',
  icon: <SiVitest className='h-12 w-12 sm:w-12 sm:h-12 text-yellow-500' />,
  url: 'https://vitest.dev/',
};
export const webdriverIo = {
  title: 'Webdriver.io',
  icon: <SiWebdriverio className='h-12 w-12 sm:w-12 sm:h-12 text-green-500' />,
  url: 'https://webdriver.io/',
};
export const pdfKit = {
  title: 'PDF Kit',
  icon: <FaRegFilePdf className='h-12 w-12 sm:w-12 sm:h-12 text-red-500' />,
  url: 'https://pdfkit.org/',
};
export const faceApi = {
  title: 'Face API',
  icon: <SiTensorflow className='h-12 w-12 sm:w-12 sm:h-12 text-orange-500' />,
  url: 'https://justadudewhohacks.github.io/face-api.js/docs/index.html',
};

export const apexChart = {
  title: 'Apex Chart',
  icon: <Image src={apexChartIcon} width={50} height={50} alt='apex chart' />,
  url: 'https://apexcharts.com/',
};

// Tools
export const vsCode = {
  title: 'VS Code',
  icon: <TbBrandVscode className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://code.visualstudio.com/',
};
export const aws = {
  title: 'AWS',
  icon: <SiAmazonaws className='h-12 w-12 sm:w-12 sm:h-12 text-yellow-500' />,
  url: 'https://aws.amazon.com/',
};
export const git = {
  title: 'Git',
  icon: <SiGit className='h-12 w-12 sm:w-12 sm:h-12 text-red-500' />,
  url: 'https://git-scm.com/',
};
export const github = {
  title: 'GitHub',
  icon: <SiGithub className='h-12 w-12 sm:w-12 sm:h-12 text-white' />,
  url: 'https://github.com/',
};
export const docker = {
  title: 'Docker',
  icon: <SiDocker className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://www.docker.com/',
};
export const kubernetes = {
  title: 'Kubernetes',
  icon: <SiKubernetes className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://kubernetes.io/',
};
export const jenkins = {
  title: 'Jenkins',
  icon: <SiJenkins className='h-12 w-12 sm:w-12 sm:h-12 text-red-500' />,
  url: 'https://www.jenkins.io/',
};
export const firebase = {
  title: 'Firebase',
  icon: <SiFirebase className='h-12 w-12 sm:w-12 sm:h-12 text-yellow-500' />,
  url: 'https://firebase.google.com/',
};
export const postman = {
  title: 'Postman',
  icon: <SiPostman className='h-12 w-12 sm:w-12 sm:h-12 text-orange-500' />,
  url: 'https://www.postman.com/',
};
export const cypress = {
  title: 'Cypress',
  icon: <SiCypress className='h-12 w-12 sm:w-12 sm:h-12 text-green-500' />,
  url: 'https://www.cypress.io/',
};

export const amazonS3 = {
  title: 'Amazon S3',
  icon: <SiAmazons3 className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://aws.amazon.com/s3/',
};
export const amazonEc2 = {
  title: 'Amazon EC2',
  icon: <SiAmazonec2 className='h-12 w-12 sm:w-12 sm:h-12 text-yellow-500' />,
  url: 'https://aws.amazon.com/ec2/',
};
export const amazonSimpleEmailService = {
  title: 'Amazon Simple Email Service',
  icon: (
    <SiAmazonsimpleemailservice className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />
  ),
  url: 'https://aws.amazon.com/ses/',
};
export const drawIo = {
  title: 'draw.io',
  icon: <DrawioIcon />,
  url: 'https://app.diagrams.net/',
};

// Databases
export const mongodb = {
  title: 'MongoDB',
  icon: <SiMongodb className='h-12 w-12 sm:w-12 sm:h-12 text-green-500' />,
  url: 'https://www.mongodb.com/',
};
export const mysql = {
  title: 'MySQL',
  icon: <SiMysql className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://www.mysql.com/',
};
export const postgresql = {
  title: 'PostgreSQL',
  icon: <SiPostgresql className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://www.postgresql.org/',
};
export const sqlite = {
  title: 'SQLite',
  icon: <SiSqlite className='h-12 w-12 sm:w-12 sm:h-12 text-blue-500' />,
  url: 'https://www.sqlite.org/',
};
export const sqlServer = {
  title: 'SQL Server',
  icon: (
    <SiMicrosoftsqlserver className='h-12 w-12 sm:w-12 sm:h-12 text-red-500' />
  ),
  url: 'https://www.microsoft.com/en-us/sql-server',
};
