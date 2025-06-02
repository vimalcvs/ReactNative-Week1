import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { PlatformPressable } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import OffersScreen from '../screens/OffersScreen';

const Tab = createBottomTabNavigator();

const ICON_MAP = {
  Home: {
    filled: 'home',
    outline: 'home-outline'
  },
  Profile: {
    filled: 'person',
    outline: 'person-outline'
  },
  Offers: {
    filled: 'gift',
    outline: 'gift-outline'
  },
  Settings: {
    filled: 'settings',
    outline: 'settings-outline'
  }
} as const;

const BottomTabNavigator = () => {
  const { colors } = useTheme();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.tabBarInactive,
          tabBarIcon: ({ color, size, focused }) => {
            const iconName = focused 
              ? ICON_MAP[route.name as keyof typeof ICON_MAP].filled
              : ICON_MAP[route.name as keyof typeof ICON_MAP].outline;
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarButton: (props) => (
            <PlatformPressable {...props} android_ripple={{ color: 'transparent' }} />
          ),
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Offers" component={OffersScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
