import { useMemo } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import {
  LuDownload,
  LuFileText,
  LuImage,
  LuLanguages,
  LuLink,
  LuMenu,
  LuMoon,
  LuPaintbrush,
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
  github: <FaGithub />,
  template: <RiFileTextLine />,
  language: <LuLanguages />,
  link: <LuLink />,
  textDocument: <LuFileText />,
  image: <LuImage />,
  user: <LuUser />,
  theme: <LuPaintbrush />,
  sun: <LuSun />,
  moon: <LuMoon />,
  website: <CgWebsite />,
  menu: <LuMenu />,
  close: <LuX />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
};

const Icons = (props: Props.Icons) => {
  const { type, size, style, onPress } = props;
  const Icon = useMemo(() => iconMap[type], [type]);

  return (
    <Container className="icon" size={size} style={style} onClick={onPress}>
      {Icon}
    </Container>
  );
};

export default Icons;
