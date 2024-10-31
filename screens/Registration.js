import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient'; // Assuming you are using Expo

const API_URL = 'http://192.168.18.2:5000/api/customers';

const Registration = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Changed from pin to password
  const [confirmPassword, setConfirmPassword] = useState(''); // Changed from confirmPin to confirmPassword
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (text) => setFirstName(text.replace(/[^a-zA-Z\s]/g, ''));
  const handleLastNameChange = (text) => setLastName(text.replace(/[^a-zA-Z\s]/g, ''));
  const handlePasswordChange = (text) => setPassword(text); // Password can be any character
  const handleConfirmPasswordChange = (text) => setConfirmPassword(text); // Confirm password can be any character
  const handlePhoneChange = (text) => setPhoneNumber(text.replace(/[^0-9]/g, '').slice(0, 10));
  const handleEmailChange = (text) => setEmail(text.trim());

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validatePasswords = () => {
    let passwordErrors = {};
    if (password.length < 6) passwordErrors.password = 'Password must be at least 6 characters.';
    if (password !== confirmPassword) passwordErrors.confirmPassword = 'Passwords do not match.';
    return passwordErrors;
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.length !== 10) return 'Phone number must be exactly 10 digits.';
    return '';
  };

  const isFormValid = () => {
    return (
      checked &&
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      phoneNumber.trim() !== ''
    );
  };

  const handleSubmit = async () => {
    const emailError = validateEmail();
    const passwordErrors = validatePasswords();
    const phoneError = validatePhoneNumber();

    if (!isFormValid()) {
      setErrors({ form: 'Please fill out all fields correctly.' });
      Alert.alert('Error', 'Please fill out all fields correctly.');
    } else if (emailError) {
      Alert.alert('Error', emailError);
    } else if (phoneError) {
      Alert.alert('Error', phoneError);
    } else if (Object.keys(passwordErrors).length > 0) {
      Alert.alert('Error', passwordErrors.password || passwordErrors.confirmPassword);
    } else {
      try {
        const customerData = {
          firstName,
          lastName,
          email,
          password, // Changed from loginPin to password
          phoneNumber,
        };

        // const response = await axios.post(API_URL, customerData);
        Alert.alert('Success', 'Registration completed successfully!');
        navigation.navigate('Verification');
        
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'There was an issue with the registration.';
        Alert.alert('Error', errorMessage);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#2CA39A', '#ffffff']} style={styles.gradientContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Sign Up</Text>
          
          <Text style={styles.subHeaderText}>Create your account!</Text>

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={handleFirstNameChange}
              placeholderTextColor="#707070"
              autoCapitalize="words"
            />
          </View>
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={handleLastNameChange}
              placeholderTextColor="#707070"
              autoCapitalize="words"
            />
          </View>
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              placeholderTextColor="#707070"
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              keyboardType="numeric"
              maxLength={10}
              placeholderTextColor="#707070"
            />
          </View>
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Please create your password"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              placeholderTextColor="#707070"
            />
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry
              placeholderTextColor="#707070"
            />
          </View>
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

          <View style={styles.checkboxContainer}>
            <CheckBox checked={checked} onPress={() => setChecked(!checked)} containerStyle={styles.checkbox} />
            <Text style={styles.checkboxText}>I have read and agree to the</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
              <Text style={styles.linkText}> POPI Act</Text>
            </TouchableOpacity>
          </View>
          {errors.form && <Text style={styles.errorText}>{errors.form}</Text>}

          <TouchableOpacity
            style={[styles.button, !isFormValid() && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800', // Extra bold
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 32,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff', // White text box
  },
  input: {
    flex: 1,
    height: 40,
    color: '#707070',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
  },
  checkboxText: {
    fontWeight: 'bold',
    color: 'black',
  },
  linkText: {
    color: 'white', // Blue color for links
    textDecorationLine: 'none',
  },
  button: {
    backgroundColor: '#007AFF', // Button color
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#A5A5A5', // Disabled button color
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Registration;

