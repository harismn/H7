/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';


export default class Sample extends Component {

    render() {
        return (
          <View style={styles.container}>
            <View>
              <Text>Top</Text>
            </View>
            <ScrollView contentContainerStyle={styles.Scroll}>
              <Text>Line 1</Text>
              <Text>Line 2</Text>
              <Text>Line 3</Text>
              <Text>Line 4</Text>
              <Text>Line 5</Text>
              <Text>Line 6</Text>
              <Text>Line 7</Text>
            </ScrollView>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    Scroll: {
      height: 1000,
      paddingVertical: 30,
  }
});