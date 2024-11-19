import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';

import Router from 'src/pages/routes';

import { ThemeProvider } from './hooks/useTheme';

const App = () => {
  return (
    <ThemeProvider>
      <MemoryRouter basename="/">
        <Router />
      </MemoryRouter>
    </ThemeProvider>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
