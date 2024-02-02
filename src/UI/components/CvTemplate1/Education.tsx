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
            <ListItem>Clojure Introduction</ListItem>
            <ListItem>Java With SQL Databases</ListItem>
            <ListItem>Saverless Applications On AWS</ListItem>
            <ListItem>Agile Software Development</ListItem>
            <ListItem>Typescript With NodeJS, SQL And NoSQL Databases</ListItem>
            <ListItem>Design Of MVP With Figma</ListItem>
            <ListItem>ReactJS With Redux</ListItem>
            <ListItem>English Step-by-Step</ListItem>
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
