import Icons from 'src/components/common/common.icons';
import Text from 'src/components/common/common.text';
import { ColorBtn } from 'src/components/common/styled/styled.buttons';
import { materialColors } from 'src/styles/styles.colors';
import { getText } from 'src/utils/utils.i18n';

export const themeOptions = [
  { label: getText('theme_light'), value: 'light', content: <Icons type="sun" size={7} /> },
  { label: getText('theme_dark'), value: 'dark', content: <Icons type="moon" size={7} /> },
];

export const colorOptions = [
  {
    label: getText('color_indigo'),
    value: 'indigo',
    content: <ColorBtn color={materialColors.indigo['600']} />,
  },
  {
    label: getText('color_blue'),
    value: 'blue',
    content: <ColorBtn color={materialColors.blue['600']} />,
  },
  {
    label: getText('color_green'),
    value: 'green',
    content: <ColorBtn color={materialColors.green['600']} />,
  },
  {
    label: getText('color_red'),
    value: 'red',
    content: <ColorBtn color={materialColors.red['600']} />,
  },
  {
    label: getText('color_yellow'),
    value: 'yellow',
    content: <ColorBtn color={materialColors.yellow['600']} />,
  },
  {
    label: getText('color_purple'),
    value: 'purple',
    content: <ColorBtn color={materialColors.purple['600']} />,
  },
  {
    label: getText('color_orange'),
    value: 'orange',
    content: <ColorBtn color={materialColors.orange['600']} />,
  },
  {
    label: getText('color_pink'),
    value: 'pink',
    content: <ColorBtn color={materialColors.pink['600']} />,
  },
];

export const languageOptions = [
  {
    label: 'Portuguese',
    value: 'pt',
    content: <Text tag="h6">PT</Text>,
  },
  {
    label: 'English',
    value: 'en',
    content: <Text tag="h6">EN</Text>,
  },
  {
    label: 'Spanish',
    value: 'es',
    content: <Text tag="h6">ES</Text>,
  },
];
