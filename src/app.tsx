import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import Router from 'src/routes';

const App = () => {
  return (
    <StyleSheetManager disableCSSOMInjection>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StyleSheetManager>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
