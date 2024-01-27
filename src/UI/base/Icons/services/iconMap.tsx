import {
  RiExpandUpDownFill,
  RiFile3Line,
  RiFileDownloadLine,
  RiFileTextLine,
  RiGithubLine,
  RiLoader5Line,
  RiTranslate2,
} from 'react-icons/ri';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <RiFileDownloadLine />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader5Line />,
  github: <RiGithubLine />,
  template: <RiFileTextLine />,
  language: <RiTranslate2 />,
};
