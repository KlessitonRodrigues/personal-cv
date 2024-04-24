import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Avatar = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: ${cssSize(30)};
    max-height: ${cssSize(45)};
    padding: ${cssSize(30)} ${cssSize(25)};
    background-color: #000;
    border-radius: ${theme.radius.medium};
  `,
);
