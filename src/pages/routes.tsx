import { Route, Routes } from 'react-router-dom';

import ProfilePage from './profile';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
