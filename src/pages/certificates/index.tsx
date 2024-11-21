import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AcademyCertificates from 'src/lib/sections/certificates/Academy';
import UdemyCertificates from 'src/lib/sections/certificates/Udemy';

const CertificatesPage = () => {
  return (
    <SideBar>
      <Page>
        <AcademyCertificates />
        <UdemyCertificates />
      </Page>
    </SideBar>
  );
};

export const Component = CertificatesPage;
