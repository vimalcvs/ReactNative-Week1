import {
  View,
  ScrollView,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/Entypo';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const styles = createGlobalStyles();

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: colors.background }]}>
      <View style={[styles.container]}>
        <Icon name="heart-outlined" size={300} color="#000" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
