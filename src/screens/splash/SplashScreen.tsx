import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { BackgroundGradient } from '../../components/background/Background';
import { useEffect } from 'react';
import { requestAndroidNotificationPermission, requestIOSNotificationPermission } from '../../utils/NotificationPermission';
import { Platform, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const SplashScreen = () => {
  const { colors } = useColors();
  const styles = useStyles();

   
  return (
    <BackgroundGradient>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.centerContainer}>
          <Text style={[styles.title, { color: colors.facebook }]}>Welcome</Text>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default SplashScreen;

