import { urls } from 'src/constants/urls';
import Icons from 'src/lib/common/Icons';
import { Box, Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Column, Grid, Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

const ExtraWorksSection = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h4" path="extraworks_title" />
          <Hr />
          <Text tag="p" path="extraworks_text" />
        </Column>

        <Grid cols={2}>
          <Box>
            <Row left>
              <a href={urls.personalPageRep} target="_blank">
                <Text tag="h6" path="extraworks_personalcv" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_personalcv_text" />
            <Text tag="small" path="extraworks_personalcv_tech" />
          </Box>

          <Box>
            <Row left>
              <a href={urls.jsBackupRep} target="_blank">
                <Text tag="h6" path="extraworks_jsbackup" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_jsbackup_text" />
            <Text tag="small" path="extraworks_jsbackup_tech" />
          </Box>

          <Box>
            <Row left>
              <a href={urls.nutriacademy} target="_blank">
                <Text tag="h6" path="extraworks_nutriacademy" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_nutriacademy_text" />
            <Text tag="small" path="extraworks_nutriacademy_tech" />
          </Box>

          <Box>
            <Row left>
              <a href={urls.quizRepo} target="_blank">
                <Text tag="h6" path="extraworks_quiz" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_quiz_text" />
            <Text tag="small" path="extraworks_quiz_tech" />
          </Box>

          <Box>
            <Row left>
              <a href={urls.awsProxyApiRepo} target="_blank">
                <Text tag="h6" path="extraworks_aws_proxy_api" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_aws_proxy_api_text" />
            <Text tag="small" path="extraworks_aws_proxy_api_tech" />
          </Box>
        </Grid>
      </Card>
    </Section>
  );
};

export default ExtraWorksSection;
