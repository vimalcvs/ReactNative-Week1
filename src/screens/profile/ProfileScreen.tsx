import {
  View,
  ScrollView,
  Button,
} from 'react-native'; 
import { useStyles } from '../../styles/globalStyles';
import { InputField } from '../../components/textinput/TextInput';
import { SpaceV } from '../../components/space/Space';
import { useState, useEffect } from 'react';
import { BackgroundGradient } from '../../components/background/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonPrimary } from '../../components/buttons/Buttons';

const ProfileScreen = () => {
  const appStyles = useStyles();
  const [name, setName] = useState('');
 const userName = "userNames";

  const storeName = async (value: string) => {
    try {
      await AsyncStorage.setItem(userName, value);
    } catch (error) {
      console.error('Failed to save name:', error);
    }
  };

  // Retrieve the user's name from AsyncStorage
  const getName = async () => {
    try {
      const storedName = await AsyncStorage.getItem(userName);
      if (storedName) {
        setName(storedName);
      }
    } catch (error) {
      console.error('Failed to load name:', error);
    }
  };

  // Remove the user's name from AsyncStorage
  const removeName = async () => {
    try {
      await AsyncStorage.removeItem(userName);
      setName('');
    } catch (error) {
      console.error('Failed to remove name:', error);
    }
  };

  // Clear all AsyncStorage data
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      setName('');
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  };

  // Load the user's name on component mount
  useEffect(() => {
    getName();
  }, []);

  return (
    <BackgroundGradient>
      <ScrollView
        style={appStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={appStyles.container}>
          <SpaceV size={50} />
          <InputField
            placeholder="Name"
            keyboardType="default"
            onChangeText={(text) => {
              setName(text);
              storeName(text);
            }}
            value={name}
            label="Enter your name"
          />
          <ButtonPrimary title="Remove Name" onPress={removeName} />
          <SpaceV size={20} />
          <ButtonPrimary title="Clear All" onPress={clearAll} />
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};

export default ProfileScreen;
