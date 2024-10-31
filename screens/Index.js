import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons
import { LinearGradient } from 'expo-linear-gradient';  // Gradient library
import BottomNavBar from './BottomNavBar'; // Adjust the path as necessary

const Index = ({ navigation }) => {
  const userProfilePic = 'https://via.placeholder.com/150'; // Placeholder image for testing

  // Placeholder destination images and names
  const destinations = [
    { id: 1, name: 'Union Buildings', image: require('../assets/destination/union.jpg'), history: 'The Union Buildings are the seat of the South African government and the official residence of the President of South Africa.' },
    { id: 2, name: 'Boltanical Gardens', image: require('../assets/destination/realbotanical.jpg'), history: 'The Pretoria Botanical Gardens showcase a variety of indigenous plants and serve as a serene retreat for visitors.' },
    { id: 3, name: 'Freedom Park', image: require('../assets/destination/freedomPark.jpg'), history: 'Freedom Park is a memorial dedicated to those who fought for freedom and democracy in South Africa, commemorating the struggles faced by the nation.' },
    { id: 4, name: 'Pretoria Art Museum', image: require('../assets/destination/artMuseum.jpg'), history: 'The Pretoria Art Museum features a collection of South African art and hosts various exhibitions throughout the year.' },
  ];

  // State to hold selected destination
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Placeholder upcoming events data
  const upcomingEvents = [
    { id: 1, date: '2024-11-02', description: 'Tshwane Gospel Choir Harmony of Prayers live recording', price: 150, image: require('../assets/destination/tshwaneGospelChoir.jpg') },
    { id: 2, date: '2024-11-05', description: 'Food and Wine Expo at the Convention Center', price: 30, image: require('../assets/destination/realbotanical.jpg') },
    { id: 3, date: '2024-11-10', description: 'Live Music Concert at Downtown Square', price: 20, image: require('../assets/destination/realbotanical.jpg') },
    { id: 4, date: '2024-11-15', description: 'Tech Conference at the Expo Center', price: 100, image: require('../assets/destination/realbotanical.jpg') },
    { id: 5, date: '2024-11-20', description: 'Charity Run for Health Awareness', price: 15, image: { uri: 'https://via.placeholder.com/150' }},
  ];

  return (
    <LinearGradient colors={['#2CA39A', 'white']} style={styles.container}>
      {/* Header with App Name, Tagline, and Profile Picture */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>City Xpo</Text>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginVertical: 20 }}>
            Explore Tshwane
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: userProfilePic }} // Profile image URL
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar with Search Icon */}
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a location"
          placeholderTextColor="#888"
        />
      </View>

      {/* Main Content Heading */}
      <Text style={styles.heading}>Popular Destinations</Text>

      {/* Horizontal Scrollable Section for Destinations */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {destinations.map((destination) => (
          <TouchableOpacity
            key={destination.id}
            style={styles.destinationCard}
            onPress={() => setSelectedDestination(destination.id === selectedDestination ? null : destination.id)}
          >
            <Image source={destination.image} style={styles.destinationImage} />
            <Text style={styles.destinationName}>{destination.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Destination History Section */}
      {selectedDestination && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyHeading}>History</Text>
          <Text style={styles.historyText}>
            {destinations.find(dest => dest.id === selectedDestination)?.history}
          </Text>
        </View>
      )}

      {/* Upcoming Events Section */}
      <Text style={styles.heading}>Upcoming Events</Text>
      <ScrollView style={styles.eventList}>
        {upcomingEvents.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={styles.eventItem}
            onPress={() => navigation.navigate('BookingPage', {
              eventName: event.description,
              eventPrice: event.price
            })}
          >
            <View style={styles.eventImageContainer}>
              <Image source={event.image} style={styles.eventImage} />
              <Text style={styles.eventDate}>{event.date}</Text>
            </View>
            <View style={styles.eventDescriptionContainer}>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNavBar navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Padding for content
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50, // Space at the top
    marginBottom: 20,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 50, // Increased size for visibility
    height: 50,
    borderRadius: 25, // Makes it circular
    borderWidth: 1, // Add border for visibility
    borderColor: '#000', // Black border
  },
  searchBarContainer: {
    flexDirection: 'row', // Align icon and input in a row
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 20, // Space below the search bar
  },
  searchIcon: {
    marginRight: 10, // Space between the icon and input field
  },
  searchBar: {
    flex: 1, // Takes up remaining width
    height: 40,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  destinationCard: {
    marginRight: 15,
    alignItems: 'center',
    paddingBottom: 100, 
    marginBottom: 50
  },
  destinationImage: {
    width: 150,
    height: 150,
    borderRadius: 10, // Rounded corner
  },
  destinationName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  historyContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#e0f7fa', // Light background for history
    borderRadius: 10,
  },
  historyHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  historyText: {
    fontSize: 14,
    color: '#333',
  },
  eventList: {
    marginBottom: 80, // Keep space for the bottom nav bar
  },
  eventItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  eventImageContainer: {
    position: 'relative', // Allow absolute positioning for date
    paddingRight: 30
  },
  eventImage: {
    width: 100,
    height: 100,
    borderRadius: 10, // Rounded corners
  },
  eventDate: {
    position: 'absolute',
    top: 60, // Adjust position to be half on and half off the image
    left: 40,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
    padding: 5,
    borderRadius: 5,
  },
  eventDescriptionContainer: {
    marginLeft: 10,
  },
  eventDescription: {
    fontSize: 16,
  },
});

export default Index;
