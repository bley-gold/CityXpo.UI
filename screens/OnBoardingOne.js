import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function OnboardingOne({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const screens = ['OnBoardingOne', 'OnBoardingTwo', 'OnBoardingThree'];
    const screenWidth = Dimensions.get('window').width;

    const handleScreenTap = (event) => {
        const tapX = event.nativeEvent.locationX;

        if (tapX < screenWidth / 2) {
            const prevIndex = activeIndex > 0 ? activeIndex - 1 : screens.length - 1;
            setActiveIndex(prevIndex);
            navigation.navigate(screens[prevIndex]);
        } else {
            const nextIndex = (activeIndex + 1) % screens.length;
            setActiveIndex(nextIndex);
            navigation.navigate(screens[nextIndex]);
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
                {/* Dim effect layer */}
                <View style={styles.dimLayer} />

                <View style={styles.content}>
                    <Text style={styles.title}>Welcome!</Text>
                    <Text style={styles.description}>
                        To City Expo where X marks the spot
                    </Text>

                    <View style={styles.pagination}>
                        {screens.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setActiveIndex(index);
                                    navigation.navigate(screens[index]);
                                }}
                                activeOpacity={1}
                            >
                                <View
                                    style={[
                                        styles.square,
                                        index === activeIndex ? styles.activeSquare : styles.inactiveSquare,
                                    ]}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Index')}>
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </TouchableOpacity>
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
        opacity: 1, // Set this to 1 so that the image doesn't dim
    },
    dimLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for dimming effect
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
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
        marginBottom: 20,
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 350,
    },
    square: {
        width: 50,
        height: 10,
        borderRadius: 20,
        backgroundColor: '#2CA39A',
        marginHorizontal: 5,
        opacity: 0.4,
    },
    activeSquare: {
        opacity: 1,
    },
    skipButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 3,
        paddingVertical: 6,
        paddingHorizontal: 30,
        marginTop: 50,
    },
    skipButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});
