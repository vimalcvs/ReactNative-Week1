import { Alert } from 'react-native';
import { CustomDialog } from '../components/dialog/CustomDialog';
import React from 'react';

interface DialogOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

class DialogService {
  private static instance: DialogService;
  private dialogRef: React.RefObject<CustomDialog>;

  private constructor() {
    this.dialogRef = React.createRef();
  }

  public static getInstance(): DialogService {
    if (!DialogService.instance) {
      DialogService.instance = new DialogService();
    }
    return DialogService.instance;
  }

  public setDialogRef(ref: React.RefObject<CustomDialog>) {
    this.dialogRef = ref;
  }

  public showNormalDialog(options: DialogOptions) {
    Alert.alert(
      options.title,
      options.message,
      [
        {
          text: options.cancelText || 'Cancel',
          style: 'cancel',
          onPress: options.onCancel,
        },
        {
          text: options.confirmText || 'Confirm',
          onPress: options.onConfirm,
        },
      ],
      { cancelable: true }
    );
  }

  public showCustomDialog(options: DialogOptions) {
    if (this.dialogRef.current) {
      this.dialogRef.current.show({
        ...options,
        confirmText: options.confirmText || 'Confirm',
        cancelText: options.cancelText || 'Cancel',
      });
    }
  }
}

export default DialogService; 