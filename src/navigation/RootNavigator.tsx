import SplashScreen from '../screens/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return isLoading ? <SplashScreen /> : <BottomTabNavigator />;

};

export default RootNavigator;
