import { PropsWithChildren } from 'react';

import { Container, Content, Scroll } from './styled';

const DocumentView = (props: PropsWithChildren) => {
  return (
    <Container>
      <Scroll>
        <Content id="doc-content">{props.children}</Content>
      </Scroll>
    </Container>
  );
};

export default DocumentView;
