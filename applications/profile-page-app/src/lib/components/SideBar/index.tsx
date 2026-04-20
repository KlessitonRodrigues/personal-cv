import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icons from 'src/lib/common/Icons';
import If from 'src/lib/common/If';
import { Column } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';

import { Container, Content, MenuBtn, SidebarBox, SidebarItem } from './styled';

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
          <Link to="/code" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/code'}>
              <Icons type="codeBlock" size={9} />
              <Text tag="p" path="sidebar_link_code" />
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
