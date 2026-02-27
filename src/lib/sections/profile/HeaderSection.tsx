import { urls } from 'src/constants/urls';
import useTheme from 'src/hooks/useTheme';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Section } from 'src/lib/common/StyledComponents/Containers';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import { Outdoor, OutdoorContent, OutdoorImage } from 'src/lib/common/StyledComponents/Images';
import { AvatarBig } from 'src/lib/common/StyledComponents/User';
import Text from 'src/lib/common/Text';
import desktopBg from 'src/public/images/desktop.min.jpg';
import desktopDarkBg from 'src/public/images/desktop_dark.min.jpg';
import profile from 'src/public/images/profile_min.jpg';
import { isMobileScreen } from 'src/styles/utils';

const ProfileHeaderSection = () => {
  const themeCtx = useTheme();
  const isMobile = isMobileScreen();

  return (
    <Row>
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
    </Row>
  );
};

export default ProfileHeaderSection;
