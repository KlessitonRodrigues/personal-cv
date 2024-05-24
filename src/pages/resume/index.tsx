import DocumentView from 'src/lib/components/DocumentView';
import SideBar from 'src/lib/components/SideBar';
import ProfileEducation from 'src/lib/sections/resume/Education';
import ProfileExperience from 'src/lib/sections/resume/Experience';
import ProfileExtraWorks from 'src/lib/sections/resume/ExtraWorks';
import ProfileHeader from 'src/lib/sections/resume/Header';
import ProfileLanguages from 'src/lib/sections/resume/Languages';
import { Page, PageContent } from 'src/lib/styled/Containers';

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
