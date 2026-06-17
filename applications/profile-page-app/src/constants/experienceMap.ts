import { IconsType } from 'src/lib/common/Icons/iconMap';

export type ExperienceItemsTypes =
  | 'backend'
  | 'frontend'
  | 'infra'
  | 'language'
  | 'mobile'
  | 'tests'
  | 'tools';

export type ExperienceItem = {
  name: string;
  icon: IconsType;
};

export type ExperienceMap = Record<ExperienceItemsTypes, ExperienceItem[]>;

export const experienceMap: ExperienceMap = {
  language: [
    { name: 'Javascript', icon: 'javascript' },
    { name: 'Typescript', icon: 'typescript' },
    { name: 'C#', icon: 'csharp' },
    { name: 'Clojure', icon: 'clojure' },
    { name: 'Java', icon: 'java' },
  ],
  frontend: [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'SASS', icon: 'sass' },
    { name: 'ReactJS', icon: 'react' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Styled Components', icon: 'styledComponents' },
    { name: 'Material UI', icon: 'materialui' },
    { name: 'Figma', icon: 'figma' },
    { name: 'NextJS', icon: 'nextJS' },
    { name: 'TailwindCSS', icon: 'tailwind' },
    { name: 'Mantine UI', icon: 'mantineui' },
    { name: 'React Hook Form', icon: 'reactHookForm' },
    { name: 'Zod', icon: 'zod' },
    { name: 'ElectronJS', icon: 'electron' },
    { name: 'Shadcn UI', icon: 'shadcn' },
    { name: 'Svelte', icon: 'svelte' },
    { name: 'Ant Design UI', icon: 'antdesign' },
    { name: 'Zustand', icon: 'zustand' },
    { name: 'Tanstack', icon: 'tanstack' },
    { name: 'Daisy UI', icon: 'daisyUI' },
  ],
  backend: [
    { name: 'NodeJS', icon: 'nodejs' },
    { name: 'ExpressJS', icon: 'expressJS' },
    { name: 'MongoDB', icon: 'mongoDb' },
    { name: 'Mongoose', icon: 'mongoose' },
    { name: 'Sequelize', icon: 'sequelize' },
    { name: 'PostgresDB', icon: 'postgres' },
    { name: 'NestJS', icon: 'nestJS' },
    { name: 'TypeORM', icon: 'typeorm' },
  ],
  mobile: [
    { name: 'React Native', icon: 'react' },
    { name: 'Expo', icon: 'expo' },
    { name: 'Android Studio', icon: 'androidStudio' },
    { name: 'Gradle', icon: 'gradle' },
  ],
  infra: [
    { name: 'Git', icon: 'git' },
    { name: 'Amazon Web Services', icon: 'aws' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Heroku', icon: 'heroku' },
  ],
  tests: [
    { name: 'Jest', icon: 'jest' },
    { name: 'PuppeterJS', icon: 'puppeter' },
    { name: 'Selenium', icon: 'selenium' },
    { name: 'Cypress', icon: 'cypress' },
  ],
  tools: [
    { name: 'Insomnia', icon: 'insomnia' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Datagrip', icon: 'datagrip' },
  ],
};
