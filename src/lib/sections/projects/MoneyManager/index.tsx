import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';

const MoneyManager = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="school" size={9} />
          <Text tag="h3" path="education_title" />
        </Row>
        <Hr />
        <h1>TEST</h1>
      </Card>
    </Section>
  );
};

export default MoneyManager;
