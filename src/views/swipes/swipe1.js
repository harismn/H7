import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Swipe1 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}>Mustahil untuk tahu 100% tentang bahasa inggris. 
            Selalu ada kata baru yang harus dipelajari</Text>
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
    text: {
      color: '#fff',
      fontSize: 27,
    }
  })