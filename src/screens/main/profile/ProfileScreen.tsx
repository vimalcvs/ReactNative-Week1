import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { useColors } from '../../../context/ThemeContext';
import { useStyles } from '../../../styles/globalStyles';

const ProfileScreen = () => {
  const { colors } = useColors();
  const styles = useStyles();

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: colors.background }]}>
      <View style={[styles.container]}>
      <Text style={styles.title}>Welcome Home!</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
