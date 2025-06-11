import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { BackgroundGradient } from '../../components/background/Background';
import { useEffect } from 'react';
import { requestAndroidNotificationPermission, requestIOSNotificationPermission } from '../../utils/Permissions';
import { Platform, Alert } from 'react-native';

const SplashScreen = () => {
  const { colors } = useColors();
  const styles = useStyles();

    useEffect(() => {
      const requestNotificationPermissions = async () => {
        try {
          if (Platform.OS === 'android') {
            const granted = await requestAndroidNotificationPermission();
            if (!granted) {
              Alert.alert('Notification Permission', 'Notifications are disabled. Please enable them in settings.');
            }
          } else if (Platform.OS === 'ios') {
            const granted = await requestIOSNotificationPermission();
            if (!granted) {
              Alert.alert('Notification Permission', 'Notifications are disabled. Please enable them in settings.');
            }
          }
        } catch (error) {
          console.error('Error requesting notification permissions:', error);
        }
      };
  
      requestNotificationPermissions();
    }, []);
   
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
