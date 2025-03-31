import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { urls } from 'src/constants/urls';
import useTheme from 'src/hooks/useTheme';
import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import LineSelector from 'src/lib/base/Selectors/LineSelector';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';
import { changeLanguage, getText, lang } from 'src/utils/i18n';

import { Container, Content, MenuBtn, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [hidable, setHidable] = useState(false);
  const themeCtx = useTheme();
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
              <Icons type="website" size={8} />
              <Text tag="p" path="sidebar_link_profile" />
            </SidebarItem>
          </Link>
          <Link to="/resume" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/resume'}>
              <Icons type="textDocument" size={8} />
              <Text tag="p" path="sidebar_link_cv" />
            </SidebarItem>
          </Link>
          <Link to="/certification" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/certification'}>
              <Icons type="certificates" size={8} />
              <Text tag="p" path="sidebar_link_ct" />
            </SidebarItem>
          </Link>
          <Link to="/projects" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/projects'}>
              <Icons type="projects" size={8} />
              <Text tag="p" path="sidebar_link_projects" />
            </SidebarItem>
          </Link>
        </Column>

        <Column bottom left gap={0}>
          <SidebarItem>
            <strong>{lang?.toUpperCase()}</strong>
            <LineSelector
              value={lang}
              onChange={item => changeLanguage(item.value)}
              items={[
                { value: 'PT', label: 'Português' },
                { value: 'EN', label: 'English' },
              ]}
            />
          </SidebarItem>
          <SidebarItem>
            <If
              check={themeCtx.isDark}
              true={<Icons type="moon" size={8} />}
              false={<Icons type="sun" size={8} />}
            />
            <LineSelector
              value={themeCtx.isDark ? '1' : '0'}
              onChange={item => themeCtx.setDark(!!Number(item.value))}
              items={[
                { value: '0', label: getText('sidebar_theme_light') },
                { value: '1', label: getText('sidebar_theme_dark') },
              ]}
            />
          </SidebarItem>
          <SidebarItem>
            <Icons type="theme" size={8} />
            <LineSelector
              value={themeCtx.color}
              onChange={item => themeCtx.setColor(item.value as Hooks.ThemeColors)}
              items={[
                { value: 'indigo', label: themeCtx.color },
                { value: 'blue', label: themeCtx.color },
                { value: 'purple', label: themeCtx.color },
                { value: 'magenta', label: themeCtx.color },
                { value: 'green', label: themeCtx.color },
              ]}
            />
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
