import { notesURls } from 'src/constants/constants.urls';

import Icons from '../common/common.icons';
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
          <Icons type="notebook" size={8} />
          <Text tag="h3" path="certificates_notebook" />
        </Row>
        <Hr />
        <Text tag="small" path="certificates_notebook_text" />
        <Row left responsive gap={6}>
          <LinkAndIcon size={5} icon="link" label="HTML" url={notesURls.html} />
          <LinkAndIcon size={5} icon="link" label="JavaScript" url={notesURls.javascript} />
          <LinkAndIcon size={5} icon="link" label="TypeScript" url={notesURls.typescript} />
          <LinkAndIcon size={5} icon="link" label="ReactJS" url={notesURls.react} />
          <LinkAndIcon size={5} icon="link" label="NextJS" url={notesURls.nextjs} />
          <LinkAndIcon size={5} icon="link" label="NodeJS" url={notesURls.nodejs} />
          <LinkAndIcon size={5} icon="link" label="Git" url={notesURls.git} />
          <LinkAndIcon size={5} icon="link" label="Docker" url={notesURls.docker} />
          <LinkAndIcon size={5} icon="link" label="English" url={notesURls.english} />
          {/*
          <LinkAndIcon size={5} icon="link" label="AWS" url={notesURls.aws} />
          <LinkAndIcon size={5} icon="link" label="Java" url={notesURls.java} />
          */}
        </Row>
      </Card>
    </Section>
  );
};
