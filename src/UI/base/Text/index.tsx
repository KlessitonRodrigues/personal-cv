import ENJSON from 'src/UI/assets/i18n/en.json';
import PTJSON from 'src/UI/assets/i18n/pt.json';
import { getLangQuery } from 'src/utils/url';

const lang = getLangQuery();
const ENLang = ENJSON as Utils.LangJson;
const PTLang = PTJSON as Utils.LangJson;

const Text = (props: Props.Text) => {
  const { path } = props;

  // if (lang === 'es') return <>{ESLang[path] || 'NO TEXT'}</>;
  // if (lang === 'fr') return <>{FRLang[path] || 'NO TEXT'}</>;
  if (lang === 'pt') return <>{PTLang[path] || 'NO TEXT'}</>;

  return <>{ENLang[path] || 'NO TEXT'}</>;
};

export default Text;
