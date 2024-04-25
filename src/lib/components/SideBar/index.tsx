import { PropsWithChildren, useState } from 'react';

import Icons from 'src/lib/base/Icons';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { changeLanguage, lang } from 'src/utils/i18n';
import { setColor } from 'src/utils/theme';

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
          <SidebarItem onClick={() => changeLanguage('en')}>
            <Icons type="language" size={8} />
            <p>{lang.toLocaleUpperCase()}</p>
          </SidebarItem>
          <SidebarItem>
            <Icons type="sun" size={8} />
            <p>Light</p>
          </SidebarItem>
          <SidebarItem onClick={() => setColor('blue')}>
            <Icons type="theme" size={8} />
            <p>Blue</p>
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
