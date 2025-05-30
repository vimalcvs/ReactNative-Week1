import React, {createContext, useState, useContext, useEffect} from 'react';
import {useColorScheme} from 'react-native';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: {
    // Base colors
    background: string;
    text: string;
    tabBar: string;
    tabBarActive: string;
    tabBarInactive: string;
    
    // Primary colors
    primary: string;
    primaryLight: string;
    primaryDark: string;
    
    // Secondary colors
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    
    // Status colors
    success: string;
    warning: string;
    error: string;
    info: string;
    
    // UI Element colors
    card: string;
    border: string;
    divider: string;
    input: string;
    placeholder: string;
    
    // Social colors
    facebook: string;
    google: string;
    twitter: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colors = {
    // Base colors
    background: isDarkMode ? '#000000' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    tabBar: isDarkMode ? '#1C1C1E' : '#FFFFFF',
    tabBarActive: '#007AFF',
    tabBarInactive: isDarkMode ? '#8E8E93' : '#8E8E93',
    
    // Primary colors
    primary: '#007AFF',
    primaryLight: isDarkMode ? '#0A84FF' : '#47A3FF',
    primaryDark: isDarkMode ? '#0055B3' : '#0055B3',
    
    
    // Secondary colors
    secondary: '#5856D6',
    secondaryLight: isDarkMode ? '#7A79E0' : '#7A79E0',
    secondaryDark: isDarkMode ? '#3A39B3' : '#3A39B3',
    
    // Status colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5856D6',
    
    // UI Element colors
    card: isDarkMode ? '#1C1C1E' : '#F2F2F7',
    border: isDarkMode ? '#38383A' : '#C6C6C8',
    divider: isDarkMode ? '#38383A' : '#C6C6C8',
    input: isDarkMode ? '#2C2C2E' : '#FFFFFF',
    placeholder: isDarkMode ? '#8E8E93' : '#C7C7CC',
    
    // Social colors
    facebook: '#1877F2',
    google: '#DB4437',
    twitter: '#1DA1F2',
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 