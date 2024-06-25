import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const RoundedBtn = styled.button<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${w ?? cssSize(12)};
    height: ${h ?? cssSize(12)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.shadow.small};

    &:hover {
      box-shadow: ${theme.shadow.medium};
    }
  `,
);

export const MainRoundedBtn = styled(RoundedBtn)(
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
      opacity: 0.6;
    }
  `,
);
