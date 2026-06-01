import styled, { css } from 'styled-components';

import { RoundedBtn } from 'src/lib/common/StyledComponents/Buttons';
import { IStyledProps, animations, cssSize, screenSize } from 'src/styles/utils';

const sidebarSizeOpen = 90;
const sidebarSize = 24;
const topOffset = 4;
const leftOffset = 2;
const contentSize = screenSize.desktopS;

export const Container = styled.div(
  () => css`
    position: relative;
    width: ${contentSize}px;
    height: 100%;
    margin: 0 auto;
    padding: 0 ${cssSize(12)};
    display: flex;

    @media (max-width: ${contentSize}px) {
      width: 100%;
      padding: 0;
    }
  `,
);

export const SidebarBox = styled.aside<IStyledProps>(
  ({ theme, active, hidden }) => css`
    position: fixed;
    top: 0;
    left: auto;
    z-index: 1;
    margin-top: ${cssSize(topOffset)};
    height: 97.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${cssSize(2)} 0;
    color: ${theme.colors.text1};
    overflow: hidden;
    text-transform: capitalize;
    background-color: ${theme.colors.bg1};
    box-shadow: ${theme.shadow.sm};
    border-radius: ${theme.radius.md};
    transition:
      width 0.15s ease-in-out,
      transform 0.3s ease-in-out;

    a {
      text-decoration: none;
    }

    &:hover {
      box-shadow: ${theme.shadow.lg};
    }

    @media (max-width: ${contentSize}px) {
      justify-content: flex-start;
      gap: ${cssSize(14)};
      width: ${active ? cssSize(sidebarSizeOpen) : cssSize(sidebarSize)};
      ${!active && `transform: translateX(-${cssSize(sidebarSize + leftOffset)});`};
    }

    @media (min-width: ${contentSize + 1}px) {
      width: ${cssSize(sidebarSizeOpen)};
      ${hidden && `width: ${cssSize(sidebarSize)};`}

      &:hover {
        width: ${cssSize(sidebarSizeOpen)};
      }
    }
  `,
);

export const SidebarItem = styled.div<IStyledProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(8)};
    padding: ${cssSize(5)} ${cssSize(8)};
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
    ${active && `margin-left: ${cssSize(sidebarSizeOpen)};`}

    .icon-menu {
      animation: 0.5s ${animations.halfSpinning} ease-out reverse;
    }

    .icon-close {
      animation: 0.5s ${animations.halfSpinning} ease-out;
    }

    @media (max-width: ${contentSize}px) {
      display: flex;
    }
  `,
);

export const Content = styled.div<IStyledProps>(
  ({ active }) => css`
    width: 100%;
    height: 100%;
    transition: 0.3s ease-out;
    ${active && `filter: brightness(0.2);`}

    @media (max-width: ${contentSize}px) {
      padding-left: 0;
      padding-top: ${cssSize(topOffset + 14)};
    }
  `,
);
