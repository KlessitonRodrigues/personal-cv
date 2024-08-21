import { Route, Routes } from 'react-router-dom';

import { StatusBar } from 'src/lib/base/StyledComponents/StatusBar';
import SideBar from 'src/lib/components/SideBar';
import { isNativeMobileScreen } from 'src/styles/utils';

import CertificatesPage from './certificates';
import ProfilePage from './profile';
import ResumePage from './resume';

const Router = () => {
  const isNative = isNativeMobileScreen();

  return (
    <>
      <StatusBar active={isNative} />
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
