import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import BottomNavBar from './BottomNavBar'; // Adjust the path as necessary

const ScavengerHuntScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/destination/uni.jpg')} // Background for the whole screen
            style={styles.background}
        >
            {/* Semi-transparent overlay to dim the background */}
            <View style={styles.overlay}>
                {/* Text box with image background */}
                <ImageBackground
                    source={require('../assets/destination/uni.jpg')} // Background for the text box
                    style={styles.textBox}
                    imageStyle={styles.textBoxImage} // Custom styles for the image
                >
                    <Image 
                        source={require('../assets/logo/logo2.png')} // Replace with the path to your sprite image
                        style={styles.sprite} 
                    />
                    <Text style={styles.text}>Congratulations</Text>

                    {/* Streaks and number text in textBox */}
                    <View style={styles.streaksContainer}>
                        <Text style={styles.streaksText}>STREAKS</Text>
                    </View>
                    <View style={styles.numberBox}>
                        <Text style={styles.numberText}>2345</Text>
                    </View>
                </ImageBackground>

                {/* New text area at the bottom */}
                <View style={styles.textContainer}>
                    <Text style={styles.bottomTextHeader}>Sculpture</Text>
                    <Text style={styles.bottomText}>
                        Tshwane is the Administrative capital of South Africa, home to the Union Buildings. Government-related business plays
                        an important role in the local economy.
                    </Text>
                </View>

                <BottomNavBar />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'flex-start',
    },
    textBox: {
        marginTop: 20,
        padding: 20,
        height: 280,
        borderBottomRightRadius: 120,
        borderBottomLeftRadius: 120,
        alignItems: 'center',
        overflow: 'hidden', // Ensures the rounded corners apply to the background image
    },
    textBoxImage: {
        opacity: 0.5,
        borderBottomRightRadius: 120,
        borderBottomLeftRadius: 120,
    },
    sprite: {
        position: 'absolute',
        top: -50, 
        right: -90,
        width: 250,
        height: 350,
    },
    text: {
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
    },
    streaksContainer: {

        alignItems: 'center',
        marginTop: 50,
    },
    streaksText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    numberBox: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 40,
        width: 215,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    numberText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#2CA39A',
    },
    textContainer: {
        padding: 20,
        marginTop: 20,
    },
    bottomText: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
    },
    bottomTextHeader: {
        marginBottom: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default ScavengerHuntScreen;
