import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TrendingComponent = () => {
  const [developerName, setDeveloperName] = useState(''); // State to store the developer's name
  const [isLoading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    // Function to fetch data from your backend
    const fetchTrendingData = async () => {
      try {
        const response = await fetch('http://10.0.2.2:8000/api/developers/');
        const json = await response.json();
        setDeveloperName(json[0]); // Assuming the API returns an array of names
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Trending Project 🔥</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Image
          source={{ uri: 'your-image-url-here' }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Developer Review</Text>
          {isLoading ? (
            <Text>Loading...</Text> // Display a loading text or spinner
          ) : (
            <Text style={styles.subtitleText}>{developerName}</Text>
          )}
           <View style={styles.starContainer}>
            <Text style={styles.star}>⭐️</Text>
            <Text style={styles.star}>⭐️</Text>
            <Text style={styles.star}>⭐️</Text>
            <Text style={styles.star}>⭐️</Text>
            <Text style={styles.star}>⭐️</Text>
          </View>

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
    color: '#000', 
    fontWeight: 'bold',// Gold color for stars
  },
  descriptionText: {
    // styles for the description text
  },
  button: {
    backgroundColor: '#00B2A9',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  starContainer: {
    flexDirection: 'row', // This will layout the star Text components in a horizontal row
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginTop:5,
    marginBottom:5,
  },
  star: {
    marginRight: 4, // Add a small space between each star
  },
});

export default TrendingComponent;
