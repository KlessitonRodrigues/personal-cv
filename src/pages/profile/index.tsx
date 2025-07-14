import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import ProfileExperience from 'src/pages/profile/_content/Experience';
import ProfileHeader from 'src/pages/profile/_content/Header';

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
