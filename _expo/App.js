import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const statusBar = {
  flex: 1,
  paddingTop: 35,
  backgroundColor: '#d9d9d9',
};

const url = 'https://profile.klessitonrds.com/';

export default function App() {
  return (
    <View style={statusBar}>
      <StatusBar style="dark" />
      <WebView style={{ flex: 1 }} source={{ url }} />
    </View>
  );
}
