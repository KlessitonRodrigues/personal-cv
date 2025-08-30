import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const uri = 'https://profile.klessitonrds.com/';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
