import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const styles = createGlobalStyles();

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: colors.background }]}>
      <View style={[styles.container]}>
      <Text style={styles.title}>Welcome Home!</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
