import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import MoneyManager from 'src/lib/sections/projects/MoneyManager';

const ProjectsPage = () => {
  return (
    <SideBar>
      <Page>
        <MoneyManager />
      </Page>
    </SideBar>
  );
};

export const Component = ProjectsPage;
