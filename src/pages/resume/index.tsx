import DocumentView from 'src/lib/components/DocumentView';
import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import ResumeEducationSection from 'src/lib/sections/resume/EducationSection';
import ResumeExperienceSection from 'src/lib/sections/resume/ExperienceSection';
import ResumeHeaderSection from 'src/lib/sections/resume/HeaderSection';

const ResumePage = () => {
  return (
    <SideBar>
      <Page>
        <DocumentView>
          <ResumeHeaderSection />
          <ResumeExperienceSection />
          <ResumeEducationSection />
        </DocumentView>
      </Page>
    </SideBar>
  );
};

export default ResumePage;
