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
// import Screen from './src/views/firstScreen'
import Content from './src/views/content'
// import Sample from './src/views/sample'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
