import ENJSON from 'src/public/i18n/en.json';
import ESJSON from 'src/public/i18n/es.json';
import FRJSON from 'src/public/i18n/fr.json';
import PTJSON from 'src/public/i18n/pt.json';

import { getLanguage } from './localStorage';

const ENText = ENJSON as Record<string, string>;
const ESText = ESJSON as Record<string, string>;
const FRText = FRJSON as Record<string, string>;
const PTText = PTJSON as Record<string, string>;

export const lang = getLanguage();

export const getText = (path: string) => {
  const normalizedLang = lang.toLowerCase();

  if (normalizedLang === 'pt') return PTText[path] || 'NO_TEXT';
  if (normalizedLang === 'es') return ESText[path] || 'NO_TEXT';
  if (normalizedLang === 'fr') return FRText[path] || 'NO_TEXT';
  return ENText[path] || 'NO_TEXT';
};
