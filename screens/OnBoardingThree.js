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
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome!</Text>
                    <Text style={styles.description}>
                        To City Expo where X marks the spot
                    </Text>
                </View>

                <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Index')}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>

                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={styles.didYouKnowText}>Did you know</Text>
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
                    <Text style={styles.didYouKnowText}>Did you know? You can explore and discover amazing places with us!</Text>
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
    header: {
        marginTop: 120, // Position closer to the top
        paddingHorizontal: 20,
        alignItems: 'center',
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
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
    didYouKnowText: {
        fontSize: 14,
        color: '#333',
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
