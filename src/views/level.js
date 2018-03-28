/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Selector from './selector'

export default class Level extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: false,
            active: false,
            others: false,
        };
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        this.setState({isHidden: !this.state.isHidden})
    }

    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.textUp}>Pilih level bahasa </Text>
            <Text style={styles.textUp}>Inggrismu </Text>
            <Selector />
            <TouchableOpacity style={styles.button}
                onPress={() => console.log('aku keluar nih')}>
                <Text> Berikutnya </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9500',
        padding:  50
    },
    textUp: {
        fontSize : 20,
        fontWeight: 'bold',
        color: 'white',
        // padding: 20,
    },
    focus: {
        fontSize : 15,
        color: 'white',
        padding: 15,  
    },
    blur: {
        fontSize : 15,
        color: '#E0E0E0',
        padding: 15,  
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 30,
    },
})