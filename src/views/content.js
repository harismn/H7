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
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation'


export default class Content extends Component {

  render() {
    return ( 
      <View style={styles.container}>
      <Text style={styles.textUp}>Selamat datang di</Text>
      <Text style={styles.textNumber}>7</Text>
      <Text style={styles.texton}>Aplikasi</Text>
      <Text style={styles.texton}>Gratis!</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Details')}>
         <Text> Lanjutkan </Text>
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
    backgroundColor: '#FF9500',
    padding:  20
  },
  textNumber: {
    fontSize: 130,
    fontWeight: 'bold',
    color: 'white',
    margin: 16,
  },
  textUp: {
    fontSize : 30,
    fontWeight: 'bold',
    color: 'white',

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
  },
  texton: {
    fontSize : 30,
    fontWeight: 'bold',
    color: 'white',
  },
  textBottom: {
    fontSize : 15,
    color: 'white',

  },
});