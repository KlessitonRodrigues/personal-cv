import Accordion from 'src/lib/common/Accordion';
import Icons from 'src/lib/common/Icons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import { Image } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';
import englishImg from 'src/public/images/udemy_english.jpg';
import jsTsImg from 'src/public/images/udemy_js_ts.jpg';
import nestJsImg from 'src/public/images/udemy_nestjs.jpg';
import nextJsImg from 'src/public/images/udemy_nextjs.jpg';
import reactHooksImg from 'src/public/images/udemy_react_hooks.jpg';
import reactReduxImg from 'src/public/images/udemy_react_redux.jpg';

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
          title={<Text tag="p" path="education_udemy_course_1" />}
          content={<Image src={jsTsImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_2" />}
          content={<Image src={reactReduxImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_3" />}
          content={<Image src={reactHooksImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_4" />}
          content={<Image src={nextJsImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_11" />}
          content={<Image src={englishImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_6" />}
          content={<Image src={nestJsImg} maxw="45rem" maxh="30rem" />}
        />
      </Card>
    </Section>
  );
};

export default UdemyCertificatesSection;
