declare namespace Utils {
  type Paths = '/home';

  type TranslationFile = Record<string, string>;

  type ExperienceItems = {
    name: string;
    year: number;
    icon: IconTypes;
    type: ExperienceItemsTypes;
  };

  type ExperienceItemsTypes = 'backend' | 'frontend' | 'infra' | 'language' | 'tests';

  type IconTypes =
    | 'download'
    | 'selector'
    | 'spinner'
    | 'github'
    | 'template'
    | 'language'
    | 'link'
    | 'textDocument'
    | 'image'
    | 'user'
    | 'theme'
    | 'sun'
    | 'moon'
    | 'website'
    | 'menu'
    | 'close'
    | 'linkedin'
    | 'facebook'
    | 'html'
    | 'css'
    | 'javascript'
    | 'typescript'
    | 'docker'
    | 'styledComponents'
    | 'sass'
    | 'mongoDb'
    | 'nodejs'
    | 'aws'
    | 'java'
    | 'springBoot'
    | 'svelte'
    | 'tailwind'
    | 'react'
    | 'jest'
    | 'selenium'
    | 'puppeter'
    | 'postgres'
    | 'nextJS'
    | 'nestJS'
    | 'expressJS'
    | 'materialui'
    | 'mantineui'
    | 'clojure'
    | 'expo'
    | 'electron'
    | 'figma'
    | 'git'
    | 'androidStudio'
    | 'insomnia'
    | 'postman'
    | 'heroku'
    | 'bootstrap'
    | 'whatsapp'
    | 'udemy'
    | 'school'
    | 'certificates'
    | 'caretLeft'
    | 'caretRight'
    | 'projects'
    | 'cordova'
    | 'cypress'
    | 'pritter'
    | 'quill'
    | 'shadcn'
    | 'android';

  type TextTags =
    | 'b'
    | 'span'
    | 'small'
    | 'strong'
    | 'mark'
    | 'em'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.ttf';
declare module '*.woff';
declare module '*.woff2';
