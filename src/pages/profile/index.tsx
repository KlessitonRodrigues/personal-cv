import Page from 'src/lib/components/Page';
import ProfileExperience from 'src/lib/sections/profile/Experience';
import ProfileHeader from 'src/lib/sections/profile/Header';

const ProfilePage = () => {
  return (
    <Page>
      <ProfileHeader />
      <ProfileExperience />
    </Page>
  );
};

export default ProfilePage;
