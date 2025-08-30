import ENJSON from 'src/public/i18n/en.json';
import PTJSON from 'src/public/i18n/pt.json';

import { getLanguage } from './localStorage';

const ENText = ENJSON as Record<string, string>;
const PTText = PTJSON as Record<string, string>;

export const lang = getLanguage();

export const getText = (path: string) => {
  if (lang === 'PT') return PTText[path] || 'NO_TEXT';
  return ENText[path] || 'NO_TEXT';
};
