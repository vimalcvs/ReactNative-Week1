import SplashScreen from '../screens/splash/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsDetails from '../screens/main/settings/SettingsDetails';
import { NavigationContainer } from '@react-navigation/native';
 
const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
