import DocumentView from 'src/lib/components/DocumentView';
import Page from 'src/lib/components/Page';
import { Experience } from 'src/lib/sections/profile/Experience';
import { Profile } from 'src/lib/sections/profile/Profile';

const ProfilePage = () => {
  return (
    <Page>
      <DocumentView>
        <Profile />
        <Experience />
      </DocumentView>
    </Page>
  );
};

export default ProfilePage;
