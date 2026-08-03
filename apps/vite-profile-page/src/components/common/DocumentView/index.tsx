import { PropsWithChildren, useState } from 'react';

import Icons from 'src/components/common/Icons';
import Loading from 'src/components/common/Loading';
import { RoundedBtnMain } from 'src/components/common/StyledComponents/Buttons';
import { urls } from 'src/constants/urls';
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
        <RoundedBtnMain w={12} h={12} onClick={onOpenPrintDialog}>
          <Icons size={6} type="pritter" />
        </RoundedBtnMain>
        <RoundedBtnMain w={12} h={12} onClick={onDownloadResume}>
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
