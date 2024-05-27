import { PropsWithChildren } from 'react';

import { PageContainer, PageContent } from 'src/lib/styled/Containers';

import SideBar from '../SideBar';

const Page = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <PageContainer>
      <SideBar>
        <PageContent>{children}</PageContent>
      </SideBar>
    </PageContainer>
  );
};

export default Page;
