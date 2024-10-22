import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons

const BookingPage = ({ navigation }) => {
  const [ticketCount, setTicketCount] = useState(1); // State to manage the number of tickets

  const handleIncreaseTickets = () => {
    setTicketCount(ticketCount + 1); // Increase ticket count
  };

  const handleDecreaseTickets = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1); // Decrease ticket count but not below 1
    }
  };

  const handleBookNow = () => {
    // Redirect to Checkout page (assumes there's a 'Checkout' route)
    navigation.navigate('Checkout', { tickets: ticketCount });
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Image */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Index')} style={styles.backButton}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/destination/realbotanical.jpg') } // Placeholder image for show
          style={styles.showImage}
        />
      </View>

      {/* Show Details */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.showName}>Annual Arts Festival</Text>
        <Text style={styles.showLocation}>City Park</Text>
        <Text style={styles.showDate}>Date: 2024-11-01</Text>

        {/* Ticket Quantity Selection */}
        <View style={styles.ticketContainer}>
          <Text style={styles.ticketLabel}>Number of Tickets:</Text>
          <View style={styles.ticketCount}>
            <TouchableOpacity onPress={handleDecreaseTickets} style={styles.ticketButton}>
              <Text style={styles.ticketButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.ticketCountText}>{ticketCount}</Text>
            <TouchableOpacity onPress={handleIncreaseTickets} style={styles.ticketButton}>
              <Text style={styles.ticketButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity onPress={handleBookNow} style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => console.log('Home pressed')}>
          <Icon name="home-outline" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Map pressed')}>
          <Icon name="map-outline" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Settings pressed')}>
          <Icon name="settings-outline" size={30} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    height: 200,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  showImage: {
    width: '100%',
    height: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Add padding to accommodate the bottom nav
  },
  showName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  showLocation: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  showDate: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  ticketContainer: {
    marginTop: 20,
  },
  ticketLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ticketCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ticketButton: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  ticketButtonText: {
    fontSize: 20,
  },
  ticketCountText: {
    fontSize: 20,
  },
  bookButton: {
    marginTop: 30,
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default BookingPage;
