import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../styles/globalStyles';

const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = createGlobalStyles();

  return (
    <ScrollView
      style={styles.scrollContainer}>L̥
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
        </View>


      </View>
    </ScrollView>
  );
};

export default HomeScreen;
