import { materialColors as mc } from 'src/styles/colors';

export const themeColors: Record<string, { main: string; mainBg: string }> = {
  blue: { main: mc.blue['600'], mainBg: mc.blue['700'] },
  purple: { main: mc.purple['600'], mainBg: mc.purple['700'] },
  green: { main: mc.green['600'], mainBg: mc.green['700'] },
  red: { main: mc.red['600'], mainBg: mc.red['700'] },
  teal: { main: mc.teal['600'], mainBg: mc.teal['700'] },
  indigo: { main: mc.indigo['600'], mainBg: mc.indigo['700'] },
  brown: { main: mc.brown['600'], mainBg: mc.brown['700'] },
};

export const getColor = () => {
  try {
    return localStorage.getItem('color') || 'blue';
  } catch (err) {
    return 'blue';
  }
};

export const setColor = (color: string) => {
  try {
    localStorage.setItem('color', color);
    location.reload();
  } catch (err) {}
};

export const toggleColor = () => {
  const color = getColor();
  const colors = Object.keys(themeColors);
  const colorIndex = colors.indexOf(color);
  const nextColor = colorIndex < colors.length - 1 ? colors[colorIndex + 1] : colors[0];
  setColor(nextColor);
};

export const currentColor = getColor();
export const currenMainColor = themeColors[currentColor];

export const getThemeMode = () => {
  try {
    return localStorage.getItem('theme') || 'light';
  } catch (err) {
    return 'blue';
  }
};

export const setThemeMode = (color: string) => {
  try {
    localStorage.setItem('theme', color);
    location.reload();
  } catch (err) {}
};

export const toggleTheme = () => {
  const theme = getThemeMode();
  const themes = ['dark', 'light'];
  const colorIndex = themes.indexOf(theme);
  const nextColor = colorIndex < themes.length - 1 ? themes[colorIndex + 1] : themes[0];
  setThemeMode(nextColor);
};

export const currentTheme = getThemeMode();
