import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OtherTrending = () => {
  return (
    <TouchableOpacity>
        <View style={styles.cardContainer}>
            <View style={styles.row}>
                <Text style={styles.titleText}>Bangsar Hill</Text>
                <Text style={styles.tag}> @Bangsar</Text>
                
            </View>
            <View>
                <Text style={styles.descriptionText}>Develop by : Bangsar Hill Park Development Sdn Bhd</Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically
      },
    
    titleText: {
        fontWeight: 'bold',
        fontSize:17,
    },
    subtitleText: {
        color: '#000', 
        fontWeight: 'bold',
    },
    tag:{
        
    },
    descriptionText: {
        marginTop: 4,
    },
})


export default OtherTrending