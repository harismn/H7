import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import styles from './style'
import Color from '../../asets'

export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 'harras',
      text2: 'pounding',
      text3: 'to pretend',
      text4: 'mpromptu',
      textLima: 'discouraging',
      textEnam: 'exhales',
      textTujuh: 'unbeknownst',

    };
  }


    render(){
      const { text1, text2, text3, text4, correct, wrong, disable } = this.state
        return(
          <View style={styles.container}>                          
            <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{text1}</Text>
            <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{text2}</Text>
          <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{text3}</Text>
             <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{text4}</Text>
          <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{this.state.textLima}</Text>
          <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{this.state.textEnam}</Text>
          <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
            <Text style={{marginBottom: 5, fontSize: 13, color: 'black', }}>{this.state.textTujuh}</Text>
          <View style={{ marginVertical: 20, borderColor: Color.gray , borderWidth: 1, width: '100%' }} />
          <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate('tinder')}>
            <Text> simpan </Text>
            </TouchableOpacity>
          </View>
        );
    }
}
 



/*
harass
INDONESIAN
mengganggu

pounding
INDONESIAN
ketukan

to pretend
INDONESIAN
berpura-pura

mpromptu
INDONESIAN
mendadak

discouraging
INDONESIAN
mengecilkan hati

exhales
INDONESIAN
hembuskan napas

unbeknownst
INDONESIAN
tanpa sepengetahuan
*/