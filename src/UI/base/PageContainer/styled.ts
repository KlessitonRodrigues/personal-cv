import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.size(4)};
    background-color: ${theme.colors.bg4};
  `,
);
