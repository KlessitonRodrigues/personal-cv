import multistepFormImg from 'src//public/images/multistep_form.png';
import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';

const MultiStepFormProject = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_multistepform" />
            <Text tag="p" path="extraworks_multistepform_text" />
            <Text tag="small" path="extraworks_multistepform_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.multiStepFormApp} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.multiStepFormRepo} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={multistepFormImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default MultiStepFormProject;
