import Icons from 'src/lib/common/Icons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';

const UdemyCertificates = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="udemy" size={9} />
          <h3>Udemy</h3>
        </Row>
        <Hr />
      </Card>
    </Section>
  );
};

export default UdemyCertificates;
