import {
  View,
  ScrollView,
} from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';
import { InputField } from '../../components/textinput/TextInput';
import { SpaceV } from '../../components/space/Space';
import { useState } from 'react';
import { BackgroundGradient } from '../../components/background/Background';

const ProfileScreen = () => {

  const appStyles = useStyles();
  const [name, setName] = useState('');
  
  return (
    <BackgroundGradient>
      <ScrollView
        style={[appStyles.scrollContainer]}
        showsVerticalScrollIndicator={false}>
        <View style={[appStyles.container]}>
          <SpaceV size={50} />
          <InputField
            placeholder="Name"
            keyboardType="default"
            onChangeText={setName}
            value={name}
            label="Enter your name" />
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};

export default ProfileScreen;
