export const getLangQuery = () => {
  const params = location.href.split('?');
  const url = new URLSearchParams(params[1]);
  return url.get('lang') || '';
};

export const currentLang = getLangQuery();

export const changeLanguage = (lang: string) => {
  const [path, params] = location.href.split('?');
  const newParams = new URLSearchParams(params);
  newParams.set('lang', lang);
  location.href = `${path}?${newParams.toString()}`;
};
