import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { PlatformPressable } from '@react-navigation/elements';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import OffersScreen from '../screens/OffersScreen';

import HomeIcon from '../assets/images/settings.png';
import ProfileIcon from '../assets/images/settings.png';
import OffersIcon from '../assets/images/settings.png';
import SettingsIcon from '../assets/images/settings.png';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.tabBarInactive,
          tabBarIcon: ({ color, size }) => {
            let icon;
            if (route.name === 'Home') {
              icon = HomeIcon;
            } else if (route.name === 'Profile') {
              icon = ProfileIcon;
            } else if (route.name === 'Offers') {
              icon = OffersIcon;
            } else if (route.name === 'Settings') {
              icon = SettingsIcon;
            }
            return <Image source={icon} width={size} height={size} tintColor={color} />;
          },
          headerShown: false,
          tabBarButton: (props) => <PlatformPressable {...props} android_ripple={{ color: 'transparent' }} />,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Offers" component={OffersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
