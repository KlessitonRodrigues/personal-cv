import { atlassianColors as acolors, materialColors as mcolors } from './colors';
import { cssSize } from './utils';

export const defaultTheme: Styles.Theme = {
  colors: {
    main: mcolors.blue['600'],
    mainBg: mcolors.blue['700'],
    mainText: mcolors.grey['200'],
    bg1: mcolors.grey['50'],
    bg2: mcolors.grey['100'],
    bg3: mcolors.grey['200'],
    bg4: mcolors.grey['300'],
    text1: mcolors.grey['900'],
    text2: mcolors.grey['800'],
    text3: mcolors.grey['700'],
    text4: mcolors.grey['500'],
    gray: mcolors.grey['500'],
    yellow: acolors.yellow['600'],
    red: acolors.red['800'],
    blue: acolors.blue['500'],
    green: mcolors.lightGreen['800'],
    white: mcolors.grey['50'],
    black: mcolors.black,
  },
  fontSize: {
    h1: '1.3rem',
    h2: '1.25rem',
    h3: '1.2rem',
    h4: '1.15rem',
    h5: '1.1rem',
    h6: '1.05rem',
    body: '1rem',
    small: '0.95rem',
    verySmall: '0.9rem',
    label: '0.9rem',
  },
  shadow: {
    large: '1px 1px 4px 0 #000a',
    medium: '1px 1px 4px 0 #0007',
    small: '1px 1px 4px 0 #0004',
  },
  border: {
    large: `solid 1px ${mcolors.grey['300']}`,
    medium: `solid 1px ${mcolors.grey['500']}`,
    small: `solid 2px ${mcolors.grey['500']}`,
  },
  radius: {
    full: '50%',
    large: cssSize(4),
    medium: cssSize(3),
    small: cssSize(2),
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: mcolors.black,
    bg2: mcolors.grey['800'] + '44',
    bg3: mcolors.grey['700'] + '44',
    bg4: mcolors.grey['600'] + '44',
    text1: mcolors.grey['300'],
    text2: mcolors.grey['400'],
    text3: mcolors.grey['500'],
    text4: mcolors.grey['700'],
    gray: mcolors.grey['600'],
    white: mcolors.grey['300'],
  },
};
