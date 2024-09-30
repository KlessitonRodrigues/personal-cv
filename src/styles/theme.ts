import { currenMainColor } from 'src/utils/theme';

import { antColors as ac, materialColors as mcolors } from './colors';
import { cssSize } from './utils';

export const defaultTheme: Styles.Theme = {
  colors: {
    ...currenMainColor,
    mainText: mcolors.grey['50'],
    bg1: ac.gray['100'],
    bg2: ac.gray['200'],
    bg3: ac.gray['300'],
    bg4: ac.gray['500'],
    text1: ac.gray['900'],
    text2: ac.gray['800'],
    text3: ac.gray['700'],
    text4: ac.gray['600'],
    gray: mcolors.grey['500'],
    yellow: ac.gold['600'],
    red: ac.red['800'],
    blue: ac.blue['500'],
    green: mcolors.lightGreen['800'],
    white: mcolors.grey['50'],
    black: mcolors.black,
  },
  fontSize: {
    h1: '1.5rem',
    h2: '1.35rem',
    h3: '1.25rem',
    h4: '1.15rem',
    h5: '1.1rem',
    h6: '1rem',
    md: '1rem',
    sm: '0.95rem',
    xs: '0.9rem',
    label: '0.8rem',
  },
  shadow: {
    lg: '0 1px 7px 0 #0007',
    md: '0 1px 5px 0 #0005',
    sm: '0 1px 3px 0 #0003',
  },
  border: {
    lg: `solid 1px ${ac.gray['800']}`,
    md: `solid 1px ${ac.gray['600']}`,
    sm: `solid 1px ${ac.gray['500']}`,
  },
  radius: {
    full: '50%',
    lg: cssSize(5),
    md: cssSize(4),
    sm: cssSize(3),
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: ac.gray['1300'],
    bg2: ac.gray['1200'],
    bg3: ac.gray['1100'],
    bg4: ac.gray['900'],
    text1: ac.gray['500'],
    text2: ac.gray['600'],
    text3: ac.gray['700'],
    text4: ac.gray['800'],
    gray: ac.gray['600'],
    white: ac.gray['300'],
  },
  border: {
    lg: `solid 1px ${ac.gray['800']}`,
    md: `solid 1px ${ac.gray['900']}`,
    sm: `solid 1px ${ac.gray['900']}`,
  },
};
