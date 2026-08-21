import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { IStyledProps, animations, cssSize, screenSize } from 'src/styles/styles.utils';

import Icons from './common.icons';
import If from './common.if';
import Text from './common.text';
import { RoundedBtn } from './styled/styled.buttons';
import { Column } from './styled/styled.flex';

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
    padding: 0 ${cssSize(14)};
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
    padding: ${cssSize(4)} ${cssSize(2)};
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
    padding: ${cssSize(6)} ${cssSize(6)};
    min-width: ${cssSize(sidebarSizeOpen)};
    cursor: pointer;
    font-weight: bold;
    border-radius: ${theme.radius.md} 0 0 ${theme.radius.md};
    transition: 0.3s ease-out;
    color: ${active ? theme.colors.mainText : theme.colors.text1};
    ${active && `background-color: ${theme.colors.main};`}

    p {
      ${!active && `opacity: 0.7;`}
    }

    &:hover {
      background-color: ${!active && theme.colors.bg4};
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

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [hidable, setHidable] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const closeSidebar = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidable(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <SidebarBox active={open} hidden={hidable}>
        <Column top left gap={0}>
          <Link to="/" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/'}>
              <Icons type="website" size={9} />
              <Text tag="p" path="sidebar_link_profile" />
            </SidebarItem>
          </Link>
          <Link to="/resume" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/resume'}>
              <Icons type="textDocument" size={9} />
              <Text tag="p" path="sidebar_link_cv" />
            </SidebarItem>
          </Link>
          <Link to="/certification" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/certification'}>
              <Icons type="certificates" size={9} />
              <Text tag="p" path="sidebar_link_ct" />
            </SidebarItem>
          </Link>
          <Link to="/projects" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/projects'}>
              <Icons type="projects" size={9} />
              <Text tag="p" path="sidebar_link_projects" />
            </SidebarItem>
          </Link>
          <Link to="/settings" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/settings'}>
              <Icons type="settings" size={9} />
              <Text tag="p" path="sidebar_link_settings" />
            </SidebarItem>
          </Link>
        </Column>
      </SidebarBox>
      <MenuBtn active={open} onClick={() => setOpen(!open)}>
        <If
          check={!open}
          true={<Icons key="0" size={11} type="menu" />}
          false={<Icons key="1" size={11} type="close" />}
        />
      </MenuBtn>
      <Content active={open}>{props.children}</Content>
    </Container>
  );
};

export default SideBar;
