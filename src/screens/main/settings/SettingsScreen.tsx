import {
  ScrollView,
} from 'react-native';
import { useColors } from '../../../context/ThemeContext';
import { useStyles } from '../../../styles/globalStyles';
import React from 'react';
import { MyAccountItem, RegistionItem } from './SettingsComponent';
import { SpaceV } from '../../../component/space/Space';

const SettingsScreen: React.FC = () => {
  const { colors } = useColors();
  const appStyles = useStyles();

  const handleRegisterPress = () => {
    console.log('Register pressed');
  };

  return (
    <ScrollView
      style={[appStyles.scrollContainer, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}>
      <SpaceV size={32} />
      <RegistionItem
        icon="person"
        title="Register/Sign In"
        subtitle="19 virtual devices"
        onPress={handleRegisterPress} />
      <SpaceV size={16} />
      <MyAccountItem
        icon="person"
        title="Register/Sign In"
        subtitle="19 virtual devices"
        onPress={handleRegisterPress} />


    </ScrollView>
  );
};

export default SettingsScreen;

