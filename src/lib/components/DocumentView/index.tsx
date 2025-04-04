import { PropsWithChildren, useState } from 'react';

import { urls } from 'src/constants/urls';
import Icons from 'src/lib/base/Icons';
import Loading from 'src/lib/base/Loading';
import { RoundedBtnMain } from 'src/lib/base/StyledComponents/Buttons';
import { downloadPdfFile, openPrintDialog } from 'src/utils/pdf';

import { Container, Content, Document, DocumentButtons } from './styled';

const DocumentView = (props: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);

  const onOpenPrintDialog = async () => {
    setLoading(true);
    await openPrintDialog();
    setLoading(false);
  };

  const onDownloadResume = () => {
    downloadPdfFile(urls.resumeFileUrl, 'resume.pdf');
  };

  return (
    <Container>
      <DocumentButtons>
        <RoundedBtnMain onClick={onOpenPrintDialog}>
          <Icons size={6} type="pritter" />
        </RoundedBtnMain>
        <RoundedBtnMain onClick={onDownloadResume}>
          <Icons size={6} type="download" />
        </RoundedBtnMain>
      </DocumentButtons>

      <Document id="doc-content">
        <Content>{props.children}</Content>
      </Document>

      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default DocumentView;
