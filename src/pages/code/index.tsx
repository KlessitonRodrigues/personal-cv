import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';

import CodeListFilters from './_content/CodeList';

const CodePage = () => {
  return (
    <SideBar>
      <Page>
        <CodeListFilters />
      </Page>
    </SideBar>
  );
};

export default CodePage;
