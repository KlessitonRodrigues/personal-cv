import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { getLocalTheme, saveLocalTheme } from 'src/styles/theme';

// @ts-ignore
const ThemeCtx = createContext<Hooks.UseThemeCtx>(null);

const localTheme = getLocalTheme();

export const ThemeProvider = (props: PropsWithChildren) => {
  const [isDark, setDark] = useState(localTheme.mode === 'dark');
  const [color, setColor] = useState(localTheme.color);

  useEffect(() => {
    saveLocalTheme(isDark ? 'dark' : 'light', color);
  }, [isDark, color]);

  const context: Hooks.UseThemeCtx = {
    isDark,
    color,
    setDark,
    setColor,
  };

  const value = useMemo(() => context, [isDark, color]);

  return <ThemeCtx.Provider value={value}>{props.children}</ThemeCtx.Provider>;
};

export default () => useContext(ThemeCtx);
