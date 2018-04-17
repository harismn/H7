import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style'
import Color from '../../asets'

export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    // const translate = require('google-translate-api');

    //   translate(this.state , {to: 'en'}).then(res => {
    //       console.log(res.text);
    //       //=> I speak English
    //       console.log(res.from.language.iso);
    //       //=> nl
    //   }).catch(err => {
    //       console.error(err);
    //   });
  }
    render(){
        return(
          <View style={styles.container}>
            <Text style={styles.text}>Masukan Vocab di sini</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text1) => this.setState({text1})}
              value={this.state.text1}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text2) => this.setState({text2})}
              value={this.state.text2}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text3) => this.setState({text3})}
              value={this.state.text3}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text4) => this.setState({text4})}
              value={this.state.text4}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text5) => this.setState({text5})}
              value={this.state.text5}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text6) => this.setState({text6})}
              value={this.state.text6}
              placeholder="masukan teks di sini"
              placeholderTextColor={Color.gray}
            />
            <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('tinder')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
          </View>
        );
    }
}