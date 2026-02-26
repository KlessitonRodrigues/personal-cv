import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AuthenticationFormProjectSection from 'src/lib/sections/projects/AuthFormSection';
import AwsCorsProxyProjectSection from 'src/lib/sections/projects/AwsCorsProxySection';
import ConsoleUIProjectSection from 'src/lib/sections/projects/ConsoleUISection';
import GameFinderProjectSection from 'src/lib/sections/projects/GameFinderSection';
import MultiStepFormProjectSection from 'src/lib/sections/projects/MultiStepFormSection';
import ProfileProjectSection from 'src/lib/sections/projects/ProfileProjectSection';
import SellerAppProjectSection from 'src/lib/sections/projects/SellerAppSection';

const ProjectsPage = () => {
  return (
    <SideBar>
      <Page>
        <ProfileProjectSection />
        <AuthenticationFormProjectSection />
        <MultiStepFormProjectSection />
        <AwsCorsProxyProjectSection />
        <GameFinderProjectSection />
        <SellerAppProjectSection />
        <ConsoleUIProjectSection />
      </Page>
    </SideBar>
  );
};

export default ProjectsPage;
