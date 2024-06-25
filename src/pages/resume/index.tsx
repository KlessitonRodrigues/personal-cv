import DocumentView from 'src/lib/components/DocumentView';
import Page from 'src/lib/components/Page';
import ResumeEducation from 'src/lib/sections/resume/Education';
import ResumeExperience from 'src/lib/sections/resume/Experience';
import ResumeExtraWorks from 'src/lib/sections/resume/ExtraWorks';
import ResumeHeader from 'src/lib/sections/resume/Header';
import ResumeLanguages from 'src/lib/sections/resume/Languages';

const ResumePage = () => {
  return (
    <Page>
      <DocumentView>
        <ResumeHeader />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeExtraWorks />
        <ResumeLanguages />
      </DocumentView>
    </Page>
  );
};

export default ResumePage;
