import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

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
    overflow-y: auto;
  `,
);

export const Section = styled.section(
  ({ theme }) => css`
    margin: ${cssSize(4)};
    padding: ${cssSize(4)};
    font-size: ${theme.fontSize.h4};
    color: ${theme.colors.text2};
  `,
);

export const Card = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
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
