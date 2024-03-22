import { getText } from 'src/utils/i18n';

const Text = (props: Props.Text) => {
  const { path } = props;
  const text = getText(path);
  return <>{text}</>;
};

export default Text;
