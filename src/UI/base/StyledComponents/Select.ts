import styled, { css } from 'styled-components';

export const SelectBox = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${theme.size(1)};
    font-size: ${theme.fontSize.label};
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text1};
    border-radius: ${theme.radius.verySmall};
    box-shadow: ${theme.shadow.medium};
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.small};
    padding-top: ${theme.size(0.5)};
    font-weight: 600;

    &::-webkit-scrollbar {
      width: ${theme.size(2)};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.bg1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.white};
    }
  `,
);

export const SelectTitle = styled.div(
  () => css`
    min-width: max-content;
  `,
);

export const SelectItem = styled.option(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    font-family: sans-serif;
    font-weight: bold;
  `,
);
