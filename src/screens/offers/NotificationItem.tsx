import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Comment, Notification } from '../../models/types';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
 
interface NotificationItemProps {
  item: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => {
  const appStyles = useStyles();
  const { colors } = useColors();
  return (
    <View style={[appStyles.card, { padding: 0 }]}>
      <Image
        source={{ uri: `https://www.technovimal.in/apps/fast-english/assets/${item.image}` }}
        style={{ width: '100%', height: 180, borderRadius: 14 }}
      />

      <Text
        style={[
          appStyles.bodyText,
          {
            color: colors.textPrimary,
            fontSize: 16,
            fontWeight: 'bold',
            marginHorizontal: 16,
            marginVertical: 10,
          },
        ]}
      >
        {item.title}
      </Text>
    </View>
  );
};
