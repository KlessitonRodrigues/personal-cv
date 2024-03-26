import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Container = styled.div(
  () => css`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${cssSize(15)};
  `,
);

export const Scroll = styled.div(
  () => css`
    height: 100%;
    overflow-y: auto;
  `,
);

export const Content = styled.div(
  ({ theme }) => css`
    margin: 0 ${cssSize(2)};
    max-width: ${cssSize(300)};
    border-radius: ${theme.radius.small};
    background-color: ${theme.colors.white};
  `,
);
