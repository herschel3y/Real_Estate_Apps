import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchComponent from './component/searchbar';
import TrendingComponent from './component/trending';
import OtherTrending from './component/othertrending';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchComponent/>
      <TrendingComponent/>
      <OtherTrending/>
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
