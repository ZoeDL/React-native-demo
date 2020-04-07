import React, { useState } from 'react'
import { View, TextInput, Text,  StyleSheet } from 'react-native'

const MyTextInput = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text>Your name: </Text>
            <TextInput
                style={styles.inputText}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Text>Your name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15
    }
})

export default MyTextInput;