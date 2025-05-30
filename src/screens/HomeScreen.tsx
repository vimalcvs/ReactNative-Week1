import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {createGlobalStyles} from '../styles/globalStyles';

const HomeScreen = () => {
  const {colors} = useTheme();
  const styles = createGlobalStyles();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <ScrollView
      style={styles.scrollContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
        />
      }>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home!</Text>
        <Text style={styles.subtitle}>This is your home screen</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
