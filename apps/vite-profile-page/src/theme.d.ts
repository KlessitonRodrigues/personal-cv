import 'styled-components';

import { IThemeProps } from './styles/styles.theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeProps {}
}
