import { keyframes } from 'styled-components';

import { materialColors as mc } from './styles.colors';

export type IStyledProps = {
  active?: boolean;
  size?: number;
  gap?: number;
  w?: string | number;
  h?: string | number;
  maxw?: string;
  maxh?: string;
  p?: string;
  m?: string;
  mb?: number;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  wrap?: boolean;
  rows?: number;
  cols?: number;
  responsive?: boolean | 'reverse-left';
  reverse?: boolean;
  half?: boolean;
  src?: string;
  hidden?: boolean;
  full?: boolean;
  fit?: boolean;
  between?: boolean;
};

export const cssSize = (size: number | string) => {
  if (typeof size == 'string') return size;
  return `${(size * 0.2).toFixed(1)}rem`;
};

export const screenSize = {
  mobileS: 320,
  mobileM: 425,
  mobileL: 480,
  tablet: 768,
  laptopS: 900,
  laptopM: 1024,
  laptopL: 1180,
  desktopS: 1440,
  desktopM: 1980,
  desktopL: 2560,
};

export const animations = {
  fadeUp: keyframes`
    from { transform: translateY(3rem); opacity: 0; } 
    to { opacity: 1 }`,
  fadeLeft: keyframes`
    from { transform: translateX(3rem); opacity: 0; }
    50% { opacity: 0.4; } 
    to { opacity: 1 }`,
  slideUp: keyframes`
    from { transform: translateY(12rem); opacity: 0.4; } 
    to { opacity: 1; }`,
  fadeIn: keyframes`
    from { opacity: 0; } 
    to { opacity: 1; }`,
  spinning: keyframes`
    to { transform: rotateZ(360deg); }`,
  halfSpinning: keyframes`
    to { transform: rotateZ(180deg); }`,
  fullWidth: keyframes`
    from { width: 0; }
    to { width: 100%; }`,
  progress: keyframes`
    0% { width: 0; }
    5% { width: 5%; }
    10% { width: 10%; }
    20% { width: 15%; }
    50% { width: 20%; }
    75% { width: 40%; }
    100% { width: 90%; }
  `,
};

export const gradients = {
  black: `linear-gradient(180deg, ${mc.grey['600']}, ${mc.grey['700']})`,
  white: `linear-gradient(180deg, ${mc.grey['200']}, ${mc.grey['300']})`,
  blue: `linear-gradient(180deg, ${mc.blue['500']}, ${mc.blue['600']})`,
  darkBlue: `linear-gradient(180deg, ${mc.blue['700']}, ${mc.blue['800']})`,
  purple: `linear-gradient(180deg, ${mc.purple['400']}, ${mc.purple['500']})`,
  darkPurple: `linear-gradient(180deg, ${mc.purple['600']}, ${mc.purple['700']})`,
  blueAndGreen: `linear-gradient(90deg, ${mc.blue['500']}, ${mc.green['500']})`,
};

export const hexToHsl = (hex: string) => {
  const cleaned = hex.replace('#', '');
  const isShort = cleaned.length === 3;

  let r = parseInt(isShort ? cleaned[0] + cleaned[0] : cleaned.substring(0, 2), 16);
  let g = parseInt(isShort ? cleaned[1] + cleaned[1] : cleaned.substring(2, 4), 16);
  let b = parseInt(isShort ? cleaned[2] + cleaned[2] : cleaned.substring(4, 6), 16);

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;

  let h = 0;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

  if (d !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / d) % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  return { h, s, l };
};
