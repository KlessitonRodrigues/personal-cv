import DocumentView from 'src/lib/components/DocumentView';
import SideBar from 'src/lib/components/SideBar';
import { Experience } from 'src/lib/sections/profile/Experience';
import { Profile } from 'src/lib/sections/profile/Profile';
import { Page, PageContent } from 'src/lib/styled/Containers';

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
