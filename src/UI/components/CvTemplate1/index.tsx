import Text from 'src/UI/base/Text';
import {
  Body,
  Column,
  Columns,
  Container,
  Dates,
  Header,
  Label,
  List,
  Resume,
  Title,
} from './styled';

const CvTemplate1 = () => {
  return (
    <Container>
      <Header>
        <h1>KLÉSSITON RODRIGUES DA SILVA</h1>
        <h3>Fullstack Javascript Developer</h3>

        <Columns gap={12}>
          <Column gap={2}>
            <Label>
              <Text>Address</Text>
              Rua Pernambuco Bairro Geraldão
            </Label>

            <Label>
              <Text>Phone</Text>
              +55 89994009646
            </Label>

            <Label>
              <Text>Email</Text>

              <a href="mailto:klessitonrds@gmail.com" target="blank">
                klessitonrds@gmail.com
              </a>
            </Label>
          </Column>

          <Column gap={2}>
            <Label>
              <Text>GitHub</Text>
              <a href="http://github.com/KlessitonRodrigues" target="blank">
                KlessitonRodrigues
              </a>
            </Label>

            <Label>
              <Text>Linkedin</Text>
              <a href="http://linkedin.com/in/klessitonrds" target="blank">
                Klessitonrds
              </a>
            </Label>
          </Column>
        </Columns>
      </Header>

      <Body>
        <Resume>
          <Text>
            Resume, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga ea
            veniam harum repellendus fugiat illo error laboriosam ducimus accusamus inventore beatae
            vero quod necessitatibus facilis unde rerum quis. Corporis?
          </Text>
        </Resume>

        <Title>
          <Text>Experience</Text>
        </Title>

        <Columns mb={3}>
          <div>
            <Dates>
              <Text>2021/12 - 2023/12</Text>
            </Dates>
          </div>
          <div>
            <h6>
              <Text>Westpoint</Text>
            </h6>
            <p>
              <Text>United Kingdown componany that provides software development services</Text>
            </p>

            <List>
              <li>
                <Label>
                  <Text>Javascript developer</Text>
                </Label>
                <Text> On talent id</Text>
              </li>
              <li>
                <Label>
                  <Text>Javascript developer</Text>
                </Label>
                <Text> On talent id</Text>
              </li>
              <li>
                <Label>
                  <Text>Javascript developer</Text>
                </Label>
                <Text> On talent id</Text>
              </li>
              <li>
                <Label>
                  <Text>Javascript developer</Text>
                </Label>
                <Text> On talent id</Text>
              </li>
            </List>
          </div>
        </Columns>

        <Columns mb={3}>
          <div>
            <Dates>
              <Text>2018/08 - 2020/01</Text>
            </Dates>
          </div>
          <div>
            <h6>
              <Text>WTCS</Text>
            </h6>
            <p>
              <Text>Application with geolocation to map waring point at city streats.</Text>
            </p>
          </div>
        </Columns>

        <Title>
          <Text>Education</Text>
        </Title>

        <Columns mb={3}>
          <div>
            <Dates>
              <Text>2017/01 - 2019/11</Text>
            </Dates>
          </div>
          <div>
            <h6>
              <Text>IFPI - Instituto Federal do Piauí</Text>
            </h6>
            <p>
              <Text>Ensino Superior, Análise de Sistemas de Computação.</Text>
            </p>
          </div>
        </Columns>

        <Columns mb={3}>
          <div>
            <Dates>
              <Text>2018/08 - 2020/01</Text>
            </Dates>
          </div>
          <div>
            <h6>
              <Text>Centro Estadual de Educação Profissional Professora Maria Amália</Text>
            </h6>
            <p>
              <Text>Ensino Médio, Técnico em Informatica.</Text>
            </p>
          </div>
        </Columns>

        <Title>
          <Text>Extra Works</Text>
        </Title>

        <Columns mb={3}>
          <div>
            <Dates>
              <Text>2024</Text>
            </Dates>
          </div>
          <div>
            <h6>
              <Text>Personal CV</Text>
            </h6>
            <p>
              <Text>This document wronte in react with support to multiple languages.</Text>
            </p>
          </div>
        </Columns>

        <Columns mb={3}>
          <div>
            <Dates>
              <Text>2023</Text>
            </Dates>
          </div>
          <div>
            <h6>
              <Text>Console UI for desktops</Text>
            </h6>
            <p>
              <Text>
                Desktop application using electron and react to provide console experience like
                PS5/Xbox for PCs.
              </Text>
            </p>
          </div>
        </Columns>
      </Body>
    </Container>
  );
};

export default CvTemplate1;
