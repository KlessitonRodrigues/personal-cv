import { urls } from 'src/constants/urls';
import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/base/StyledComponents/Images';
import Text from 'src/lib/base/Text';
import awsProxyApiImg from 'src/public/images/aws_proxy_api_img.png';

const AwsCorsProxyProject = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h3" path="extraworks_aws_proxy_api" />
            <Text tag="p" path="extraworks_aws_proxy_api_text" />
            <Text tag="small" path="extraworks_aws_proxy_api_tech" />
            <Row left fit gap={4}>
              <a href={urls.awsProxyApiRepo} target="_blank">
                <Row left>
                  <Icons size={8} type="github" />
                  <small>GitHub</small>
                </Row>
              </a>
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
