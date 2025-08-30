import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { IThemeColors, getLocalTheme, saveLocalTheme } from 'src/styles/theme';

type IUseThemeCtx = {
  isDark: boolean;
  color: IThemeColors;
  setDark: (value: boolean) => any;
  setColor: (value: IThemeColors) => any;
};

// @ts-ignore
const ThemeCtx = createContext<IUseThemeCtx>(null);

const localTheme = getLocalTheme();

export const ThemeProvider = (props: PropsWithChildren) => {
  const [isDark, setDark] = useState(localTheme.mode === 'dark');
  const [color, setColor] = useState(localTheme.color);

  useEffect(() => {
    saveLocalTheme(isDark ? 'dark' : 'light', color);
  }, [isDark, color]);

  const context: IUseThemeCtx = {
    isDark,
    color,
    setDark,
    setColor,
  };

  const value = useMemo(() => context, [isDark, color]);

  return <ThemeCtx.Provider value={value}>{props.children}</ThemeCtx.Provider>;
};

export default () => useContext(ThemeCtx);
