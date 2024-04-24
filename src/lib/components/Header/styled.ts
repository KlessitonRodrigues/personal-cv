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
