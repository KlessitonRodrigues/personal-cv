import { IThemeColors } from 'src/styles/styles.theme';

export const getLanguage = () => {
  return (localStorage.getItem('lang') || 'pt').toLowerCase();
};

export const changeLanguage = (lang: string) => {
  localStorage.setItem('lang', lang);
  location.reload();
};

export const getColor = () => {
  return (localStorage.getItem('color') as IThemeColors) || 'indigo';
};

export const setColor = (color: string) => {
  localStorage.setItem('color', color);
  location.reload();
};

export const getThemeMode = () => {
  return localStorage.getItem('theme') || 'light';
};

export const setThemeMode = (color: string) => {
  localStorage.setItem('theme', color);
  location.reload();
};
