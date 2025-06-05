import {ScrollView} from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import React, { useRef } from 'react';
import { SpaceV } from '../../components/space/Space';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { ButtonOutline, ButtonPrimary } from '../../components/buttons/Buttons';
import { CustomDialog, CustomDialogRef } from '../../components/dialog/CustomDialog';
import DialogService from '../../services/DialogService';

type Props = NativeStackScreenProps<RootStackParamList, 'SettingsNotification'>;

const SettingsNotification: React.FC<Props> = () => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const dialogRef = useRef<CustomDialogRef>(null);
  const navigation = useNavigation();

  React.useEffect(() => {
    DialogService.getInstance().setDialogRef(dialogRef);
  }, []);

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

  const handleNormalDialog = () => {
    DialogService.getInstance().showNormalDialog({
      title: 'Enable Notifications',
      message: 'Are you sure you want to enable notifications?',
      confirmText: 'Enable',
      cancelText: 'Cancel',
      onConfirm: () => navigation.goBack(),
    });
  };

  const handleCustomDialog = () => {
    DialogService.getInstance().showCustomDialog({
      title: 'Enable Notifications',
      message: 'Are you sure you want to enable notifications?',
      confirmText: 'Enable',
      cancelText: 'Cancel',
      onConfirm: () => navigation.goBack(),
    });
  };

  return (
    <ScrollView
      style={[appStyles.scrollContainer, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}>
      <SpaceV size={32} />

      <ButtonPrimary
        title="Normal Dialog"
        onPress={handleNormalDialog}
      />

      <SpaceV size={16} />

      <ButtonOutline
        title="Custom Dialog"
        onPress={handleCustomDialog}
      />

      <CustomDialog ref={dialogRef} />
    </ScrollView>
  );
};

export default SettingsNotification;


