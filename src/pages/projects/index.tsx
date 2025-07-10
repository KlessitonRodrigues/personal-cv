import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AwsCorsProxyProject from 'src/lib/sections/projects/awsCorsProxy';
import ConsoleUIProject from 'src/lib/sections/projects/consoleUI';
import GameFinderProject from 'src/lib/sections/projects/gameFinder';
import ProfileProject from 'src/lib/sections/projects/profileProject';

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
