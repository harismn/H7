import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Swipe1 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe1}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text}>Mustahil untuk tahu 100%</Text>
                <Text style={styles.text}>tentang bahasa inggris.</Text>
                <Text style={styles.text}>Selalu ada kata baru </Text>
                <Text style={styles.text}>yang harus dipelajari</Text>
            </View>
            </View>
        );
    }
}