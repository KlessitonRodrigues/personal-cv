import Accordion from 'src/lib/common/Accordion';
import Icons from 'src/lib/common/Icons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import { Image } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import schoolImg from 'src/public/images/diploma_medio-min.jpg';

const AcademyCertificatesSection = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="school" size={9} />
          <Text tag="h3" path="education_title" />
        </Row>
        <Hr />
        <Accordion
          delayLoad
          title={<Text tag="p" path="education_school" />}
          content={<Image src={schoolImg} w="45rem" h="30rem" />}
        />
      </Card>
    </Section>
  );
};

export default AcademyCertificatesSection;
