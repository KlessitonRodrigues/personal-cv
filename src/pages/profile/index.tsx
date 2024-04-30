import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';
import DocumentView from 'src/lib/components/DocumentView';
import SideBar from 'src/lib/components/SideBar';

import { Experience } from './_content/Experience';
import { Profile } from './_content/Profile';

const ProfilePage = () => {
  return (
    <Page>
      <SideBar>
        <PageContent>
          <DocumentView>
            <Profile />
            <Experience />
          </DocumentView>
        </PageContent>
      </SideBar>
    </Page>
  );
};

export default ProfilePage;
