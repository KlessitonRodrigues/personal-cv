import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import ProfileExperience from 'src/lib/sections/profile/Experience';
import ProfileHeader from 'src/lib/sections/profile/Header';

const ProfilePage = () => {
  return (
    <SideBar>
      <Page>
        <ProfileHeader />
        <ProfileExperience />
      </Page>
    </SideBar>
  );
};

export const Component = ProfilePage;
