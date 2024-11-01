import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; // Import Toast

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
    navigation.navigate('Index'); // Navigate to home screen
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setDateOfBirth(formattedDate);
      // Use Toast instead of Alert
      Toast.show({
        type: 'success',
        text1: 'Date of Birth Set',
        text2: `Your date of birth is set to ${formattedDate}.`,
      });
      checkBirthday(formattedDate);
    }
  };

  const checkBirthday = (dob) => {
    const today = new Date();
    const [year, month, day] = dob.split('-').map(Number);

    if (today.getMonth() + 1 === month && today.getDate() === day) {
      setStreakPoints((prevPoints) => prevPoints + 50);
      Toast.show({
        type: 'info',
        text1: 'Happy Birthday!',
        text2: "You've earned 50 bonus points!",
      });
    }
  };

  useEffect(() => {
    const participateInScavengerHunt = () => {
      const points = 10;
      setStreakPoints((prevPoints) => prevPoints + points);
      Toast.show({
        type: 'success',
        text1: 'Scavenger Hunt Participation',
        text2: `You've earned ${points} streak points!`,
      });
    };

    participateInScavengerHunt();
  }, []);

  useEffect(() => {
    const friendUsesReferralCode = () => {
      const points = 5;
      setReferralPoints((prevPoints) => prevPoints + points);
      Toast.show({
        type: 'success',
        text1: 'Referral Success',
        text2: `You've earned ${points} referral points!`,
      });
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
          source={require('../assets/icon/back.jpg')} // Update path to your local logo image
          style={styles.logo}
        />
      </TouchableOpacity>
      
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/logo/logo2.png')} // Replace with the actual profile image path
          style={styles.profileImage}
        />
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
      </View>

      <Text style={styles.info}>Unique Identifier: {uniqueIdentifier}</Text>
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
        <Text style={styles.pointsText}>Streak Points: <Text style={styles.pointsValue}>{streakPoints}</Text></Text>
        <Text style={styles.pointsText}>Referral Points: <Text style={styles.pointsValue}>{referralPoints}</Text></Text>
      </View>

      {/* Add Toast at the bottom */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#2CA39A', // Border color for the circular frame
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2CA39A',
  },
  info: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 5,
  },
  pointsContainer: {
    marginVertical: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2CA39A', // Background color for points container
    borderRadius: 10,
    width: '100%',
    elevation: 4, // Add shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  pointsText: {
    fontSize: 18,
    color: '#fff',
  },
  pointsValue: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFD700', // Gold color for points value
  },
});

export default Profile;
