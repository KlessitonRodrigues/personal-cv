import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Box, Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

const ResumeExperienceSection = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Row between>
            <Text tag="h4" path="experience_title" />
            <LinkAndIcon icon="link" size={5} url={urls.personalPageExperience} label="link" />
          </Row>
          <Hr />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="experience_harmat" />
            <Text tag="small" path="experience_harmat_date" />
          </Row>
          <Text tag="p" path="experience_harmat_text" />
          <Text tag="small" path="experience_harmat_tech" />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="experience_accourdous" />
            <Text tag="small" path="experience_accourdous_date" />
          </Row>
          <Text tag="p" path="experience_accourdous_text" />
          <Text tag="small" path="experience_accourdous_tech" />
        </Column>

        <Column left gap={2}>
          <Row left responsive>
            <Text tag="h6" path="experience_westpoint" />
            <Text tag="small" path="experience_westpoint_date" />
          </Row>
          <Text tag="p" path="experience_westpoint_text" />
          <Box>
            <Text tag="h6" path="experience_collums" />
            <Text tag="p" path="experience_collums_text" />
            <Text tag="small" path="experience_collums_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="experience_talentId" />
            <Text tag="p" path="experience_talentId_text" />
            <Text tag="small" path="experience_talentId_tech" />
          </Box>
          <Box>
            <Text tag="h6" path="experience_vouchio" />
            <Text tag="p" path="experience_vouchio_text" />
            <Text tag="small" path="experience_vouchio_tech" />
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
            <Text tag="h6" path="experience_website" />
            <Text tag="p" path="experience_website_text" />
            <Text tag="small" path="experience_website_tech" />
          </Box>
        </Column>
      </Card>
    </Section>
  );
};

export default ResumeExperienceSection;
