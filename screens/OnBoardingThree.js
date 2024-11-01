import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';

export default function OnboardingOne({ navigation }) {
    const screens = ['OnBoardingOne', 'OnBoardingTwo', 'OnBoardingThree'];
    const [popAnimation] = useState(new Animated.Value(100)); // Start position off-screen at the bottom

    // Animation effect for the cartoon character
    useEffect(() => {
        Animated.spring(popAnimation, {
            toValue: 0,  // Move to original position (upward)
            friction: 5,
            tension: 100,
            useNativeDriver: true,
        }).start();
    }, [popAnimation]);

    const handleScreenTap = (event) => {
        const tapX = event.nativeEvent.locationX;

        if (tapX < Dimensions.get('window').width / 2) {
            // Navigate to the previous screen
            navigation.navigate(screens[0]);
        } else {
            // Navigate to the next screen
            navigation.navigate(screens[1]);
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleScreenTap} activeOpacity={1}>
            <ImageBackground
                source={require('../assets/pagination/zoo.jpg')}
                style={styles.background}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
            >
                {/* Overlay for dimming effect */}
                <View style={styles.overlay} />

                <View style={styles.header}>
                    <Text style={styles.title}>Thobela!</Text>
                    <Text style={styles.description}>
                        Find out about our tourist attractions and phenomenal icons
                    </Text>
                </View>

                {/* Get Started Button */}
                <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Index')}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={styles.didYouKnowText1}>Did you know</Text>
                </View>

                <Animated.View
                    style={[
                        styles.characterContainer,
                        {
                            transform: [{ translateY: popAnimation }],
                        },
                    ]}
                >
                    <Image
                        source={require('../assets/userProfile/sprite.png')}
                        style={styles.characterImage}
                    />
                </Animated.View>

                <View style={styles.didYouKnowBox}>
                    <Text style={styles.didYouKnowText}>
                        Tshwane is the Administrative capital of South Africa and is home to the Union Buildings with government-related business playing an important role in the local economy.
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    imageStyle: {
        opacity: 0.7,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,  // This will cover the entire ImageBackground
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adjust the rgba value for different dimming effects
        zIndex: 1, // Ensure it is above the image but below other content
    },
    header: {
        marginTop: 120, // Position closer to the top
        paddingHorizontal: 20,
        alignItems: 'center',
        zIndex: 2, // Ensure header is above overlay
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 3,
    },
    description: {
        fontSize: 25.5,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 40,
        marginTop: 10,
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    getStartedButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignSelf: 'center',
        marginTop: 130,
        zIndex: 3, // Set zIndex higher than overlay and header
    },
    getStartedButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    didYouKnowBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 280,
        backgroundColor: 'rgb(245,245,245)',
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
    didYouKnowText: {
        fontSize: 18,
        color: 'black',
    },
    didYouKnowText1: {
        position: 'absolute',
        bottom: -20,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    characterContainer: {
        position: 'absolute',
        left: -200,
        bottom: 100,
        width: 450,
        height: 380,
        zIndex: 1,
    },
    characterImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
