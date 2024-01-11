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
          <Text>
            A small guy from a small town with big dreams who loves programming any kind of ideas
            and like to spent hours trying to improve his own code, like to always code his own
            solution to the problem but keeping everthing as simple as possible, like to learn new
            ways to coding and build applications and of course like games.
          </Text>
        </Resume>
        <CVExperience />
        <CVEducation />
        <CVExtraWorks />
      </Body>
    </Container>
  );
};

export default CvTemplate1;
