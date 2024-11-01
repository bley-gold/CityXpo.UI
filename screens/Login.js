import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  
import axios from 'axios'; 
import { BASE_URL } from '../API/API';
import Toast from 'react-native-toast-message'; // Import Toast

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all fields',
      });
      return;
    }

    if (!validateEmail(email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid email address',
      });
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/customers/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'You are logged in!',
        });
        
        // Navigate to the HomeScreen
        navigation.navigate('OnBoardingOne'); // Adjust the navigation target as necessary
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Login failed. Please check your credentials.',
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred during login.';
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorMessage,
      });
    }
  };

  return (
    <LinearGradient colors={['#2CA39A', 'white']} style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.welcomeText}>Welcome Back!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </TouchableOpacity>
        
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
    color: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 200,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 32,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#2CA39A',
    fontSize: 18,
  },
  linkText: {
    color: '#2CA39A',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Login;
