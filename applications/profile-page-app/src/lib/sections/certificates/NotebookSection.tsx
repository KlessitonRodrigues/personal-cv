import { notesURls } from 'src/constants/urls';
import Icons from 'src/lib/common/Icons';
import If from 'src/lib/common/If';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

const NotebookLinksSection = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="notebook" size={9} />
          <Text tag="h3" path="certificates_notebook" />
        </Row>
        <Hr />
        <Text tag="small" path="certificates_notebook_text" />
        <Row left responsive gap={6}>
          <LinkAndIcon icon="textDocument" label="English" url={notesURls.english} />
          <LinkAndIcon icon="textDocument" label="Html" url={notesURls.html} />
          <LinkAndIcon icon="textDocument" label="React" url={notesURls.react} />
          <LinkAndIcon icon="textDocument" label="Node.js" url={notesURls.nodejs} />
          <LinkAndIcon icon="textDocument" label="Git" url={notesURls.git} />
          <LinkAndIcon icon="textDocument" label="Docker" url={notesURls.docker} />
          <If check={false}>
            <LinkAndIcon icon="aws" label="AWS" url={notesURls.aws} />
            <LinkAndIcon icon="java" label="Java" url={notesURls.java} />
          </If>
        </Row>
      </Card>
    </Section>
  );
};

export default NotebookLinksSection;
