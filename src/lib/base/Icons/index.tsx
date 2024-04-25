import { useMemo } from 'react';
import {
  LuFileText,
  LuGithub,
  LuImage,
  LuMoon,
  LuPaintbrush2,
  LuSun,
  LuUser,
} from 'react-icons/lu';
import {
  RiExpandUpDownFill,
  RiFileDownloadLine,
  RiFileTextLine,
  RiLink,
  RiLoader5Line,
  RiTranslate2,
} from 'react-icons/ri';

import { Container } from './styled';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <RiFileDownloadLine />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader5Line />,
  github: <LuGithub />,
  template: <RiFileTextLine />,
  language: <RiTranslate2 />,
  link: <RiLink />,
  textDocument: <LuFileText />,
  image: <LuImage />,
  user: <LuUser />,
  theme: <LuPaintbrush2 />,
  sun: <LuSun />,
  moon: <LuMoon />,
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
