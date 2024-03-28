import styled, { css } from 'styled-components';

import { materialColors as mcolors } from 'src/styles/colors';
import { cssSize } from 'src/styles/utils';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    background-color: ${mcolors.grey['800']};
    color: ${theme.colors.white};
    padding: ${cssSize(2)} ${cssSize(6)};
    font-size: ${theme.fontSize.verySmall};
  `,
);

export const Centered = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(4)};
  `,
);

export const Selector = styled.select(
  ({ theme }) => css`
    background-color: ${theme.colors.bg2};
  `,
);

export const DownloadButton = styled.button(
  ({ theme }) => css`
    background-color: ${theme.colors.bg2};
    color: ${theme.colors.text2};

    &:hover {
      background-color: ${theme.colors.bg4};
    }
  `,
);

export const GitHubButton = styled.a(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${cssSize(1)};
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.label};

    &:hover {
      text-decoration: underline;
    }
  `,
);
