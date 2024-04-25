import { PropsWithChildren, useState } from 'react';

import Icons from 'src/lib/base/Icons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { lang, toggleLang } from 'src/utils/i18n';
import { currentColor, currentTheme, toggleColor, toggleTheme } from 'src/utils/theme';

import { Container, Content, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <SidebarBox active={open} onClick={() => setOpen(!open)}>
        <Column top left gap={12}>
          <SidebarItem active={false}>
            <Icons type="image" size={8} />
            <p>Portifolio</p>
          </SidebarItem>
          <SidebarItem active>
            <Icons type="textDocument" size={8} />
            <p>Curriculo</p>
          </SidebarItem>
        </Column>

        <Column bottom left gap={8}>
          <SidebarItem onClick={toggleLang}>
            <Icons type="language" size={8} />
            <p>{lang}</p>
          </SidebarItem>
          <SidebarItem onClick={toggleTheme}>
            <Icons type="sun" size={8} />
            <p>{currentTheme}</p>
          </SidebarItem>
          <SidebarItem onClick={toggleColor}>
            <Icons type="theme" size={8} />
            <p>{currentColor}</p>
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
