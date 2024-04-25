import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

const sidebarSizeOpen = 70;
const sidebarSize = 20;

export const Container = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const SidebarBox = styled.aside<Props.CssProps>(
  ({ theme, active }) => css`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${active ? cssSize(sidebarSizeOpen) : cssSize(sidebarSize)};
    padding: ${cssSize(5)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.gray};
    box-shadow: ${theme.shadow.large};
    transition: 0.3s ease-out;
    overflow: hidden;

    &:hover {
      width: ${cssSize(sidebarSizeOpen)};
    }
  `,
);

export const SidebarItem = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(5)};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.mainText};
    }
  `,
);

export const Content = styled.div<Props.CssProps>(
  ({ active }) => css`
    width: 100%;
    height: 100%;
    padding-left: ${active ? cssSize(sidebarSizeOpen + 4) : cssSize(sidebarSize)};
    transition: 0.3s ease-out;
  `,
);
