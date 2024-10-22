import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ScavengerHunt = () => {
  const [showImage, setShowImage] = useState(true);

  // Use useEffect to trigger the 10 seconds timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false); // Hide the image after 10 seconds
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <View style={styles.container}>
      {showImage ? (
        // Display the intro image
        <Image source={require('../assets/scavanger/first.jpg')} style={styles.image} />
      ) : (
        // After 10 seconds, show this text or navigate to another screen
        <Text style={styles.text}>Let's Start the Scavenger Hunt!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Adjusts the image to fit without distortion
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ScavengerHunt;
