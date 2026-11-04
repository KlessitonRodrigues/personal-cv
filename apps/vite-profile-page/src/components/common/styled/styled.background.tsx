import styled, { css } from 'styled-components';

import { materialColors as mc } from 'src/styles/styles.colors';
import { animations } from 'src/styles/styles.utils';

export const SvgBackground = styled.div<{ isDark: boolean }>(
  ({ theme, isDark }) => css`
    --background-base: ${theme.colors.bg1};
    --background-main: ${theme.colors.main};

    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    will-change: opacity;
    animation: 0.7s ${animations.fadeIn} ease-in-out;
    filter: brightness(${isDark ? 0.5 : 1});

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    rect,
    polygon,
    circle {
      transition: fill 0.4s ease;
    }
  `,
);

export const GradidentBg = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, ${mc.deepOrange['100']}, ${mc.deepOrange['50']});
    background-size: 100% 100%;
    z-index: -1;
  `,
);
