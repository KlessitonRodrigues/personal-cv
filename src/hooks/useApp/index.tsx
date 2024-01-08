import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<Hooks.UseAppContext>(null);

export const AppProvider = (props: PropsWithChildren) => {
  const [firstRun, setFirstRun] = useState(true);
  const [bgImage, setBgImage] = useState('');

  const context: Hooks.UseAppContext = {
    firstRun,
    bgImage,
    setFirstRun,
    setBgImage,
  };

  const value = useMemo(() => context, [JSON.stringify(context)]);
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
