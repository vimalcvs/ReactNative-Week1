import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { useComments } from './useComments';
import { CommentItem } from './CommentItem';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
import { SpaceV } from '../../components/space/Space';

const OffersScreen: React.FC = () => {
  const { comments, loading, error, refetch } = useComments();
  const appStyles = useStyles();
  const { colors } = useColors();

  return (
    <SafeAreaView style={appStyles.container}>
      <SpaceV size={32} />
      <View style={[appStyles.centerContainer, { flex: 1 }]}>
        <Text style={[appStyles.heading, { textAlign: 'left' }, { marginStart: 16 }]}>Offers</Text>
        <SpaceV size={8} />

        {loading && (
          <View style={appStyles.loadingContainer}>
            <ActivityIndicator size="large" color="#007bff" />
          </View>
        )}

        {error && (
          <View style={appStyles.errorContainer}>
            <Text style={[appStyles.bodyText, { color: colors.error }]}>{error}</Text>
          </View>
        )}

{comments.length > 0 && (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CommentItem item={item} />}
          contentContainerStyle={appStyles.listContainer}

          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refetch} />
          }
        />
        )}

      </View>
    </SafeAreaView>
  );
};

 
export default OffersScreen;
