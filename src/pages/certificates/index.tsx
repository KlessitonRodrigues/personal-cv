import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AcademyCertificates from 'src/lib/sections/certificates/Academy';

const CertificatesPage = () => {
  return (
    <SideBar>
      <Page>
        <AcademyCertificates />
      </Page>
    </SideBar>
  );
};

export const Component = CertificatesPage;
