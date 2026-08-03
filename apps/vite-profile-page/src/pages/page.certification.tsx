import { CertificationsNotes } from 'src/components/certifications/certification.notes';
import {
  SchoolCertifications,
  UdemyCertifications,
} from 'src/components/certifications/certifications.images';
import Page from 'src/components/common/common.page';
import SideBar from 'src/components/common/common.sidebar';

const CertificationPage = () => {
  return (
    <SideBar>
      <Page>
        <CertificationsNotes />
        <SchoolCertifications />
        <UdemyCertifications />
      </Page>
    </SideBar>
  );
};

export default CertificationPage;
