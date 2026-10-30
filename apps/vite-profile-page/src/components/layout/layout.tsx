import { Outlet } from 'react-router-dom';

import SideBar from '../common/common.sidebar';

const Layout = () => {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
};

export default Layout;
