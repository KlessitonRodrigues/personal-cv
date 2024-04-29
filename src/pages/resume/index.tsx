import { Page, PageContent } from 'src/lib/base/StyledComponents/Containers';
import DocumentView from 'src/lib/components/DocumentView';
import SideBar from 'src/lib/components/SideBar';

import ProfileEducation from './_content/Education';
import ProfileExperience from './_content/Experience';
import ProfileExtraWorks from './_content/ExtraWorks';
import ProfileHeader from './_content/Header';
import ProfileLanguages from './_content/Languages';

const ResumePage = () => {
  return (
    <Page>
      <SideBar>
        <PageContent>
          <DocumentView>
            <ProfileHeader />
            <ProfileExperience />
            <ProfileEducation />
            <ProfileExtraWorks />
            <ProfileLanguages />
          </DocumentView>
        </PageContent>
      </SideBar>
    </Page>
  );
};

export default ResumePage;