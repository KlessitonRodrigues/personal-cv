import authFormImg from 'src/public/images/auth_form.png';
import awsJWTAuthDiagramImg from 'src/public/images/aws_jwt_auth_diagram.svg';
import currencyApiDiagramImg from 'src/public/images/currency_api_diagram.svg';
import currencyAppImg from 'src/public/images/currency_app.png';
import daisyuiStorybookImg from 'src/public/images/daisyui_storybook.png';
import easyEncryptImg from 'src/public/images/easy_encrypt.png';
import expoWebviewReleaseDiagramImg from 'src/public/images/expo_webview_release_diagram.svg';
import gameFinderImg from 'src/public/images/game_finder_img.png';
import githubPageImg from 'src/public/images/github.png';
import landingPageTemplateImg from 'src/public/images/landing_page_template.png';
import multistepFormImg from 'src/public/images/multistep_form.png';
import nestAuthDiagramImg from 'src/public/images/nest_auth_diagram.svg';
import nextjsDeployToAWSDiagramImg from 'src/public/images/nextjs_deploy_to_aws_diagram.svg';
import profileImg from 'src/public/images/profile_frames.svg';
import proxyApiDiagramImg from 'src/public/images/proxy_api_diagram.svg';
import translationAppImg from 'src/public/images/translation_app.png';
import viteJsDeployDiagramImg from 'src/public/images/vitejs_deploy_diagram.svg';
import websiteTranlatorDiagramImg from 'src/public/images/website_translator_diagram.svg';

import { urls } from './constants.urls';

const projectsMap = [
  {
    title: 'extraworks_personalcv',
    description: 'extraworks_personalcv_text',
    technologies: 'extraworks_personalcv_tech',
    category: 'experience_category_app',
    websiteUrl: urls.personalPage,
    githubUrl: urls.personalPageRep,
    imageSrc: profileImg,
  },
  {
    title: 'extraworks_dayui_storybook',
    description: 'extraworks_dayui_storybook_text',
    technologies: 'extraworks_dayui_storybook_tech',
    category: 'experience_category_library',
    websiteUrl: urls.daisyuiStorybookApp,
    githubUrl: urls.daisyuiStorybookRepo,
    imageSrc: daisyuiStorybookImg,
  },
  {
    title: 'extraworks_translation_pwa',
    description: 'extraworks_translation_pwa_text',
    technologies: 'extraworks_translation_pwa_tech',
    category: 'experience_category_app',
    websiteUrl: urls.translationApp,
    githubUrl: urls.translationAppRepo,
    imageSrc: translationAppImg,
  },
  {
    title: 'extraworks_website_translator',
    description: 'extraworks_website_translator_text',
    technologies: 'extraworks_website_translator_tech',
    category: 'experience_category_automation',
    githubUrl: urls.jsonTranslatorRepo,
    imageSrc: websiteTranlatorDiagramImg,
  },
  {
    title: 'extraworks_authentication_form',
    description: 'extraworks_authentication_form_text',
    technologies: 'extraworks_authentication_form_tech',
    category: 'experience_category_app',
    websiteUrl: urls.authenticationFormApp,
    githubUrl: urls.authenticationFormRepo,
    imageSrc: authFormImg,
  },
  {
    title: 'extraworks_game_finder',
    description: 'extraworks_game_finder_text',
    technologies: 'extraworks_game_finder_tech',
    category: 'experience_category_app',
    websiteUrl: urls.gameFinderPage,
    githubUrl: urls.gameFinderRepo,
    imageSrc: gameFinderImg,
  },
  {
    title: 'extraworks_landing_page_template',
    description: 'extraworks_landing_page_template_text',
    technologies: 'extraworks_landing_page_template_tech',
    category: 'experience_category_app',
    websiteUrl: urls.landingPageTemplateApp,
    githubUrl: urls.landingPageTemplateRepo,
    imageSrc: landingPageTemplateImg,
  },
  {
    title: 'extraworks_aws_proxy_api',
    description: 'extraworks_aws_proxy_api_text',
    technologies: 'extraworks_aws_proxy_api_tech',
    category: 'experience_category_api',
    swaggerUrl: urls.awsProxyApiSwagger,
    githubUrl: urls.awsProxyApiRepo,
    imageSrc: proxyApiDiagramImg,
  },
  {
    title: 'extraworks_vitejs_deploy',
    description: 'extraworks_vitejs_deploy_text',
    technologies: 'extraworks_vitejs_deploy_tech',
    category: 'experience_category_service',
    githubUrl: urls.awsProxyApiRepo,
    imageSrc: viteJsDeployDiagramImg,
  },
  {
    title: 'extraworks_aws_nextjs_static',
    description: 'extraworks_aws_nextjs_static_text',
    technologies: 'extraworks_aws_nextjs_static_tech',
    category: 'experience_category_service',
    githubUrl: urls.awsAuthApiRepo,
    imageSrc: nextjsDeployToAWSDiagramImg,
  },
  {
    title: 'extraworks_aws_auth_api',
    description: 'extraworks_aws_auth_api_text',
    technologies: 'extraworks_aws_auth_api_tech',
    category: 'experience_category_api',
    swaggerUrl: urls.awsAuthApiSwagger,
    githubUrl: urls.awsAuthApiRepo,
    imageSrc: awsJWTAuthDiagramImg,
  },
  {
    title: 'extraworks_expo_build_docker',
    description: 'extraworks_expo_build_docker_text',
    technologies: 'extraworks_expo_build_docker_tech',
    category: 'experience_category_service',
    githubUrl: urls.nestAuthApiRepo,
    imageSrc: expoWebviewReleaseDiagramImg,
  },
  {
    title: 'extraworks_nestjs_auth_api',
    description: 'extraworks_nestjs_auth_api_text',
    technologies: 'extraworks_nestjs_auth_api_tech',
    category: 'experience_category_api',
    swaggerUrl: urls.nestAuthApiSwagger,
    githubUrl: urls.nestAuthApiRepo,
    imageSrc: nestAuthDiagramImg,
  },
  {
    title: 'extraworks_exchange_app',
    description: 'extraworks_exchange_app_text',
    technologies: 'extraworks_exchange_app_tech',
    category: 'experience_category_app',
    githubUrl: urls.currencyAppRepo,
    imageSrc: currencyAppImg,
  },
  {
    title: 'extraworks_exchange_api',
    description: 'extraworks_exchange_api_text',
    technologies: 'extraworks_exchange_api_tech',
    category: 'experience_category_api',
    githubUrl: urls.currencyApiRepo,
    imageSrc: currencyApiDiagramImg,
  },
  {
    title: 'extraworks_multistepform',
    description: 'extraworks_multistepform_text',
    technologies: 'extraworks_multistepform_tech',
    category: 'experience_category_app',
    websiteUrl: urls.multiStepFormApp,
    githubUrl: urls.multiStepFormRepo,
    imageSrc: multistepFormImg,
  },
  {
    title: 'extraworks_easy_encrypt',
    description: 'extraworks_easy_encrypt_text',
    technologies: 'extraworks_easy_encrypt_tech',
    category: 'experience_category_app',
    websiteUrl: urls.easyEncryptApp,
    githubUrl: urls.easyEncryptRepo,
    imageSrc: easyEncryptImg,
  },
  {
    title: 'extraworks_jsbackup',
    description: 'extraworks_jsbackup_text',
    technologies: 'extraworks_jsbackup_tech',
    category: 'experience_category_test',
    githubUrl: urls.jsBackupRepo,
    imageSrc: githubPageImg,
  },
];

export default projectsMap;
