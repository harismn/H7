import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Swipe1 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })