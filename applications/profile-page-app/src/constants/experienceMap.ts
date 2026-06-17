import { IconsType } from 'src/lib/common/Icons/iconMap';

export type ExperienceItemsTypes =
  | 'backend'
  | 'frontend'
  | 'infra'
  | 'language'
  | 'mobile'
  | 'tests'
  | 'tools'
  | 'ai_tools';

export type ExperienceItem = {
  name: string;
  icon: IconsType;
};

export const experienceMap: Record<ExperienceItemsTypes, ExperienceItem[]> = {
  language: [
    { name: 'Javascript', icon: 'javascript' },
    { name: 'Typescript', icon: 'typescript' },
    { name: 'Clojure', icon: 'clojure' },
    { name: 'Java', icon: 'java' },
    { name: 'C#', icon: 'csharp' },
  ],
  frontend: [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'SASS', icon: 'sass' },
    { name: 'ReactJS', icon: 'react' },
    { name: 'React Router DOM', icon: 'reactrouter' },
    { name: 'Styled Components', icon: 'styledComponents' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Material UI', icon: 'materialui' },
    { name: 'NextJS', icon: 'nextJS' },
    { name: 'TailwindCSS', icon: 'tailwind' },
    { name: 'Mantine UI', icon: 'mantineui' },
    { name: 'React Hook Form', icon: 'reactHookForm' },
    { name: 'Zod', icon: 'zod' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Electron', icon: 'electron' },
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
    { name: 'DynamoDB', icon: 'dynamodb' },
    { name: 'Sequelize', icon: 'sequelize' },
    { name: 'PostgresDB', icon: 'postgres' },
    { name: 'Strapi', icon: 'strapi' },
    { name: 'NestJS', icon: 'nestJS' },
    { name: 'TypeORM', icon: 'typeorm' },
  ],
  mobile: [
    { name: 'React Native', icon: 'react' },
    { name: 'Native Base', icon: 'nativeBase' },
    { name: 'Expo', icon: 'expo' },
    { name: 'Gradle', icon: 'gradle' },
  ],
  infra: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'BitBucket', icon: 'bitbucket' },
    { name: 'Amazon Web Services', icon: 'aws' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Heroku', icon: 'heroku' },
  ],
  tests: [
    { name: 'Jest', icon: 'jest' },
    { name: 'Puppeter', icon: 'puppeter' },
    { name: 'Selenium', icon: 'selenium' },
    { name: 'Cypress', icon: 'cypress' },
  ],
  tools: [
    { name: 'Visual Studio Code', icon: 'vscode' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Insomnia', icon: 'insomnia' },
    { name: 'Postman', icon: 'postman' },
    { name: 'MongoDB Compass', icon: 'compass' },
    { name: 'Android Studio', icon: 'androidStudio' },
    { name: 'Datagrip', icon: 'datagrip' },
    { name: 'Yaak', icon: 'yaak' },
  ],
  ai_tools: [
    { name: 'Copilot', icon: 'copilot' },
    { name: 'Codex', icon: 'codex' },
    { name: 'Claude', icon: 'claude' },
  ],
};
