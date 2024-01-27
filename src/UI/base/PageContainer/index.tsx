import { PropsWithChildren } from 'react';

import { Container } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return <Container>{props.children}</Container>;
};

export default PageContainer;
