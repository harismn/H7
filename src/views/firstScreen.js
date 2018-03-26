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


export default class Screen extends Component {

  render() {
    return (
      <View style={styles.container}>
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
  textStyle: {
    fontSize: 200,
    fontWeight: 'bold',
    color: 'white'
  }
});