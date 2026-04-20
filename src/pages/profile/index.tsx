import ScrollToHashOnLoad from 'src/lib/common/Links/ScrollToHash';
import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import ProfileExperienceSection from 'src/lib/sections/profile/ExperienceSection';
import ProfileHeaderSection from 'src/lib/sections/profile/HeaderSection';

const ProfilePage = () => {
  return (
    <SideBar>
      <Page>
        <ProfileHeaderSection />
        <ProfileExperienceSection />
        <ScrollToHashOnLoad />
      </Page>
    </SideBar>
  );
};

export const Component = ProfilePage;
