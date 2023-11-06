import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchComponent from './component/searchbar';
import TrendingComponent from './component/trending';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchComponent/>
      <TrendingComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E5E0',
    paddingTop: StatusBar.currentHeight || 50,
  },
});
