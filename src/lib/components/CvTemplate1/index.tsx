import Text from 'src/lib/base/Text';

import { CVEducation } from './Sections/Education';
import { CVExperience } from './Sections/Experience';
import { CVExtraWorks } from './Sections/ExtraWorks';
import { CVHeader } from './Sections/Header';
import { CVLanguanges } from './Sections/Languanges';
import { Body, Container, Resume } from './styled';

const CvTemplate1 = () => {
  return (
    <Container>
      <CVHeader />
      <Body>
        <Resume>
          <Text path="cv_resume" />
        </Resume>
        <CVExperience />
        <CVEducation />
        <CVExtraWorks />
        <CVLanguanges />
      </Body>
    </Container>
  );
};

export default CvTemplate1;
