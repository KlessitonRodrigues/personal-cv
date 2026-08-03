import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column, Row } from '../common/styled/styled.flex';

const LanguagesSection = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h4" path="language_title" />
          <Hr />

          <Row left responsive>
            <Text tag="h5" path="language_pt_title" />
            <Text tag="p" path="language_pt_text" />
          </Row>

          <Row left responsive>
            <Text tag="h5" path="language_en_title" />
            <Text tag="p" path="language_en_text" />
          </Row>
        </Column>
      </Card>
    </Section>
  );
};

export default LanguagesSection;
