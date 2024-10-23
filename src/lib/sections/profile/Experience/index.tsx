import { experienceMap } from 'src/constants/experienceMap';
import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import { Box, Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Grid, Row } from 'src/lib/base/StyledComponents/Flex';
import { ProgressStep, ProgressStepBox } from 'src/lib/base/StyledComponents/Progress';
import Text from 'src/lib/base/Text';
import { yearsFrom } from 'src/utils/dates';

const ExperienceItems = experienceMap.map(exp => {
  const years = yearsFrom(exp.year);
  const yearsArr = new Array(years).fill(0);
  return (
    <Box key={exp.name}>
      <Row>
        <Row left>
          <Icons size={8} type={exp.icon} />
          <h6>{exp.name}</h6>
        </Row>
        <Row right>
          <small>{exp.type}</small>
        </Row>
      </Row>
      <Column left>
        <small>
          <If check={years > 1}>
            {years}
            &nbsp;
            <Text path="profile_years" />
          </If>
          <If check={years === 1}>
            {years}
            &nbsp;
            <Text path="profile_year" />
          </If>
          <If check={years === 0}>
            -1 &nbsp;
            <Text path="profile_year" />
          </If>
        </small>
        <ProgressStepBox>
          <If check={yearsArr.length >= 1}>
            {yearsArr.map((item, i) => (
              <ProgressStep key={item + i} />
            ))}
          </If>
          <If check={yearsArr.length === 0}>
            <ProgressStep half />
          </If>
        </ProgressStepBox>
      </Column>
    </Box>
  );
});

const ProfileExperience = () => {
  return (
    <Section>
      <Card>
        <Text tag="h3" path="experience_title" />
        <Hr />
        <Grid cols={2} responsive gap={4}>
          {ExperienceItems}
        </Grid>
      </Card>
    </Section>
  );
};

export default ProfileExperience;
