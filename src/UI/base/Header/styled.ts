import styled, { css } from 'styled-components';
import { materialColors as mcolors } from 'src/styles/lib/palettes';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    background-color: ${mcolors.grey['800']};
    color: ${theme.colors.white};
    padding: ${theme.size(2)} ${theme.size(6)};
    font-size: ${theme.fontSize.verySmall};
  `,
);

export const Centered = styled.button(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.size(4)};
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
  `,
);

export const GitHubButton = styled.a(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${theme.size(1)};
    color: ${theme.colors.bg2};

    &:hover {
      text-decoration: underline;
    }
  `,
);
