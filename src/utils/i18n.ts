import ENJSON from 'src/lib/assets/i18n/en.json';
import PTJSON from 'src/lib/assets/i18n/pt.json';

const ENText = ENJSON as Utils.TranslationFile;
const PTText = PTJSON as Utils.TranslationFile;

export const getLanguage = () => {
  try {
    return localStorage.getItem('lang') || 'en';
  } catch (err) {
    return 'en';
  }
};

export const changeLanguage = (lang: string) => {
  try {
    localStorage.setItem('lang', lang);
    location.reload();
  } catch (err) {}
};

const lang = getLanguage();

export const getText = (path: string) => {
  if (lang === 'pt') return PTText[path] || 'NO_TEXT';
  return ENText[path] || 'NO_TEXT';
};
