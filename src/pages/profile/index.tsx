import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';
import SideBar from 'src/lib/components/SideBar';

import { Profile } from './_content/Profile';

const ProfilePage = () => {
  return (
    <Page>
      <SideBar>
        <PageContent>
          <Profile />
        </PageContent>
      </SideBar>
    </Page>
  );
};

export default ProfilePage;
