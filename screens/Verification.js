import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'; // Assuming you are using Expo

const EmailVerification = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']); // To store each digit of the verification code
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleInputChange = (index, value) => {
    if (value.match(/^[0-9]{0,1}$/)) { // Only allow digits 0-9
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input field
      if (value && index < 3) {
        setTimeout(() => {
          this[`input${index + 1}`].focus();
        }, 100);
      }
    }
  };

  const handleVerify = () => {
    const codeString = code.join('');
    // Handle code verification logic here
    Alert.alert('Email Verification', `You entered: ${codeString}`);
  };

  const handleResend = () => {
    // Logic to resend the verification code
    Alert.alert('Verification Code Resent', 'A new code has been sent to your email.');
    setCountdown(600); // Reset countdown
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
        <Text style={styles.subHeaderText}>We've sent the verification code to your email</Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleInputChange(index, value)}
              ref={(input) => { this[`input${index}`] = input; }} // Reference for focusing
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
