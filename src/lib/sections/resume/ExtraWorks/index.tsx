import { urls } from 'src/constants/urls';
import Icons from 'src/lib/base/Icons';
import { Box, Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Grid, Row } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';

const ResumeExtraWorks = () => {
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
              <a href={urls.gameFinderRepo} target="_blank">
                <Text tag="h6" path="extraworks_gamefinder" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_gamefinder_text" />
            <Text tag="small" path="extraworks_gamefinder_tech" />
          </Box>

          <Box>
            <Row left>
              <a href={urls.consoleUIRepo} target="_blank">
                <Text tag="h6" path="extraworks_consoleui" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_consoleui_text" />
            <Text tag="small" path="extraworks_consoleui_tech" />
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
              <a href={urls.encryptEasyRepo} target="_blank">
                <Text tag="h6" path="extraworks_easyencrypt" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_easyencrypt_text" />
            <Text tag="small" path="extraworks_easyencrypt_tech" />
          </Box>

          <Box>
            <Row left>
              <a href={urls.translatePwa} target="_blank">
                <Text tag="h6" path="extraworks_translationpwa" />
              </a>
              <Icons size={5} type="link" />
            </Row>
            <Text tag="p" path="extraworks_translationpwa_text" />
            <Text tag="small" path="extraworks_translationpwa_tech" />
          </Box>
        </Grid>
      </Card>
    </Section>
  );
};

export default ResumeExtraWorks;
