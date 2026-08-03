import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/styles.utils';

import { IconsType } from './common.icons.map';

export const Container = styled.span<{ size?: number }>(
  ({ size }) => css`
    display: inline-flex;
    font-size: ${cssSize(size || 6)};
    cursor: pointer;
  `,
);

export type IIcons = {
  size?: number;
  onPress?: () => void;
  style?: React.CSSProperties;
  type: IconsType;
};

const Icons = (props: IIcons) => {
  const { type, size, style, onPress } = props;
  const [Icon, setIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    import('./common.icons.map').then(({ iconMap }) => setIcon(iconMap[type]));
  }, [type]);

  return (
    <Container className={'icon icon-' + type} size={size} style={style} onClick={onPress}>
      {Icon}
    </Container>
  );
};

export default Icons;
