import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import SettingsSection from 'src/lib/sections/settings/SettingsSection';

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
