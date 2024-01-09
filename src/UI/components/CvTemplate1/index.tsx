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
            Resume, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga ea
            veniam harum repellendus fugiat illo error laboriosam ducimus accusamus inventore beatae
            vero quod necessitatibus facilis unde rerum quis. Corporis?
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
