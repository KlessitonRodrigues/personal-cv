import Text from 'src/UI/base/Text';
import { Body, Container, Resume } from './styled';
import { CVHeader } from './Header';
import { CVExperience } from './Experience';
import { CVEducation } from './Education';
import { CVExtraWorks } from './ExtraWorks';

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
