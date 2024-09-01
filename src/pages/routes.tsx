import { Route, Routes } from 'react-router-dom';

import SideBar from 'src/lib/components/SideBar';

import CertificatesPage from './certificates';
import ProfilePage from './profile';
import ResumePage from './resume';

const Router = () => {
  return (
    <>
      <SideBar>
        <Routes>
          <Route path="/*" element={<ProfilePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/certification" element={<CertificatesPage />} />
        </Routes>
      </SideBar>
    </>
  );
};

export default Router;
