import Text from 'src/lib/base/Text';

import { Column, Columns, Header, Label } from './styled';

export const CVHeader = () => {
  return (
    <Header>
      <h1>KLÉSSITON RODRIGUES DA SILVA</h1>
      <h3>Fullstack JavaScript Developer</h3>

      <Columns gap={8} mb={1}>
        <Column gap={2}>
          <Label>
            <b>
              <Text path="header_address" />
            </b>
            Rua Pernambuco Bairro Geraldão
          </Label>
          <Label>
            <b>
              <Text path="header_city" />
            </b>
            Bertolínia, Piauí, Brasil
          </Label>
          <Label>
            <b>
              <Text path="header_phone" />
            </b>
            +55 89994009646
          </Label>
          <Label>
            <b>Email</b>
            <a href="mailto:klessitonrds@gmail.com" target="blank">
              klessitonrds@gmail.com
            </a>
          </Label>
        </Column>

        <Column gap={2}>
          <Label>
            <b>GitHub</b>
            <a href="http://github.com/KlessitonRodrigues" target="blank">
              KlessitonRodrigues
            </a>
          </Label>
          <Label>
            <b>Linkedin</b>
            <a href="http://linkedin.com/in/klessitonrds" target="blank">
              Klessitonrds
            </a>
          </Label>
        </Column>
      </Columns>
    </Header>
  );
};
