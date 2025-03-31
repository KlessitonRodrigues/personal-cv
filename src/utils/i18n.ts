import ENJSON from 'src/public/i18n/en.json';
import PTJSON from 'src/public/i18n/pt.json';

const ENText = ENJSON as Utils.TranslationFile;
const PTText = PTJSON as Utils.TranslationFile;

export const getLanguage = () => {
  try {
    return localStorage.getItem('lang') || 'PT';
  } catch (err) {
    return 'PT';
  }
};

export const changeLanguage = (lang: string) => {
  try {
    localStorage.setItem('lang', lang);
    location.reload();
  } catch (err) {}
};

export const lang = getLanguage();

export const getText = (path: string) => {
  if (lang === 'PT') return PTText[path] || 'NO_TEXT';
  return ENText[path] || 'NO_TEXT';
};
