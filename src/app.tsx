import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';

import AppProviders from 'src/lib/components/AppProviders';
import Router from 'src/pages/routes';

const App = () => {
  return (
    <AppProviders>
      <MemoryRouter basename="/">
        <Router />
      </MemoryRouter>
    </AppProviders>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
