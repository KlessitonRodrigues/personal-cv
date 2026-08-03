import { ExperienceItem, experienceMap } from 'src/constants/constants.experience.map';

import Icons from '../common/common.icons';
import Text from '../common/common.text';
import { Box, Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Grid, Row } from '../common/styled/styled.flex';

const categoryKeys = Object.keys(experienceMap) as (keyof typeof experienceMap)[];

const renderExperienceItem = ({ name, icon }: ExperienceItem) => {
  return (
    <Box key={name}>
      <Row left gap={4}>
        <Icons type={icon} size={7} />
        <Text tag="p">{name}</Text>
      </Row>
    </Box>
  );
};

const ProfileExperienceSection = () => {
  return (
    <Section>
      <Card>
        <Text id="experience" tag="h3" path="experience_title" />
        <Hr />
        {categoryKeys.map(key => (
          <Box key={key}>
            <Text tag="h6" path={'experience_category_' + key} />
            <Grid cols={2} responsive>
              {experienceMap[key].map(renderExperienceItem)}
            </Grid>
          </Box>
        ))}
      </Card>
    </Section>
  );
};

export default ProfileExperienceSection;
