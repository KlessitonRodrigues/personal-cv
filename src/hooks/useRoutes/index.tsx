import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<Hooks.UseRoutesContext>(null);

export const RoutesProvider = (props: PropsWithChildren) => {
  const [pathname, setPath] = useState<Utils.Paths>('/home');
  const [lang, setLang] = useState('');

  const context: Hooks.UseRoutesContext = {
    pathname,
    hash: '',
    search: '',
    lang,
    setPath,
    setLang,
  };

  const value = useMemo(() => context, [JSON.stringify(context)]);
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
