import { PermissionsAndroid, Platform } from 'react-native';
import {
  getMessaging,
  getToken,
  requestPermission,
  registerDeviceForRemoteMessages,
  AuthorizationStatus,
} from '@react-native-firebase/messaging';

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
  const messaging = getMessaging();
  await registerDeviceForRemoteMessages(messaging);
  const authStatus = await requestPermission(messaging);
  const enabled =
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL;
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
  const messaging = getMessaging();
  await registerDeviceForRemoteMessages(messaging);
  const token = await getToken(messaging);
  if (token) {
    console.log('FCM Token:', token);
  } else {
    console.log('Failed to get FCM token');
  }
};
