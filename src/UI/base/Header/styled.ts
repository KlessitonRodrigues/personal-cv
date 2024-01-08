import styled, { css } from 'styled-components';
import { materialColors as mcolors } from 'src/styles/lib/palettes';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.size(4)};
    background-color: ${mcolors.grey['800']};
    color: ${theme.colors.white};
    padding: ${theme.size(2)};
    font-size: ${theme.fontSize.verySmall};
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
