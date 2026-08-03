import ScrollToHashOnLoad from 'src/components/common/Links/ScrollToHash';
import Page from 'src/components/common/Page';
import SideBar from 'src/components/common/SideBar';
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
