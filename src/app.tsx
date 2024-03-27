import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import Router from 'src/pages/routes';
import GlobalCSS from 'src/styles/global';

import { defaultTheme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <StyleSheetManager disableCSSOMInjection>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </StyleSheetManager>
    </ThemeProvider>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
