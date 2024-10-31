import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registration from './screens/Registration';
import TermsScreen from './screens/TermsScreen';
import Login from './screens/Login';
import Index from './screens/Index';
import BookingPage from './screens/BookingPage';
import Checkout from './screens/Checkout';
import People from './screens/People';
import Profile from './screens/Profile';
import SplashScreen from './screens/SplashScreen';
import OnBoardingOne from './screens/OnBoardingOne';
import OnBoardingTwo from './screens/OnBoardingTwo';
import OnBoardingThree from './screens/OnBoardingThree';
import WelcomePage from './screens/WelcomePage';
import ScavengerHuntScreen from './screens/ScavengerHuntScreen';
import CameraScreen from './screens/CameraScreen'; // New Camera screen
import ScavengerHuntCongratulations from './screens/ScavengerHuntCongrats'; // New Photo Preview screen
import Verification from './screens/Verification';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="ScavengerHuntScreen" component={ScavengerHuntScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ScavengerHuntCongratulations" component={ScavengerHuntCongratulations} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="OnBoardingOne" component={OnBoardingOne} options={{ headerShown: false }} />
      <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
      <Stack.Screen name="OnBoardingTwo" component={OnBoardingTwo} options={{ headerShown: false }} />  
      <Stack.Screen name="OnBoardingThree" component={OnBoardingThree} options={{ headerShown: false }} />    
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="BookingPage" component={BookingPage} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
       <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="People" component={People} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="Terms" component={TermsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
