import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const SelectBox = styled.label(
  ({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${cssSize(2)};
    padding: 0 ${cssSize(2)};
    font-size: ${theme.fontSize.label};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    border-radius: ${theme.radius.sm};
    box-shadow: ${theme.shadow.md};

    &:hover {
      background-color: ${theme.colors.bg2};
    }
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    width: 100%;
    border: 0;
    outline: 0;
    appearance: none;
    background: transparent;
    padding: ${cssSize(3)} ${cssSize(2)};
    color: ${theme.colors.text2};
    font-size: ${theme.fontSize.sm};
    font-weight: 600;
    cursor: pointer;

    &::-webkit-scrollbar {
      width: ${cssSize(2)};
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
    font-family: inherit;
    font-weight: bold;
  `,
);

export const SelectTrigger = styled.button(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${cssSize(2)};
    padding: ${cssSize(3)} ${cssSize(2)};
    color: ${theme.colors.text2};
    font-size: ${theme.fontSize.sm};
    font-weight: 600;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  `,
);

export const SelectItemsList = styled.ul<{ open: boolean }>(
  ({ theme, open }) => css`
    position: absolute;
    top: calc(100% + ${cssSize(1)});
    left: 0;
    width: 100%;
    max-height: ${cssSize(48)};
    margin: 0;
    padding: ${cssSize(1)};
    list-style: none;
    overflow: auto;
    border-radius: ${theme.radius.sm};
    box-shadow: ${theme.shadow.md};
    background-color: ${theme.colors.bg1};
    z-index: 2;
    display: ${open ? 'block' : 'none'};
  `,
);

export const SelectListItem = styled.li<{ active?: boolean }>(
  ({ theme, active }) => css`
    padding: ${cssSize(2)} ${cssSize(3)};
    border-radius: ${theme.radius.sm};
    color: ${active ? theme.colors.main : theme.colors.text1};
    background-color: ${active ? `${theme.colors.main}22` : 'transparent'};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.bg3};
    }
  `,
);
