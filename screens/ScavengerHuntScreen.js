import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import BottomNavBar from './BottomNavBar'; // Adjust the path as necessary

const ScavengerHuntScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

    useEffect(() => {
        // Start the animation when the component mounts
        Animated.timing(fadeAnim, {
            toValue: 1, // Final opacity value
            duration: 1000, // Duration of the animation
            useNativeDriver: true, // Use native driver for performance
        }).start();
    }, [fadeAnim]);

    return (
        <ImageBackground
            source={require('../assets/destination/uni.jpg')} // Replace with your background image
            style={styles.background}
        >
            {/* Semi-transparent overlay to dim the background */}
            <View style={styles.overlay}>
                {/* Text box at the top */}
                <View style={styles.textBox}>
                    <Text style={styles.text}>What am I?</Text>
                    <Text style={styles.textParagraph}>
                        Tshwane is the Administrative capital of South Africa is home to the Union Buildings with government-related business playing an important role in the local economy.
                    </Text>
                    {/* Sprite image at the top right */}
                    <Animated.Image
                        source={require('../assets/logo/logo2.png')} // Replace with your sprite image
                        style={[styles.sprite, { opacity: fadeAnim }]} // Apply fade animation
                    />
                </View>

                {/* Container for Streaks and number box */}
                <View style={styles.streaksContainer}>
                    <Text style={styles.streaksText}>STREAKS</Text>
                    {/* New Text box for the number */}
                    <View style={styles.numberBox}>
                        <Text style={styles.numberText}>2345</Text>
                    </View>
                </View>

                {/* Image at the bottom */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/destination/botanical.jpg')} // Replace with your image
                        style={styles.image}
                    />

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
    <Text style={styles.buttonText}>Find me if you can</Text>
</TouchableOpacity>

                </View>
                <BottomNavBar navigation={navigation} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start', // Align children to the top
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for dimming
        justifyContent: 'flex-start', // Align elements to the top
    },
    textBox: {
        marginTop: 20,
        padding: 20,
        height: 200,
        borderBottomRightRadius: 120,
        borderBottomLeftRadius: 120,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background for the text box
        position: 'relative', // Required for absolute positioning of sprite
    },
    text: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2CA39A', // Text color
    },
    textParagraph: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        color: '#000', // Text color
    },
    sprite: {
        position: 'absolute',
        top: -25, // Adjust this value to position sprite vertically
        right: -65, // Adjust this value to position sprite horizontally
        width: 150, // Width of the sprite
        height: 150, // Height of the sprite
    },
    streaksContainer: {
        alignItems: 'center', // Center align text
        marginVertical: 10, // Space above and below
    },
    streaksText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white', // Text color
    },
    numberBox: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 40,
        width: 215,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background for the number box
    },
    numberText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#2CA39A', // Text color
    },
    imageContainer: {
        position: 'relative', // Allow absolute positioning of the button
        width: '100%', // Full width
        height: 300, // Increased height
        alignItems: 'center', // Center the image
    },
    image: {
        width: '70%', // Full width
        height: '100%', // Full height
        resizeMode: 'cover', // Change to 'cover' for better fit
        borderRadius: 20, // Border radius for the image
        marginTop: 70,
    },
    button: {
        position: 'absolute', // Position button absolutely within the image container
        bottom: -100, // Space from the bottom
        right: 85, // Space from the right
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Button color
        padding: 15,
        borderRadius: 30,
        height: 60,
        width: 200,
    },
    buttonText: {
        color: '#2CA39A', // Button text color
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ScavengerHuntScreen;
