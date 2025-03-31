import { antColors as ac, materialColors as mc } from 'src/styles/colors';

import { getColor, getThemeMode } from './localStorage';

export const themeColors: Record<string, { main: string; mainBg: string }> = {
  indigo: { main: mc.indigo['400'], mainBg: mc.indigo['800'] },
  purple: { main: mc.purple['400'], mainBg: mc.purple['800'] },
  blue: { main: ac.blue['500'], mainBg: ac.blue['800'] },
  magenta: { main: ac.magenta['700'], mainBg: ac.magenta['900'] },
  green: { main: ac.green['700'], mainBg: ac.green['900'] },
};

export const currentColor = getColor();
export const currenMainColor = themeColors[currentColor];

export const currentTheme = getThemeMode();
