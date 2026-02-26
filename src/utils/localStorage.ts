export const getLanguage = () => {
  try {
    return (localStorage.getItem('lang') || 'pt').toLowerCase();
  } catch (err) {
    return 'pt';
  }
};

export const changeLanguage = (lang: string) => {
  try {
    localStorage.setItem('lang', lang);
    location.reload();
  } catch (err) {}
};

export const getColor = () => {
  try {
    return localStorage.getItem('color') || 'indigo';
  } catch (err) {
    return 'indigo';
  }
};

export const setColor = (color: string) => {
  try {
    localStorage.setItem('color', color);
    location.reload();
  } catch (err) {}
};

export const getThemeMode = () => {
  try {
    return localStorage.getItem('theme') || 'light';
  } catch (err) {
    return 'light';
  }
};

export const setThemeMode = (color: string) => {
  try {
    localStorage.setItem('theme', color);
    location.reload();
  } catch (err) {}
};
