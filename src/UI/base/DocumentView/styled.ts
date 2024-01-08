import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${theme.size(15)};
  `
);

export const Scroll = styled.div(
  () => css`
    height: 100%;
    overflow-y: auto;
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    margin: 0 ${theme.size(2)};
    max-width: ${theme.size(300)};
    border-radius: ${theme.radius.small};
    background-color: ${theme.colors.white};
  `
);
