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
            <ListItem>Java with SQL Databases</ListItem>
            <ListItem>Saverless AppListItemcations on AWS</ListItem>
            <ListItem>Typescript with NodeJS, SQL and noSQL Databases</ListItem>
            <ListItem>ReactJS with Redux</ListItem>
            <ListItem>EngListItemsh Step-by-Step</ListItem>
          </List>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2017/01 - 2019/11</Dates>
        </div>
        <div>
          <Title>IFPI - Instituto Federal do Piauí</Title>
          <p>Ensino Superior, Análise de Sistemas de Computação.</p>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2014/02 - 2016/11</Dates>
        </div>
        <div>
          <Title>Centro Estadual de Educação Profissional Professora Maria Amália</Title>
          <p>Ensino Médio, Técnico em Informatica.</p>
        </div>
      </Columns>
    </>
  );
};
