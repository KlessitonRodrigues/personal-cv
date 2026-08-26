import schoolImg from 'src/public/images/diploma_medio-min.jpg';
import highSchoolImg from 'src/public/images/diploma_superior.jpg';
import awsServelessImg from 'src/public/images/udemy_aws.jpg';
import clojureImg from 'src/public/images/udemy_clojure.jpg';
import dockerImg from 'src/public/images/udemy_docker.jpg';
import englishImg from 'src/public/images/udemy_english.jpg';
import jsTsImg from 'src/public/images/udemy_js_ts.jpg';
import nestJsImg from 'src/public/images/udemy_nestjs.jpg';
import nextJsImg from 'src/public/images/udemy_nextjs.jpg';
import reactHooksImg from 'src/public/images/udemy_react_hooks.jpg';
import reactNativeImg from 'src/public/images/udemy_react_native.jpg';
import reactReduxImg from 'src/public/images/udemy_react_redux.jpg';
import webpackImg from 'src/public/images/udemy_webpack.jpg';

import Accordion from '../common/common.accordion';
import Icons from '../common/common.icons';
import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Row } from '../common/styled/styled.flex';
import { Image } from '../common/styled/styled.image';

export const SchoolCertifications = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="school" size={9} />
          <Text tag="h3" path="education_title" />
        </Row>
        <Hr />
        <Accordion
          title={<Text tag="p" path="education_school" />}
          content={<Image src={schoolImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_ifpi" />}
          content={<Image src={highSchoolImg} maxw="35rem" maxh="45rem" />}
        />
      </Card>
    </Section>
  );
};

export const UdemyCertifications = () => {
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
          title={<Text tag="p" path="education_udemy_course_13" />}
          content={<Image src={reactNativeImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_6" />}
          content={<Image src={nestJsImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_7" />}
          content={<Image src={dockerImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_10" />}
          content={<Image src={clojureImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_12" />}
          content={<Image src={englishImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_8" />}
          content={<Image src={awsServelessImg} maxw="45rem" maxh="30rem" />}
        />
        <Accordion
          title={<Text tag="p" path="education_udemy_course_14" />}
          content={<Image src={webpackImg} maxw="45rem" maxh="30rem" />}
        />
      </Card>
    </Section>
  );
};
