import { Route, createRoutesFromElements } from 'react-router-dom';

import Layout from '../components/layout/layout';
import CertificationPage from './page.certification';
import ProfilePage from './page.profile';
import ProjectsPage from './page.projects';
import ResumePage from './page.resume';
import SettingsPage from './page.settings';

const Router = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<ProfilePage />} />
    <Route path="resume" element={<ResumePage />} />
    <Route path="certification" element={<CertificationPage />} />
    <Route path="projects" element={<ProjectsPage />} />
    <Route path="settings" element={<SettingsPage />} />
    <Route path="*" element={<ProfilePage />} />
  </Route>,
);

export default Router;
