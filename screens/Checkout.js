import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons

const CheckoutPage = ({ route, navigation }) => {
  const { ticketCount} = route.params; // Get tickets from navigation params
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Mastercard'); // Default payment method

  // Placeholder for ticket price
  const ticketPrice = 100; // Set your ticket price here
  const totalPrice = ticketCounticketCount * ticketPrice; // Calculate total price

  const handleConfirmPayment = () => {
    // Handle payment confirmation logic here
    console.log('Payment confirmed for', tickets, 'tickets.');
    navigation.navigate('Confirmation'); // Navigate to a confirmation page
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <Text style={styles.summaryText}>Number of Tickets: {tickets}</Text>
        <Text style={styles.summaryText}>Total Price: ${totalPrice}</Text>

        {/* Payment Method Dropdown */}
        <Text style={styles.paymentLabel}>Select Payment Method:</Text>
        <Picker
          selectedValue={selectedPaymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}
        >
          <Picker.Item label="Mastercard" value="Mastercard" />
          <Picker.Item label="PayPal" value="PayPal" />
          <Picker.Item label="EFT" value="EFT" />
          <Picker.Item label="PayShap" value="PayShap" />
        </Picker>

        {/* Confirm Payment Button */}
        <TouchableOpacity onPress={handleConfirmPayment} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
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
    height: 60,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Add padding to accommodate the bottom nav
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  summaryText: {
    fontSize: 18,
    marginTop: 10,
  },
  paymentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  confirmButton: {
    marginTop: 30,
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
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

export default CheckoutPage;
