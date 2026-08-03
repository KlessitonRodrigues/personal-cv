import DocumentView from 'src/components/common/DocumentView';
import Page from 'src/components/common/Page';
import SideBar from 'src/components/common/SideBar';
import ResumeEducationSection from 'src/components/resume/resume.certifications';
import ResumeExperienceSection from 'src/components/resume/resume.experience';
import ResumeHeaderSection from 'src/components/resume/resume.header';
import LanguagesSection from 'src/components/resume/resume.languages';

const ResumePage = () => {
  return (
    <SideBar>
      <Page>
        <DocumentView>
          <ResumeHeaderSection />
          <ResumeExperienceSection />
          <ResumeEducationSection />
          <LanguagesSection />
        </DocumentView>
      </Page>
    </SideBar>
  );
};

export default ResumePage;
