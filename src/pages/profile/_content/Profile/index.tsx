import cyberpunkBg from 'src/lib/assets/images/cyberpunkBg.png';
import profile from 'src/lib/assets/images/profile.jpg';
import Icons from 'src/lib/base/Icons';
import { OutlineBtn } from 'src/lib/base/StyledComponents/Buttons';
import { Section } from 'src/lib/base/StyledComponents/Containers';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { Outdoor, OutdoorContent, OutdoorImage } from 'src/lib/base/StyledComponents/Images';
import { AvatarBig } from 'src/lib/base/StyledComponents/User';
import Text from 'src/lib/base/Text';
import { urls } from 'src/utils/constants/urls';

export const Profile = () => {
  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={cyberpunkBg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
          <b>
            <Text tag="h2" path="header_name" />
          </b>
          <Text tag="h4" path="header_work" />
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
            <a href={urls.facebook} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="facebook" />
                <p>Facebook</p>
              </OutlineBtn>
            </a>
          </Row>
        </OutdoorContent>
      </Outdoor>
    </Section>
  );
};
