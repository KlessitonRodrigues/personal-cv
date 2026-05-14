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
    name: 'Git',
    year: 2021,
    type: 'infra',
    icon: 'git',
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
    name: 'Figma',
    year: 2022,
    type: 'frontend',
    icon: 'figma',
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
    name: 'MongoDB',
    year: 2022,
    type: 'backend',
    icon: 'mongoDb',
  },
  {
    name: 'Mongoose',
    year: 2022,
    type: 'backend',
    icon: 'mongoose',
  },
  {
    name: 'Jest',
    year: 2022,
    type: 'tests',
    icon: 'jest',
  },
  {
    name: 'Insomnia',
    year: 2022,
    type: 'infra',
    icon: 'insomnia',
  },
  {
    name: 'NextJS',
    year: 2023,
    type: 'frontend',
    icon: 'nextJS',
  },
  {
    name: 'TailwindCSS',
    year: 2023,
    type: 'frontend',
    icon: 'tailwind',
  },
  {
    name: 'MantineUI',
    year: 2023,
    type: 'frontend',
    icon: 'mantineui',
  },
  {
    name: 'React Hook Form',
    year: 2023,
    type: 'frontend',
    icon: 'reactHookForm',
  },
  {
    name: 'Zod',
    year: 2023,
    type: 'frontend',
    icon: 'zod',
  },
  {
    name: 'Docker',
    year: 2023,
    type: 'infra',
    icon: 'docker',
  },
  {
    name: 'Sequelize',
    year: 2023,
    type: 'backend',
    icon: 'sequelize',
  },
  {
    name: 'PostgresDB',
    year: 2023,
    type: 'backend',
    icon: 'postgres',
  },
  {
    name: 'Postman',
    year: 2023,
    type: 'infra',
    icon: 'postman',
  },
  {
    name: 'Clojure',
    year: 2023,
    type: 'language',
    icon: 'clojure',
  },
  {
    name: 'Heroku',
    year: 2023,
    type: 'infra',
    icon: 'heroku',
  },
  {
    name: 'AWS',
    year: 2023,
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
    name: 'PuppeterJS',
    year: 2024,
    type: 'tests',
    icon: 'puppeter',
  },
  {
    name: 'Android Studio',
    year: 2024,
    type: 'frontend',
    icon: 'androidStudio',
  },
  {
    name: 'Expo',
    year: 2024,
    type: 'infra',
    icon: 'expo',
  },
  {
    name: 'React Native',
    year: 2024,
    type: 'frontend',
    icon: 'react',
  },
  {
    name: 'Gradle',
    year: 2024,
    type: 'infra',
    icon: 'gradle',
  },
  {
    name: 'NestJS',
    year: 2024,
    type: 'backend',
    icon: 'nestJS',
  },
  {
    name: 'TypeORM',
    year: 2024,
    type: 'backend',
    icon: 'typeorm',
  },
  {
    name: 'Selenium',
    year: 2025,
    type: 'tests',
    icon: 'selenium',
  },
  {
    name: 'Cypress',
    year: 2025,
    type: 'frontend',
    icon: 'cypress',
  },
  {
    name: 'Shadcn UI',
    year: 2025,
    type: 'frontend',
    icon: 'shadcn',
  },
  {
    name: 'Svelte',
    year: 2025,
    type: 'frontend',
    icon: 'svelte',
  },
  {
    name: 'Daisy UI',
    year: 2025,
    type: 'frontend',
    icon: 'daisyUI',
  },
];
