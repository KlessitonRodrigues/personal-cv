import { useMemo } from 'react';

import Icons from 'src/lib/base/Icons';
import { Box, Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Grid, Row } from 'src/lib/base/StyledComponents/Flex';
import { ProgressStep, ProgressStepBox } from 'src/lib/base/StyledComponents/Progress';
import Text from 'src/lib/base/Text';
import { experienceMap } from 'src/utils/constants/experienceMap';
import { yearsFrom } from 'src/utils/dates';

export const Experience = () => {
  const experienceItems = useMemo(() => {
    return experienceMap.map(exp => {
      const years = yearsFrom(exp.year);
      const yearsArr = new Array(years).fill(0);
      return (
        <Box>
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
              {years}
              &nbsp;
              <Text path="profile_years" />
            </small>
            <ProgressStepBox>
              {yearsArr.map(() => (
                <ProgressStep />
              ))}
            </ProgressStepBox>
          </Column>
        </Box>
      );
    });
  }, []);

  return (
    <Section>
      <Card>
        <Text tag="h3" path="experience_title" />
        <Hr />
        <Grid cols={2} responsive gap={4}>
          {experienceItems}
        </Grid>
      </Card>
    </Section>
  );
};
