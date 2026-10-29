import { colorOptions, languageOptions, themeOptions } from 'src/constants/constants.list.options';
import useTheme from 'src/hooks/hooks.use.theme';
import { IThemeColors } from 'src/styles/styles.theme';
import { changeLanguage, getLanguage } from 'src/utils/utils.local.storage';

import OptionList from '../common/common.option.list';
import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column } from '../common/styled/styled.flex';

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
