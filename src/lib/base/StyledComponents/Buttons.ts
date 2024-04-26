import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const RoundedBtn = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(12)};
    height: ${cssSize(12)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.shadow.small};

    &:hover {
      box-shadow: ${theme.shadow.medium};
    }
  `,
);
