import profileImg from 'src//public/images/profile_img_1.png';
import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';

const ProfileProjectSection = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_personalcv" />
            <Text tag="p" path="extraworks_personalcv_text" />
            <Text tag="small" path="extraworks_personalcv_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.personalPage} />
              <LinkAndIcon icon="android" label="Android" url={urls.profileApp} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.personalPageRep} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={profileImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default ProfileProjectSection;
