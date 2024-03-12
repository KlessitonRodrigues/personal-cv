import { List, ListItem } from 'src/UI/base/StyledComponents/List';
import Text from 'src/UI/base/Text';

import { Columns, Dates, Title } from './styled';

export const CVEducation = () => {
  return (
    <>
      <Title>
        <Text path="education_title" />
      </Title>

      <Columns>
        <div>
          <Dates>2020/01 - 2023/12</Dates>
        </div>
        <div>
          <Title>
            <Text path="education_udemy_title" />
          </Title>
          <List>
            <ListItem>
              <Text path="education_udemy_course_1" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_2" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_3" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_4" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_5" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_6" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_7" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_8" />
            </ListItem>
            <ListItem>
              <Text path="education_udemy_course_9" />
            </ListItem>
          </List>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2017/01 - 2019/11</Dates>
        </div>
        <div>
          <Title>IFPI - Instituto Federal do Piauí</Title>
          <p>
            <Text path="education_ifpi" />
          </p>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2014/02 - 2016/11</Dates>
        </div>
        <div>
          <Title>Centro Estadual de Educação Profissional Professora Maria Amália</Title>
          <Text path="education_school" />
        </div>
      </Columns>
    </>
  );
};
