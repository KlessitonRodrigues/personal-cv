import { Route, Routes } from 'react-router-dom';

import ProfilePage from './profile';
import ResumePage from './resume';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/*" element={<ProfilePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
};

export default Router;
