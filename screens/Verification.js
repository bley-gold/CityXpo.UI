import React, { useState, useEffect, useRef } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { BASE_URL } from '../API/API'; 
import axios from 'axios'; 

const EmailVerification = ({ navigation, route }) => {
  const { email } = route.params; // Retrieve email from route params
  const [code, setCode] = useState(['', '', '', '', '', '']); 
  const [countdown, setCountdown] = useState(600); 
  const inputRefs = useRef([]); // Array to hold refs for each input

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleInputChange = (index, value) => {
    if (value.match(/^[0-9]{0,1}$/)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    const codeString = code.join('');
    try {
      const response = await axios.post(`${BASE_URL}/customers/verify-otp`, { otp: codeString, email });
      if (response.status === 200) { // Check if the registration was successful
        Alert.alert('Success', 'Registration completed successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') } // Navigate to Login screen
        ]);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'There was an issue with the registration.';
      Alert.alert('Error', errorMessage);
    }
  };

  const handleResend = async () => {
    try {
      await axios.post(`${BASE_URL}/customers/resend-otp`, { email });
      Alert.alert('Verification Code Resent', 'A new code has been sent to your email.');
      
      setCountdown(600); // Reset countdown
    } catch (error) {
      Alert.alert('Error', 'An error occurred while resending the code.');
      console.error(error);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <LinearGradient colors={['#2CA39A', '#ffffff']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Check Your Email</Text>
        <Text style={styles.subHeaderText}>We've sent the verification code to {email}</Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleInputChange(index, value)}
              ref={(input) => (inputRefs.current[index] = input)}
            />
          ))}
        </View>

        <Text style={styles.timerText}>Code expires in {formatTime(countdown)}</Text>

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
          <Text style={styles.resendButtonText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2CA39A',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#2CA39A',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  timerText: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#2CA39A',
    fontSize: 16,
  },
  resendButton: {
    marginTop: 10,
  },
  resendButtonText: {
    fontWeight: 'bold',
    color: '#2CA39A',
    fontSize: 16,
  },
});

export default EmailVerification;
