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
    });
  }, [navigation, colors]);

  return (
    <ScrollView
      style={[appStyles.scrollContainer, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}>
    
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />

      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
      <SpaceV size={32} />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          User Information
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Name: {userData.name}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Email: {userData.email}
        </Text>
        
        <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Preferences
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Theme: {userData.preferences.theme}
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 16, marginBottom: 4 }}>
          Language: {userData.preferences.language}
        </Text>
      </View>
      <SpaceV size={16} />
    </ScrollView>
  );
};

export default SettingsDetails;

