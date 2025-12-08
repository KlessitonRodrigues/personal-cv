import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AwsCorsProxyProject from 'src/pages/projects/_content/awsCorsProxy';
import ConsoleUIProject from 'src/pages/projects/_content/consoleUI';
import GameFinderProject from 'src/pages/projects/_content/gameFinder';
import ProfileProject from 'src/pages/projects/_content/profileProject';
import SellerAppProject from 'src/pages/projects/_content/sellerApp';

import MultiStepFormProject from './_content/MultiStepForm';

const ProjectsPage = () => {
  return (
    <SideBar>
      <Page>
        <ProfileProject />
        <MultiStepFormProject />
        <AwsCorsProxyProject />
        <GameFinderProject />
        <SellerAppProject />
        <ConsoleUIProject />
      </Page>
    </SideBar>
  );
};

export default ProjectsPage;
