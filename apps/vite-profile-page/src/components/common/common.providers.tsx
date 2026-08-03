import isValidProp from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import useTheme from 'src/hooks/hooks.use.theme';
import GlobalCSS from 'src/styles/styles.global';
import { getTheme } from 'src/styles/styles.theme';

const AppProviders = (props: PropsWithChildren) => {
  const { isDark, color } = useTheme();
  const theme = getTheme(isDark, color);

  return (
    <StyleSheetManager disableCSSOMInjection shouldForwardProp={isValidProp}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        {props.children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default AppProviders;
