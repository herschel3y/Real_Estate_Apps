import React from "react";
import { View,Text,TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchComponent = () =>{
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Search"
                // Add other props such as onChangeText, value, etc.
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#00B2A9', // Your teal background color
      alignItems: 'center',
      paddingHorizontal: 10,
      padding:10, // This adds spacing inside the container
    },
    input: {
        flex: 1, // This makes the input expand to fill the space
        backgroundColor: '#FFFFFF', // White background for the input field
        marginLeft: 10, // This adds spacing between the icon and the input field
        paddingVertical: 10, // This adds vertical padding inside the input
        paddingHorizontal: 15, // This adds horizontal padding inside the input
        borderRadius: 20, // This rounds the corners of the input field
      },
  });

export default SearchComponent