import { getText } from 'src/utils/i18n';

type ITextProps = {
  id?: string;
  path?: string;
  tag?:
    | 'div'
    | 'p'
    | 'b'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'small'
    | 'strong'
    | 'mark'
    | 'em';
  children?: React.ReactNode;
};

const Text = (props: ITextProps) => {
  const { id, path, tag, children } = props;
  const text = path ? getText(path) : children;

  if (tag === 'p') return <p id={id}>{text}</p>;
  if (tag === 'b') return <b id={id}>{text}</b>;
  if (tag === 'h1') return <h1 id={id}>{text}</h1>;
  if (tag === 'h2') return <h2 id={id}>{text}</h2>;
  if (tag === 'h3') return <h3 id={id}>{text}</h3>;
  if (tag === 'h4') return <h4 id={id}>{text}</h4>;
  if (tag === 'h5') return <h5 id={id}>{text}</h5>;
  if (tag === 'h6') return <h6 id={id}>{text}</h6>;
  if (tag === 'span') return <span id={id}>{text}</span>;
  if (tag === 'small') return <small id={id}>{text}</small>;
  if (tag === 'strong') return <strong id={id}>{text}</strong>;
  if (tag === 'mark') return <mark id={id}>{text}</mark>;
  if (tag === 'em') return <em id={id}>{text}</em>;
  return <>{text}</>;
};

export default Text;
