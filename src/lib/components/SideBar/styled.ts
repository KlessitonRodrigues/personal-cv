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
    left: ${cssSize(2)};
    top: ${cssSize(1)};
    z-index: 2;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${active ? cssSize(sidebarSizeOpen) : cssSize(sidebarSize)};
    padding: ${cssSize(6)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    box-shadow: ${theme.shadow.large};
    border-radius: ${theme.radius.large};
    transition: 0.3s ease-out;
    overflow: hidden;

    &:hover {
      width: ${cssSize(sidebarSizeOpen)};
    }
  `,
);

export const SidebarItem = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(6)};
    cursor: pointer;
    min-width: ${cssSize(sidebarSizeOpen)};

    &:hover {
      opacity: 0.7;
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
