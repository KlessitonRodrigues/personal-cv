import { materialColors as mc } from 'src/styles/colors';

export const themeColors: Record<string, { main: string; mainBg: string }> = {
  blue: { main: mc.blue['600'], mainBg: mc.blue['800'] },
  purple: { main: mc.purple['600'], mainBg: mc.purple['800'] },
  red: { main: mc.red['600'], mainBg: mc.red['800'] },
  teal: { main: mc.teal['600'], mainBg: mc.teal['800'] },
  indigo: { main: mc.indigo['600'], mainBg: mc.indigo['800'] },
  brown: { main: mc.brown['600'], mainBg: mc.brown['800'] },
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

export const toggleColor = () => {};

export const currentColor = getColor();
export const currenMainColor = themeColors[currentColor];

// export const currentColorName =
//   Object.keys(themeColors).find(color => color === currentColor) || 'blue';
// export const nextColor = themeColors[nextColorName];
