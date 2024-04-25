import Icons from 'src/lib/base/Icons';
import { Box, Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Grid, Row } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';

const ProfileExtraWorks = () => {
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
              <Text tag="h6" path="extraworks_gamefinder" />
              <a href="" target="_blank">
                <Icons type="link" />
              </a>
            </Row>
            <Text tag="p" path="extraworks_gamefinder_text" />
            <Text tag="small" path="extraworks_gamefinder_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="extraworks_personalcv" />
            <Text tag="p" path="extraworks_personalcv_text" />
            <Text tag="small" path="extraworks_personalcv_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="extraworks_consoleui" />
            <Text tag="p" path="extraworks_consoleui_text" />
            <Text tag="small" path="extraworks_consoleui_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="extraworks_easyencrypt" />
            <Text tag="p" path="extraworks_easyencrypt_text" />
            <Text tag="small" path="extraworks_easyencrypt_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="extraworks_taskmanage" />
            <Text tag="p" path="extraworks_taskmanage_text" />
            <Text tag="small" path="extraworks_taskmanage_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="extraworks_translationpwa" />
            <Text tag="p" path="extraworks_translationpwa_text" />
            <Text tag="small" path="extraworks_translationpwa_tech" />
          </Box>
        </Grid>
      </Card>
    </Section>
  );
};

export default ProfileExtraWorks;
