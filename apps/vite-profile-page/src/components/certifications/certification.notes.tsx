import { gistNotesLinks } from 'src/constants/constants.urls';

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
        <Row left wrap gap={4}>
          <LinkAndIcon size={5} icon="link" label="HTML" url={gistNotesLinks.html} />
          <LinkAndIcon size={5} icon="link" label="CSS" url={gistNotesLinks.css} />
          <LinkAndIcon size={5} icon="link" label="JavaScript" url={gistNotesLinks.javascript} />
          <LinkAndIcon size={5} icon="link" label="TypeScript" url={gistNotesLinks.typescript} />
          <LinkAndIcon size={5} icon="link" label="ReactJS" url={gistNotesLinks.react} />
          <LinkAndIcon size={5} icon="link" label="NextJS" url={gistNotesLinks.nextjs} />
          <LinkAndIcon size={5} icon="link" label="NodeJS" url={gistNotesLinks.nodejs} />
          <LinkAndIcon size={5} icon="link" label="NestJS" url={gistNotesLinks.nestjs} />
          <LinkAndIcon size={5} icon="link" label="MongoDB" url={gistNotesLinks.mongodb} />
          <LinkAndIcon size={5} icon="link" label="Git" url={gistNotesLinks.git} />
          <LinkAndIcon size={5} icon="link" label="Docker" url={gistNotesLinks.docker} />
          <LinkAndIcon size={5} icon="link" label="Regex" url={gistNotesLinks.regex} />
          <LinkAndIcon size={5} icon="link" label="Markdown" url={gistNotesLinks.markdown} />
          <LinkAndIcon size={5} icon="link" label="English" url={gistNotesLinks.english} />
          <LinkAndIcon size={5} icon="link" label="AWS" url={gistNotesLinks.aws} />
          {/*
          <LinkAndIcon size={5} icon="link" label="Java" url={notesURls.java} />
          */}
        </Row>
      </Card>
    </Section>
  );
};
