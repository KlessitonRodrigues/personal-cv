import DocumentView from 'src/lib/components/DocumentView';
import Page from 'src/lib/components/Page';
import ProfileEducation from 'src/lib/sections/resume/Education';
import ProfileExperience from 'src/lib/sections/resume/Experience';
import ProfileExtraWorks from 'src/lib/sections/resume/ExtraWorks';
import ProfileHeader from 'src/lib/sections/resume/Header';
import ProfileLanguages from 'src/lib/sections/resume/Languages';

const ResumePage = () => {
  return (
    <Page>
      <DocumentView>
        <ProfileHeader />
        <ProfileExperience />
        <ProfileEducation />
        <ProfileExtraWorks />
        <ProfileLanguages />
      </DocumentView>
    </Page>
  );
};

export default ResumePage;
