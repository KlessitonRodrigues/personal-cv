import ENJSON from 'src/UI/assets/lang/en.json';
import ESJSON from 'src/UI/assets/lang/es.json';
import FRJSON from 'src/UI/assets/lang/fr.json';
import PTJSON from 'src/UI/assets/lang/pt.json';
import { getLangQuery } from 'src/utils/url';

const lang = getLangQuery();
const ENLang = ENJSON as Utils.LangJson;
const PTLang = PTJSON as Utils.LangJson;
const ESLang = ESJSON as Utils.LangJson;
const FRLang = FRJSON as Utils.LangJson;

const Text = (props: Props.Text) => {
  const { path } = props;

  if (lang === 'es') return <>{ESLang[path] || 'NO TEXT'}</>;
  if (lang === 'pt') return <>{PTLang[path] || 'NO TEXT'}</>;
  if (lang === 'fr') return <>{FRLang[path] || 'NO TEXT'}</>;

  return <>{ENLang[path] || 'NO TEXT'}</>;
};

export default Text;
