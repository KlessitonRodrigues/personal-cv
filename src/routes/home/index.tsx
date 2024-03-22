import DocumentView from 'src/lib/base/DocumentView';
import Header from 'src/lib/base/Header';
import PageContainer from 'src/lib/base/PageContainer';
import CvTemplate1 from 'src/lib/components/CvTemplate1';

const HomePage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <DocumentView>
          <CvTemplate1 />
        </DocumentView>
      </PageContainer>
    </>
  );
};

export default HomePage;
