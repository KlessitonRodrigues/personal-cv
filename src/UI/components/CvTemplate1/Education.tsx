import Text from 'src/UI/base/Text';
import { Columns, Dates, List, Title } from './styled';

export const CVEducation = () => {
  return (
    <>
      <Title>
        <Text>Education</Text>
      </Title>

      <Columns>
        <div>
          <Dates>
            <Text>2020/01 - 2023/12</Text>
          </Dates>
        </div>
        <div>
          <Title>
            <Text>Udemy Certificates</Text>
          </Title>
          <p>
            <List>
              <li>Clojure Introduction</li>
              <li>Java with SQL Databases</li>
              <li>Saverless Applications on AWS</li>
              <li>Typescript with NodeJS, SQL and noSQL Databases</li>
              <li>ReactJS with Redux</li>
              <li>English Step-by-Step</li>
            </List>
          </p>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>
            <Text>2017/01 - 2019/11</Text>
          </Dates>
        </div>
        <div>
          <Title>
            <Text>IFPI - Instituto Federal do Piauí</Text>
          </Title>
          <p>
            <Text>Ensino Superior, Análise de Sistemas de Computação.</Text>
          </p>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>
            <Text>2018/08 - 2020/01</Text>
          </Dates>
        </div>
        <div>
          <Title>
            <Text>Centro Estadual de Educação Profissional Professora Maria Amália</Text>
          </Title>
          <p>
            <Text>Ensino Médio, Técnico em Informatica.</Text>
          </p>
        </div>
      </Columns>
    </>
  );
};
