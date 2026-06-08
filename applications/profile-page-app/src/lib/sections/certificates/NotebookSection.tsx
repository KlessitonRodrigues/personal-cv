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
          <LinkAndIcon icon="notebook" label="Html" url={notesURls.html} />
          <LinkAndIcon icon="notebook" label="React" url={notesURls.react} />
          <LinkAndIcon icon="notebook" label="Node.js" url={notesURls.nodejs} />
          <LinkAndIcon icon="notebook" label="Git" url={notesURls.git} />
          <LinkAndIcon icon="notebook" label="Docker" url={notesURls.docker} />
          <LinkAndIcon icon="notebook" label="English" url={notesURls.english} />
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
