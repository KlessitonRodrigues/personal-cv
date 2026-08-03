import Page from 'src/components/common/common.page';
import SideBar from 'src/components/common/common.sidebar';
import SettingsSection from 'src/components/settings/settings';

const SettingsPage = () => {
  return (
    <SideBar>
      <Page>
        <SettingsSection />
      </Page>
    </SideBar>
  );
};

export default SettingsPage;
