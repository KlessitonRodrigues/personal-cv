import { Box, Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Grid, Row } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';

const ProfileExperience = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h3" path="experience_title" />
          <Hr />
        </Column>
        <Column left gap={2}>
          <Row left gap={4}>
            <Text tag="h5" path="experience_westpoint" />
            <Text tag="small" path="experience_westpoint_date" />
          </Row>
          <Text tag="p" path="experience_westpoint_text" />
          <Grid cols={2}>
            <Box>
              <Text tag="h6" path="experience_collums" />
              <Text tag="p" path="experience_collums_text" />
              <Text tag="small" path="experience_collums_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_vouchio" />
              <Text tag="p" path="experience_vouchio_text" />
              <Text tag="small" path="experience_vouchio_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_talentId" />
              <Text tag="p" path="experience_talentId_text" />
              <Text tag="small" path="experience_talentId_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_vintage" />
              <Text tag="p" path="experience_vintage_text" />
              <Text tag="small" path="experience_vintage_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_quarx" />
              <Text tag="p" path="experience_quarx_text" />
              <Text tag="small" path="experience_quarx_tech" />
            </Box>
            <Box>
              <h6>WestPoint Website</h6>
              <Text tag="p" path="experience_website_text" />
              <Text tag="small" path="experience_website_tech" />
            </Box>
          </Grid>
        </Column>

        <Column left>
          <Row left gap={4}>
            <Text tag="h5" path="experience_centralacademy" />
            <Text tag="small" path="experience_centralacademy_date" />
          </Row>
          <Text tag="p" path="experience_centralacademy_text" />
        </Column>

        <Column left>
          <Row left gap={4}>
            <Text tag="h5" path="experience_centralacademy" />
            <Text tag="small" path="experience_centralacademy_date" />
          </Row>
          <Text tag="p" path="experience_centralacademy_text" />
        </Column>

        <Column left>
          <Row left gap={4}>
            <Text tag="h5" path="experience_centralacademy" />
            <Text tag="small" path="experience_centralacademy_date" />
          </Row>
          <Text tag="p" path="experience_centralacademy_text" />
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileExperience;
