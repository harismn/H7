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
  View
} from 'react-native';


export default class Content extends Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.containerTwo}>
      <Text style={styles.textUp}>Hadiah Untuk Anda</Text>
      </View>
      <Text style={styles.textStyle}>7</Text>
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
  },
  containerTwo: {
    flex: 1/9,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  textStyle: {
    fontSize: 130,
    fontWeight: 'bold',
    color: 'white',
  },
  textUp: {
    fontSize : 30,
    fontWeight: 'bold',
    color: 'white',

  },
});