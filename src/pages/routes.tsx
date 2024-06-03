import { Route, Routes } from 'react-router-dom';

import CertificatesPage from './certificates';
import ProfilePage from './profile';
import ResumePage from './resume';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/*" element={<ProfilePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  );
};

export default Router;
