import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import CodeListSection from 'src/lib/sections/code/CodeListSection';

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
