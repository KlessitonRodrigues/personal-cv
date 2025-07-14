import Icons from '../../Icons';
import { IconsType } from '../../Icons/iconMap';
import { OutlineBtn } from '../../StyledComponents/Buttons';
import Text from '../../Text';

type ILinkAndIcon = {
  url?: string;
  icon?: IconsType;
  label?: string;
  path?: string;
};

const LinkAndIcon = (props: ILinkAndIcon) => {
  const { url, icon, label, path } = props;

  return (
    <a href={url} target="_blank">
      <OutlineBtn>
        <Icons size={9} type={icon || 'link'} />
        <p>{label}</p>
        {path && <Text tag="p" path={path} />}
      </OutlineBtn>
    </a>
  );
};

export default LinkAndIcon;
