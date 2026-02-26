import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import authFormImg from 'src/public/images/auth_form.png';

const AuthenticationFormProjectSection = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_authentication_form" />
            <Text tag="p" path="extraworks_authentication_form_text" />
            <Text tag="small" path="extraworks_authentication_form_tech" />
            <Row left fit gap={4}>
              <LinkAndIcon icon="github" label="GitHub" url={urls.authenticationFormRepo} />
              <LinkAndIcon icon="website" label="Website" url={urls.authenticationFormApp} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={authFormImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default AuthenticationFormProjectSection;
