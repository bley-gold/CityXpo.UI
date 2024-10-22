import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registration from './screens/Registration';
import PersonalInfoForm from './screens/PersonalInfoForm';
import ContactDetailsScreen from './screens/ContactDetailsScreen'; // Adjust the path based on where your file is located
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import SuccessScreen from './screens/RegistrationSuccessScreen';
import TermsScreen from './screens/TermsScreen';
import Login from './screens/Login';
import Index from './screens/Index';
import BookingPage from './screens/BookingPage';
import Checkout from './screens/Checkout';
import People from './screens/People';
import ScavengerHunt from './screens/ScavengerHunt';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="BookingPage" component={BookingPage} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      <Stack.Screen name="ScavengerHunt" component={ScavengerHunt} options={{ headerShown: false }} />
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="People" component={People} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoForm} options={{ headerShown: false }} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Terms" component={TermsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
