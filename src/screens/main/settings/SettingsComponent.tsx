import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useColors } from '../../../context/ThemeContext';
import { useStyles } from '../../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { SpaceH } from '../../../component/space/Space';
import React from 'react';

export const RegistionItem: React.FC<{
    icon: string;
    title: string;
    subtitle?: string;
    onPress?: () => void;
}> = ({ icon, title, subtitle, onPress }) => {
    const { colors } = useColors();
    const appStyles = useStyles();
    return (
        <TouchableOpacity
            style={[
                styles.settingItemContainer,
                { backgroundColor: colors.card, shadowColor: colors.shadow },
            ]}
            onPress={onPress}
            activeOpacity={0.7}>
            <View style={styles.rowContainer}>
                <Icon
                    name={icon}
                    size={30}
                    color={colors.facebook}
                    style={[styles.iconProfile, { backgroundColor: colors.placeholder }]}
                />
                <SpaceH size={16} />
                <View style={styles.textContainer}>
                    <Text style={appStyles.bodyText}>{title}</Text>
                    {subtitle ? <Text style={appStyles.caption}>{subtitle}</Text> : null}
                </View>
                <Icon name="chevron-forward" size={18} color={colors.placeholder} />
                <SpaceH size={10} />
            </View>
        </TouchableOpacity>
    );
};

export const MyAccountItem: React.FC<{
    icon: string;
    title: string;
    subtitle?: string;
    onPress?: () => void;
}> = ({ icon, title, subtitle, onPress }) => {
    const { colors } = useColors();
    const appStyles = useStyles();
    return (
        <TouchableOpacity
            style={[
                styles.myAccountItemContainer,
                { backgroundColor: colors.card, shadowColor: colors.shadow },
            ]}
            onPress={onPress}
            activeOpacity={0.7}>
            <View style={styles.rowMyAccountContainer}>
                <Icon
                    name={icon}
                    size={30}
                    color={colors.facebook}
                    style={[styles.iconProfile, { backgroundColor: colors.placeholder }]}
                />
                <SpaceH size={16} />
                <View style={styles.textContainer}>
                    <Text style={appStyles.bodyText}>{title}</Text>
                    {subtitle ? <Text style={appStyles.caption}>{subtitle}</Text> : null}
                </View>
                <Icon name="chevron-forward" size={18} color={colors.placeholder} />
                <SpaceH size={10} />
            </View>
        </TouchableOpacity>
    );
};


























const styles = StyleSheet.create({
    settingItemContainer: {
        flex: 1,
        borderRadius: 100,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
    },
    iconProfile: {
        alignSelf: 'center',
        borderRadius: 100,
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16,
    },

    rowMyAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16,
    },

    myAccountItemContainer: {
        flex: 1,
        borderRadius: 24,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});


