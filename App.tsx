import React, { useEffect } from 'react';
import { StatusBar, Alert, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useColors } from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';
import messaging, { getMessaging, onMessage } from '@react-native-firebase/messaging';
import { requestNotificationPermissions } from './src/utils/NotificationPermission';

function App(): React.JSX.Element {
  useEffect(() => {
    requestNotificationPermissions();

    // Foreground message handler
    const unsubscribeOnMessage = onMessage(getMessaging(), async remoteMessage => {
      console.log('FCM Foreground Message:', remoteMessage.data);
      // Optionally show an alert or local notification
    });

    // Background & quit state message handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('FCM Background/Terminated Message:', remoteMessage.data);
      // Handle background message
    });

    // When a notification is opened from background state
    const unsubscribeOnNotificationOpened = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background:', remoteMessage.notification);
      // Handle navigation or logic
    });

     
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage.notification);
        }
      });

    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpened();
    };
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode } = useColors();
  return (
      <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
      />
      <RootNavigator />
    </>
  );
};

export default App;
