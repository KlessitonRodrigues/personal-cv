import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';

import ProfileExperience from './_content/Experience';
import ProfileHeader from './_content/Header';

const ProfilePage = () => {
  return (
    <Page>
      <PageContent>
        <ProfileHeader />
        <ProfileExperience />
      </PageContent>
    </Page>
  );
};

export default ProfilePage;
