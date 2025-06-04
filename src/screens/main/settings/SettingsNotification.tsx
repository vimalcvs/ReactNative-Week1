import {
  ScrollView,
  Text,
} from 'react-native';
import { useColors } from '../../../context/ThemeContext';
import { useStyles } from '../../../styles/globalStyles';
import React from 'react'; 
import { SpaceV } from '../../../component/space/Space';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'SettingsNotification'>;

const SettingsNotification: React.FC<Props> = ({ route }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const { message } = route.params;

  return (
    <ScrollView
      style={[appStyles.scrollContainer, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}>
      <SpaceV size={32} />
      <Text style={{ color: colors.textPrimary, fontSize: 18, paddingHorizontal: 16 }}>
        {message}
      </Text>
      <SpaceV size={16} />
    </ScrollView>
  );
};

export default SettingsNotification;

