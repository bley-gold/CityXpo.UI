import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Dimensions, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const logoAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(logoAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.navigate('ScavengerHuntScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [logoAnim, navigation]);

    const { width, height } = Dimensions.get('window');
    const logoSize = Math.min(width, height) * 0.8;

    return (
        <ImageBackground
            source={require('../assets/destination/uni.jpg')} // Replace with your background image
            style={styles.background}
        >
            {/* Semi-transparent overlay to dim the background */}
            <View style={styles.overlay}>
                <Text style={styles.scavengerHuntText}>Scavenger Hunt</Text>
                <Animated.Image
                    source={require('../assets/logo/logo2.png')}
                    style={[
                        styles.logo, {
                            width: logoSize,
                            height: logoSize,
                            opacity: logoAnim,
                            transform: [{ scale: logoAnim }]
                        }
                    ]}
                    resizeMode="contain"
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black for dimming
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 20,
        overflow: 'hidden',
    },
    scavengerHuntText: {
        fontFamily: 'Roboto',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
    },
});

export default SplashScreen;
