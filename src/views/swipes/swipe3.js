import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Swipe3 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe3}
            />
            <Text style={styles.text}>Mustahil untuk tahu 100%</Text>
            <Text style={styles.text}> tentang bahasa inggris.</Text>
            <Text style={styles.text}>Selalu ada kata baru yang harus dipelajari</Text>
            </View>
        );
    }
}
