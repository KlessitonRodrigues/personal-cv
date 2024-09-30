import { Route, Routes } from 'react-router-dom';

import SideBar from 'src/lib/components/SideBar';

import CertificatesPage from './certificates';
import ProfilePage from './profile';
import ProjectsPage from './projects';
import ResumePage from './resume';

const Router = () => {
  return (
    <>
      <SideBar>
        <Routes>
          <Route path="/*" element={<ProfilePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/certification" element={<CertificatesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </SideBar>
    </>
  );
};

export default Router;
