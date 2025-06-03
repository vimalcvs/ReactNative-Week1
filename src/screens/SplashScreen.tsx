import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../styles/globalStyles';

const SplashScreen = () => {
    const { colors } = useTheme();
    const styles = createGlobalStyles();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.centerContainer}>
            <Text style={[styles.title, { color: colors.facebook }]}>Welcome app</Text>
            </View>
        </View>

    );
};


export default SplashScreen;