import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Option = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    min-width: ${cssSize(22)};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${cssSize(2)};
      border: ${theme.border.sm};
      padding: ${cssSize(2)};
    }

    &:hover > div {
      border: ${theme.border.md};
    }

    &[data-active='true'] {
      & > div {
        border-color: ${theme.colors.main};
      }
      & > label b {
        color: ${theme.colors.main};
      }
    }

    label b {
      color: inherit;
      cursor: pointer;
      font-weight: normal;
    }
  `,
);
