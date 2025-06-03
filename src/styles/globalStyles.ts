import {StyleSheet} from 'react-native';
import {SPACING} from './constants';
import {useColors} from '../context/ThemeContext';

export const useStyles = () => {
  const {colors} = useColors();

  return StyleSheet.create({
    // Container styles
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContainer: {
      flexGrow: 1,
      paddingVertical: SPACING.xl,
      paddingHorizontal: SPACING.md,
      backgroundColor: colors.background,
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: SPACING.lg,
      backgroundColor: colors.background,
    },

    // Text styles
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: SPACING.sm,
      textAlign: 'center',
      color: colors.text,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: SPACING.lg,
      textAlign: 'center',
      color: colors.tabBarInactive,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: SPACING.md,
      color: colors.text,
    },
    bodyText: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text,
    },
    caption: {
      fontSize: 14,
      opacity: 0.7,
      color: colors.tabBarInactive,
    },
    text: {
      fontSize: 16,
      marginBottom: SPACING.sm,
      color: colors.text,
    },
    label: {
      fontSize: 14,
      marginBottom: SPACING.xs,
      color: colors.text,
    },

    // Button styles
    button: {
      paddingHorizontal: SPACING.lg,
      paddingVertical: SPACING.sm,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.white,
    },
    outlineButton: {
      paddingHorizontal: SPACING.lg,
      paddingVertical: SPACING.sm,
      borderRadius: 8,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.primary,
    },
    outlineButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.primary,
    },

    // Card styles
    card: {
      padding: SPACING.md,
      borderRadius: 10,
      marginBottom: SPACING.md,
      elevation: 2,
      backgroundColor: colors.card,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: SPACING.xs,
      color: colors.text,
    },
    cardText: {
      fontSize: 14,
      color: colors.tabBarInactive,
    },

    // Input styles
    input: {
      height: 50,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: SPACING.md,
      marginBottom: SPACING.md,
      fontSize: 16,
      backgroundColor: colors.input,
      borderColor: colors.border,
      color: colors.text,
    },
    inputLabel: {
      fontSize: 16,
      marginBottom: SPACING.xs,
      fontWeight: '500',
      color: colors.text,
    },

    // Image styles
    imageContainer: {
      width: 100,
      height: 100,
      marginBottom: SPACING.lg,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.primary,
      borderRadius: 50,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },

    // List styles
    listItem: {
      padding: SPACING.md,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: colors.border,
    },
    listItemText: {
      fontSize: 16,
      color: colors.text,
    },

    // Layout
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Radio Button styles
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: SPACING.sm,
      borderColor: colors.text,
    },
    radioButtonSelected: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: colors.primary,
    },
  });
};