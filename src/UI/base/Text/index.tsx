import { getLangQuery } from 'src/utils/url';
import ENJSON from 'src/UI/assets/lang/en.json';
import PTJSON from 'src/UI/assets/lang/pt.json';
import ESJSON from 'src/UI/assets/lang/es.json';

const lang = getLangQuery();
const ENLang = ENJSON as Utils.LangJson;
const PTLang = PTJSON as Utils.LangJson;
const ESLang = ESJSON as Utils.LangJson;

const Text = (props: Props.Text) => {
  const { path } = props;

  if (lang === 'en') return <>{ENLang[path] || 'NO TEXT'}</>;
  if (lang === 'es') return <>{ESLang[path] || 'NO TEXT'}</>;
  if (lang === 'pt') return <>{PTLang[path] || 'NO TEXT'}</>;
  return <>NO TEXT</>;
};

export default Text;
