import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useRoutes from 'src/hooks/useRoutes';
import GlobalCSS from 'src/styles/global';
import { defaultTheme } from 'src/styles/theme';

import HomePage from './home';

const Router = () => {
  const routes = useRoutes();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes location={routes}>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
