import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

const App: React.FC = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Auto Focus Keyboard Input</Text>
                <Text style={styles.description}>Please enter text with auto focus:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default" // keyboardType="decimal-pad"
                    placeholder="Default Keyboard"
                    autoFocus={true}
                    placeholderTextColor="#b3b3b3"
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1c1c1e',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#1c1c1e',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        padding: 10,
        color: '#1c1c1e',
    },
});

 