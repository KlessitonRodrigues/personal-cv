import { urls } from 'src/constants/constants.urls';

import LinkAndIcon from '../common/common.link.and.icon';
import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column, Row } from '../common/styled/styled.flex';

const ResumeEducationSection = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Row between>
            <Text tag="h4" path="education_title" />
            <LinkAndIcon icon="link" size={5} url={urls.personalPageCertificates} label="link" />
          </Row>
          <Hr />
        </Column>

        <Column left gap={0}>
          <Row left responsive>
            <Text tag="h6" path="education_udemy_title" />
            <Text tag="small">{new Date().getFullYear()}</Text>
          </Row>
          <Text tag="p" path="education_udemy_course" />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="education_ifpi_title" />
            <Text tag="small" path="education_ifpi_date" />
          </Row>
          <Text tag="p" path="education_ifpi" />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="education_school_title" />
            <Text tag="small" path="education_school_date" />
          </Row>
          <Text tag="p" path="education_school" />
        </Column>
      </Card>
    </Section>
  );
};

export default ResumeEducationSection;
