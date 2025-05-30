import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {createGlobalStyles} from '../styles/globalStyles';

const OffersScreen = () => {
  const {colors} = useTheme();
  const styles = createGlobalStyles();
  return (
    <ScrollView
      style={styles.scrollContainer}>
      <View style={[styles.container, {backgroundColor: colors.background}]}> 
        <Text style={styles.title}>Welcome Home!</Text> 
      </View>
    </ScrollView>
  );
};

export default OffersScreen; 