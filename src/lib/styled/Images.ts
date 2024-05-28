import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Image = styled.img<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: block;
    margin: auto;
    width: 100%;
    padding: ${cssSize(1)};
    max-height: ${h ?? '100%'};
    max-width: ${w ?? 'auto'};
    border-radius: ${theme.border.medium};
    overflow: hidden;
  `,
);

export const Outdoor = styled.div<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.radius.medium};
    position: relative;
    background-color: ${theme.colors.bg1};
    padding-top: ${cssSize(70)};
    z-index: 0;
    box-shadow: ${theme.shadow.small};
    transition: 0.3s;

    &:hover {
      box-shadow: ${theme.shadow.medium};
    }
  `,
);

export const OutdoorImage = styled.div<Props.CssProps>(
  ({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: ${cssSize(120)};
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.75);
  `,
);

export const OutdoorContent = styled.div<Props.CssProps>(
  () => css`
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    background-color: transparent;
    padding: ${cssSize(6)};
    z-index: 1;
  `,
);
