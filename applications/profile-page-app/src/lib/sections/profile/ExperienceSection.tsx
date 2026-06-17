import { ExperienceItem, experienceMap } from 'src/constants/experienceMap';
import Icons from 'src/lib/common/Icons';
import { Box, Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Grid, Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

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
            <Grid cols={3} responsive>
              {experienceMap[key].map(renderExperienceItem)}
            </Grid>
          </Box>
        ))}
      </Card>
    </Section>
  );
};

export default ProfileExperienceSection;
