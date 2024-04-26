import { useMemo } from 'react';
import { CgWebsite } from 'react-icons/cg';
import {
  LuDownload,
  LuFileText,
  LuGithub,
  LuImage,
  LuLanguages,
  LuLink,
  LuMenu,
  LuMoon,
  LuPaintbrush2,
  LuSun,
  LuUser,
  LuX,
} from 'react-icons/lu';
import { RiExpandUpDownFill, RiFileTextLine, RiLoader2Fill } from 'react-icons/ri';

import { Container } from './styled';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <LuDownload />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader2Fill />,
  github: <LuGithub />,
  template: <RiFileTextLine />,
  language: <LuLanguages />,
  link: <LuLink />,
  textDocument: <LuFileText />,
  image: <LuImage />,
  user: <LuUser />,
  theme: <LuPaintbrush2 />,
  sun: <LuSun />,
  moon: <LuMoon />,
  website: <CgWebsite />,
  menu: <LuMenu />,
  close: <LuX />,
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
