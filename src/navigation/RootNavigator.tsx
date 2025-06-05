import SplashScreen from '../screens/splash/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import SettingsDetails from '../screens/settings/SettingsDetails';
import SettingsNotification from '../screens/settings/SettingsNotification';



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
        <Stack.Screen
          name="SettingsDetails"
          component={SettingsDetails}
          options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#6200EE', 
            },
            headerTintColor: '#fff', 
            headerTitleAlign: 'center',  
          }} />
        <Stack.Screen
          name="SettingsNotification"
          component={SettingsNotification}
          options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#6200EE', 
            },
            headerTintColor: '#fff', 
            headerTitleAlign: 'center',  
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
