import Accordion from 'src/lib/common/Accordion';
import Icons from 'src/lib/common/Icons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import { Image } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import reactReduxImg from 'src/public/images/react_redux.jpg';
import reactReduxFullImg from 'src/public/images/react_redux_full.jpg';

const UdemyCertificatesSection = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="udemy" size={9} />
          <Text tag="h3">Udemy</Text>
        </Row>
        <Hr />
        <Accordion
          delayLoad
          title={<Text tag="p" path="education_udemy_course_1" />}
          content={<Image src={reactReduxImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          delayLoad
          title={<Text tag="p" path="education_udemy_course_2" />}
          content={<Image src={reactReduxFullImg} maxw="45rem" maxh="30rem" />}
        />
      </Card>
    </Section>
  );
};

export default UdemyCertificatesSection;
