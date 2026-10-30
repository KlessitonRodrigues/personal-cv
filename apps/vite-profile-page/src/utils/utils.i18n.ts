import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ENJSON from 'src/public/i18n/en.json';
import ESJSON from 'src/public/i18n/es.json';
import PTJSON from 'src/public/i18n/pt.json';

import { getLanguage } from './utils.local.storage';

const language = getLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: ENJSON },
    es: { translation: ESJSON },
    pt: { translation: PTJSON },
  },
  lng: language,
  fallbackLng: 'en',
  supportedLngs: ['en', 'es', 'pt'],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  initAsync: false,
});

document.documentElement.lang = language;

export const changeLanguage = (lang: string) => {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  return i18n.changeLanguage(lang);
};

export default i18n;
