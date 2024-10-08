import { PropsWithChildren, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { urls } from 'src/constants/urls';
import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';
import { lang, toggleLang } from 'src/utils/i18n';
import { currentColor, currentTheme, toggleColor, toggleTheme } from 'src/utils/theme';

import { Container, Content, MenuBtn, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const closeSidebar = () => setOpen(false);

  return (
    <Container>
      <SidebarBox active={open}>
        <Column top left gap={0}>
          <Link to="/" onClick={closeSidebar}>
            <SidebarItem active={path === '/'}>
              <Icons type="website" size={8} />
              <Text tag="p" path="sidebar_link_profile" />
            </SidebarItem>
          </Link>
          <Link to="/resume" onClick={closeSidebar}>
            <SidebarItem active={path === '/resume'}>
              <Icons type="textDocument" size={8} />
              <Text tag="p" path="sidebar_link_cv" />
            </SidebarItem>
          </Link>
          <Link to="/certification" onClick={closeSidebar}>
            <SidebarItem active={path === '/certification'}>
              <Icons type="certificates" size={8} />
              <Text tag="p" path="sidebar_link_ct" />
            </SidebarItem>
          </Link>
          <Link to="/projects" onClick={closeSidebar}>
            <SidebarItem active={path === '/projects'}>
              <Icons type="projects" size={8} />
              <Text tag="p" path="sidebar_link_projects" />
            </SidebarItem>
          </Link>
        </Column>

        <Column bottom left gap={0}>
          <SidebarItem onClick={() => toggleLang()} top>
            <strong>{lang}</strong>
            <Text tag="p" path={lang} />
          </SidebarItem>
          <SidebarItem onClick={toggleTheme}>
            <If check={currentTheme === 'light'}>
              <Icons type="sun" size={8} />
              <Text tag="p" path="sidebar_theme_light" />
            </If>
            <If check={currentTheme === 'dark'}>
              <Icons type="moon" size={8} />
              <Text tag="p" path="sidebar_theme_dark" />
            </If>
          </SidebarItem>
          <SidebarItem onClick={toggleColor}>
            <Icons type="theme" size={8} />
            <p>{currentColor}</p>
          </SidebarItem>
          <a href={urls.personalPageRep} target="_blank">
            <SidebarItem>
              <Icons type="github" size={8} />
              <p>Github</p>
            </SidebarItem>
          </a>
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
