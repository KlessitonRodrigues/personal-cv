import { CertificationsNotes } from 'src/components/certifications/certification.notes';
import {
  SchoolCertifications,
  UdemyCertifications,
} from 'src/components/certifications/certifications.images';
import Page from 'src/components/common/common.page';

const CertificationPage = () => {
  return (
    <Page>
      <CertificationsNotes />
      <SchoolCertifications />
      <UdemyCertifications />
    </Page>
  );
};

export default CertificationPage;
