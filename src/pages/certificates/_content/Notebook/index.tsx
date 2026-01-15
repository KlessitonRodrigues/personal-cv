import { urls } from 'src/constants/urls';
import Icons from 'src/lib/common/Icons';
import If from 'src/lib/common/If';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';
import { getText } from 'src/utils/i18n';

const NotebookLinks = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="notebook" size={9} />
          <Text tag="h3" path="certificates_notebook" />
        </Row>
        <Hr />
        <Text tag="small" path="certificates_notebook_text" />
        <Row left gap={6}>
          <LinkAndIcon
            icon="react"
            label={getText('certificates_notebook_react')}
            url={urls.reactNotes}
          />
          <LinkAndIcon
            icon="nodejs"
            label={getText('certificates_notebook_nodejs')}
            url={urls.nodejsNotes}
          />
          <If check={false}>
            <LinkAndIcon
              icon="html"
              label={getText('certificates_notebook_html')}
              url={urls.htmlNotes}
            />
            <LinkAndIcon
              icon="aws"
              label={getText('certificates_notebook_aws')}
              url={urls.awsNotes}
            />
            <LinkAndIcon
              icon="java"
              label={getText('certificates_notebook_java')}
              url={urls.javaNotes}
            />
          </If>
        </Row>
      </Card>
    </Section>
  );
};

export default NotebookLinks;
