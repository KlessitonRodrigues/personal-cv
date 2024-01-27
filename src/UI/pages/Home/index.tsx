import DocumentView from 'src/UI/base/DocumentView';
import Header from 'src/UI/base/Header';
import PageContainer from 'src/UI/base/PageContainer';
import CvTemplate1 from 'src/UI/components/CvTemplate1';

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
