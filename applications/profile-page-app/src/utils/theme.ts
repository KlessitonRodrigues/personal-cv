import { themeColors } from 'src/styles/theme';

import { getColor, getThemeMode } from './localStorage';

export const currentColor = getColor();
export const currenMainColor = themeColors[currentColor];

export const currentTheme = getThemeMode();
