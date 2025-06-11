import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export async function requestAndroidNotificationPermission() {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
}

export async function requestIOSNotificationPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  return enabled;
}

export const requestNotificationPermissions = async () => {
  try {
    if (Platform.OS === 'android') {
      getFcmToken();
      const granted = await requestAndroidNotificationPermission();
      if (!granted) {
        console.log(
          'Notification Permission',
          'Notifications are disabled. Please enable them in settings.'
        );
      }
    } else if (Platform.OS === 'ios') {
      getFcmToken();
      const granted = await requestIOSNotificationPermission();
      if (!granted) {
        console.log(
          'Notification Permission',
          'Notifications are disabled. Please enable them in settings.'
        );
      }
    }
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
  }
};

export const getFcmToken = async () => {
  const token = await messaging().getToken();
  if (token) {
    console.log('FCM Token:', token);
  } else {
    console.log('Failed to get FCM token');
  }
};
