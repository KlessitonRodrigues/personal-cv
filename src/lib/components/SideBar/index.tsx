import { PropsWithChildren, useState } from 'react';

import Icons from 'src/lib/base/Icons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { changeLanguage, lang } from 'src/utils/i18n';

import { Container, Content, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <SidebarBox active={open} onClick={() => setOpen(!open)}>
        <Column top left>
          <SidebarItem>
            <Icons type="user" size={8} />
            <p>Personal Page</p>
          </SidebarItem>
        </Column>

        <Column left gap={8}>
          <SidebarItem>
            <Icons type="image" size={8} />
            <p>Portifolio</p>
          </SidebarItem>
          <SidebarItem>
            <Icons type="textDocument" size={8} />
            <p>Curriculo</p>
          </SidebarItem>
        </Column>

        <Column bottom left gap={8}>
          <SidebarItem onClick={() => changeLanguage('en')}>
            <Icons type="language" size={8} />
            <p>{lang.toLocaleUpperCase()}</p>
          </SidebarItem>
          <SidebarItem>
            <Icons type="theme" size={8} />
            <p>Theme</p>
          </SidebarItem>
          <SidebarItem>
            <Icons type="github" size={8} />
            <p>Github</p>
          </SidebarItem>
        </Column>
      </SidebarBox>

      <Content active={open}>{props.children}</Content>
    </Container>
  );
};

export default SideBar;
