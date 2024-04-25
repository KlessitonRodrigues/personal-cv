import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import { List, ListItem } from 'src/lib/base/StyledComponents/List';
import Text from 'src/lib/base/Text';

const ProfileEducation = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h3" path="experience_title" />
          <Hr />
        </Column>

        <Column left gap={0}>
          <Row left>
            <Text tag="h5" path="education_udemy_title" />
            <small>2020/01 - 2023/12</small>
          </Row>
          <List>
            <ListItem>
              <Text tag="p" path="education_udemy_course_1" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_2" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_3" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_4" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_5" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_6" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_7" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_8" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_9" />
            </ListItem>
          </List>
        </Column>

        <Column left>
          <Row left>
            <h6>IFPI - Instituto Federal do Piauí</h6>
            <small>2017/01 - 2019/11</small>
          </Row>
          <Text tag="p" path="education_ifpi" />
        </Column>

        <Column left>
          <Row left>
            <h6>Centro Estadual de Educação Profissional Professora Maria Amália</h6>
            <small>2014/02 - 2016/11</small>
          </Row>
          <Text tag="p" path="education_school" />
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileEducation;
