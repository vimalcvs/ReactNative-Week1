import {
  View,
  ScrollView,
} from 'react-native';
import { useColors } from '../../../context/ThemeContext';
import { useStyles } from '../../../styles/globalStyles';
import { InputField } from '../../../component/textinput/TextInput';
import { SpaceV } from '../../../component/space/Space';
import { useState } from 'react';
const ProfileScreen = () => {
  const { colors } = useColors();
  const styles = useStyles();

  const [name, setName] = useState('');

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: colors.background }]}>
      <View style={[styles.container]}>
        <SpaceV size={32} />
        <InputField
          placeholder="Name"
          keyboardType="default"
          onChangeText={setName}
          value={name}
          label="Enter your name"/>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
