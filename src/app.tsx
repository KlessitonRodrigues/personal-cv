import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppProviders from 'src/lib/components/AppProviders';
import Router from 'src/pages/routes';

const App = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProviders>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
