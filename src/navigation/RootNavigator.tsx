import SplashScreen from '../screens/splash/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsDetails from '../screens/main/settings/SettingsDetails';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import SettingsNotification from '../screens/main/settings/SettingsNotification';

// Define interfaces for type safety
interface UserPreferences {
  theme: string;
  language: string;
}

interface UserData {
  name: string;
  email: string;
  preferences: UserPreferences;
}

// Define navigation params
export interface RootStackParamList extends ParamListBase {
  MainTabs: undefined;
  SettingsDetails: {
    userData: UserData;
  };
  SettingsNotification: {
    message: string;
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="SettingsDetails" component={SettingsDetails} />
        <Stack.Screen name="SettingsNotification" component={SettingsNotification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
