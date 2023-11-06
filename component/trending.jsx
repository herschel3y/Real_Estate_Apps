import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TrendingComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Treading Project 🔥</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Image
          source={{ uri: 'your-image-url-here' }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Developer Review</Text>
          <Text style={styles.subtitleText}>SIME DARBY PROPERTY</Text>
          {/* For the stars, you could use an icon library like react-native-vector-icons */}
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    
  },
  headerContainer: {
    padding: 10,
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize:20,
  },
  bodyContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '50%',
    height: 150,
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
    width: '50%',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize:17,
  },
  subtitleText: {
    color: '#000', // Gold color for stars
  },
  descriptionText: {
    // styles for the description text
  },
  button: {
    backgroundColor: '#0066CC',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default TrendingComponent;
