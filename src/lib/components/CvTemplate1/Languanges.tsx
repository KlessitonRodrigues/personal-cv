import Text from 'src/lib/base/Text';

import { Columns, SubTitle, Title } from './styled';

export const CVLanguanges = () => {
  return (
    <>
      <Title>
        <Text path="language_title" />
      </Title>

      <Columns>
        <div>
          <SubTitle>
            <Text path="language_pt_title" />
          </SubTitle>
        </div>
        <div>
          <Text path="language_pt_text" />
        </div>
      </Columns>

      <Columns>
        <div>
          <SubTitle>
            <Text path="language_en_title" />
          </SubTitle>
        </div>
        <div>
          <Text path="language_en_text" />
        </div>
      </Columns>
    </>
  );
};
