import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const CameraSimulator = ({ navigation }) => {
    const handleCapture = () => {
        navigation.navigate('ScavengerHuntCongratulations'); // Navigate to CaptureResult screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Camera Simulator</Text>
            <View style={styles.photoArea}>
                {/* Placeholder photo */}
                <Image
                    source={require('../assets/destination/botanical.jpg')} // Replace with the path to your placeholder image
                    style={styles.photo}
                />
            </View>
            <Button title="Capture" onPress={handleCapture} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    photoArea: {
        width: '80%',
        height: '50%',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default CameraSimulator;
