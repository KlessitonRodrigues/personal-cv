import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AcademyCertificatesSection from 'src/lib/sections/certificates/AcademySection';
import UdemyCertificatesSection from 'src/lib/sections/certificates/UdemySection';

const CertificatesPage = () => {
  return (
    <SideBar>
      <Page>
        <AcademyCertificatesSection />
        <UdemyCertificatesSection />
      </Page>
    </SideBar>
  );
};

export default CertificatesPage;
