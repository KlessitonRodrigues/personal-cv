import Icons from 'src/components/common/Icons';
import { OutlineBtn } from 'src/components/common/StyledComponents/Buttons';
import { Card, Section } from 'src/components/common/StyledComponents/Containers';
import { Column, Row } from 'src/components/common/StyledComponents/Flex';
import Text from 'src/components/common/Text';
import { codeBlockLinks } from 'src/constants/urls';

const CodeListSection = () => {
  return (
    <Section>
      <Column left gap={4}>
        {/*}
        <Card>
          <Column left gap={4}>
            <Row left>
              <Icons size={8} type="openAI" />
              <Text tag="h5">AI Instructions</Text>
            </Row>
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
        */}

        <Card>
          <Column left gap={4}>
            <Row left>
              <Icons size={8} type={'javascript'} />
              <Text tag="h5">JavaScript</Text>
            </Row>
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

export default CodeListSection;
