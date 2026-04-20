import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Router from 'src/pages/routes';

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
