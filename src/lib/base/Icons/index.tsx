import { useMemo } from 'react';
import {
  RiExpandUpDownFill,
  RiFileDownloadLine,
  RiFileTextLine,
  RiGithubLine,
  RiLink,
  RiLoader5Line,
  RiTranslate2,
} from 'react-icons/ri';

import { Container } from './styled';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <RiFileDownloadLine />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader5Line />,
  github: <RiGithubLine />,
  template: <RiFileTextLine />,
  language: <RiTranslate2 />,
  link: <RiLink />,
};

const Icons = (props: Props.Icons) => {
  const { type, size, style, onPress } = props;
  const Icon = useMemo(() => iconMap[type], []);

  return (
    <Container className="icon" size={size} style={style} onClick={onPress}>
      {Icon}
    </Container>
  );
};

export default Icons;
