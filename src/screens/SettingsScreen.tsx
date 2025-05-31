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

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const iconColors: Record<string, string> = {
  'sparkles': '#6C63FF', // purple
  'mic': '#A259FF', // violet
  'settings': '#4CD964', // green
  'target': '#4B7BEC', // blue
  'help-circle': '#4CD964', // green
  'star': '#FFC542', // gold
};

const SettingsScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>


        <View style={{ height: 42}}/>
        
        <TouchableOpacity style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Image
              source={require('../assets/images/settings.png')}
              style={styles.avatarImage}
            />
          </View>
          <View>
            <Text style={styles.profileText}>Register/Sign in</Text>
            <Text style={styles.subText}>19 virtual devices</Text>
          </View>
        </TouchableOpacity>

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


        <View style={styles.menuSection}>
          {renderItem('Virtual experience', 'auto-awesome', 'MaterialIcons')}
          {renderItem('Voice service', 'keyboard-voice', 'MaterialIcons')}
          {renderItem('Settings', 'settings', 'MaterialIcons')}
        </View>

        <View style={styles.menuSection}>
          {renderItem('My goals', 'flag', 'MaterialIcons')}
        </View>

        <View style={styles.menuSection}>
          {renderItem('Help and feedback', 'help-outline', 'MaterialIcons')}
          {renderItem('Like this app?', 'star-border', 'MaterialIcons')}
        </View>

      </View>
    </ScrollView>
  );
};

const renderItem = (title: string, iconName: string, iconType: 'Ionicons' | 'MaterialIcons' = 'Ionicons') => (
  <TouchableOpacity style={styles.menuItem} key={title}>
    {iconType === 'Ionicons' ? (
      <Icon name={iconName} size={22} color={iconColors[iconName] || '#000'} style={styles.menuIcon} />
    ) : (
      <MaterialIcons name={iconName} size={22} color={iconColors[iconName] || '#000'} style={styles.menuIcon} />
    )}
    <Text style={styles.menuText}>{title}</Text>
    <Icon name="chevron-forward" size={20} color="#bbb" style={styles.chevron} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    marginHorizontal: 12,
    marginTop: 18,
    borderRadius: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  profileAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  subText: {
    color: '#999',
    fontSize: 13,
    marginTop: 2,
  },
  rewardsBox: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  rewardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rewardsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginRight: 8,
  },
  rewardsButton: {
    backgroundColor: '#C9B37E',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 12,
    overflow: 'hidden',
  },
  rewardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardItem: {
    flex: 1,
    backgroundColor: '#F8F6F0',
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 4,
    alignItems: 'flex-start',
  },
  rewardText: {
    fontSize: 14,
    color: '#222',
    marginBottom: 4,
    fontWeight: '500',
  },
  rewardPoints: {
    color: '#FFC542',
    fontWeight: 'bold',
    fontSize: 15,
  },
  menuSection: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderRadius: 16,
    marginTop: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },
  chevron: {
    marginLeft: 10,
  },
});

export default SettingsScreen; 