import { Card, Section } from 'src/components/common/StyledComponents/Containers';
import { Hr } from 'src/components/common/StyledComponents/Divisors';
import { Column, Row } from 'src/components/common/StyledComponents/Flex';
import Text from 'src/components/common/Text';

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
