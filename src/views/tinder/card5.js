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
            <Text style={styles.text}>Text keular disini</Text>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> ini hasil translate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> ini hasil translate </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> ini hasil translate </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => console.log('aku keluar nih')}>
            <Text style={styles.textTouch}> ini hasil translate </Text>
            </TouchableOpacity>
          </View>
        );
    }
}