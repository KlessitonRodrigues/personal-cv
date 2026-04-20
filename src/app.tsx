import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Router from 'src/pages/routes';

import '../../authentication-form/applications/authentication/public/images/beach_bg_01.jpg';
import '../../authentication-form/applications/authentication/public/images/beach_bg_02.jpg';
import '../../authentication-form/applications/authentication/public/images/beach_bg_03.jpg';
import '../../authentication-form/applications/authentication/public/images/beach_bg_04.jpg';
import '../../authentication-form/applications/authentication/public/images/beach_bg_05.jpg';
import { ThemeProvider } from './hooks/useTheme';
import AppProviders from './lib/components/AppProviders';

const App = () => {
  return (
    <ThemeProvider>
      <AppProviders>
        <RouterProvider router={createBrowserRouter(Router)} />
      </AppProviders>
    </ThemeProvider>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
