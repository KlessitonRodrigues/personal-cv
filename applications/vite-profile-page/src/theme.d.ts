import 'styled-components';

import { IThemeProps } from './styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeProps {}
}
