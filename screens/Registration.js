import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { BASE_URL } from '../API/API';
import Toast from 'react-native-toast-message';

const Registration = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (text) => setFirstName(text.replace(/[^a-zA-Z\s]/g, ''));
  const handleLastNameChange = (text) => setLastName(text.replace(/[^a-zA-Z\s]/g, ''));
  const handlePasswordChange = (text) => setPassword(text);
  const handleConfirmPasswordChange = (text) => setConfirmPassword(text);
  const handlePhoneChange = (text) => setPhoneNumber(text.replace(/[^0-9]/g, '').slice(0, 10));
  const handleEmailChange = (text) => setEmail(text.trim());

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validatePasswords = () => {
    let passwordErrors = {};
    if (Password.length < 6) passwordErrors.Password = 'Password must be at least 6 characters.';
    if (Password !== ConfirmPassword) passwordErrors.ConfirmPassword = 'Passwords do not match.';
    return passwordErrors;
  };

  const validatePhoneNumber = () => {
    if (PhoneNumber.length !== 10) return 'Phone number must be exactly 10 digits.';
    return '';
  };

  const isFormValid = () => {
    return (
      checked &&
      FirstName.trim() !== '' &&
      LastName.trim() !== '' &&
      Email.trim() !== '' &&
      Password.trim() !== '' &&
      ConfirmPassword.trim() !== '' &&
      PhoneNumber.trim() !== ''
    );
  };

  const handleSubmit = async () => {
    const emailError = validateEmail();
    const passwordErrors = validatePasswords();
    const phoneError = validatePhoneNumber();

    if (!isFormValid()) {
      setErrors({ form: 'Please fill out all fields correctly.' });
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill out all fields correctly.',
      });
    } else if (emailError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: emailError,
      });
    } else if (phoneError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: phoneError,
      });
    } else if (Object.keys(passwordErrors).length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: passwordErrors.Password || passwordErrors.ConfirmPassword,
      });
    } else {
      try {
        const customerData = {
          FirstName,
          LastName,
          Email,
          Password,
          PhoneNumber,
        };

        const response = await axios.post(`${BASE_URL}/customers`, customerData);
        
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response.data.message || 'Registration completed successfully!',
        });
        navigation.navigate('Verification', {Email});
        
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'There was an issue with the registration.';
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: errorMessage,
        });
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
              value={FirstName}
              onChangeText={handleFirstNameChange}
              placeholderTextColor="#707070"
              autoCapitalize="words"
            />
          </View>
          {errors.FirstName && <Text style={styles.errorText}>{errors.FirstName}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={LastName}
              onChangeText={handleLastNameChange}
              placeholderTextColor="#707070"
              autoCapitalize="words"
            />
          </View>
          {errors.LastName && <Text style={styles.errorText}>{errors.LastName}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={Email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              placeholderTextColor="#707070"
            />
          </View>
          {errors.Email && <Text style={styles.errorText}>{errors.Email}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={PhoneNumber}
              onChangeText={handlePhoneChange}
              keyboardType="numeric"
              maxLength={10}
              placeholderTextColor="#707070"
            />
          </View>
          {errors.PhoneNumber && <Text style={styles.errorText}>{errors.PhoneNumber}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Please create your password"
              value={Password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              placeholderTextColor="#707070"
            />
          </View>
          {errors.Password && <Text style={styles.errorText}>{errors.Password}</Text>}

          <View style={styles.inputWrapper}>
            <Image style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={ConfirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry
              placeholderTextColor="#707070"
            />
          </View>
          {errors.ConfirmPassword && <Text style={styles.errorText}>{errors.ConfirmPassword}</Text>}

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
              <Text style={styles.linkText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
    marginRight: 5,
  },
  checkboxText: {
    color: '#black',
  },
  linkText: {
    color: '#2CA39A',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2CA39A',
    borderRadius: 32,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#b2e0de', // Light green for disabled button
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#black',
    marginRight: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default Registration;