import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style'

export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  

    render(){
        return(
          <View style={styles.container}>
            <Text style={styles.text}> Harras </Text>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> mengganggu </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> ketukan </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> tanpa sepengetahuan </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> ketakutan </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}>  </Text>
            </TouchableOpacity>
          </View>
        );
    }
}
