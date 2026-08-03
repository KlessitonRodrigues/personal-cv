import { urls } from 'src/constants/constants.urls';

import Icons from '../common/common.icons';
import LinkAndIcon from '../common/common.link.and.icon';
import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column, Row } from '../common/styled/styled.flex';
import { List, ListItem } from '../common/styled/styled.list';

const ExtraWorksSection = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Row between>
            <Text tag="h4" path="extraworks_title" />
            <LinkAndIcon icon="link" size={5} url={urls.personalPageProjects} label="link" />
          </Row>
          <Hr />
          <Text tag="p" path="extraworks_text" />
        </Column>

        <List>
          <ListItem>
            <Row left>
              <a href={urls.personalPage} target="_blank">
                <Text tag="h6" path="extraworks_personalcv" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="em" path="extraworks_personalcv_text" />
          </ListItem>

          <ListItem>
            <Row left>
              <a href={urls.authenticationFormApp} target="_blank">
                <Text tag="h6" path="extraworks_authentication_form" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="em" path="extraworks_authentication_form_text" />
          </ListItem>

          <ListItem>
            <Row left>
              <a href={urls.multiStepFormApp} target="_blank">
                <Text tag="h6" path="extraworks_multistepform" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="em" path="extraworks_multistepform_text" />
          </ListItem>

          <ListItem>
            <Row left>
              <a href={urls.sellerApp} target="_blank">
                <Text tag="h6" path="extraworks_sellerapp" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="em" path="extraworks_sellerapp_text" />
          </ListItem>

          <ListItem>
            <Row left>
              <a href={urls.gameFinderPage} target="_blank">
                <Text tag="h6" path="extraworks_gamefinder" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="em" path="extraworks_gamefinder_text" />
          </ListItem>

          <ListItem>
            <Row left>
              <a href={urls.awsProxyApiRepo} target="_blank">
                <Text tag="h6" path="extraworks_aws_proxy_api" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="em" path="extraworks_aws_proxy_api_text" />
          </ListItem>
        </List>
      </Card>
    </Section>
  );
};

export default ExtraWorksSection;
