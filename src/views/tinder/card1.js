import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

    render(){
        return(
          <View style={styles.container}>
            <Text style={styles.text}>Disini Text</Text>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>

          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    text: { 
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 20,
      fontFamily: 'text-align',

    },
    button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    },
    textInput: {
      height: 40, 
      marginVertical: 50,
      width: '80%'
    },
    secondText: {
      height: 40, 
      margin: 50,
    }
  })