import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import React from 'react';  
import { SpaceV } from '../../components/space/Space';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../home/HomeScreen';
import OffersScreen from '../offers/OffersScreen'; 
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'SettingsDetails'>;

const SettingsDetails: React.FC<Props> = ({ route }) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const { userData } = route.params;
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Settings Details',
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.textPrimary,
      headerShadowVisible: false,
      headerBackTitle: 'Back',
      headerBackTitleStyle: {
        color: colors.textPrimary,
      },
    
    });
  }, [navigation, colors]);

  return (
    <SafeAreaView style={appStyles.container}>  
      <View style={appStyles.container}>
        <Text>Settings Details</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsDetails;

