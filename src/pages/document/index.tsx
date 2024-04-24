import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';
import CvTemplate1 from 'src/lib/components/CvTemplate1';
import DocumentView from 'src/lib/components/DocumentView';
import Header from 'src/lib/components/Header';

const DocumentPage = () => {
  return (
    <Page>
      <Header />
      <PageContent>
        <DocumentView>
          <CvTemplate1 />
        </DocumentView>
      </PageContent>
    </Page>
  );
};

export default DocumentPage;
