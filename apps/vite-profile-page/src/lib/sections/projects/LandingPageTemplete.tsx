import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import landingPageTemplateImg from 'src/public/images/landing_page_template.png';

const LandingPageTemplateProjectSection = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_landing_page_template" />
            <Text tag="p" path="extraworks_landing_page_template_text" />
            <Text tag="small" path="extraworks_landing_page_template_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.landingPageTemplateApp} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.landingPageTemplateRepo} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={landingPageTemplateImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default LandingPageTemplateProjectSection;
