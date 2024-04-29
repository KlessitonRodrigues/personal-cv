import cyberImg from 'src/lib/assets/jpeg/cyber_bg2.jpeg';
import profile from 'src/lib/assets/jpg/profile.jpg';
import Icons from 'src/lib/base/Icons';
import { OutlineBtn } from 'src/lib/base/StyledComponents/Buttons';
import { Section } from 'src/lib/base/StyledComponents/Containers';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { Outdoor, OutdoorContent, OutdoorImage } from 'src/lib/base/StyledComponents/Images';
import { AvatarBig } from 'src/lib/base/StyledComponents/User';
import Text from 'src/lib/base/Text';

export const Profile = () => {
  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={cyberImg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
          <Text tag="h1" path="header_name" />
          <Text tag="h3" path="header_work" />
          <Text tag="p" path="cv_resume" />
          <Row left responsive gap={8}>
            <OutlineBtn>
              <Icons size={8} type="github" />
              Github
            </OutlineBtn>
            <OutlineBtn>
              <Icons size={8} type="linkedin" />
              LinkedIn
            </OutlineBtn>
            <OutlineBtn>
              <Icons size={8} type="facebook" />
              Facebook
            </OutlineBtn>
          </Row>
        </OutdoorContent>
      </Outdoor>
    </Section>
  );
};
