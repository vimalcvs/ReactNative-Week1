import {
  ScrollView,
  Text,
} from 'react-native';
import { useColors } from '../../../context/ThemeContext';
import { useStyles } from '../../../styles/globalStyles';
import React from 'react'; 
import { SpaceV } from '../../../component/space/Space';


const SettingsDetails: React.FC = () => {
  const { colors } = useColors();
  const appStyles = useStyles();

  return (
    <ScrollView
      style={[appStyles.scrollContainer, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}>
      <SpaceV size={32} />
      <Text>Settings Details</Text>   
    </ScrollView>
  );
};

export default SettingsDetails;

