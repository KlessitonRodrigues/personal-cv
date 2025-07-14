import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AwsCorsProxyProject from 'src/pages/projects/_content/awsCorsProxy';
import ConsoleUIProject from 'src/pages/projects/_content/consoleUI';
import GameFinderProject from 'src/pages/projects/_content/gameFinder';
import ProfileProject from 'src/pages/projects/_content/profileProject';

const ProjectsPage = () => {
  return (
    <SideBar>
      <Page>
        <ProfileProject />
        <AwsCorsProxyProject />
        <ConsoleUIProject />
        <GameFinderProject />
      </Page>
    </SideBar>
  );
};

export const Component = ProjectsPage;
