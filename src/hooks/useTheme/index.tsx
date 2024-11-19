import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

// @ts-ignore
const ThemeCtx = createContext<Hooks.UseThemeCtx>(null);

export const ThemeProvider = (props: PropsWithChildren) => {
  const [isDark, setDark] = useState(false);
  const [color, setColor] = useState<Hooks.ThemeColors>('indigo');

  const toggleColor = () => {
    const colors: Hooks.ThemeColors[] = ['indigo', 'blue', 'purple', 'magenta', 'green'];
    setColor(colors[colors.indexOf(color) + 1] || 'indigo');
  };

  const context: Hooks.UseThemeCtx = {
    isDark,
    color,
    setDark,
    setColor,
    toggleColor,
  };

  const value = useMemo(() => context, [isDark, color]);

  return <ThemeCtx.Provider value={value}>{props.children}</ThemeCtx.Provider>;
};

export default () => useContext(ThemeCtx);
