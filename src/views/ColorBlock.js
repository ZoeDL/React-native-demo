import React, { useState } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const ColorBlock = ({color, handleMore, handleLess}) => {
    return (
        <View>
            <Text> { color } </Text>
            <Button title={`More ${color}`} onPress={handleMore}/>
            <Button title={`Less ${color}`} onPress={handleLess}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorBlock