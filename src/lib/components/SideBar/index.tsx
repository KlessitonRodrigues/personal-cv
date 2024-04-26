import { PropsWithChildren, useState } from 'react';

import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';
import { urls } from 'src/utils/constants/urls';
import { lang, toggleLang } from 'src/utils/i18n';
import { currentColor, currentTheme, toggleColor, toggleTheme } from 'src/utils/theme';

import { Container, Content, MenuBtn, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <SidebarBox active={open}>
        <Column top left gap={8}>
          <SidebarItem active={false} title="In progress">
            <Icons type="website" size={8} />
            <Text tag="p" path="sidebar_link_profile" />
          </SidebarItem>
          <SidebarItem active>
            <Icons type="textDocument" size={8} />
            <Text tag="p" path="sidebar_link_cv" />
          </SidebarItem>
        </Column>

        <Column bottom left gap={8}>
          <SidebarItem onClick={toggleLang}>
            <Icons type="language" size={8} />
            <p>{lang}</p>
          </SidebarItem>
          <SidebarItem onClick={toggleTheme}>
            <If check={currentTheme === 'light'}>
              <Icons type="sun" size={8} />
            </If>
            <If check={currentTheme === 'dark'}>
              <Icons type="moon" size={8} />
            </If>
            <p>{currentTheme}</p>
          </SidebarItem>
          <SidebarItem onClick={toggleColor}>
            <Icons type="theme" size={8} />
            <p>{currentColor}</p>
          </SidebarItem>
          <a href={urls.personalPage} target="_blank">
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
