import styled, { css } from 'styled-components';

export const Container = styled.span<{ size?: number }>(
  ({ theme, size }) => css`
    display: inline-flex;
    font-size: ${theme.size(size || 6)};
    cursor: pointer;
  `,
);
