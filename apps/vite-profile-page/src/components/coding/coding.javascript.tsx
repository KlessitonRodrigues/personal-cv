import { codeBlockLinks } from 'src/constants/constants.urls';

import Icons from '../common/common.icons';
import Text from '../common/common.text';
import { OutlineBtn } from '../common/styled/styled.buttons';
import { Card, Section } from '../common/styled/styled.containers';
import { Column, Row } from '../common/styled/styled.flex';

const CodeListSection = () => {
  return (
    <Section>
      <Column left gap={4}>
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
