import Icons from './common.icons';
import type { IconsType } from './common.icons.map';
import Text from './common.text';
import { OutlineBtn } from './styled/styled.buttons';

type ILinkAndIcon = {
  url?: string;
  icon?: IconsType;
  label?: string;
  path?: string;
  size?: number;
};

const LinkAndIcon = (props: ILinkAndIcon) => {
  const { url, icon, label, path, size } = props;

  return (
    <a href={url} target="_blank">
      <OutlineBtn>
        <Icons size={size || 10} type={icon || 'link'} />
        {label && <p>{label}</p>}
        {path && <Text tag="p" path={path} />}
      </OutlineBtn>
    </a>
  );
};

export default LinkAndIcon;
