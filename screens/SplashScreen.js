import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Dimensions, Text } from 'react-native';
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
            navigation.navigate('Login'); 
        }, 4000);

        return () => clearTimeout(timer);
    }, [logoAnim, navigation]);

    const { width, height } = Dimensions.get('window');
    const logoSize = Math.min(width, height) * 1.1; // Increased size to 70% of smaller dimension

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Animated.Image
                    source={require('../assets/logo/launch.png')} 
                    style={[styles.logo, { 
                        width: logoSize, 
                        height: logoSize, 
                        opacity: logoAnim, 
                        transform: [{ scale: logoAnim }] 
                    }]}
                    resizeMode="contain"
                />
                <Text style={styles.titleText}>CITY XPO</Text>
                <Text style={styles.subTitleText}>X MARKS THE SPOT</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#66b2b2', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    logo: {
        position: 'absolute',
        top: 115, // Adjust this value to position sprite vertically
        right: -160, // Adjust this value to position sprite horizontally
        marginBottom: 10, // Slight margin below the logo to separate it from "CITY XPO"
        marginTop: 48,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 2,
        textAlign: 'center',
        marginBottom: 20, // 20px margin between "CITY XPO" and "X MARKS THE SPOT"
    },
    subTitleText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default SplashScreen;
