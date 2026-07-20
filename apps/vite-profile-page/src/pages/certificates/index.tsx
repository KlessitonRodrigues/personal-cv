import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AcademyCertificatesSection from 'src/lib/sections/certificates/AcademySection';
import NotebookLinksSection from 'src/lib/sections/certificates/NotebookSection';
import UdemyCertificatesSection from 'src/lib/sections/certificates/UdemySection';

const CertificatesPage = () => {
  return (
    <SideBar>
      <Page>
        <NotebookLinksSection />
        <AcademyCertificatesSection />
        <UdemyCertificatesSection />
      </Page>
    </SideBar>
  );
};

export default CertificatesPage;
