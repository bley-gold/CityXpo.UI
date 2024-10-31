import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import scavengerIcon from '../assets/icon/hunt.png'; // Adjust the path as necessary

const BottomNavBar = ({ navigation }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
        <Icon name="home-outline" size={30} color="#888" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
        <Icon name="map-outline" size={30} color="#888" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
      <Image source={scavengerIcon} style={styles.customIcon} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
        <Icon name="settings-outline" size={30} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    position: 'absolute',
    bottom: 20,
    left: '10%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  customIcon: {
    width: 30,  // Set the width of your icon
    height: 30, // Set the height of your icon
    color:'green',
  },
});

export default BottomNavBar;
