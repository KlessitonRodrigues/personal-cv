import styled, { css } from 'styled-components';

import cyberBgImage from 'src/lib/assets/png/cyber_bg.png';
import { materialColors as mc } from 'src/styles/colors';

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

export const CyberBg = styled.div(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${cyberBgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  `,
);
