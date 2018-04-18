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
      text1: 'mengganggu',
      text2: 'mendadak',
      text3: 'tanpa sepengetahuan',
      text4: 'ketukan',
      correct: null,
      wrong: null,
      disable: false
    };
  }

  check(word) {
    const { text1, text2, text3, text4 } = this.state
    
    if(word === text1) {
      this.setState({ correct: true, wrong: false, disable: true })
    } else {
      this.setState({ correct: false, wrong: true, disable: true })
    }
  }


    render(){
      const { text1, text2, text3, text4, correct, wrong, disable } = this.state
        return(
          <View style={styles.container}>
            <Text style={styles.text}> Mproptu </Text>
            <TouchableOpacity disabled={disable} style={wrong ? styles.correct : correct ? styles.correct : styles.button}
            onPress={() => this.check(text2)}>
              <Text style={styles.textTouch}>{text2}</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={disable} style={!correct && wrong? styles.wrong : styles.button}            
            onPress={() => this.check(text1)}>
            <Text style={styles.textTouch}>{text1}</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={disable} style={!correct && wrong? styles.wrong : styles.button}            
            onPress={() => this.check(text3)}>
            <Text style={styles.textTouch}>{text3}</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={disable} style={!correct && wrong? styles.wrong : styles.button}            
            onPress={() => this.check(text4)}>
            <Text style={styles.textTouch}>{text4}</Text>
            </TouchableOpacity>
          </View>
        );
    }
}
 