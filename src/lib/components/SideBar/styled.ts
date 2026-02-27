import styled, { css } from 'styled-components';

import { RoundedBtn } from 'src/lib/common/StyledComponents/Buttons';
import { IStyledProps, animations, cssSize, screenSize } from 'src/styles/utils';

const sidebarSizeOpen = 90;
const sidebarSize = 23;
const topOffset = 2;
const leftOffset = 2;

export const Container = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const SidebarBox = styled.aside<IStyledProps>(
  ({ theme, active, hidden }) => css`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${cssSize(16)} 0;
    color: ${theme.colors.mainText};
    overflow: hidden;
    text-transform: capitalize;
    background-color: ${theme.colors.mainBg};
    transition: all 0.1s ease-out;

    a {
      text-decoration: none;
    }

    @media (max-width: ${screenSize.tablet}px) {
      justify-content: flex-start;
      gap: ${cssSize(14)};
      top: 0;
      width: ${active ? cssSize(sidebarSizeOpen) : cssSize(sidebarSize)};
      ${!active && 'transform: translateX(-5rem);'};
    }

    @media (min-width: ${screenSize.tablet}px) {
      width: ${cssSize(sidebarSizeOpen)};
      ${hidden && `width: ${cssSize(sidebarSize)};`}
      &:hover {
        width: ${cssSize(sidebarSizeOpen)};
      }
    }
  `,
);

export const SidebarItem = styled.div<IStyledProps>(
  ({ theme, active, top }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(6)};
    padding: ${cssSize(4)} ${cssSize(8)};
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
        width: ${active ? cssSize(9) : 0};
        height: ${cssSize(1.3)};
        background-color: ${theme.colors.mainText};
        transition: width 0.3s;
      }
    }
  `,
);

export const Content = styled.div<IStyledProps>(
  ({ active }) => css`
    width: 100%;
    height: 100%;
    padding-left: ${active ? cssSize(sidebarSizeOpen + 2) : cssSize(sidebarSize + 2)};
    transition: 0.3s ease-out;
    ${active && `filter: brightness(0.4);`}

    @media (max-width: ${screenSize.tablet}px) {
      padding-left: 0;
      padding-top: ${cssSize(topOffset + 14)};
    }
  `,
);

export const MenuBtn = styled(RoundedBtn)(
  ({ theme, active }) => css`
    position: fixed;
    top: ${cssSize(topOffset)};
    left: ${cssSize(2)};
    z-index: 2;
    display: none;
    width: ${cssSize(16)};
    height: ${cssSize(16)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    transition: 0.3s ease-out;
    box-shadow: ${theme.shadow.md};
    ${active && `margin-left: ${cssSize(sidebarSizeOpen + leftOffset)};`}

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
