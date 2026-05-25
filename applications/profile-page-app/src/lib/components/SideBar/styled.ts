import styled, { css } from 'styled-components';

import { RoundedBtn } from 'src/lib/common/StyledComponents/Buttons';
import { IStyledProps, animations, cssSize, screenSize } from 'src/styles/utils';

const sidebarSizeOpen = 80;
const sidebarSize = 23;
const topOffset = 4;
const leftOffset = 4;

export const Container = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const SidebarBox = styled.aside<IStyledProps>(
  ({ theme, active, hidden }) => css`
    position: fixed;
    left: ${cssSize(leftOffset)};
    top: ${cssSize(topOffset)};
    z-index: 2;
    height: 97%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${cssSize(8)} 0;
    color: ${theme.colors.text1};
    overflow: hidden;
    text-transform: capitalize;
    background-color: ${theme.colors.bg1};
    box-shadow: ${theme.shadow.sm};
    border-radius: ${theme.radius.lg};
    transition: width 0.15s ease-out;

    a {
      text-decoration: none;
    }

    @media (max-width: ${screenSize.tablet}px) {
      justify-content: flex-start;
      gap: ${cssSize(14)};
      width: ${active ? cssSize(sidebarSizeOpen) : cssSize(sidebarSize)};
      ${!active && `transform: translateX(-${cssSize(sidebarSize + leftOffset)});`};
    }

    @media (min-width: ${screenSize.tablet + 1}px) {
      width: ${cssSize(sidebarSizeOpen)};
      ${hidden && `width: ${cssSize(sidebarSize)};`}

      &:hover {
        width: ${cssSize(sidebarSizeOpen)};
      }

      @media (min-width: ${screenSize.desktopS}px) {
        width: ${cssSize(sidebarSizeOpen)};
      }
    }
  `,
);

export const SidebarItem = styled.div<IStyledProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(6)};
    padding: ${cssSize(4)} ${cssSize(8)};
    min-width: ${cssSize(sidebarSizeOpen)};
    cursor: pointer;

    p {
      ${active === false && `opacity: 0.7;`}
    }

    &:hover {
      background-color: ${!active && theme.colors.bg3};
    }

    .icon {
      position: relative;
      color: ${theme.colors.main};

      &::after {
        content: '';
        position: absolute;
        top: 115%;
        left: 0;
        width: ${active ? cssSize(9) : 0};
        height: ${cssSize(1.3)};
        background-color: ${theme.colors.main};
        transition: width 0.3s;
      }
    }
  `,
);

export const Content = styled.div<IStyledProps>(
  ({ active }) => css`
    width: 100%;
    height: 100%;
    padding-left: ${active
      ? cssSize(sidebarSizeOpen + leftOffset)
      : cssSize(sidebarSize + leftOffset)};
    transition: 0.3s ease-out;
    ${active && `filter: brightness(0.2);`}

    @media (max-width: ${screenSize.tablet}px) {
      padding-left: 0;
      padding-top: ${cssSize(topOffset + 14)};
    }

    @media (min-width: ${screenSize.desktopS}px) {
      padding-left: ${cssSize(80)};
    }
  `,
);

export const MenuBtn = styled(RoundedBtn)(
  ({ theme, active }) => css`
    position: fixed;
    top: ${cssSize(topOffset)};
    left: ${cssSize(leftOffset)};
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
