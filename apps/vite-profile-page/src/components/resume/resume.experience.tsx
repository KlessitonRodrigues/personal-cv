import { urls } from 'src/constants/constants.urls';

import LinkAndIcon from '../common/common.link.and.icon';
import Text from '../common/common.text';
import { Card, LeftLineBox, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column, Row } from '../common/styled/styled.flex';

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
          <Text tag="h6" path="experience_harmat" />
          <Row left responsive>
            <Text tag="small" path="experience_harmat_job" />
            -
            <Text tag="p" path="experience_harmat_date" />
          </Row>
          <Text tag="p" path="experience_harmat_text" />
          <Text tag="small" path="experience_harmat_tech" />
        </Column>

        <Column left>
          <Text tag="h6" path="experience_accourdous" />
          <Row left responsive>
            <Text tag="small" path="experience_accourdous_job" />
            -
            <Text tag="p" path="experience_accourdous_date" />
          </Row>
          <Text tag="p" path="experience_accourdous_text" />
          <Text tag="small" path="experience_accourdous_tech" />
        </Column>

        <Column left gap={2}>
          <Text tag="h6" path="experience_westpoint" />
          <Row left responsive>
            <Text tag="small" path="experience_westpoint_job" />
            -
            <Text tag="p" path="experience_westpoint_date" />
          </Row>
          <Text tag="p" path="experience_westpoint_text" />
          <LeftLineBox>
            <Column left>
              <Text tag="h6" path="experience_collums" />
              <Text tag="p" path="experience_collums_text" />
              <Text tag="small" path="experience_collums_tech" />
            </Column>
            <Column left>
              <Text tag="h6" path="experience_collums_data_import" />
              <Text tag="p" path="experience_collums_data_import_text" />
              <Text tag="small" path="experience_collums_data_import_tech" />
            </Column>
            <Column left>
              <Text tag="h6" path="experience_talentId" />
              <Text tag="p" path="experience_talentId_text" />
              <Text tag="small" path="experience_talentId_tech" />
            </Column>
            <Column left>
              <Text tag="h6" path="experience_vouchio" />
              <Text tag="p" path="experience_vouchio_text" />
              <Text tag="small" path="experience_vouchio_tech" />
            </Column>
            <Column left>
              <Text tag="h6" path="experience_vintage" />
              <Text tag="p" path="experience_vintage_text" />
              <Text tag="small" path="experience_vintage_tech" />
            </Column>
            <Column left>
              <Text tag="h6" path="experience_quarx" />
              <Text tag="p" path="experience_quarx_text" />
              <Text tag="small" path="experience_quarx_tech" />
            </Column>
            <Column left>
              <Text tag="h6" path="experience_website" />
              <Text tag="p" path="experience_website_text" />
              <Text tag="small" path="experience_website_tech" />
            </Column>
          </LeftLineBox>
        </Column>
      </Card>
    </Section>
  );
};

export default ResumeExperienceSection;
