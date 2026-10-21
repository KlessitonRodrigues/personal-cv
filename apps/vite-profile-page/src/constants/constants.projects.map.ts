import gameFinderImg from 'src//public/images/game_finder_img.png';
import multistepFormImg from 'src//public/images/multistep_form.png';
import profileImg from 'src//public/images/profile_img.png';
import apiRoutesImg from 'src/public/images/api_routes.png';
import authFormImg from 'src/public/images/auth_form.png';
import daisyuiStorybookImg from 'src/public/images/daisyui_storybook.png';
import easyEncryptImg from 'src/public/images/easy_encrypt.png';
import githubPageImg from 'src/public/images/github.png';
import landingPageTemplateImg from 'src/public/images/landing_page_template.png';
import translationAppImg from 'src/public/images/translation_app.png';

import { urls } from './constants.urls';

const projectsMap = [
  {
    title: 'extraworks_personalcv',
    description: 'extraworks_personalcv_text',
    technologies: 'extraworks_personalcv_tech',
    websiteUrl: urls.personalPage,
    githubUrl: urls.personalPageRep,
    imageSrc: profileImg,
  },
  {
    title: 'extraworks_dayui_storybook',
    description: 'extraworks_dayui_storybook_text',
    technologies: 'extraworks_dayui_storybook_tech',
    websiteUrl: urls.daisyuiStorybookApp,
    githubUrl: urls.daisyuiStorybookRepo,
    imageSrc: daisyuiStorybookImg,
  },
  {
    title: 'extraworks_landing_page_template',
    description: 'extraworks_landing_page_template_text',
    technologies: 'extraworks_landing_page_template_tech',
    websiteUrl: urls.landingPageTemplateApp,
    githubUrl: urls.landingPageTemplateRepo,
    imageSrc: landingPageTemplateImg,
  },
  {
    title: 'extraworks_translation_pwa',
    description: 'extraworks_translation_pwa_text',
    technologies: 'extraworks_translation_pwa_tech',
    websiteUrl: urls.translationApp,
    githubUrl: urls.translationAppRepo,
    imageSrc: translationAppImg,
  },
  {
    title: 'extraworks_authentication_form',
    description: 'extraworks_authentication_form_text',
    technologies: 'extraworks_authentication_form_tech',
    websiteUrl: urls.authenticationFormApp,
    githubUrl: urls.authenticationFormRepo,
    imageSrc: authFormImg,
  },
  {
    title: 'extraworks_game_finder',
    description: 'extraworks_game_finder_text',
    technologies: 'extraworks_game_finder_tech',
    websiteUrl: urls.gameFinderPage,
    githubUrl: urls.gameFinderRepo,
    imageSrc: gameFinderImg,
  },
  {
    title: 'extraworks_json_translator',
    description: 'extraworks_json_translator_text',
    technologies: 'extraworks_json_translator_tech',
    swaggerUrl: urls.jsonTranslatorSwagger,
    githubUrl: urls.jsonTranslatorRepo,
    imageSrc: apiRoutesImg,
  },
  {
    title: 'extraworks_aws_proxy_api',
    description: 'extraworks_aws_proxy_api_text',
    technologies: 'extraworks_aws_proxy_api_tech',
    swaggerUrl: urls.awsProxyApiSwagger,
    githubUrl: urls.awsProxyApiRepo,
    imageSrc: apiRoutesImg,
  },
  {
    title: 'extraworks_aws_auth_api',
    description: 'extraworks_aws_auth_api_text',
    technologies: 'extraworks_aws_auth_api_tech',
    swaggerUrl: urls.awsAuthApiSwagger,
    githubUrl: urls.awsAuthApiRepo,
    imageSrc: apiRoutesImg,
  },
  {
    title: 'extraworks_nestjs_auth_api',
    description: 'extraworks_nestjs_auth_api_text',
    technologies: 'extraworks_nestjs_auth_api_tech',
    swaggerUrl: urls.nestAuthApiSwagger,
    githubUrl: urls.nestAuthApiRepo,
    imageSrc: apiRoutesImg,
  },
  {
    title: 'extraworks_multistepform',
    description: 'extraworks_multistepform_text',
    technologies: 'extraworks_multistepform_tech',
    websiteUrl: urls.multiStepFormApp,
    githubUrl: urls.multiStepFormRepo,
    imageSrc: multistepFormImg,
  },
  {
    title: 'extraworks_easy_encrypt',
    description: 'extraworks_easy_encrypt_text',
    technologies: 'extraworks_easy_encrypt_tech',
    websiteUrl: urls.easyEncryptApp,
    githubUrl: urls.easyEncryptRepo,
    imageSrc: easyEncryptImg,
  },
  {
    title: 'extraworks_jsbackup',
    description: 'extraworks_jsbackup_text',
    technologies: 'extraworks_jsbackup_tech',
    githubUrl: urls.jsBackupRepo,
    imageSrc: githubPageImg,
  },
];

export default projectsMap;
