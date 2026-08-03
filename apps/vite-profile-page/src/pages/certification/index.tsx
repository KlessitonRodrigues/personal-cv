import { CertificationsNotes } from 'src/components/certifications/certification.notes';
import {
  SchoolCertifications,
  UdemyCertifications,
} from 'src/components/certifications/certifications.images';
import Page from 'src/components/common/Page';
import SideBar from 'src/components/common/SideBar';

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
