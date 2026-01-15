import { codeBlockLinks } from 'src/constants/urls';
import Icons from 'src/lib/common/Icons';
import If from 'src/lib/common/If';
import { OutlineBtn } from 'src/lib/common/StyledComponents/Buttons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

const CodeListFilters = () => {
  return (
    <Section>
      <Column left gap={4}>
        <If check={false}>
          <Card>
            <Column left gap={4}>
              <Row left>
                <Icons size={8} type={'openAI'} />
                <Text tag="h5">AI Prompts</Text>
              </Row>
              <Text tag="small" path="shared_ai_code" />
            </Column>
            <Column left gap={4}>
              {codeBlockLinks.aipropmts.map((link, i) => (
                <a key={i} href={link} target="_blank">
                  <OutlineBtn>
                    <Icons size={5} type="caretRight" />
                    <Text tag="p" path={`shared_ai_code_${i}`} />
                    <Icons size={5} type="link" />
                  </OutlineBtn>
                </a>
              ))}
            </Column>
          </Card>
        </If>

        <Card>
          <Column left gap={4}>
            <Row left>
              <Icons size={8} type={'javascript'} />
              <Text tag="h5">JavaScript</Text>
            </Row>
            <Text tag="small" path="shared_js_code" />
          </Column>
          <Column left gap={4}>
            {codeBlockLinks.javascript.map((link, i) => (
              <a key={i} href={link} target="_blank">
                <OutlineBtn>
                  <Icons size={5} type="caretRight" />
                  <Text tag="p" path={`shared_js_code_${i}`} />
                  <Icons size={5} type="link" />
                </OutlineBtn>
              </a>
            ))}
          </Column>
        </Card>
      </Column>
    </Section>
  );
};

export default CodeListFilters;
