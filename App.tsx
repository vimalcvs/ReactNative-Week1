import React, { useEffect } from 'react';
import { StatusBar, Alert, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useColors } from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';
import messaging from '@react-native-firebase/messaging';
import { requestNotificationPermissions } from './src/utils/NotificationPermission';

function App(): React.JSX.Element {
  useEffect(() => {
    requestNotificationPermissions();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);
    });
    return unsubscribe;
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
