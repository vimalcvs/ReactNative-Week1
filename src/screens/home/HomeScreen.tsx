import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { SpaceV } from '../../components/space/Space';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BackgroundGradient } from '../../components/background/Background';



const HomeScreen = () => {
  const { colors } = useColors();
  const appStyles = useStyles();
  return (
    <BackgroundGradient>
      <ScrollView style={[appStyles.scrollContainer]}>
        <SpaceV size={50} />

      </ScrollView>
    </BackgroundGradient>
  );

};
export default HomeScreen;






