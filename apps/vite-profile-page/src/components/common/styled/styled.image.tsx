import styled, { css } from 'styled-components';

import { IStyledProps, cssSize } from 'src/styles/utils';

export const Image = styled.img<IStyledProps>(
  ({ w, h, maxh, maxw }) => css`
    display: block;
    margin: auto;
    width: ${w ?? '100%'};
    height: ${h ?? 'auto'};
    max-height: ${maxh ?? '100%'};
    max-width: ${maxw ?? 'unset'};
    object-fit: cover;
  `,
);

export const ImageContainer = styled.div<IStyledProps>(
  ({ theme, w, h }) => css`
    width: 100%;
    max-height: ${h ?? '100%'};
    max-width: ${w ?? 'unset'};
    box-shadow: ${theme.shadow.md};
    border-radius: ${theme.radius.sm};
    overflow: hidden;
  `,
);

export const Outdoor = styled.div<IStyledProps>(
  ({ theme }) => css`
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.radius.md};
    position: relative;
    background-color: ${theme.colors.bg1};
    padding-top: ${cssSize(70)};
    z-index: 0;
    box-shadow: ${theme.shadow.sm};
    transition: 0.3s;

    &:hover {
      box-shadow: ${theme.shadow.md};
    }
  `,
);

export const OutdoorImage = styled.div<IStyledProps>(
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
    filter: brightness(0.8);
    transition: background-image 1s;
  `,
);

export const OutdoorContent = styled.div<IStyledProps>(
  () => css`
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    background-color: transparent;
    padding: ${cssSize(6)};
    z-index: 1;
  `,
);
