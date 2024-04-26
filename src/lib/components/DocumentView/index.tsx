import { PropsWithChildren, useState } from 'react';

import Icons from 'src/lib/base/Icons';
import Loading from 'src/lib/base/Loading';
import { RoundedBtn } from 'src/lib/base/StyledComponents/Buttons';
import { openPrintDialog } from 'src/utils/pdf';

import { Container, Content, Document, DocumentButtons } from './styled';

const DocumentView = (props: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);

  const onDownload = async () => {
    setLoading(true);
    await openPrintDialog();
    setLoading(false);
  };

  return (
    <Container>
      <DocumentButtons>
        <RoundedBtn onClick={onDownload}>
          <Icons size={7} type="download" />
        </RoundedBtn>
      </DocumentButtons>

      <Document id="doc-content">
        <Content>{props.children}</Content>
      </Document>

      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default DocumentView;
