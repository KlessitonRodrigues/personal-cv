import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import awsProxyApiImg from 'src/public/images/aws_proxy_api_img.png';

const AwsCorsProxyProject = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_aws_proxy_api" />
            <Text tag="p" path="extraworks_aws_proxy_api_text" />
            <Text tag="small" path="extraworks_aws_proxy_api_tech" />
            <Row left fit gap={4}>
              <LinkAndIcon icon="github" label="GitHub" url={urls.awsProxyApiRepo} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={awsProxyApiImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default AwsCorsProxyProject;
