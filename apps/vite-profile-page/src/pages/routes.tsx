import { Route, createRoutesFromElements } from 'react-router-dom';

import CertificationPage from './certification';
import CodePage from './code';
import ProfilePage from './profile';
import ProjectsPage from './projects';
import ResumePage from './resume';
import SettingsPage from './settings';

const Router = createRoutesFromElements(
  <>
    <Route path="/*" Component={ProfilePage} />
    <Route path="/resume" Component={ResumePage} />
    <Route path="/certification" Component={CertificationPage} />
    <Route path="/projects" Component={ProjectsPage} />
    <Route path="/code" Component={CodePage} />
    <Route path="/settings" Component={SettingsPage} />
  </>,
);

export default Router;
