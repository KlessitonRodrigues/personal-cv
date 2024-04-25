import { atlassianColors as acolors, materialColors as mcolors } from './colors';
import { cssSize } from './utils';

export const defaultTheme: Styles.Theme = {
  colors: {
    main: mcolors.blue['700'],
    mainBg: mcolors.blue['800'],
    mainText: mcolors.grey['200'],
    bg1: mcolors.grey['50'],
    bg2: mcolors.grey['100'],
    bg3: mcolors.grey['200'],
    bg4: mcolors.grey['300'],
    text1: mcolors.grey['800'],
    text2: mcolors.grey['700'],
    text3: mcolors.grey['600'],
    text4: mcolors.grey['400'],
    gray: mcolors.grey['500'],
    yellow: acolors.yellow['600'],
    red: acolors.red['800'],
    blue: acolors.blue['500'],
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
    body: '1rem',
    small: '0.95rem',
    verySmall: '0.9rem',
    label: '0.8rem',
  },
  shadow: {
    large: '0 1px 7px 0 #0007',
    medium: '0 1px 5px 0 #0005',
    small: '0 1px 3px 0 #0003',
  },
  border: {
    large: `solid 1px ${mcolors.grey['800']}`,
    medium: `solid 1px ${mcolors.grey['600']}`,
    small: `solid 1px ${mcolors.grey['400']}`,
  },
  radius: {
    full: '50%',
    large: cssSize(5),
    medium: cssSize(4),
    small: cssSize(3),
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: mcolors.grey['900'],
    bg2: mcolors.grey['800'],
    bg3: mcolors.grey['700'],
    bg4: mcolors.grey['600'],
    text1: mcolors.grey['300'],
    text2: mcolors.grey['400'],
    text3: mcolors.grey['500'],
    text4: mcolors.grey['600'],
    gray: mcolors.grey['600'],
    white: mcolors.grey['300'],
  },
};
