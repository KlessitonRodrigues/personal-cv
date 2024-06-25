import isValidProp from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalCSS from 'src/styles/global';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';
import { currentTheme } from 'src/utils/theme';

const AppProviders = (props: PropsWithChildren) => {
  return (
    <StyleSheetManager disableCSSOMInjection shouldForwardProp={isValidProp}>
      <ThemeProvider theme={currentTheme === 'light' ? defaultTheme : defaultThemeDark}>
        <GlobalCSS />
        {props.children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default AppProviders;
