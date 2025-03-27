import { urls } from 'src/constants/urls';
import useTheme from 'src/hooks/useTheme';
import LinkAndIcon from 'src/lib/base/Links/LinkAndIcon';
import { Section } from 'src/lib/base/StyledComponents/Containers';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { Outdoor, OutdoorContent, OutdoorImage } from 'src/lib/base/StyledComponents/Images';
import { AvatarBig } from 'src/lib/base/StyledComponents/User';
import Text from 'src/lib/base/Text';
import desktopBg from 'src/public/images/desktop.min.jpg';
import desktopDarkBg from 'src/public/images/desktop_dark.min.jpg';
import profile from 'src/public/images/profile_min.jpg';
import { isMobileScreen } from 'src/styles/utils';

const ProfileHeader = () => {
  const themeCtx = useTheme();
  const isMobile = isMobileScreen();

  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={themeCtx.isDark ? desktopDarkBg : desktopBg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
          <b>
            <Text tag="h2" path="header_name" />
          </b>
          <Text tag="h3" path="header_work" />
          <Text tag="p" path="cv_resume" />
          <Row left responsive gap={8}>
            <LinkAndIcon icon="website" path="header_page_text" url={urls.personalPage} />
            <LinkAndIcon icon="linkedin" label="LinkedIn" url={urls.linkedin} />
            <LinkAndIcon icon="github" label="Github" url={urls.githubProfile} />
            <LinkAndIcon
              icon="whatsapp"
              label="WhatsApp"
              url={isMobile ? urls.whatsapp : urls.whatsappWeb}
            />
          </Row>
        </OutdoorContent>
      </Outdoor>
    </Section>
  );
};

export default ProfileHeader;
