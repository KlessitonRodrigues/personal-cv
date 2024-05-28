import Accordion from 'src/lib/base/Accordion';
import Icons from 'src/lib/base/Icons';
import Text from 'src/lib/base/Text';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Row } from 'src/lib/styled/Flex';
import { Image } from 'src/lib/styled/Images';
import cyberImg from 'src/public/images/cyberpunkBg_min.png';
import schoolImg from 'src/public/images/diploma_medio-min.jpg';

const AcademyCertificates = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="school" size={9} />
          <Text tag="h3" path="education_title" />
        </Row>
        <Hr />
        <Accordion
          title={<Text tag="p" path="education_ifpi" />}
          content={<Image src={cyberImg} w="45rem" h="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_school" />}
          content={<Image src={schoolImg} w="45rem" h="30rem" />}
        />
      </Card>
    </Section>
  );
};

export default AcademyCertificates;
