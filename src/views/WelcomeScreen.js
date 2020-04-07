import React, {useState} from 'react'
import { Text, Button, StyleSheet, View, Image } from 'react-native'
import ColorBlock from './ColorBlock'

const WelcomeScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const setColor = (color, increment) => {
        switch (color) {
            case 'red':
                red + increment > 255 || red + increment < 0? null : setRed(red + increment)
                break;
            case 'green':
                green + increment > 255 || green + increment < 0? null : setGreen(green + increment)
                break;
            case 'blue':
                blue + increment > 255 || blue + increment < 0? null : setBlue(blue + increment)
                break;
            default:
                break;
        }
    }

    return (
      <View>
        <ColorBlock color="Red"
            handleMore={ () => setColor('red', 10) }
            handleLess={ () => setColor('red', -10)}/>
        <ColorBlock color="Green"
            handleMore={ () => setColor('green', 10) }
            handleLess={ () => setColor('green', -10)}/>
        <ColorBlock color="Blue"
            handleMore={ () => setColor('blue', 10) }
            handleLess={ () => setColor('blue', -10)}/>
        <Image style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
      </View>
    );
}

export default WelcomeScreen;