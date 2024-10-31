import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [phoneNumber, setPhoneNumber] = useState('0786940018');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [streakPoints, setStreakPoints] = useState(0);
  const [referralPoints, setReferralPoints] = useState(0);
  const uniqueIdentifier = 'USER123456';

  const navigation = useNavigation();

  const handleLogoClick = () => {
    navigation.navigate('Home'); // Navigate to home screen
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setDateOfBirth(formattedDate);
      Alert.alert('Date of Birth Set', `Your date of birth is set to ${formattedDate}.`);
      checkBirthday(formattedDate);
    }
  };

  const checkBirthday = (dob) => {
    const today = new Date();
    const [year, month, day] = dob.split('-').map(Number);

    if (today.getMonth() + 1 === month && today.getDate() === day) {
      setStreakPoints((prevPoints) => prevPoints + 50);
      Alert.alert('Happy Birthday!', "You've earned 50 bonus points!");
    }
  };

  useEffect(() => {
    const participateInScavengerHunt = () => {
      const points = 10;
      setStreakPoints((prevPoints) => prevPoints + points);
      Alert.alert('Scavenger Hunt Participation', `You've earned ${points} streak points!`);
    };

    participateInScavengerHunt();
  }, []);

  useEffect(() => {
    const friendUsesReferralCode = () => {
      const points = 5;
      setReferralPoints((prevPoints) => prevPoints + points);
      Alert.alert('Referral Success', `You've earned ${points} referral points!`);
    };

    friendUsesReferralCode();
  }, []);

  useEffect(() => {
    if (dateOfBirth) {
      checkBirthday(dateOfBirth);
    }
  }, [dateOfBirth]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoClick}>
        <Image
          source={require('../assets/logo/logo.png')} // Update path to your local logo image
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Unique Identifier: {uniqueIdentifier}</Text>
      <Text style={styles.info}>Name: {firstName}</Text>
      <Text style={styles.info}>Surname: {lastName}</Text>
      <Text style={styles.info}>Phone Number: {phoneNumber}</Text>
      {dateOfBirth ? (
        <Text style={styles.info}>Date of Birth: {dateOfBirth}</Text>
      ) : (
        <>
          <Button title="Set Date of Birth" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}
        </>
      )}
      
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Streak Points: {streakPoints}</Text>
        <Text style={styles.pointsText}>Referral Points: {referralPoints}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2CA39A',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 5,
  },
  pointsContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 16,
    color: '#2CA39A',
  },
});

export default Profile;
