import { Route, createRoutesFromElements } from 'react-router-dom';

const Router = createRoutesFromElements(
  <>
    <Route path="/*" lazy={() => import('./profile')} />
    <Route path="/resume" lazy={() => import('./resume')} />
    <Route path="/certification" lazy={() => import('./certificates')} />
    <Route path="/projects" lazy={() => import('./projects')} />
  </>,
);

export default Router;
