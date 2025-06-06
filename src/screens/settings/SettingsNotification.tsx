import { useColors } from '../../context/ThemeContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import {View} from 'react-native';
import { useStyles } from '../../styles/globalStyles'; 
import * as React from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'SettingsNotification'>;

const SettingsNotification: React.FC<Props> = () => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const navigation = useNavigation();


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Notification',
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.textPrimary,
      headerShadowVisible: false,
    });
  }, [navigation, colors]);

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View style={[appStyles.container, { backgroundColor: colors.background }]}>
       
    </View>
  );
};

export default SettingsNotification;
