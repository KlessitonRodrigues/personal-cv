import profileImg from 'src//public/images/profile_img_1.png';
import { urls } from 'src/constants/urls';
import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/base/StyledComponents/Images';
import Text from 'src/lib/base/Text';

const ProfileProject = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h3" path="extraworks_personalcv" />
            <Text tag="p" path="extraworks_personalcv_text" />
            <Text tag="small" path="extraworks_personalcv_tech" />
            <Row left gap={4}>
              <a href={urls.personalPage} target="_blank">
                <Row left>
                  <Icons size={8} type="website" />
                  <small>Website</small>
                </Row>
              </a>
              <a href={urls.personalPageRep} target="_blank">
                <Row left>
                  <Icons size={8} type="github" />
                  <small>GitHub</small>
                </Row>
              </a>
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

export default ProfileProject;
