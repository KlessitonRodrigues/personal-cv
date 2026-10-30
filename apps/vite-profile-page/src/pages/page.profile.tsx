import ScrollToHashOnLoad from 'src/components/common/common.link.scroll.to.hash';
import Page from 'src/components/common/common.page';
import ProfileExperienceSection from 'src/components/profile/profile.experience';
import ProfileHeaderSection from 'src/components/profile/profile.header';

const ProfilePage = () => {
  return (
    <Page>
      <ProfileHeaderSection />
      <ProfileExperienceSection />
      <ScrollToHashOnLoad />
    </Page>
  );
};

export default ProfilePage;
