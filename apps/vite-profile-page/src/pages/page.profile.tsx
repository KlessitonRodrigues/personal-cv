import ScrollToHashOnLoad from 'src/components/common/common.link.scroll.to.hash';
import Page from 'src/components/common/common.page';
import SideBar from 'src/components/common/common.sidebar';
import ProfileExperienceSection from 'src/components/profile/profile.experience';
import ProfileHeaderSection from 'src/components/profile/profile.header';

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

export default ProfilePage;
