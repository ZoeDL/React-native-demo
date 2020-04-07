import React, { useReducer } from 'react'
import { View, Image } from 'react-native'
import ColorBlock from './ColorBlock'

const INCREMENT_AMOUNT = 15
// what a reducer returns is an updated state
const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state:
            { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state:
            { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state:
            { ...state, blue: state.blue + action.payload }
        default:
            return state
    }

}

const WelcomeScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const { red, green, blue } = state
    return (
      <View>
        <ColorBlock color="Red"
            handleMore={ () => dispatch({type: 'change_red', payload: INCREMENT_AMOUNT}) }
            handleLess={ () => dispatch({type: 'change_red', payload: -INCREMENT_AMOUNT}) }/>
        <ColorBlock color="Green"
            handleMore={ () => dispatch({type: 'change_green', payload: INCREMENT_AMOUNT}) }
            handleLess={ () => dispatch({type: 'change_green', payload: -INCREMENT_AMOUNT}) }/>
        <ColorBlock color="Blue"
            handleMore={ () => dispatch({type: 'change_blue', payload: INCREMENT_AMOUNT}) }
            handleLess={ () => dispatch({type: 'change_blue', payload: -INCREMENT_AMOUNT}) }/>
        <Image style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
      </View>
    );
}

export default WelcomeScreen;