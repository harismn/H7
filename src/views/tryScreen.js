import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class Content extends Component {

  render() {
    return ( 
      <View style={styles.container}>
      <View style={styles.styleView}>
      <Text style={styles.textStyle}>Kamu keren!</Text>
      <Text style={styles.textStyle}>Kamu sudah berusaha</Text>
      <Text style={styles.textStyle}>dengan baik hari ini!</Text>
      </View>
      <TouchableOpacity style={styles.button}
      onPress={() => this.props.navigation.navigate('Details')}>
         <Text> Aku akan berlatih lebih banyak lagi </Text>
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
      backgroundColor: '#FF9500'
    },
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white', 
    //   marginBottom: 40,
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
        paddingHorizontal: 30,
      },
      styleView: {
          marginBottom: 100,
      },
  });