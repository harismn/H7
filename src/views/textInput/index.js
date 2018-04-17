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
    this.state = { text: '' };
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
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="masukan teks di sini"
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('tinder')}>
            <Text> Berikutnya </Text>
            </TouchableOpacity>
          </View>
        );
    }
}