import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Comment } from '../../models/types';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
interface CommentItemProps {
  item: Comment;
}

export const CommentItem: React.FC<CommentItemProps> = ({ item }) => {
  const appStyles = useStyles();
  const { colors } = useColors();
  return (
      <View style={appStyles.card}>
      <Text style={[appStyles.bodyText, { color: colors.textPrimary }]}>{item.name}</Text>
      <Text style={[appStyles.bodyText, { color: colors.textSecondary }]}>{item.email}</Text>
      <Text style={[appStyles.bodyText, { color: colors.textTertiary }]}>{item.body}</Text>
    </View>
  );
};
 
 