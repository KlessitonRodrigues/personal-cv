import CodeListSection from 'src/components/coding/coding.javascript';
import Page from 'src/components/common/Page';
import SideBar from 'src/components/common/SideBar';

const CodePage = () => {
  return (
    <SideBar>
      <Page>
        <CodeListSection />
      </Page>
    </SideBar>
  );
};

export default CodePage;
