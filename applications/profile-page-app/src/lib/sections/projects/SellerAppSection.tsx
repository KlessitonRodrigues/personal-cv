import sellerAppImg from 'src//public/images/seller_app.png';
import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';

const SellerAppProjectSection = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_sellerapp" />
            <Text tag="p" path="extraworks_sellerapp_text" />
            <Text tag="small" path="extraworks_sellerapp_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.sellerApp} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.sellerRepo} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={sellerAppImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default SellerAppProjectSection;
