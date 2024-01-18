import { RiExpandUpDownFill, RiFilePdf2Fill, RiGithubLine, RiLoader5Line } from 'react-icons/ri';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <RiFilePdf2Fill />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader5Line />,
  github: <RiGithubLine />,
};
