import DocumentView from 'src/lib/base/DocumentView';
import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';
import CvTemplate1 from 'src/lib/components/CvTemplate1';
import Header from 'src/lib/components/Header';

const HomePage = () => {
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

export default HomePage;
