import { urls } from 'src/constants/constants.urls';
import profileBgImg from 'src/public/images/profile_bg.jpg';
import profile from 'src/public/images/profile_min.jpg';

import LinkAndIcon from '../common/common.link.and.icon';
import Text from '../common/common.text';
import { Section } from '../common/styled/styled.containers';
import { Row } from '../common/styled/styled.flex';
import { Outdoor, OutdoorContent, OutdoorImage } from '../common/styled/styled.image';
import { AvatarBig } from '../common/styled/styled.user';

const ProfileHeaderSection = () => {
  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={profileBgImg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
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
