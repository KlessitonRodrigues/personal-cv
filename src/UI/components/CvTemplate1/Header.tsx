import Text from 'src/UI/base/Text';
import { Header, Column, Columns, Label } from './styled';

export const CVHeader = () => {
  return (
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
  );
};
