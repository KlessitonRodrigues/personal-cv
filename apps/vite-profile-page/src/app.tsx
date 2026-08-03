import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Router from 'src/pages/routes';

import AppProviders from './components/common/common.providers';
import { ThemeProvider } from './hooks/hooks.use.theme';

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
