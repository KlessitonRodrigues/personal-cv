import { Route, createRoutesFromElements } from 'react-router-dom';

import CertificatesPage from './certificates';
import CodePage from './code';
import ProfilePage from './profile';
import ProjectsPage from './projects';
import ResumePage from './resume';

const Router = createRoutesFromElements(
  <>
    <Route path="/*" Component={ProfilePage} />
    <Route path="/resume" Component={ResumePage} />
    <Route path="/certification" Component={CertificatesPage} />
    <Route path="/projects" Component={ProjectsPage} />
    <Route path="/code" Component={CodePage} />
  </>,
);

export default Router;
