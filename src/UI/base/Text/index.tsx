import { PTLang } from "src/UI/assets/lang/pt";
import { ESLang } from "src/UI/assets/lang/es";
import { getLangQuery } from "src/utils/url";

const lang = getLangQuery();

const Text = (props: Props.Text) => {
  const { textId, children } = props;

  if (lang === "es") return <span>{ESLang[textId] || "NO TEXT"}</span>;
  if (lang === "pt") return <span>{PTLang[textId] || "NO TEXT"}</span>;
  return <span>{children}</span>;
};

export default Text;
