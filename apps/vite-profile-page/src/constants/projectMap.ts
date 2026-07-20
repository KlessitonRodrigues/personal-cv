import gameFinderImg from 'src//public/images/game_finder_img.png';
import multistepFormImg from 'src//public/images/multistep_form.png';
import profileImg from 'src//public/images/profile_img.png';
import sellerAppImg from 'src//public/images/seller_app.png';
import authFormImg from 'src/public/images/auth_form.png';
import githubPageImg from 'src/public/images/github.png';
import landingPageTemplateImg from 'src/public/images/landing_page_template.png';
import translationAppImg from 'src/public/images/translation_app.png';

import { urls } from './urls';

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
    title: 'extraworks_multistepform',
    description: 'extraworks_multistepform_text',
    technologies: 'extraworks_multistepform_tech',
    websiteUrl: urls.multiStepFormApp,
    githubUrl: urls.multiStepFormRepo,
    imageSrc: multistepFormImg,
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
    title: 'extraworks_aws_proxy_api',
    description: 'extraworks_aws_proxy_api_text',
    technologies: 'extraworks_aws_proxy_api_tech',
    githubUrl: urls.awsProxyApiRepo,
    imageSrc: githubPageImg,
  },
  {
    title: 'extraworks_aws_auth_api',
    description: 'extraworks_aws_auth_api_text',
    technologies: 'extraworks_aws_auth_api_tech',
    githubUrl: urls.awsAuthApiRepo,
    imageSrc: githubPageImg,
  },
  {
    title: 'extraworks_nestjs_auth_api',
    description: 'extraworks_nestjs_auth_api_text',
    technologies: 'extraworks_nestjs_auth_api_tech',
    githubUrl: urls.nestAuthApiRepo,
    imageSrc: githubPageImg,
  },
  {
    title: 'extraworks_console_ui',
    description: 'extraworks_console_ui_text',
    technologies: 'extraworks_console_ui_tech',
    websiteUrl: urls.consoleUIPage,
    githubUrl: urls.consoleUIRepo,
    imageSrc: githubPageImg,
  },

  {
    title: 'extraworks_sellerapp',
    description: 'extraworks_sellerapp_text',
    technologies: 'extraworks_sellerapp_tech',
    websiteUrl: urls.sellerApp,
    githubUrl: urls.sellerRepo,
    imageSrc: sellerAppImg,
  },
];

export default projectsMap;
