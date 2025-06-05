import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useStyles } from '../../styles/globalStyles';
import { useColors } from '../../context/ThemeContext';
 

const OffersScreen = () => {
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

export default OffersScreen;
