import React, { forwardRef, useImperativeHandle } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { SpaceV } from '../space/Space';
import { ButtonOutline, ButtonPrimary } from '../buttons/Buttons';

interface DialogOptions {
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export interface CustomDialogRef {
  show: (options: DialogOptions) => void;
  hide: () => void;
}

export const CustomDialog = forwardRef<CustomDialogRef>((_, ref) => {
  const { colors } = useColors();
  const appStyles = useStyles();
  const [visible, setVisible] = React.useState(false);
  const [options, setOptions] = React.useState<DialogOptions>({
    title: '',
    message: '',
  });

  useImperativeHandle(ref, () => ({
    show: (newOptions: DialogOptions) => {
      setOptions(newOptions);
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    },
  }));

  const handleConfirm = () => {
    setVisible(false);
    options.onConfirm?.();
  };

  const handleCancel = () => {
    setVisible(false);
    options.onCancel?.();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleCancel}>
      <View style={styles.overlay}>
        <View style={[
          styles.dialogContainer,
          { backgroundColor: colors.background }
        ]}>
          <Text style={[
            appStyles.heading,
            { color: colors.textPrimary },
            { textAlign: 'center' }
          ]}>{options.title}</Text>

          <SpaceV size={8} />
          <Text style={[
            appStyles.bodyText,
            { color: colors.textTertiary },
            { textAlign: 'center' }]
          }>{options.message}</Text>
          <SpaceV size={24} />

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <ButtonOutline
                title={options.cancelText || 'Cancel'}
                onPress={handleCancel}
                fullWidth={true}
              />
            </View>

            <SpaceV size={16} />

            <View style={styles.buttonWrapper}>
              <ButtonPrimary
                title={options.confirmText || 'Confirm'}
                onPress={handleConfirm}
                fullWidth={true}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  dialogContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 8,
  },
}); 