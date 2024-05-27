import Page from 'src/lib/components/Page';
import AcademyCertificates from 'src/lib/sections/certificates/Academy';
import UdemyCertificates from 'src/lib/sections/certificates/Udemy';

const CertificatesPage = () => {
  return (
    <Page>
      <AcademyCertificates />
      <UdemyCertificates />
    </Page>
  );
};

export default CertificatesPage;
