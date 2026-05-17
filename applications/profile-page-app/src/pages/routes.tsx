import { Route, createRoutesFromElements } from 'react-router-dom';

import ProfilePage from './profile';

const Router = createRoutesFromElements(
  <>
    <Route path="/*" Component={ProfilePage} />
    <Route path="/resume" lazy={() => import('./resume')} />
    <Route path="/certification" lazy={() => import('./certificates')} />
    <Route path="/projects" lazy={() => import('./projects')} />
    <Route path="/code" lazy={() => import('./code')} />
    <Route path="/settings" lazy={() => import('./settings')} />
  </>,
);

export default Router;
