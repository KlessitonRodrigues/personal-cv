import Text from 'src/UI/base/Text';

import { Columns, SubTitle, Title } from './styled';

export const CVLanguanges = () => {
  return (
    <>
      <Title>
        <Text path="language_title" />
      </Title>

      <Columns>
        <div>
          <SubTitle>Portuguese</SubTitle>
        </div>
        <div>
          <Text path="language_pt_text" />
        </div>
      </Columns>

      <Columns>
        <div>
          <SubTitle>English</SubTitle>
        </div>
        <div>
          <Text path="language_en_text" />
        </div>
      </Columns>

      <Columns>
        <div>
          <SubTitle>Japonese</SubTitle>
        </div>
        <div>
          <Text path="language_jp_text" />
        </div>
      </Columns>
    </>
  );
};
