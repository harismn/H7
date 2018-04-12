import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
// import Navigator from '../root-navigation'
import { NavigationActions } from 'react-navigation'
import styles from './style'


export default class Splash extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount (){
    setTimeout(() => {
      this.navigate('swipes')
    }, 1000)
  }

  navigate = routeName => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>7</Text>
      </View>
    );
  }
}