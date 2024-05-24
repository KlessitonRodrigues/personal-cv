import { PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';

import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import Text from 'src/lib/base/Text';
import { Column } from 'src/lib/styled/Flex';
import { urls } from 'src/utils/constants/urls';
import { lang, toggleLang } from 'src/utils/i18n';
import { currentColor, currentTheme, toggleColor, toggleTheme } from 'src/utils/theme';

import { Container, Content, MenuBtn, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const path = location.pathname;

  return (
    <Container>
      <SidebarBox active={open}>
        <Column top left gap={8}>
          <Link to="/">
            <SidebarItem active={path === '/'}>
              <Icons type="website" size={8} />
              <Text tag="p" path="sidebar_link_profile" />
            </SidebarItem>
          </Link>
          <Link to="/resume">
            <SidebarItem active={path === '/resume'}>
              <Icons type="textDocument" size={8} />
              <Text tag="p" path="sidebar_link_cv" />
            </SidebarItem>
          </Link>
        </Column>

        <Column bottom left gap={8}>
          <SidebarItem onClick={() => toggleLang()} top>
            <strong>{lang}</strong>
            <Text tag="p" path={lang} />
          </SidebarItem>
          <SidebarItem onClick={toggleTheme}>
            <If
              check={currentTheme === 'light'}
              true={
                <>
                  <Icons type="sun" size={8} />
                  <Text tag="p" path="sidebar_theme_light" />
                </>
              }
              false={
                <>
                  <Icons type="moon" size={8} />
                  <Text tag="p" path="sidebar_theme_dark" />
                </>
              }
            />
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

      <Content active={open}>
        <MenuBtn active={open} onClick={() => setOpen(!open)}>
          <If check={!open}>
            <Icons size={11} type="menu" />
          </If>
          <If check={open}>
            <Icons size={11} type="close" />
          </If>
        </MenuBtn>
        {props.children}
      </Content>
    </Container>
  );
};

export default SideBar;
