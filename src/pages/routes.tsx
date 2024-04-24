import { Route, Routes } from 'react-router-dom';

import DocumentPage from './document';
import ProfilePage from './profile';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/document" element={<DocumentPage />} />
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
