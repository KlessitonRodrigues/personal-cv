import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';

import AcademyCertificates from './_content/Academy';
import NotebookLinks from './_content/Notebook';
import UdemyCertificates from './_content/Udemy';

const CertificatesPage = () => {
  return (
    <SideBar>
      <Page>
        <NotebookLinks />
        <AcademyCertificates />
        <UdemyCertificates />
      </Page>
    </SideBar>
  );
};

export default CertificatesPage;
