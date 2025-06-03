import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';

const SplashScreen = () => {
    const { colors } = useColors();
    const styles = useStyles();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.centerContainer}>
            <Text style={[styles.title, { color: colors.facebook }]}>Welcome app</Text>
            </View>
        </View>
    );
};

export default SplashScreen;
