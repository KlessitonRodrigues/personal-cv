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
    padding: ${cssSize(10)} ${cssSize(6)};
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
      ${!active && 'transform: translateX(-10rem);'}
      height: 99%;
    }
  `,
);

export const SidebarItem = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(6)};
    cursor: pointer;
    min-width: ${cssSize(sidebarSizeOpen)};
    ${active === false && `opacity: 0.6;`}
    &:hover {
      opacity: 0.8;
    }

    .icon {
      ${active &&
      css`
        padding-bottom: 4px;
        border-bottom: 4px solid ${theme.colors.mainText};
      `}
    }
  `,
);

export const Content = styled.div<Props.CssProps>(
  ({ active }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: ${active ? cssSize(sidebarSizeOpen + 4) : cssSize(sidebarSize)};
    transition: 0.3s ease-out;

    @media (max-width: ${screenSize.tablet}px) {
      padding-left: 0;
      padding-top: ${cssSize(16)};
    }
  `,
);

export const MenuBtn = styled(RoundedBtn)(
  ({ theme, active, reverse }) => css`
    position: fixed;
    top: ${cssSize(1)};
    left: ${cssSize(4)};
    z-index: 2;
    display: none;
    width: ${cssSize(16)};
    height: ${cssSize(16)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    ${active && `margin-left: ${cssSize(sidebarSizeOpen + 4)};`}
    transition: 0.3s ease-out;
    box-shadow: ${theme.shadow.medium};

    .icon {
      animation: 0.3s ${animations.spinningFadeIn} linear reverse;
      ${reverse && 'animation-direction: reverse;'}
    }

    @media (max-width: ${screenSize.tablet}px) {
      display: flex;
    }
  `,
);
