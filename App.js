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
import Content from './src/views/content'
import { StackNavigator } from 'react-navigation'
import FirstScreen from './src/views/firstScreen'

const navigation = StackNavigator({
    FirstScreen: {
      screen: FirstScreen,
    },
    Content: {
      screen: Content,
    }
})

export default navigation;