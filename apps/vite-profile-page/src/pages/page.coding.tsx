import CodeListSection from 'src/components/coding/coding.javascript';
import Page from 'src/components/common/common.page';
import SideBar from 'src/components/common/common.sidebar';

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
