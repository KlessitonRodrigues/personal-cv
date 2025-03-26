import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AwsCorsProxyProject from 'src/lib/sections/projects/awsCorsProxy';
import ProfileProject from 'src/lib/sections/projects/profileProject';

const ProjectsPage = () => {
  return (
    <SideBar>
      <Page>
        <ProfileProject />
        <AwsCorsProxyProject />
      </Page>
    </SideBar>
  );
};

export const Component = ProjectsPage;
