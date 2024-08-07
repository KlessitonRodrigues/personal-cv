import styled, { css } from 'styled-components';

import { RoundedBtn } from 'src/lib/base/StyledComponents/Buttons';
import { animations, cssSize, screenSize } from 'src/styles/utils';

const sidebarSizeOpen = 80;
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
    padding: ${cssSize(5)} 0;
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    box-shadow: ${theme.shadow.large};
    border-radius: ${theme.radius.large};
    transition: 0.3s ease-out;
    overflow: hidden;
    text-transform: capitalize;

    &:hover {
      width: ${cssSize(sidebarSizeOpen)};
    }

    a {
      text-decoration: none;
    }

    @media (max-width: ${screenSize.tablet}px) {
      justify-content: flex-start;
      gap: ${cssSize(18)};
      ${!active && 'transform: translateX(-5rem);'}
    }
  `,
);

export const SidebarItem = styled.div<Props.CssProps>(
  ({ theme, active, top }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(6)};
    padding: ${cssSize(4)} ${cssSize(6)};
    min-width: ${cssSize(sidebarSizeOpen)};
    cursor: pointer;
    ${active === false && `opacity: 0.7;`}

    &:hover {
      opacity: ${!active && 0.8};
    }

    strong {
      padding: ${cssSize(0.8)};
      ${top && `text-transform: uppercase;`}
    }

    .icon {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 115%;
        left: 0;
        width: ${active ? cssSize(8) : 0};
        height: ${cssSize(1.3)};
        background-color: ${theme.colors.mainText};
        transition: width 0.3s;
      }
    }
  `,
);

export const Content = styled.div<Props.CssProps>(
  ({ active }) => css`
    width: 100%;
    height: 100%;
    padding-left: ${active ? cssSize(sidebarSizeOpen + 2) : cssSize(sidebarSize + 2)};
    transition: 0.3s ease-out;

    @media (max-width: ${screenSize.tablet}px) {
      padding-left: 0;
      padding-top: ${cssSize(16)};
    }
  `,
);

export const MenuBtn = styled(RoundedBtn)(
  ({ theme, active }) => css`
    position: fixed;
    top: ${cssSize(2)};
    left: ${cssSize(4)};
    z-index: 2;
    display: none;
    width: ${cssSize(16)};
    height: ${cssSize(16)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    transition: 0.3s ease-out;
    box-shadow: ${theme.shadow.medium};
    ${active && `margin-left: ${cssSize(sidebarSizeOpen)};`}

    .icon-menu {
      animation: 0.5s ${animations.halfSpinning} ease-out reverse;
    }

    .icon-close {
      animation: 0.5s ${animations.halfSpinning} ease-out;
    }

    @media (max-width: ${screenSize.tablet}px) {
      display: flex;
    }
  `,
);
