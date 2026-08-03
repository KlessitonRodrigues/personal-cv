import Page from 'src/components/common/Page';
import SideBar from 'src/components/common/SideBar';
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
