import 'styled-components';

import { IThemeProps } from 'src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeProps {}
}
