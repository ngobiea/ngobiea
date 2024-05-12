import {
  amazonEc2,
  amazonS3,
  amazonSimpleEmailService,
  copyLeaks,
  docker,
  drawIo,
  electron,
  express,
  git,
  github,
  javascript,
  mediaSoup,
  mongodb,
  mongoose,
  postman,
  reactHookForm,
  reactJs,
  reactRouter,
  redux,
  socketIo,
  tailwindCss,
  tensorflow,
  vsCode,
  webRtc,
} from '@/components/icons';

export const dlsms: Project = {
  title: 'Distance Learning Student Monitoring System(DLSMS)',
  date: new Date(2023, 9, 1).toISOString(),
  description: `DLSMS is a desktop-base application that utilize 
    computer vision and machine learning technology to provides an
    innovative solution to monitor and assess student's performance
    and behavior in an online learning environment.
    The data collected from the student system is processed in real time and alerts are generated in case of any signs of suspicious activity.
    `,
  rationale: `As a requirements for my bachelor's degree, I was required to build a software application that solves a real-world problem. 
    I chose to build a Distance Learning Student Monitoring System because of the COVID-19 pandemic.
    The pandemic has forced schools to close and students to learn from home.
    Teachers are finding it difficult to monitor their students during online classes.
    I wanted to build a system that helps teachers monitor their students during online classes.
    I wanted to make sure digital learning is as effective as traditional learning.
    I wanted to make sure students are paying attention during online classes.
    I wanted to make sure students are not cheating during online exams.`,
  features: [
    'Account management',
    'Class and exam session creation',
    'Class and exam session scheduling',
    'Class and exam session recording',
    'Class and exam session reporting',
    'Chat and messaging',
    'Video conferencing',
    'Screen sharing',
    'File sharing',
    'Plagiarism detection and reporting',
    'Automated attendance',
    'Real-time face detection and recognition',
    'Real-time browser monitoring',
    'Exam content protection',
  ],
  images: [],
  lessonsLearned: [
    'As with my first real-world problem solving project, I learned the complete software development lifecycle',
    'I learned the importance of requirements gathering and analysis',
    'I learned how to design a system architecture',
    'I learned how to design a database schema',
    'I learned how to collaborate with a team member to build a software solution',
    'I learned about web socket protocol and how to use it to build real-time applications',
    'I learned how to use WebRTC to build video streaming and conferencing applications',
    'I learned how to leverage cloud technology to build complete software solutions',
    'I learned how to use Docker to containerize applications',
    'I learned how to use copyLeaks api to detect plagiarism in submitted assignments',
    'I learned the use of redux toolkit to manage application wide state and api data fetching',
  ],
  published: true,
  github: {
    author: 'ngobiea',
    name: 'dlsms-client',
    url: 'https://github.com/ngobiea/dlsms-client',
    isPublic: true,
    downloadUrl: null,
  },
  slug: 'distance-learning-student-monitoring-system',
  status: {
    status: 'Completed',
    comment:
      'The project was completed on time. I am current working with my supervisor to publish the project in a journal',
  },
  technologies: [
    javascript,
    electron,
    express,
    mongoose,
    mongodb,
    socketIo,
    webRtc,
    tensorflow,
    mediaSoup,
    amazonEc2,
    amazonS3,
    amazonSimpleEmailService,
    reactJs,
    redux,
    reactHookForm,
    reactRouter,
    tailwindCss,
    docker,
    copyLeaks,
  ],
  tools: [vsCode, git, github, drawIo, postman],
  url: 'https://github.com/ngobiea/dlsms-server',
  youtube: 'https://youtu.be/lwfWhNwYwzw',
};
