import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import translationAppImg from 'src/public/images/translation_app.png';

const TranslationAppProjectSection = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_translation_pwa" />
            <Text tag="p" path="extraworks_translation_pwa_text" />
            <Text tag="small" path="extraworks_translation_pwa_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.translationApp} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.translationAppRepo} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={translationAppImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default TranslationAppProjectSection;
