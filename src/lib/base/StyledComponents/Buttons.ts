import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const RoundedBtn = styled.button<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(w || 10)};
    height: ${cssSize(h || 10)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.sm};
    box-shadow: ${theme.shadow.sm};
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.6;
    }
  `,
);

export const RoundedBtnMain = styled(RoundedBtn)(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
  `,
);

export const OutlineBtn = styled.div<Props.CssProps>(
  ({ theme, w }) => css`
    width: ${w ?? 'fit-content'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(2)};
    color: ${theme.colors.text1};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.main};
    }
  `,
);

export const OutlineBtnTransparent = styled(RoundedBtn)(
  ({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.mainText};
    border: 1px solid ${theme.colors.gray};
  `,
);
