import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Voice extends Component {

  render() {
    return ( 
      <View style={styles.container}>
        <TouchableHighlight
        style={{borderColor:'orange'}} 
        onPress={() => console.log('tes tes')}>
          <Image
            style={styles.button}
            source={Foto.audio}
          />
        </TouchableHighlight>
        <TextInput
        style={styles.textInput}
        // value={this.state.text}
        placeholder="masukan teks di sini"
        placeholderTextColor= {Foto.black}
        />
        <TouchableOpacity style={styles.buttons}
        onPress={() => console.log('disini aja')}>
        <Text> Berikutnya </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

