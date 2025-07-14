import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import AcademyCertificates from 'src/pages/certificates/_content/Academy';

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
