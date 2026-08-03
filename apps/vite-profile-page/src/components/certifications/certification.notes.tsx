import { notesURls } from 'src/constants/constants.urls';

import Icons from '../common/common.icons';
import If from '../common/common.if';
import LinkAndIcon from '../common/common.link.and.icon';
import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Row } from '../common/styled/styled.flex';

export const CertificationsNotes = () => {
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
