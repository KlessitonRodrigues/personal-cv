import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import Router from 'src/UI/routes';
import { AppProvider } from 'src/hooks/useApp';
import { RoutesProvider } from 'src/hooks/useRoutes';

const App = () => {
  return (
    <AppProvider>
      <RoutesProvider>
        <StyleSheetManager disableCSSOMInjection>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </StyleSheetManager>
      </RoutesProvider>
    </AppProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
