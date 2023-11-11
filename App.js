import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchComponent from './component/searchbar';
import TrendingComponent from './component/trending';
import OtherTrending from './component/othertrending';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <SearchComponent/>
      <TrendingComponent/>
      <OtherTrending/>
    </View>
  );
};

const TrendingScreen = () => {
  return (
    <View style={styles.screenContainer}>
      
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Home"
         component={HomeScreen} 
         options={{headerShown:false}}/>
        <Tab.Screen name="Trending"
         component={TrendingScreen} 
         options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E5E0',
    paddingTop: StatusBar.currentHeight || 50,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#A4E5E0',
  },
});
