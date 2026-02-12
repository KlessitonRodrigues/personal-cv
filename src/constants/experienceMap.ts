import { IconsType } from 'src/lib/common/Icons/iconMap';

export type ExperienceItemsTypes = 'backend' | 'frontend' | 'infra' | 'language' | 'tests';

export type ExperienceItems = {
  name: string;
  year: number;
  icon: IconsType;
  type: ExperienceItemsTypes;
};

export const experienceMap: ExperienceItems[] = [
  {
    name: 'HTML',
    year: 2021,
    type: 'frontend',
    icon: 'html',
  },
  {
    name: 'CSS',
    year: 2021,
    type: 'frontend',
    icon: 'css',
  },
  {
    name: 'Javascript',
    year: 2021,
    type: 'language',
    icon: 'javascript',
  },
  {
    name: 'Bootstrap',
    year: 2021,
    type: 'frontend',
    icon: 'bootstrap',
  },
  {
    name: 'SASS',
    year: 2021,
    type: 'frontend',
    icon: 'sass',
  },
  {
    name: 'Figma',
    year: 2022,
    type: 'frontend',
    icon: 'figma',
  },
  {
    name: 'ReactJS',
    year: 2022,
    type: 'frontend',
    icon: 'react',
  },
  {
    name: 'Redux',
    year: 2022,
    type: 'frontend',
    icon: 'redux',
  },
  {
    name: 'Styled Components',
    year: 2022,
    type: 'frontend',
    icon: 'styledComponents',
  },
  {
    name: 'Material UI',
    year: 2022,
    type: 'frontend',
    icon: 'materialui',
  },
  {
    name: 'NodeJS',
    year: 2022,
    type: 'backend',
    icon: 'nodejs',
  },
  {
    name: 'ExpressJS',
    year: 2022,
    type: 'backend',
    icon: 'expressJS',
  },
  {
    name: 'Typescript',
    year: 2022,
    type: 'language',
    icon: 'typescript',
  },
  {
    name: 'Git',
    year: 2022,
    type: 'infra',
    icon: 'git',
  },
  {
    name: 'NextJS',
    year: 2023,
    type: 'frontend',
    icon: 'nextJS',
  },
  {
    name: 'MantineUI',
    year: 2023,
    type: 'frontend',
    icon: 'mantineui',
  },
  {
    name: 'Docker',
    year: 2023,
    type: 'infra',
    icon: 'docker',
  },
  {
    name: 'MongoDB',
    year: 2023,
    type: 'backend',
    icon: 'mongoDb',
  },
  {
    name: 'PostgresDB',
    year: 2023,
    type: 'backend',
    icon: 'postgres',
  },
  {
    name: 'Insomnia',
    year: 2023,
    type: 'infra',
    icon: 'insomnia',
  },
  {
    name: 'Postman',
    year: 2023,
    type: 'infra',
    icon: 'postman',
  },
  {
    name: 'Heroku',
    year: 2023,
    type: 'infra',
    icon: 'heroku',
  },
  {
    name: 'AWS',
    year: 2024,
    type: 'infra',
    icon: 'aws',
  },
  {
    name: 'ElectronJS',
    year: 2024,
    type: 'frontend',
    icon: 'electron',
  },
  {
    name: 'Jest',
    year: 2024,
    type: 'tests',
    icon: 'jest',
  },
  {
    name: 'PuppeterJS',
    year: 2024,
    type: 'tests',
    icon: 'puppeter',
  },
  {
    name: 'React Native',
    year: 2024,
    type: 'frontend',
    icon: 'react',
  },
  {
    name: 'Expo',
    year: 2024,
    type: 'infra',
    icon: 'expo',
  },
  {
    name: 'SvelteJS',
    year: 2024,
    type: 'frontend',
    icon: 'svelte',
  },
  {
    name: 'TailwindCSS',
    year: 2024,
    type: 'frontend',
    icon: 'tailwind',
  },
  {
    name: 'NestJS',
    year: 2024,
    type: 'backend',
    icon: 'nestJS',
  },
  {
    name: 'Clojure',
    year: 2025,
    type: 'language',
    icon: 'clojure',
  },
  {
    name: 'Java',
    year: 2025,
    type: 'language',
    icon: 'java',
  },
  {
    name: 'Android Studio',
    year: 2025,
    type: 'frontend',
    icon: 'androidStudio',
  },
  {
    name: 'Spring Boot',
    year: 2025,
    type: 'backend',
    icon: 'springBoot',
  },
  {
    name: 'Selenium',
    year: 2025,
    type: 'tests',
    icon: 'selenium',
  },
  {
    name: 'Apache Cordova',
    year: 2025,
    type: 'frontend',
    icon: 'cordova',
  },
  {
    name: 'Cypress',
    year: 2025,
    type: 'frontend',
    icon: 'cypress',
  },
  {
    name: 'Quill Text Editor',
    year: 2025,
    type: 'frontend',
    icon: 'quill',
  },
  {
    name: 'Shadcn UI',
    year: 2025,
    type: 'frontend',
    icon: 'shadcn',
  },
  {
    name: 'Daisy UI',
    year: 2026,
    type: 'frontend',
    icon: 'daisyUI',
  },
  {
    name: 'HuggingFace',
    year: 2026,
    type: 'infra',
    icon: 'huggingFace',
  },
];
