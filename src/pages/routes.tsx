import { Route, Routes } from 'react-router-dom';

import HomePage from './home';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
