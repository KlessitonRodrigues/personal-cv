import type { TFunction } from 'i18next';

import Icons from 'src/components/common/common.icons';
import Text from 'src/components/common/common.text';
import { ColorBtn } from 'src/components/common/styled/styled.buttons';
import { materialColors } from 'src/styles/styles.colors';

export const getThemeOptions = (t: TFunction) => [
  { label: t('theme_light'), value: 'light', content: <Icons type="sun" size={7} /> },
  { label: t('theme_dark'), value: 'dark', content: <Icons type="moon" size={7} /> },
];

export const getColorOptions = (t: TFunction) => [
  {
    label: t('color_indigo'),
    value: 'indigo',
    content: <ColorBtn color={materialColors.indigo['600']} />,
  },
  {
    label: t('color_blue'),
    value: 'blue',
    content: <ColorBtn color={materialColors.blue['600']} />,
  },
  {
    label: t('color_green'),
    value: 'green',
    content: <ColorBtn color={materialColors.green['600']} />,
  },
  {
    label: t('color_red'),
    value: 'red',
    content: <ColorBtn color={materialColors.red['600']} />,
  },
  {
    label: t('color_yellow'),
    value: 'yellow',
    content: <ColorBtn color={materialColors.yellow['600']} />,
  },
  {
    label: t('color_purple'),
    value: 'purple',
    content: <ColorBtn color={materialColors.purple['600']} />,
  },
  {
    label: t('color_orange'),
    value: 'orange',
    content: <ColorBtn color={materialColors.orange['600']} />,
  },
  {
    label: t('color_pink'),
    value: 'pink',
    content: <ColorBtn color={materialColors.pink['600']} />,
  },
];

export const getLanguageOptions = (t: TFunction) => [
  {
    label: t('language_portuguese'),
    value: 'pt',
    content: <Text tag="h6">PT</Text>,
  },
  {
    label: t('language_english'),
    value: 'en',
    content: <Text tag="h6">EN</Text>,
  },
  {
    label: t('language_spanish'),
    value: 'es',
    content: <Text tag="h6">ES</Text>,
  },
];
