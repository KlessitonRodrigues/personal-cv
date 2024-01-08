import Text from "src/UI/base/Text";
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
} from "./styled";

const CvTemplate1 = () => {
  return (
    <Container>
      <Header>
        <h1>KLESSITON RODRIGUES DA SILVA</h1>
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
            Resume, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, fuga ea veniam harum repellendus fugiat illo error
            laboriosam ducimus accusamus inventore beatae vero quod
            necessitatibus facilis unde rerum quis. Corporis?
          </Text>
        </Resume>

        <Title>
          <Text>Experience</Text>
        </Title>

        <Columns mb={6}>
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
              <Text>
                United Kingdown componany that provides software development
                services
              </Text>
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

        <Columns mb={6}>
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
              <Text>
                Application with geolocation to map waring point at city
                streats.
              </Text>
            </p>
          </div>
        </Columns>

        <Title>
          <Text>Education</Text>
        </Title>

        <Columns mb={6}>
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
              <Text>
                Application with geolocation to map waring point at city
                streats.
              </Text>
            </p>
          </div>
        </Columns>

        <Columns mb={6}>
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
              <Text>
                Application with geolocation to map waring point at city
                streats.
              </Text>
            </p>
          </div>
        </Columns>

        <Title>
          <Text>Extra Works</Text>
        </Title>

        <Columns mb={6}>
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
              <Text>
                Application with geolocation to map waring point at city
                streats.
              </Text>
            </p>
          </div>
        </Columns>
      </Body>
    </Container>
  );
};

export default CvTemplate1;
