import { PropsWithChildren, useState } from 'react';

import Icons from 'src/lib/base/Icons';
import { Column } from 'src/lib/base/StyledComponents/Flex';

import { Container, Content, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <SidebarBox active={open} onClick={() => setOpen(!open)}>
        <Column top left>
          <SidebarItem>
            <Icons type="link" size={10} />
            <h4>Portifolio</h4>
          </SidebarItem>
        </Column>

        <Column left gap={8}>
          <SidebarItem>
            <Icons type="template" size={10} />
            <h4>Portifolio</h4>
          </SidebarItem>
          <SidebarItem>
            <Icons type="download" size={10} />
            <h4>Curriculo</h4>
          </SidebarItem>
        </Column>

        <Column bottom left>
          <SidebarItem>
            <Icons type="github" size={10} />
            <h4>Github</h4>
          </SidebarItem>
        </Column>
      </SidebarBox>

      <Content active={open}>{props.children}</Content>
    </Container>
  );
};

export default SideBar;
