import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Card1 extends Component {
    render(){
        return(
          <View style={styles.slide1}>
            <Text style={styles.text}>This is Text</Text>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 50,
    },
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10

    },
  })