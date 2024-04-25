import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Page = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const PageContent = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: ${screenSize.laptopM}px;
  `,
);

export const Section = styled.section(
  ({ theme }) => css`
    margin: ${cssSize(4)} ${cssSize(2)};
    font-size: ${theme.fontSize.h4};
    color: ${theme.colors.text2};
  `,
);

export const Card = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(6)};
    padding: ${cssSize(8)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.small};
    transition: 0.3s;

    &:hover {
      box-shadow: ${theme.shadow.medium};
    }
  `,
);

export const Box = styled.div<Props.CssProps>(
  ({ theme, w }) => css`
    width: ${w ?? '100%'};
    display: flex;
    flex-direction: column;
    gap: ${cssSize(2)};
    padding: ${cssSize(4)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};
  `,
);
