import { urls } from 'src/constants/urls';
import Icons from 'src/lib/base/Icons';
import { OutlineBtn } from 'src/lib/base/StyledComponents/Buttons';
import { Section } from 'src/lib/base/StyledComponents/Containers';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { Outdoor, OutdoorContent, OutdoorImage } from 'src/lib/base/StyledComponents/Images';
import { AvatarBig } from 'src/lib/base/StyledComponents/User';
import Text from 'src/lib/base/Text';
import desktopBg from 'src/public/images/desktop.min.jpg';
import desktopDarkBg from 'src/public/images/desktop_dark.min.jpg';
import profile from 'src/public/images/profile_min.jpg';
import { isMobileScreen } from 'src/styles/utils';
import { getThemeMode } from 'src/utils/theme';

const ProfileHeader = () => {
  const isMobile = isMobileScreen();
  const isDarkMode = getThemeMode() === 'dark';

  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={isDarkMode ? desktopDarkBg : desktopBg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
          <b>
            <Text tag="h2" path="header_name" />
          </b>
          <Text tag="h3" path="header_work" />
          <Text tag="p" path="cv_resume" />
          <Row left responsive gap={8}>
            <a href={urls.personalPage} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="website" />
                <Text tag="p" path="header_page_text" />
              </OutlineBtn>
            </a>
            <a href={urls.linkedin} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="linkedin" />
                <p>LinkedIn</p>
              </OutlineBtn>
            </a>
            <a href={urls.githubProfile} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="github" />
                <p>Github</p>
              </OutlineBtn>
            </a>

            <a href={isMobile ? urls.whatsapp : urls.whatsappWeb} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="whatsapp" />
                <p>WhatsApp</p>
              </OutlineBtn>
            </a>
          </Row>
        </OutdoorContent>
      </Outdoor>
    </Section>
  );
};

export default ProfileHeader;
