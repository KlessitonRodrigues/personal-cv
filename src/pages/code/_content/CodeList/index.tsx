import { codeBlockLinks } from 'src/constants/urls';
import Icons from 'src/lib/common/Icons';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

const CodeListFilters = () => {
  return (
    <Section>
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
              <Row left>
                <Text tag="p" path={`shared_js_code_${i}`} />
                <Icons size={5} type="link" />
              </Row>
            </a>
          ))}
        </Column>
      </Card>
    </Section>
  );
};

export default CodeListFilters;
