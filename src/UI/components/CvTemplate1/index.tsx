import Text from 'src/UI/base/Text';

import { CVEducation } from './Education';
import { CVExperience } from './Experience';
import { CVExtraWorks } from './ExtraWorks';
import { CVHeader } from './Header';
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
      </Body>
    </Container>
  );
};

export default CvTemplate1;
