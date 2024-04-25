import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';
import SideBar from 'src/lib/components/SideBar';

import ProfileEducation from './_content/Education';
import ProfileExperience from './_content/Experience';
import ProfileExtraWorks from './_content/ExtraWorks';
import ProfileHeader from './_content/Header';
import ProfileLanguages from './_content/Languages';

const ProfilePage = () => {
  return (
    <Page>
      <SideBar>
        <PageContent>
          <ProfileHeader />
          <ProfileExperience />
          <ProfileEducation />
          <ProfileExtraWorks />
          <ProfileLanguages />
        </PageContent>
      </SideBar>
    </Page>
  );
};

export default ProfilePage;
