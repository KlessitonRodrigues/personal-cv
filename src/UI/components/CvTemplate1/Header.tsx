import Text from 'src/UI/base/Text';
import { Header, Column, Columns, Label } from './styled';

export const CVHeader = () => {
  return (
    <Header>
      <h1>KLÉSSITON RODRIGUES DA SILVA</h1>
      <h3>Fullstack Javascript Developer</h3>

      <Columns gap={8} mb={1}>
        <Column gap={2}>
          <Label>
            <span>
              <Text path="header_address" />
            </span>
            Rua Pernambuco Bairro Geraldão
          </Label>
          <Label>
            <span>
              <Text path="header_city" />
            </span>
            Bertolínia, Piauí, Brasil
          </Label>
          <Label>
            <span>
              <Text path="header_phone" />
            </span>
            +55 89994009646
          </Label>
          <Label>
            <span>Email</span>
            <a href="mailto:klessitonrds@gmail.com" target="blank">
              klessitonrds@gmail.com
            </a>
          </Label>
        </Column>

        <Column gap={2}>
          <Label>
            <span>GitHub</span>
            <a href="http://github.com/KlessitonRodrigues" target="blank">
              KlessitonRodrigues
            </a>
          </Label>
          <Label>
            <span>Linkedin</span>
            <a href="http://linkedin.com/in/klessitonrds" target="blank">
              Klessitonrds
            </a>
          </Label>
        </Column>
      </Columns>
    </Header>
  );
};
