import { useTranslation } from 'react-i18next';

import { getLanguageOptions, getThemeOptions } from 'src/constants/constants.list.options';
import { urls } from 'src/constants/constants.urls';
import useTheme from 'src/hooks/hooks.use.theme';
import profileBgImg from 'src/public/images/profile_bg.jpg';
import profile from 'src/public/images/profile_min.jpg';
import { changeLanguage } from 'src/utils/utils.i18n';
import { getLanguage } from 'src/utils/utils.local.storage';

import LinkAndIcon from '../common/common.link.and.icon';
import OptionList from '../common/common.option.list';
import Text from '../common/common.text';
import { Section } from '../common/styled/styled.containers';
import { Row } from '../common/styled/styled.flex';
import { Outdoor, OutdoorContent, OutdoorImage } from '../common/styled/styled.image';
import { AvatarBig } from '../common/styled/styled.user';

const ProfileHeaderSection = () => {
  const { t } = useTranslation();
  const { isDark, setDark } = useTheme();
  const languageOptions = getLanguageOptions(t);
  const themeOptions = getThemeOptions(t);

  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={profileBgImg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
          <Row between>
            <OptionList
              options={languageOptions}
              value={getLanguage()}
              onSelect={lang => changeLanguage(lang)}
            />
            <OptionList
              value={isDark ? 'dark' : 'light'}
              options={themeOptions}
              onSelect={value => setDark(value === 'dark')}
            />
          </Row>
          <b>
            <Text tag="h2" path="header_name" />
          </b>
          <Text tag="h3" path="header_work" />
          <Text tag="p" path="cv_resume" />
          <Row left responsive gap={8}>
            <LinkAndIcon icon="website" path="header_page_text" url={urls.personalPage} />
          </Row>
          <Row left responsive gap={8}>
            <LinkAndIcon icon="linkedin" label="LinkedIn" url={urls.linkedin} />
            <LinkAndIcon icon="github" label="Github" url={urls.githubProfile} />
            <LinkAndIcon icon="whatsapp" label="WhatsApp" url={urls.whatsappWeb} />
          </Row>
        </OutdoorContent>
      </Outdoor>
    </Section>
  );
};

export default ProfileHeaderSection;
