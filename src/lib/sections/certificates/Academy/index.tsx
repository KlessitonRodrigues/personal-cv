import Accordion from 'src/lib/base/Accordion';
import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Row } from 'src/lib/styled/Flex';

const AcademyCertificates = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="school" size={9} />
          <h2>School</h2>
        </Row>
        <Hr />
        <Accordion></Accordion>
      </Card>
    </Section>
  );
};

export default AcademyCertificates;
