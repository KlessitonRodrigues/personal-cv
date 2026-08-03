import { themeColors } from 'src/styles/styles.theme';

import { getColor, getThemeMode } from './utils.local.storage';

export const currentColor = getColor();
export const currenMainColor = themeColors[currentColor];

export const currentTheme = getThemeMode();
