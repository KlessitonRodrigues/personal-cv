import Accordion from 'src/lib/common/Accordion';
import Icons from 'src/lib/common/Icons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import { Image } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import reactReduxImg from 'src/public/images/react_redux.jpg';

const UdemyCertificates = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="udemy" size={9} />
          <h3>Udemy</h3>
        </Row>
        <Hr />
        <Accordion
          delayLoad
          title={<Text tag="p" path="education_udemy_course_1" />}
          content={<Image src={reactReduxImg} w="45rem" h="30rem" />}
        />
      </Card>
    </Section>
  );
};

export default UdemyCertificates;
