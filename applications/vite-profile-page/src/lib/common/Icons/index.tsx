import { useMemo } from 'react';

import { IconsType, iconMap } from './iconMap';
import { Container } from './styled';

export type IIcons = {
  size?: number;
  onPress?: () => void;
  style?: React.CSSProperties;
  type: IconsType;
};

const Icons = (props: IIcons) => {
  const { type, size, style, onPress } = props;
  const Icon = useMemo(() => iconMap[type], [type]);

  return (
    <Container className={'icon icon-' + type} size={size} style={style} onClick={onPress}>
      {Icon}
    </Container>
  );
};

export default Icons;
