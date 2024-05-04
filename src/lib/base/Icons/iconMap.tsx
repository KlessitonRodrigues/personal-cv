import { CgWebsite } from 'react-icons/cg';
import { FaFacebook, FaGithub, FaJava, FaLinkedin } from 'react-icons/fa6';
import {
  LuDownload,
  LuFileText,
  LuImage,
  LuLanguages,
  LuLink,
  LuMenu,
  LuMoon,
  LuPaintbrush,
  LuSun,
  LuUser,
  LuX,
} from 'react-icons/lu';
import { RiExpandUpDownFill, RiFileTextLine, RiLoader5Line } from 'react-icons/ri';
import {
  SiAmazonaws,
  SiAndroidstudio,
  SiBootstrap,
  SiClojure,
  SiCss3,
  SiDocker,
  SiElectron,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiJest,
  SiMantine,
  SiMaterialdesign,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPlaywright,
  SiPostgresql,
  SiPostman,
  SiPuppeteer,
  SiReact,
  SiSass,
  SiSelenium,
  SiSpringboot,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <LuDownload />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader5Line />,
  github: <FaGithub />,
  template: <RiFileTextLine />,
  language: <LuLanguages />,
  link: <LuLink />,
  textDocument: <LuFileText />,
  image: <LuImage />,
  user: <LuUser />,
  theme: <LuPaintbrush />,
  sun: <LuSun />,
  moon: <LuMoon />,
  website: <CgWebsite />,
  menu: <LuMenu />,
  close: <LuX />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  docker: <SiDocker />,
  styledComponents: <SiStyledcomponents />,
  aws: <SiAmazonaws />,
  mongoDb: <SiMongodb />,
  nodejs: <SiNodedotjs />,
  sass: <SiSass />,
  springBoot: <SiSpringboot />,
  svelte: <SiSvelte />,
  tailwind: <SiTailwindcss />,
  java: <FaJava />,
  react: <SiReact />,
  jest: <SiJest />,
  postgres: <SiPostgresql />,
  puppeter: <SiPuppeteer />,
  selenium: <SiSelenium />,
  expressJS: <SiExpress />,
  nestJS: <SiNestjs />,
  nextJS: <SiNextdotjs />,
  mantineui: <SiMantine />,
  materialui: <SiMaterialdesign />,
  playwright: <SiPlaywright />,
  clojure: <SiClojure />,
  expo: <SiExpo />,
  electron: <SiElectron />,
  figma: <SiFigma />,
  git: <SiGit />,
  androidStudio: <SiAndroidstudio />,
  insomnia: <SiInsomnia />,
  postman: <SiPostman />,
  vccode: <SiVisualstudiocode />,
  heroku: <SiHeroku />,
  bootstrap: <SiBootstrap />,
};
