import { PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components';

import { urls } from 'src/constants/urls';
import { cssSize, screenSize } from 'src/styles/utils';
import { downloadPdfFile, openPrintDialog } from 'src/utils/pdf';

import Icons from './common.icons';
import Loading from './common.loading';
import { RoundedBtnMain } from './styled/styled.buttons';

export const Container = styled.div(
  () => css`
    width: 100%;
    margin: auto;
    position: relative;
  `,
);

export const Document = styled.div(() => css``);

export const Content = styled.div(
  () => css`
    @media (max-width: ${screenSize.tablet}px) {
      padding: 0;
    }
  `,
);

export const DocumentButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: ${cssSize(2)};
    position: absolute;
    top: 0;
    left: 101%;
    z-index: 2;

    @media (max-width: ${screenSize.laptopL}px) {
      display: none;
    }
  `,
);

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
