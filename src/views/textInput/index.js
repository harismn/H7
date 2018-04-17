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

export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
    };
    }

    render(){
        return(
          <View style={styles.container}>
            <Text style={styles.text}>Masukan Vocab di sini</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text1: text})}
              value={this.state.text1}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text2: text})}
              value={this.state.text2}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text3: text})}
              value={this.state.text3}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text4: text})}
              value={this.state.text4}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text5: text})}
              value={this.state.text5}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text6: text})}
              value={this.state.text6}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text7: text})}
              value={this.state.text7}
              placeholder="masukan teks di sini"
              placeholderTextColor="#EEEEEE"
            />
            <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('tinder')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
          </View>
        );
    }
}