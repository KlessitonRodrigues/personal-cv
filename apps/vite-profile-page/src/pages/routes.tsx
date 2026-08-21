import { Route, createRoutesFromElements } from 'react-router-dom';

import CertificationPage from './page.certification';
import ProfilePage from './page.profile';
import ProjectsPage from './page.projects';
import ResumePage from './page.resume';
import SettingsPage from './page.settings';

const Router = createRoutesFromElements(
  <>
    <Route path="/*" Component={ProfilePage} />
    <Route path="/resume" Component={ResumePage} />
    <Route path="/certification" Component={CertificationPage} />
    <Route path="/projects" Component={ProjectsPage} />
    <Route path="/settings" Component={SettingsPage} />
  </>,
);

export default Router;
