import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,


  StyleSheet,
  TouchableOpacity,

  Image
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>

        <TouchableOpacity style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Image
              source={require('../assets/images/settings.png')} // Replace with a local or network image
              style={styles.avatarImage}
            />
          </View>
          <View>
            <Text style={styles.profileText}>Register/Sign in</Text>
            <Text style={styles.subText}>19 virtual devices</Text>
          </View>
        </TouchableOpacity>

        {/* Rewards Section */}
        <View style={styles.rewardsBox}>
          <View style={styles.rewardsHeader}>
            <Text style={styles.rewardsTitle}>⭐ My points</Text>
            <TouchableOpacity>
              <Text style={styles.rewardsButton}>Rewards ➤</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rewardsRow}>
            <TouchableOpacity style={styles.rewardItem}>
              <Text style={styles.rewardText}>Daily check-in</Text>
              <Text style={styles.rewardPoints}>⭐ +100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rewardItem}>
              <Text style={styles.rewardText}>Tasks</Text>
              <Text style={styles.rewardPoints}>Claim points</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Options List */}
        <View style={styles.menuSection}>
          {renderItem('Virtual experience', 'sparkles')}
          {renderItem('Voice service', 'mic')}
          {renderItem('Settings', 'settings')}
        </View>

        <View style={styles.menuSection}>
          {renderItem('My goals', 'target')}
        </View>

        <View style={styles.menuSection}>
          {renderItem('Help and feedback', 'help-circle')}
          {renderItem('Like this app?', 'star')}
        </View>

      </View>
    </ScrollView>
  );
};



const renderItem = (title: string, iconName: string) => (
  <TouchableOpacity style={styles.menuItem} key={title}>
    <Icon name={iconName} size={20} color="#000" style={styles.menuIcon} />
    <Text style={styles.menuText}>{title}</Text>
    <Icon name="chevron-forward" size={18} color="#aaa" style={styles.chevron} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 10,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: '#777',
    fontSize: 12,
  },
  rewardsBox: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 16,
    borderRadius: 12,
  },
  rewardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rewardsTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  rewardsButton: {
    color: '#8a6f2f',
    fontWeight: 'bold',
  },
  rewardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardItem: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  rewardText: {
    fontSize: 14,
    marginBottom: 4,
  },
  rewardPoints: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
  menuSection: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 14,
  },
  chevron: {
    marginLeft: 10,
  },
});

export default SettingsScreen; 