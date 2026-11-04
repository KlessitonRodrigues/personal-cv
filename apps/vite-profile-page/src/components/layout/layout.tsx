import { Outlet } from 'react-router-dom';

import useTheme from 'src/hooks/hooks.use.theme';
import backgroundSvg from 'src/public/images/background.svg?raw';

import SideBar from '../common/common.sidebar';
import { SvgBackground } from '../common/styled/styled.background';

const Layout = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SvgBackground
        isDark={isDark}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: backgroundSvg }}
      />
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
};

export default Layout;
