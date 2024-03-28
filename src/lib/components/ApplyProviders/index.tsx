import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalCSS from 'src/styles/global';
import { defaultTheme } from 'src/styles/theme';

const ApplyProviders = (props: PropsWithChildren) => {
  return (
    <StyleSheetManager disableCSSOMInjection>
      <ThemeProvider theme={defaultTheme}>
        <GlobalCSS />
        {props.children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default ApplyProviders;
