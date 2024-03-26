import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from 'src/styles/global';
import { defaultTheme } from 'src/styles/theme';

import HomePage from './home';

const Router = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes location={location}>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
