import useTheme from 'src/hooks/hooks.use.theme';
import { materialColors } from 'src/styles/styles.colors';
import { IThemeColors } from 'src/styles/styles.theme';
import { getText } from 'src/utils/utils.i18n';
import { changeLanguage, getLanguage } from 'src/utils/utils.local.storage';

import Icons from '../common/common.icons';
import OptionList from '../common/common.option.list';
import Text from '../common/common.text';
import { ColorBtn } from '../common/styled/styled.buttons';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column, Row } from '../common/styled/styled.flex';

const languageOptions = [
  {
    label: getText('language_portuguese'),
    value: 'pt',
    content: <Text tag="h6">PT</Text>,
  },
  {
    label: getText('language_english'),
    value: 'en',
    content: <Text tag="h6">EN</Text>,
  },
  {
    label: getText('language_spanish'),
    value: 'es',
    content: <Text tag="h6">ES</Text>,
  },
];

const themeOptions = [
  { label: getText('theme_light'), value: 'light', content: <Icons type="sun" size={7} /> },
  { label: getText('theme_dark'), value: 'dark', content: <Icons type="moon" size={7} /> },
];

const colorOptions = [
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

const SettingsSection = () => {
  const { color, setColor, isDark, setDark } = useTheme();
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h4" path="settings_title" />
          <Hr />
        </Column>

        <Column left gap={4}>
          <Text tag="h6" path="settings_language" />
          <OptionList
            options={languageOptions}
            value={getLanguage()}
            onSelect={lang => changeLanguage(lang)}
          />
        </Column>

        <Column left gap={4}>
          <Text tag="h6" path="settings_theme" />
          <OptionList
            value={isDark ? 'dark' : 'light'}
            options={themeOptions}
            onSelect={value => setDark(value === 'dark')}
          />
        </Column>

        <Column left gap={4}>
          <Text tag="h6" path="settings_color" />
          <OptionList
            value={color}
            options={colorOptions}
            onSelect={value => setColor(value as IThemeColors)}
          />
        </Column>
      </Card>
    </Section>
  );
};

export default SettingsSection;
