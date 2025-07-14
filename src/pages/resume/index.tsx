import DocumentView from 'src/lib/components/DocumentView';
import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import ResumeEducation from 'src/pages/resume/_content/Education';
import ResumeExperience from 'src/pages/resume/_content/Experience';
import ResumeExtraWorks from 'src/pages/resume/_content/ExtraWorks';
import ResumeHeader from 'src/pages/resume/_content/Header';
import ResumeLanguages from 'src/pages/resume/_content/Languages';

const ResumePage = () => {
  return (
    <SideBar>
      <Page>
        <DocumentView>
          <ResumeHeader />
          <ResumeExperience />
          <ResumeEducation />
          <ResumeExtraWorks />
          <ResumeLanguages />
        </DocumentView>
      </Page>
    </SideBar>
  );
};

export const Component = ResumePage;
